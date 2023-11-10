import "./globals.css";
import inter from "@next/font/google";
export const metadata = {
  title: {
    default: "Netflix-Reddigg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
