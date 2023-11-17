"use client";

import { useRef } from "react";

import { useStore } from "@/lib/store/zustand";

function StoreInitializer({ user }: { user: any }) {
  const initialized = useRef(false);
  if (!initialized.current) {
    useStore.setState({ user });
    initialized.current = true;
  }
  return null;
}

export default StoreInitializer;
