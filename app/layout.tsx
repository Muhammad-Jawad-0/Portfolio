import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { Suspense } from "react";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Jawad - Full Stack Developer",
  description:
    "Personal portfolio of Muhammad Jawad, a passionate Full Stack Developer specializing in React, Next.js, Typescript, Express.js, Node.js, Mongodb, Git, Github, Firebase, and modern web technologies.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <Suspense fallback={null}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            storageKey="portfolio-theme"
          >
            {children}
            {/* ✅ Tawk.to Script */}
            <Script id="tawk-to" strategy="afterInteractive">
              {`
                var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                (function(){
                  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                  s1.async=true;
                  s1.src='https://embed.tawk.to/68c41d81b1b2401924b7a2fd/1j4v16h03';
                  s1.charset='UTF-8';
                  s1.setAttribute('crossorigin','*');
                  s0.parentNode.insertBefore(s1,s0);
                })();
              `}
            </Script>
          </ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
