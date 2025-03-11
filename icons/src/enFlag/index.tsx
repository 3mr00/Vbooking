import * as React from "react";

function Index(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <g clipPath="url(#prefix__clip0_332_4143)">
        <path d="M0 0h24v24H0" fill="color(display-p3 .7412 .2392 .2667)" />
        <path
          d="M0 2.719h24H0zm0 3.703h24H0zm0 3.703h24H0zm0 3.703h24H0zm0 3.703h24H0zm0 3.703h24H0z"
          fill="#000"
        />
        <path
          d="M0 2.719h24M0 6.422h24M0 10.125h24M0 13.828h24M0 17.531h24M0 21.234h24"
          stroke="#fff"
          strokeWidth={1.875}
        />
        <path
          d="M0 0h18.281v12.89H0V0z"
          fill="color(display-p3 .098 .1843 .3647)"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_332_4143">
          <rect width={24} height={24} rx={12} fill="#fff" />
        </clipPath>
      </defs>
    </svg>
  );
}

const EnFlagIcon = React.memo(Index);
export { EnFlagIcon };
