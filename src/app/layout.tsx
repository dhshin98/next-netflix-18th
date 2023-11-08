import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./Header";
import NavBar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <NavBar />
      </body>
    </html>
  );
}
