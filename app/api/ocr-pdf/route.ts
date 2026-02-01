import { type NextRequest, NextResponse } from "next/server"
import { ImageAnnotatorClient } from "@google-cloud/vision"
import path from "path"
import fs from "fs"

export async function POST(request: NextRequest) {
  try {
    const { filename } = await request.json()

    if (!filename) {
      return NextResponse.json({ error: "No filename provided" }, { status: 400 })
    }

    console.log("🔍 Starting OCR for PDF:", filename)

    // Initialize Google Vision client
    let client: ImageAnnotatorClient
    try {
      const keyPath = path.join(process.cwd(), "key.json")

      if (!fs.existsSync(keyPath)) {
        throw new Error("Google Cloud key file not found")
      }

      client = new ImageAnnotatorClient({
        keyFilename: keyPath,
      })
      console.log("✅ Google Vision client initialized")
    } catch (error) {
      console.error("❌ Failed to initialize Google Vision client:", error)
      return NextResponse.json({ error: "OCR service initialization failed" }, { status: 500 })
    }

    // Get PDF file path
    const pdfPath = path.join(process.cwd(), "public", "uploads", filename)

    if (!fs.existsSync(pdfPath)) {
      console.error("❌ PDF file not found:", pdfPath)
      return NextResponse.json({ error: "PDF file not found" }, { status: 404 })
    }

    console.log("📁 Processing PDF file:", pdfPath)

    try {
      // Read PDF file
      const pdfBuffer = fs.readFileSync(pdfPath)

      // Use Google Vision to process PDF directly
      const [result] = await client.documentTextDetection({
        image: {
          content: pdfBuffer,
        },
      })

      const detections = result.textAnnotations
      let extractedText = ""

      if (detections && detections.length > 0) {
        // The first detection contains the full text
        extractedText = detections[0].description || ""
        console.log("✅ OCR completed, extracted", extractedText.length, "characters")
      } else {
        console.log("⚠️ No text detected in PDF")
      }

      return NextResponse.json({
        success: true,
        rawText: extractedText,
        textLength: extractedText.length,
        pagesProcessed: 1, // PDF processed as single document
        filename,
      })
    } catch (visionError) {
      console.error("❌ Google Vision API error:", visionError)
      return NextResponse.json(
        {
          error: "OCR processing failed",
          details: visionError.message,
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("❌ OCR error:", error)
    return NextResponse.json({ error: "OCR processing failed" }, { status: 500 })
  }
}
