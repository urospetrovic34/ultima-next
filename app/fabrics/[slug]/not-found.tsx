"use client";

export default function PageNotFound({}: {}) {
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-full">
      <div className="text-9xl">404</div>
      <div className="text-2xl">Page Not Found</div>
      <div className="text-lg">It seems that this page doesnt exist, yet.</div>
    </div>
  );
}
