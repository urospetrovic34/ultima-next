export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex flex-row space-x-4">
        <div className="w-12 h-12 rounded-full animate-spin border border-dashed border-cyan-500 border-t-transparent"></div>
      </div>
    </div>
  );
}
