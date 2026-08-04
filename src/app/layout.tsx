import "./globals.css";
import RefreshRedirect from '@/components/RefreshRedirect'

export const metadata = {
  title: "Salman | Fullstack Developer",
  description: "Portfolio...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <RefreshRedirect />
        {children}
        </body>
    </html>
  );
}