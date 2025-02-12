import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Oleg Madara",
    description: "Dev Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="robots" content="all" />
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body className={inter.className}>{children}</body>
            <script type="text/javascript">
                var sc_project=13086563; var sc_invisible=1; var
                sc_security=`acc6d673`;
            </script>
            <script
                type="text/javascript"
                src="https://www.statcounter.com/counter/counter.js"
                async
            ></script>
        </html>
    );
}
