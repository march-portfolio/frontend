"use client";
import { NavBar } from "@/components/navbar/page";
import "./globals.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let page = window.location.pathname === "/";
  return (
    <html lang="en">
      <body className="layout">
        <div>{page ? "" : <NavBar />}</div>

        <div>{children}</div>
      </body>
    </html>
  );
}
