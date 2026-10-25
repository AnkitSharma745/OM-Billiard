import Skeleton from "@/src/components/Skeleton";

export default function Loading() {
  return (
    <main aria-busy="true" aria-label="Loading page" className="min-h-screen bg-canvas px-gutter py-8">
      <div className="mx-auto w-full max-w-7xl space-y-10">
        <div className="flex items-center justify-between">
          <Skeleton className="h-10 w-44 rounded-full" />
          <Skeleton className="hidden h-10 w-72 rounded-full sm:block" />
          <Skeleton className="h-10 w-10 rounded-full sm:hidden" />
        </div>
        <Skeleton className="h-[min(62vh,38rem)] w-full rounded-3xl" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Skeleton className="h-64 w-full" />
          <Skeleton className="h-64 w-full" />
          <Skeleton className="hidden h-64 w-full lg:block" />
        </div>
      </div>
    </main>
  );
}
