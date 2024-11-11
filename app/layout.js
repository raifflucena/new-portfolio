import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Raiff Lucena's Portfolio",
  description: "Raiff Lucena's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} data-theme="emerald">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
