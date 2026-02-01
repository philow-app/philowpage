import { type NextRequest, NextResponse } from "next/server"
import { cleanText } from "@/lib/text-cleaning-utils"

export async function POST(request: NextRequest) {
  console.log("🧹 Clean text API called")

  try {
    const { rawText } = await request.json()

    if (!rawText) {
      console.error("❌ No raw text provided")
      return NextResponse.json({ error: "Raw text is required" }, { status: 400 })
    }

    console.log("📝 Processing text cleaning, length:", rawText.length)

    const result = await cleanText(rawText)

    console.log("✅ Clean text API completed successfully")
    return NextResponse.json(result)
  } catch (error) {
    console.error("❌ Clean text API error:", error)
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Text cleaning failed",
      },
      { status: 500 },
    )
  }
}
