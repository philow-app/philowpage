import { type NextRequest, NextResponse } from "next/server"
import { processOCR } from "@/lib/ocr-utils"

export async function POST(request: NextRequest) {
  console.log("🔍 OCR API called")

  try {
    const { filename } = await request.json()

    if (!filename) {
      console.error("❌ No filename provided")
      return NextResponse.json({ error: "Filename is required" }, { status: 400 })
    }

    console.log("📁 Processing OCR for file:", filename)

    const result = await processOCR(filename)

    console.log("✅ OCR API completed successfully")
    return NextResponse.json(result)
  } catch (error) {
    console.error("❌ OCR API error:", error)
    return NextResponse.json(
      {
        success: false,
        error: error.message || "OCR processing failed",
      },
      { status: 500 },
    )
  }
}
