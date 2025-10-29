import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono } from "next/font/google";
import "./globals.css";
import LightRays from "@/components/LightRays";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesque",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WE Claims Client Analysis",
  description: "A client facing product that helps give Analysis, Eligibility and Timelines for Claims",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${schibstedGrotesk.variable} ${martianMono.variable} min-h-screen antialiased`}
      >
         <Navbar />
         <div className={"absolute inset-0 top-0 z-[-1] min-h-screen"}>
             <LightRays
                 raysOrigin="top-center"
                 raysColor="#2E5D88"
                 raysSpeed={3}
                 lightSpread={0.8}
                 rayLength={2}
                 followMouse={true}
                 mouseInfluence={0.1}
                 noiseAmount={0.1}
                 distortion={0.05}
                 className="custom-rays"
             />
         </div>
         <main>
             {children}
         </main>
         <Footer />
      </body>
    </html>
  );
}
