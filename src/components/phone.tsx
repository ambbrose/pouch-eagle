/* eslint-disable @next/next/no-img-element */
import { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
    imgSrc: string;
    isDark?: boolean
}

export const Phone = ({ className, imgSrc, isDark = false, ...props }: PhoneProps) => {
    return (
        <div
            className={cn(
                "relative pointer-events-none z-50 overflow-hidden",
                className
            )}
            {...props}
        >
            <img
                alt="phone image"
                src={isDark ? "/phone-template-dark-edges.png" : "/phone-template-white-edges.png"}
                className="pointer-events-none select-none z-50"
            />

            <div className="absolute -z-10 inset-0">
                <img
                    className="object-cover pointer-events-none min-w-full min-h-full"
                    src={imgSrc}
                    alt="overlaying phone image"
                />
            </div>
        </div>
    )
}