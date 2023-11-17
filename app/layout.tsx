import "./globals.css";
import type { Metadata } from "next";

import NavigationHeaderAuthCart from "@/components/navigation/header/AuthCart";
import NavigationHeaderPrimary from "@/components/navigation/header/Primary";
import NavigationHeaderSecondary from "@/components/navigation/header/Secondary";
import NavigationFooter from "@/components/navigation/Footer";
import { cookies } from "next/headers";
import StoreInitializer from "@/components/StoreInitializer";

export const metadata: Metadata = {
  title: "Ultima Next Landing Page",
};

async function getUser() {
  const res = await fetch(`${process.env.API_URL}/auth/v1/user`, {
    method: "GET",
    headers: {
      apiKey: process.env.API_KEY as string,
      Authorization: `Bearer ${cookies().get("access_token")?.value}` as string,
    },
  });
  return res.json();
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userData = cookies().has("access_token") ? await getUser() : null;

  return (
    <html lang="en">
      <body className="h-screen flex flex-col">
        <StoreInitializer user={userData} />
        <NavigationHeaderAuthCart user={userData} />
        <NavigationHeaderPrimary />
        <NavigationHeaderSecondary />
        <div className="max-w-screen-xl w-full mx-auto flex-1">{children}</div>
        <NavigationFooter />
      </body>
    </html>
  );
}
