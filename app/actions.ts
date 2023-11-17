"use server";

import { z } from "zod";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { post } from "@/lib/overfetch";

export async function register(prevState: any, formData: FormData) {
  prevState = null;
  const schema = z.object({
    email: z.string().email(),
    password: z.string(),
    data: z.object({
      username: z.string(),
    }),
  });

  const body = schema.parse({
    email: formData.get("email"),
    password: formData.get("password"),
    data: {
      username: formData.get("username"),
    },
  });

  const res = await post("/auth/v1/signup", body);

  const data = await res.json();

  if (res.status === 200) {
    cookies().set("access_token", data.access_token, { httpOnly: true });
    cookies().set("refresh_token", data.refresh_token, { httpOnly: true });
    redirect("/");
  } else {
    return data.error_description;
  }
}

export async function login(prevState: any, formData: FormData) {
  prevState = null;
  const schema = z.object({
    email: z.string().email(),
    password: z.string(),
  });

  const body = schema.parse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  const res = await post("/auth/v1/token?grant_type=password", body);

  const data = await res.json();

  if (res.status === 200) {
    cookies().set("access_token", data.access_token, { httpOnly: true });
    cookies().set("refresh_token", data.refresh_token, { httpOnly: true });
    redirect("/");
  } else {
    return data.error_description;
  }
}
