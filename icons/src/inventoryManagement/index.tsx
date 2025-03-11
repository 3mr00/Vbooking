import * as React from "react";

function Index(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={79} height={79} fill="none" {...props}>
      <rect
        x={0.5}
        y={0.768}
        width={78}
        height={78}
        rx={39}
        fill="color(display-p3 .9373 .9765 .9804)"
      />
      <g
        clipPath="url(#prefix__clip0_230_5327)"
        stroke="color(display-p3 .2745 .4627 .8431)"
        strokeWidth={2.667}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M46.994 21.435h-15.04a3.333 3.333 0 00-3.334 3.334v15.04a3.333 3.333 0 003.334 3.333h15.04a3.333 3.333 0 003.333-3.333v-15.04a3.333 3.333 0 00-3.333-3.334z" />
        <path d="M42.594 32.182l-3.093-3.12-3.12 3.12V21.435h6.213v10.747zM31.98 38.982h3.334M32.54 49.328H17.5a3.333 3.333 0 00-3.333 3.334v15.04a3.333 3.333 0 003.334 3.333h15.04a3.333 3.333 0 003.333-3.333v-15.04a3.333 3.333 0 00-3.333-3.334z" />
        <path d="M28.14 60.075l-3.12-3.093-3.093 3.093V49.328h6.213v10.747zM61.474 49.328h-15.04a3.333 3.333 0 00-3.333 3.334v15.04a3.333 3.333 0 003.333 3.333h15.04a3.333 3.333 0 003.334-3.333v-15.04a3.333 3.333 0 00-3.334-3.334z" />
        <path d="M57.047 60.075l-3.093-3.093-3.093 3.093V49.328h6.186v10.747zM46.434 66.875h3.334M18.594 66.875h3.333" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_230_5327">
          <path
            fill="#fff"
            transform="translate(12.834 20.102)"
            d="M0 0h53.307v52.293H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

const InventoryManagementIcon = React.memo(Index);
export default InventoryManagementIcon;
