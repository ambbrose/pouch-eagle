import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface MaxWithWrappper {
    children: ReactNode;
    className?: string;
}

export const MaxWidthWrapper = ({ children, className }: MaxWithWrappper) => {
    return (
        <div className={cn(
            "h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
            className
        )}>
            {children}
        </div>
    );
}