import React from "react";
import Navigation from "./components/navigation";
import Logo from "./components/logo";

export const metadata = {
  title: "The Wild Oasis",
  description: "The best resort in the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
