import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";


export const metadata: Metadata = {
  title: "Spotibof",
  description: "Spotibof"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
