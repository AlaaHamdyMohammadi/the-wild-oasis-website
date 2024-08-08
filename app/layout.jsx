import Navigation from "./_components/navigation";
import Logo from "./_components/logo";
import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";

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
      <body className={`${jpsefin.className} bg-primary-400 min-h-screen`}>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>Copyright by The Wild Oasis</footer>
      </body>
    </html>
  );
}
