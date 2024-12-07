import { NavBar } from "@/components/navbar/page";

import "./globals.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="layout">
        <div>
          <NavBar />
        </div>

        <div>{children}</div>
      </body>
    </html>
  );
}
