import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="">
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <WhatsApp />
        <Footer />
      </body>
    </html>
  );
}
