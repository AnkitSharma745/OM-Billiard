import Skeleton from "@/src/components/Skeleton";

export default function Loading() {
  return (
    <main aria-busy="true" aria-label="Loading page" className="min-h-screen bg-bg px-gutter py-8">
      <div className="page-shell space-y-10">
        <Skeleton className="h-[min(52vh,34rem)] w-full rounded-xl" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Skeleton className="h-64 w-full rounded-lg" />
          <Skeleton className="h-64 w-full rounded-lg" />
          <Skeleton className="hidden h-64 w-full rounded-lg lg:block" />
        </div>
      </div>
    </main>
  );
}
