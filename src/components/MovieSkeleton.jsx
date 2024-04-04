import React from "react";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const MovieSkeleton = () => {
  return (
    <div>
      <SkeletonTheme baseColor="#2d3436" highlightColor="#636e72">
          <Skeleton className="h-[400px]"/>
      </SkeletonTheme>
    </div>
  );
};

export default MovieSkeleton;
