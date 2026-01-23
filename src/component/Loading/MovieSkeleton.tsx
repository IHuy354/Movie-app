import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MovieSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#1a1a1a" highlightColor="#2d2d2d">
      <div className="flex flex-col gap-3">
        <Skeleton height={348} borderRadius={24} />
        <Skeleton height={20} borderRadius={8} width="85%" />
      </div>
    </SkeletonTheme>
  );
};

export default MovieSkeleton;
