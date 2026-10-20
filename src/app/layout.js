import "./globals.css";

export const metadata = {
  title: "AI Accessibility Coach",
  description: "Get AI-powered feedback on your website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
