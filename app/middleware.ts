import { revalidateTag } from "next/cache";

export function middleware() {
  revalidateTag("products");
}
