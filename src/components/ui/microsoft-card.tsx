
import * as React from "react";
import { cn } from "@/lib/utils";

const MicrosoftCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:shadow-3xl hover:scale-[1.02] hover:border-white/30",
      "before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100",
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
    className={cn("flex flex-col space-y-1.5 p-8", className)}
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
      "text-2xl font-semibold leading-none tracking-tight text-white/90",
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
    className={cn("text-sm text-white/70", className)}
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
