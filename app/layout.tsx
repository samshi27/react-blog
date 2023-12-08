import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

const header = (
  <header>
    <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
      <Link href={"/"}>
        <h1 className="text-3xl font-bold text-white">Im Possibl.</h1>
      </Link>
      <p className="text-slate-300">Welcome to my blog!</p>
    </div>
  </header>
);
const footer = (
  <footer>
    <div className="border-t border-slate-300 mt-6 py-4 text-center text-slate-400">
      <h3>Copyright &copy; 2023</h3>
    </div>
  </footer>
);

export const metadata: Metadata = {
  title: "Im Possibl.",
  description: "Developed by Samshitha",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto max-w-2xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
