import * as React from "react";

function Index(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={25} fill="none" {...props}>
      <path
        d="M18 9.768h-3.684v-2c0-1.032.088-1.682 1.633-1.682h1.953v-3.18c-.95-.094-1.906-.14-2.862-.138-2.835 0-4.905 1.657-4.905 4.7v2.3H7v4h3.135v9h4.18v-9.003h3.205L18 9.767z"
        fill="#fff"
      />
    </svg>
  );
}

const FaceBookIcon = React.memo(Index);
export { FaceBookIcon };
