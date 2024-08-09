import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";

const jpsefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

//console.log("jpsefin", jpsefin);

export const metadata = {
  title: {
    template: "%s The Wild Oasis",
    default: "Welcome | The Wild Oasis",
  },
  description:
    "Luxurious cabin hotal, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and  dark forests.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jpsefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col`}
      >
        <header>
          <Header />
        </header>
        <div className="flex-1 px-8 py-12">
          <main className="max-w-7xl mx-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
