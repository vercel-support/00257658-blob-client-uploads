import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blob Client Uploads test",
  description: "Regarding case 00257658",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark:bg-zinc-900 dark:text-white p-4">{children}</body>
    </html>
  );
}
