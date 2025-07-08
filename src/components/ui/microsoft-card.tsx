
import * as React from "react";
import { cn } from "@/lib/utils";

const MicrosoftCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black/40 via-black/30 to-black/20 backdrop-blur-2xl shadow-2xl transition-all duration-500 hover:shadow-4xl hover:scale-[1.02] hover:border-white/20",
      "before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:via-transparent before:to-white/5 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100",
      "after:absolute after:inset-0 after:bg-gradient-to-br after:from-purple-500/5 after:via-transparent after:to-pink-500/5 after:opacity-0 after:transition-opacity after:duration-700 hover:after:opacity-100",
      className
    )}
    {...props}
  />
));
MicrosoftCard.displayName = "MicrosoftCard";

const MicrosoftCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-2 p-8", className)}
    {...props}
  />
));
MicrosoftCardHeader.displayName = "MicrosoftCardHeader";

const MicrosoftCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-bold leading-tight tracking-tight text-white/95 transition-colors duration-300",
      className
    )}
    {...props}
  />
));
MicrosoftCardTitle.displayName = "MicrosoftCardTitle";

const MicrosoftCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-base text-white/75 leading-relaxed transition-colors duration-300", className)}
    {...props}
  />
));
MicrosoftCardDescription.displayName = "MicrosoftCardDescription";

const MicrosoftCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-8 pt-0", className)} {...props} />
));
MicrosoftCardContent.displayName = "MicrosoftCardContent";

const MicrosoftCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
MicrosoftCardFooter.displayName = "MicrosoftCardFooter";

export {
  MicrosoftCard,
  MicrosoftCardHeader,
  MicrosoftCardFooter,
  MicrosoftCardTitle,
  MicrosoftCardDescription,
  MicrosoftCardContent,
};
