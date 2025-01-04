import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Inter} from "next/font/google"
//import Header from '../components/header'

export const metadata: Metadata = {
  title: "Schedulrr",
  description: "Meeting Scheduling App",
};
const inter =Inter({subsets:["latin"]})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {/* <Header/> */}
        {children}
      </body>
    </html>
  );
}
