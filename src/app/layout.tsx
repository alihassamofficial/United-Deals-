import type { Metadata } from "next";
import { Poppins, Lato, Public_Sans } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

import { CartProvider } from "@/context/CartContext";
import { UserProvider } from "@/context/UserContext";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CheckoutProvider } from "@/context/CheckoutContext";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-public-sans",
});

export const metadata: Metadata = {
  title: "United Deals",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${poppins.variable} ${publicSans.variable} antialiased flex flex-col min-h-screen`}
      >
        <UserProvider>
          <CheckoutProvider>
            <CartProvider>
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </CartProvider>
          </CheckoutProvider>
        </UserProvider>
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
