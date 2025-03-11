import * as React from "react";

function Index(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={25} fill="none" {...props}>
      <path
        d="M2 3.768l7.276 10.14-6.893 7.86H5.09l5.398-6.17 4.426 6.17H22l-7.61-10.625 6.45-7.375h-2.665l-4.993 5.688-4.074-5.688H2zm3.938 2h2.1l10.026 14h-2.082l-10.044-14z"
        fill="#fff"
      />
    </svg>
  );
}

const TwitterIcon = React.memo(Index);
export { TwitterIcon };
