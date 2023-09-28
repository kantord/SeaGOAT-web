import "./globals.css";
import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SeagGOAT-web",
  description: "SeaGOAT-web is a web-based interface for SeaGOAT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={firaCode.className}>{children}</body>
    </html>
  );
}
