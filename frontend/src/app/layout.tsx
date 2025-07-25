import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import EclipseGlow from "@/components/EclipseGlow";

export const metadata: Metadata = {
  title: "SecureSight",
  icons: {
    icon: '/Icon.png', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative bg-gradient-to-b from-[#151515] to-[#000000] overflow-y-hidden">
        <EclipseGlow />
        <Header />
        <div className="h-[2px] w-full bg-gray-700 opacity-30 shadow-[0_5px_15px_rgba(255,204,0,0.1)] mb-7 -mt-2"></div>
        {children}
      </body>
    </html>
  );
}