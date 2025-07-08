
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const microsoftButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white shadow-xl hover:shadow-2xl hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 hover:scale-105 active:scale-95 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
        destructive: "bg-gradient-to-r from-red-600 via-pink-600 to-rose-600 text-white shadow-xl hover:shadow-2xl hover:from-red-700 hover:via-pink-700 hover:to-rose-700 hover:scale-105 active:scale-95 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
        outline: "border-2 border-white/30 bg-white/5 backdrop-blur-xl text-white/90 hover:bg-white/15 hover:border-white/60 hover:text-white hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl",
        secondary: "bg-gradient-to-r from-slate-700 via-gray-700 to-slate-800 text-white shadow-xl hover:shadow-2xl hover:from-slate-800 hover:via-gray-800 hover:to-slate-900 hover:scale-105 active:scale-95 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
        ghost: "text-white/80 hover:bg-white/10 hover:text-white hover:scale-105 active:scale-95 backdrop-blur-sm",
        link: "text-white/80 underline-offset-4 hover:underline hover:text-white hover:scale-105 active:scale-95",
        microsoft: "bg-gradient-to-r from-orange-500 via-red-500 via-purple-500 to-blue-600 text-white shadow-2xl hover:shadow-4xl hover:scale-110 active:scale-95 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/30 before:via-white/10 before:to-white/30 before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-500 after:absolute after:inset-0 after:bg-gradient-to-br after:from-purple-500/20 after:via-transparent after:to-pink-500/20 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-700",
        premium: "bg-gradient-to-r from-purple-600 via-pink-600 via-orange-500 to-yellow-500 text-white shadow-2xl hover:shadow-4xl hover:scale-110 active:scale-95 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/25 before:via-transparent before:to-white/25 before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-500 after:absolute after:inset-0 after:bg-gradient-to-br after:from-yellow-400/10 after:via-transparent after:to-purple-500/10 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-700 animate-gradient-x",
      },
      size: {
        default: "h-12 px-6 py-3 text-sm",
        sm: "h-10 px-4 py-2 text-xs",
        lg: "h-14 px-8 py-4 text-base",
        xl: "h-16 px-10 py-5 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface MicrosoftButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof microsoftButtonVariants> {
  asChild?: boolean;
}

const MicrosoftButton = React.forwardRef<HTMLButtonElement, MicrosoftButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(microsoftButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </Comp>
    );
  }
);
MicrosoftButton.displayName = "MicrosoftButton";

export { MicrosoftButton, microsoftButtonVariants };
