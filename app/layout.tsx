import type { Metadata } from "next";
import { Zain } from "next/font/google";
import "./globals.css";
import "./Portfolio.css";

const zain = Zain({
  variable: "--font-zain",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Diogo Correia",
  description: "Diogo Correia's Portfolio",
  icons: {
    icon: "favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${zain.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className="min-h-full flex flex-col">
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(){
              try{
                var t = localStorage.getItem('site-theme');
                if(t==='light' || t==='dark'){
                  document.documentElement.setAttribute('data-theme', t);
                } else {
                  // default to dark when no preference
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              }catch(e){}
            })();
          `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
