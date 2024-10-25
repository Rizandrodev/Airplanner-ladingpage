import type { Metadata } from "next";
import {DM_Sans as DMSANS} from "next/font/google";
import "./globals.css";

const dmSams=DMSANS({subsets:['latin']})

export const metadata: Metadata = {
  title: "Airplaner",
  description: "Airplaner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={dmSams.className}
      >
        {children}
      </body>
    </html>
  );
}
