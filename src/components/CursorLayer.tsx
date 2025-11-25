"use client";

import dynamic from "next/dynamic";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
  loading: () => null
});

export const CursorLayer = () => {
  return <CustomCursor />;
};

export default CursorLayer;
