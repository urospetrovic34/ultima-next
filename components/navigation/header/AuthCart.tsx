"use client";

import Link from "next/link";

import IconShoppingCart from "@/components/icon/ShoppingCart";
import { useRouter } from "next/navigation";

type AuthCartProps = {
  user: any;
};

const AuthCart = ({ user }: AuthCartProps) => {
  const router = useRouter();

  const handleSignout = async () => {
    await fetch("/api/auth/signout", {
      method: "POST",
    });
    router.refresh();
  };

  return (
    <nav className="bg-accent">
      <div className="max-w-screen-xl flex items-center gap-5 justify-end mx-auto py-2">
        {user ? (
          <Link href="/" onClick={handleSignout} className="hover:text-white">
            Signout
          </Link>
        ) : (
          <>
            <Link href="/signin" className="hover:text-white">
              Login
            </Link>
            <Link href="/signup" className="hover:text-white">
              Register
            </Link>
          </>
        )}

        <div className="relative">
          <Link className="hover:text-white cursor-pointer text-xl" href="/">
            <IconShoppingCart />
          </Link>
          {/* <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
            20
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default AuthCart;
