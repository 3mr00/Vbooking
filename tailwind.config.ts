import type { Config } from "tailwindcss";

const createClampUtility = (property: string) => (value: string) => {
  const values = value.split(",");
  if (values.length === 3) {
    const [min, val, max] = values.map((v) => v.trim());
    return {
      [property]: `clamp(${min}, ${val}, ${max})`,
    };
  }
  return {};
};

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./Wrapper/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
			appPrimary: '#9C25A0',
			appSecondary: '#2D63CF',
  			primary: {
				DEFAULT: "#9C25A0",
				foreground: "#FFFFFF",
  			},
  			secondary: {
				DEFAULT: "#2D63CF", // New primary color
				foreground: "#FFFFFF", // White for text contrast
  			},
  			text: '#224A9A',
  			grayText: '#667085',
  			darkText: '#040A38',
  			error: '#E91223',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		spacing: {
  			'6': '6px',
  			'8': '8px',
  			'10': '10px',
  			'12': '12px',
  			'14': '14px',
  			'16': '16px',
  			'18': '18px',
  			'20': '20px',
  			'24': '24px',
  			'25': '25px',
  			'32': '32px',
  			'40': '40px',
  			'48': '48px',
  			'72': '72px',
  			'250': '250px'
  		},
  		fontSize: {
  			'12': '12px',
  			'22': '22px'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
    // Clamp utilities for fontSize, lineHeight, width, and height
    function ({ matchUtilities }: { matchUtilities: any }) {
      const clampUtilities = {
        "text-clamp": createClampUtility("fontSize"),
        "w-clamp": createClampUtility("width"),
      };
      matchUtilities(clampUtilities, {
        values: {},
        type: "any",
      });
    },
      require("tailwindcss-animate")
],
};
export default config;
