type SkeletonProps = {
  className?: string;
};

export default function Skeleton({ className = "" }: SkeletonProps) {
  return <div aria-hidden="true" className={`media-skeleton animate-shimmer rounded-xl ${className}`} />;
}
