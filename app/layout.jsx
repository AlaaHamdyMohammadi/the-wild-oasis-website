import Navigation from "./_components/navigation";
import Logo from "./_components/logo";
import "@/app/_styles/globals.css";

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
      <body className="bg-primary-400 min-h-screen">
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
