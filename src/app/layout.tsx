import "./globals.css";
import { Manrope } from "next/font/google";
import Header from "./_components/shared/Header";
import Footer from "./_components/shared/Footer";
import { ReduxProvider } from "./_redux/provider";
import About from "./_components/shared/About";
import { AOSInit } from "./aos";

export const metadata = {
  title: "Audiophile",
};

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} `}>
      <AOSInit />
      <body
        className="[&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-lightOrange
  dark:[&::-webkit-scrollbar-track]:bg-gray
  dark:[&::-webkit-scrollbar-thumb]:bg-lightOrange "
      >
        <ReduxProvider>
          <Header />
          {children}
          <About />
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
