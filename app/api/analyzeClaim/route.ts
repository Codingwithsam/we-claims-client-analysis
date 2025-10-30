import { NextResponse } from "next/server"

export async function POST(req: Request) {
    const { concern } = await req.json()

    console.log(process.env.OPENAI_API_KEY ? "✅ API Key loaded" : "❌ Missing key")
    const prompt = `
  You are an assistant that evaluates workplace disability claim concerns.
  For the given concern, respond ONLY with a JSON array.
  Each object must have: key, name, and probability (0-1 range).
  Programs:
  1. cwcm - Comprehensive WCB Claims Management
  2. fmwcm - Full Medical WCB Claims Management
  3. pmwcm - Partial Medical WCB Claims Management
  4. stdcm - Short-term Disability Claims Management
  5. am - Attendance Management
  6. wa - Workplace Accommodation

  Concern: """${concern}"""
  `

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "You are a JSON-only response generator." },
                { role: "user", content: prompt },
            ],
            temperature: 0.4,
        }),
    })

    const data = await response.json()
    const content = data.choices?.[0]?.message?.content ?? "[]"
    const cleaned = content.replace(/```json|```/g, "").trim()
    return NextResponse.json(JSON.parse(cleaned))
}
