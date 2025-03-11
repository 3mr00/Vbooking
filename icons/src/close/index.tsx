import * as React from "react";

function Index(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={36} height={36} fill="none" {...props}>
      <rect
        width={36}
        height={36}
        rx={18}
        fill="color(display-p3 .9498 .9558 .9679)"
      />
      <path
        d="M24 12L12 24m0-12l12 12"
        stroke="color(display-p3 .4 .4392 .5216)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const CloseIcon = React.memo(Index);
export { CloseIcon };
