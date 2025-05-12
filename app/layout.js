import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "../components/Provider";
import '../app/utils/logger'; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Astra",
  description: "Sudbury dating app for malayalies",
  icon: "/favicon.ico",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>{children}</Provider>
        
      </body>
    </html>
  );
}