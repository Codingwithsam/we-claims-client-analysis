"use client"
import { useState } from "react"
import Image from "next/image";

const Page = () => {
    const [concern, setConcern] = useState("")
    const [results, setResults] = useState<any[]>([])
    const [loading, setLoading] = useState(false)

    const handleSubmit = async () => {
        setLoading(true)
        const res = await fetch("/api/analyzeClaim", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ concern }),
        })
        const data = await res.json()
        setResults(data)
        setLoading(false)
    }

    return (
        <section>
            <h1>
                Eligibility Check
            </h1>
            <p className="mt-5">Ask us your Claims Question</p>
            <p className="italic">powered by OpenAI & gpt-4o-mini</p>

            <textarea
                className="border rounded-md p-3 w-full mt-10 h-40 resize-none disabled:bg-gray-100 disabled:text-gray-500"
                placeholder="Describe your claim concern..."
                value={concern}
                onChange={(e) => setConcern(e.target.value)}
                disabled={loading} // when loading, disable input
            />

            <button
                type="button"
                id="eligible-btn"
                className="mt-2 flex items-center gap-2"
                onClick={handleSubmit}
                disabled={loading}
            >
                <span className="flex-1 text-center sm:text-left">{loading ? "Analyzing..." : "Analyze Claim"}</span>

                <Image
                    src="/icons/arrow-down.svg"
                    alt="arrow-down"
                    width={24}
                    height={24}
                    className="ml-auto"
                />
            </button>

            {results.length > 0 && (
                <div className="mt-6 w-full mb-8">
                    <h2 className="text-lg font-semibold mb-2">Results:</h2>
                    <ul className="space-y-2">
                        {results.map((r) => (
                            <li
                                key={r.key}
                                className="flex justify-between border-b pb-1 text-sm"
                            >
                                <span>{r.name}</span>
                                <span>Eligibility: {(r.probability * 100).toFixed(1)}%</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    )
}
export default Page
