import { cva, type VariantProps } from "class-variance-authority";

export const TOGGLE_VARIANTS = ["default", "outline"] as const;
export const TOGGLE_SIZES = ["default", "sm", "lg"] as const;

export type ToggleVariant = (typeof TOGGLE_VARIANTS)[number];
export type ToggleSize = (typeof TOGGLE_SIZES)[number];

export const toggleVariants = cva(
  "hover:text-foreground aria-pressed:bg-muted focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive gap-1 rounded-md text-sm font-medium transition-[color,box-shadow] [&_svg:not([class*='size-'])]:size-4 group/toggle inline-flex items-center justify-center whitespace-nowrap outline-none hover:bg-muted focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border-input hover:bg-muted border bg-transparent shadow-xs",
      },
      size: {
        default: "h-9 min-w-9 px-2",
        sm: "h-8 min-w-8 px-1.5",
        lg: "h-10 min-w-10 px-2.5",
      },
    },
  },
);

export type ToggleVariantProps = VariantProps<typeof toggleVariants>;
