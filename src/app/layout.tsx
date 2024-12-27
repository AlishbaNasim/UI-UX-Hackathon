import type { Metadata } from "next";
import { Poppins } from '@next/font/google';
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600', '700'],
});


export const metadata: Metadata = {
  title: "E-commerce website",
  description: "Created by Alishba Naseem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
           className={poppins.className}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
