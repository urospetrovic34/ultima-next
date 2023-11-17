import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(`${process.env.API_URL}/auth/v1/user`, {
    method: "GET",
    headers: {
      apiKey: process.env.API_KEY as string,
      Authorization: `Bearer ${cookies().get("access_token")?.value}` as string,
    },
  });
  const data = await res.json();
  return NextResponse.json(data);
}
