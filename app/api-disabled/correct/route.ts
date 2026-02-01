import { type NextRequest, NextResponse } from "next/server"
import { correctDissertation, correctResume } from "@/lib/correction-utils"

export async function POST(request: NextRequest) {
  console.log("🤖 Correct text API called")

  try {
    const { text, sujet, type } = await request.json()

    if (!text) {
      console.error("❌ No text provided")
      return NextResponse.json({ error: "Text is required" }, { status: 400 })
    }

    if (!sujet) {
      console.error("❌ No subject provided")
      return NextResponse.json({ error: "Subject is required" }, { status: 400 })
    }

    if (!type || !['dissertation', 'resume'].includes(type)) {
      console.error("❌ Invalid type provided")
      return NextResponse.json({ error: "Type must be 'dissertation' or 'resume'" }, { status: 400 })
    }

    console.log("📝 Processing AI correction, text length:", text.length)
    console.log("📚 Subject:", sujet.substring(0, 100) + "...")
    console.log("🎯 Type:", type)

    let result
    if (type === 'dissertation') {
      result = await correctDissertation(text, sujet)
    } else {
      result = await correctResume(text, sujet)
    }

    console.log("✅ Correct text API completed successfully")
    return NextResponse.json(result)
  } catch (error) {
    console.error("❌ Correct text API error:", error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Text correction failed",
      },
      { status: 500 },
    )
  }
}
