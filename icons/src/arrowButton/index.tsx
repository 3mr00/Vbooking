import * as React from "react";

function Index(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={20} height={20} fill="none" {...props}>
      <path
        d="M5 7.5l5 5 5-5"
        stroke="currentColor"
        strokeWidth={1.667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ArrowButton = React.memo(Index);
export { ArrowButton };
