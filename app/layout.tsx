import "./global.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NEXT.JS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
