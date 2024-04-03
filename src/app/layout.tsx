import NavBar from "@/components/Nav/NavBar";
import type { Metadata } from "next";
import "../style/styles.scss";


export const metadata: Metadata = {
  title: "Gamer Gear",
  description: "Shop for the most dedicated Gamers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body ><NavBar />{children}</body>
    </html>
  );
}
