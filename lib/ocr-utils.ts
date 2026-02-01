import { ImageAnnotatorClient } from "@google-cloud/vision"
import { readFileSync, existsSync, statSync } from "fs"
import { join } from "path"

export async function processMultipleImages(filenames: string[]) {
  console.log("🔍 === OCR PROCESS START ===")
  console.log("📋 Input filenames:", filenames)
  console.log("📁 Working directory:", process.cwd())
  console.log("📂 Expected upload path:", join(process.cwd(), "public", "uploads"))
  console.log(`📄 Starting OCR for ${filenames.length} images...`)

  // Initialize Google Vision client
  console.log("🔐 === GOOGLE VISION CLIENT INIT ===")
  let client
  try {
    const keyPath = join(process.cwd(), "key.json")
    console.log("🔑 Loading credentials from:", keyPath)
    console.log("📁 Key file exists:", existsSync(keyPath))

    if (!existsSync(keyPath)) {
      throw new Error("Google Cloud key file not found at: " + keyPath)
    }

    const keyStats = statSync(keyPath)
    console.log("📊 Key file size:", keyStats.size, "bytes")

    console.log("📖 Reading credentials file...")
    const credentials = JSON.parse(readFileSync(keyPath, "utf8"))
    console.log("✅ Credentials loaded, project:", credentials.project_id)

    console.log("🔧 Creating ImageAnnotatorClient...")
    client = new ImageAnnotatorClient({
      credentials,
      projectId: credentials.project_id,
    })
    console.log("✅ Google Vision client initialized successfully")
  } catch (error) {
    console.error("❌ Failed to initialize Google Vision client:", error)
    console.error("❌ Error details:", error.message)
    console.error("❌ Error stack:", error.stack)
    throw new Error(`Google Vision initialization failed: ${error.message}`)
  }

  // Process each image
  let allText = ""
  let successCount = 0
  let totalCharacters = 0
  const processedFiles = []

  for (let i = 0; i < filenames.length; i++) {
    const filename = filenames[i]
    const imagePath = join(process.cwd(), "public", "uploads", filename)

    console.log(`\n🖼️ === PROCESSING IMAGE ${i + 1}/${filenames.length} ===`)
    console.log(`📝 Filename: ${filename}`)
    console.log(`📂 Full path: ${imagePath}`)
    console.log(`📁 File exists: ${existsSync(imagePath)}`)

    if (!existsSync(imagePath)) {
      console.error(`❌ File not found: ${imagePath}`)
      processedFiles.push({
        filename,
        success: false,
        error: "File not found",
        textLength: 0,
      })
      continue
    }

    const stats = statSync(imagePath)
    console.log(`📊 File size on disk: ${stats.size} bytes`)
    console.log(`📅 File modified: ${stats.mtime}`)

    try {
      // Add delay between requests to avoid rate limiting
      if (i > 0) {
        console.log("⏳ Waiting 200ms to avoid rate limiting...")
        await new Promise((resolve) => setTimeout(resolve, 200))
      }

      console.log(`📖 Reading image file...`)
      const imageBuffer = readFileSync(imagePath)
      console.log(`📊 Image buffer size: ${imageBuffer.length} bytes`)
      console.log(`🔍 Buffer type: ${typeof imageBuffer}`)
      console.log(`✅ Is Buffer: ${Buffer.isBuffer(imageBuffer)}`)

      // Prepare image for Google Vision
      const image = {
        content: imageBuffer,
      }

      console.log(`🌐 Making Google Vision API call...`)
      console.log(`📡 API endpoint: documentTextDetection`)
      console.log(`📊 Sending ${imageBuffer.length} bytes to Google Vision`)

      // Call Google Vision API with document text detection
      console.log(`🔍 Calling documentTextDetection for ${filename}...`)
      const [response] = await client.documentTextDetection({ image })

      console.log(`📡 Google Vision API response received`)
      console.log(`🔍 Response analysis:`)
      console.log(`   - Has error: ${!!(response.error && response.error.message)}`)
      console.log(`   - Has fullTextAnnotation: ${!!response.fullTextAnnotation}`)
      console.log(`   - Has text: ${!!(response.fullTextAnnotation && response.fullTextAnnotation.text)}`)

      // Check for API errors first
      if (response.error && response.error.message) {
        console.error(`❌ Google Vision API error for ${filename}:`, response.error.message)
        processedFiles.push({
          filename,
          success: false,
          error: response.error.message,
          textLength: 0,
        })
        continue
      }

      // Extract text from response using fullTextAnnotation
      const fullTextAnnotation = response.fullTextAnnotation
      if (!fullTextAnnotation || !fullTextAnnotation.text) {
        console.warn(`⚠️ No text found in ${filename}`)
        console.log(`🔍 Response structure:`, JSON.stringify(response, null, 2).substring(0, 500))
        processedFiles.push({
          filename,
          success: true,
          textLength: 0,
        })
        continue
      }

      const extractedText = fullTextAnnotation.text.trim()
      const textLength = extractedText.length

      console.log(`📝 Text extraction successful:`)
      console.log(`   - Raw text length: ${fullTextAnnotation.text.length}`)
      console.log(`   - Trimmed text length: ${extractedText.length}`)
      console.log(`   - First 100 chars: "${extractedText.substring(0, 100)}..."`)

      console.log(`✅ OCR successful for ${filename}: ${textLength} characters extracted`)

      // Add page separator and text (like in your Python code)
      allText += `\n\n--- PAGE ${i + 1} ---\n\n${extractedText}`
      totalCharacters += textLength
      successCount++

      processedFiles.push({
        filename,
        success: true,
        textLength,
      })
    } catch (error) {
      console.error(`❌ Error processing ${filename}:`, error)
      console.error(`❌ Error details:`, error.message)
      console.error(`❌ Error stack:`, error.stack)
      processedFiles.push({
        filename,
        success: false,
        error: error.message,
        textLength: 0,
      })
    }
  }

  const successRate = filenames.length > 0 ? successCount / filenames.length : 0

  console.log(`\n📊 === OCR SUMMARY ===`)
  console.log(`   - Total files: ${filenames.length}`)
  console.log(`   - Successful: ${successCount}`)
  console.log(`   - Failed: ${filenames.length - successCount}`)
  console.log(`   - Success rate: ${(successRate * 100).toFixed(1)}%`)
  console.log(`   - Total characters: ${totalCharacters}`)

  if (successCount === 0) {
    console.error("❌ No images could be processed successfully")
    throw new Error("No images could be processed successfully")
  }

  console.log("✅ === OCR PROCESS COMPLETED ===")

  return {
    rawText: allText.trim(),
    textLength: totalCharacters,
    pagesProcessed: successCount,
    totalFiles: filenames.length,
    successRate,
    processedFiles,
  }
}

// Legacy function for single image processing (kept for compatibility)
export async function processOCR(imagePath: string) {
  console.log(`🔍 Processing single image: ${imagePath}`)
  const result = await processMultipleImages([imagePath])
  return {
    rawText: result.rawText,
    textLength: result.textLength,
  }
}
