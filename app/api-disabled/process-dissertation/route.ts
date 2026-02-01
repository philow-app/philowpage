import { type NextRequest, NextResponse } from "next/server"
import { processMultipleImages } from "@/lib/ocr-utils"
import { cleanText } from "@/lib/text-cleaning-utils"
import { correctDissertation, correctResume } from "@/lib/correction-utils"

export async function POST(request: NextRequest) {
  console.log("🚀 === PROCESS DISSERTATION API START ===")
  console.log("⏰ Timestamp:", new Date().toISOString())
  const startTime = Date.now()

  try {
    console.log("📥 Parsing request body...")
    const body = await request.json()
    console.log("📋 Body received:", JSON.stringify(body, null, 2))

    const { files, subject, type = "dissertation", textInputMode = "typed" } = body

    console.log("📋 Request parsed:")
    console.log("   - Files:", files?.length || 0)
    console.log("   - Subject length:", subject?.length || 0)
    console.log("   - Type:", type)
    console.log("   - Text input mode:", textInputMode)
    console.log(
      "   - Files details:",
      files?.map((f: any) => ({ name: f.filename, size: f.size })),
    )

    if (!files || !Array.isArray(files) || files.length === 0) {
      console.error("❌ No files provided")
      return NextResponse.json({ error: "Files are required" }, { status: 400 })
    }

    if (!subject) {
      console.error("❌ No subject provided")
      return NextResponse.json({ error: "Subject is required" }, { status: 400 })
    }

    const filenames = files.map((file: any) => file.filename)
    console.log("📋 Files to process:", filenames)

    const pipeline: {
      ocr: any
      cleaning: any
      correction: any
    } = {
      ocr: null,
      cleaning: null,
      correction: null,
    }

    // Step 1: OCR Processing
    console.log("🔍 === STEP 1: OCR PROCESSING ===")
    try {
      const ocrStartTime = Date.now()
      console.log("🔍 Calling processMultipleImages with:", filenames)

      pipeline.ocr = await processMultipleImages(filenames)
      const ocrDuration = Date.now() - ocrStartTime

      console.log("✅ OCR STEP COMPLETED:")
      console.log(`   - Duration: ${ocrDuration}ms`)
      console.log(`   - Text length: ${pipeline.ocr?.textLength || 0} characters`)
      console.log(`   - Pages processed: ${pipeline.ocr?.pagesProcessed || 0}/${pipeline.ocr?.totalFiles || 0}`)
      console.log(`   - Success rate: ${(pipeline.ocr?.successRate * 100 || 0).toFixed(1)}%`)

      if (!pipeline.ocr?.rawText || pipeline.ocr?.textLength === 0) {
        throw new Error("No text extracted from images")
      }
    } catch (ocrError: any) {
      console.error("❌ OCR STEP FAILED:", ocrError)
      console.error("❌ OCR Error stack:", ocrError?.stack)
      return NextResponse.json(
        {
          success: false,
          error: `OCR failed: ${ocrError?.message || 'Unknown OCR error'}`,
          step: "ocr",
          details: ocrError?.stack,
        },
        { status: 500 },
      )
    }

    // Step 2: Text Cleaning
    console.log("🧹 === STEP 2: TEXT CLEANING ===")
    try {
      const cleanStartTime = Date.now()
      pipeline.cleaning = await cleanText(pipeline.ocr.rawText)
      const cleanDuration = Date.now() - cleanStartTime

      console.log("✅ CLEANING STEP COMPLETED:")
      console.log(`   - Duration: ${cleanDuration}ms`)
      console.log(`   - Cleaned text length: ${pipeline.cleaning?.cleanedLength || 0} characters`)

      if (!pipeline.cleaning?.cleanedText) {
        throw new Error("No cleaned text returned")
      }
    } catch (cleanError: any) {
      console.error("❌ CLEANING STEP FAILED:", cleanError)
      return NextResponse.json(
        {
          success: false,
          error: `Text cleaning failed: ${cleanError?.message || 'Unknown cleaning error'}`,
          step: "cleaning",
          details: cleanError?.stack,
        },
        { status: 500 },
      )
    }

    // Step 3: AI Correction
    console.log("🤖 === STEP 3: AI CORRECTION ===")
    try {
      const correctionStartTime = Date.now()
      
      if (type === "resume") {
        pipeline.correction = await correctResume(pipeline.cleaning.cleanedText, subject)
      } else {
        pipeline.correction = await correctDissertation(pipeline.cleaning.cleanedText, subject)
      }
      
      const correctionDuration = Date.now() - correctionStartTime

      console.log("✅ CORRECTION STEP COMPLETED:")
      console.log(`   - Duration: ${correctionDuration}ms`)
      console.log(`   - Type: ${type}`)
      console.log(`   - Correction length: ${pipeline.correction?.correction?.length || 0} characters`)
    } catch (correctionError: any) {
      console.error("❌ CORRECTION STEP FAILED:", correctionError)
      return NextResponse.json(
        {
          success: false,
          error: `AI correction failed: ${correctionError?.message || 'Unknown correction error'}`,
          step: "correction",
          details: correctionError?.stack,
        },
        { status: 500 },
      )
    }

    const totalDuration = Date.now() - startTime

    const response = {
      success: true,
      pipeline,
      summary: {
        totalFiles: files.length,
        filesProcessed: pipeline.ocr?.pagesProcessed || 0,
        successRate: pipeline.ocr?.successRate || 0,
        totalSteps: 3,
        processingTime: totalDuration,
        textExtracted: pipeline.ocr?.textLength || 0,
        finalCorrectionLength: pipeline.correction?.correction?.length || 0,
        processedFiles: pipeline.ocr?.processedFiles || [],
      },
    }

    console.log("✅ === FULL PIPELINE COMPLETED SUCCESSFULLY ===")
    console.log(`📊 Total processing time: ${totalDuration}ms`)
    console.log(`📄 Files processed: ${pipeline.ocr?.pagesProcessed || 0}/${files.length}`)
    console.log(`📝 Final text length: ${pipeline.correction?.correction?.length || 0} characters`)

    return NextResponse.json(response)
  } catch (error: any) {
    const totalDuration = Date.now() - startTime
    console.error("❌ === PIPELINE FAILED ===")
    console.error("❌ Pipeline error:", error)
    console.error("❌ Error stack:", error?.stack)
    console.error(`⏱️ Failed after: ${totalDuration}ms`)

    return NextResponse.json(
      {
        success: false,
        error: error?.message || "An unexpected error occurred",
        stack: process.env.NODE_ENV === "development" ? error?.stack : undefined,
        processingTime: totalDuration,
      },
      { status: 500 },
    )
  }
}
