/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { HTMLAttributes, useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

import { cn } from "@/lib/utils";
import { Phone } from "@/components/phone";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";

const PHONES = [
    "/testimonials/1.jpg",
    "/testimonials/2.jpg",
    "/testimonials/3.jpg",
    "/testimonials/4.jpg",
    "/testimonials/5.jpg",
    "/testimonials/6.jpg",
];

interface ReviewProps extends HTMLAttributes<HTMLDivElement> {
    imgSrc: string;
}

function Review({ imgSrc, className, ...props }: ReviewProps) {

    const POSSIBLE_ANIMATION_DELAYS = [
        "0s",
        "0.1s",
        "0.2s",
        "0.3s",
        "0.4s",
        "0.5s"
    ];

    const animationDelay = POSSIBLE_ANIMATION_DELAYS[Math.floor(Math.random() * POSSIBLE_ANIMATION_DELAYS.length)]

    return (
        <div
            className={cn(
                "animate-fade-in bg-white p-6 opacity-0 shadow-xl shadow-slate-400",
                className
            )}
            style={{ animationDelay }}
            {...props}
        >
            <Phone imgSrc={imgSrc} />
        </div>
    )
}

interface ReviewColumnProps {
    reviews: string[];
    className?: string;
    reviewClassName?: (reviewIndex: number) => string;
    msPerPixel?: number;
}

function ReviewColumn({ reviews, className, reviewClassName, msPerPixel = 0 }: ReviewColumnProps) {
    const columnRef = useRef<HTMLDivElement | null>(null);

    const [columnHeight, setColumnHeight] = useState(0);

    const duration = `${columnHeight * msPerPixel}ms`

    useEffect(() => {
        if (!columnRef.current) return;

        const resizeObserver = new window.ResizeObserver(() => {
            setColumnHeight(columnRef.current?.offsetHeight ?? 0);
        });

        resizeObserver.observe(columnRef.current);

        return () => {
            resizeObserver.disconnect();
        }
    }, []);

    return (
        <div
            ref={columnRef}
            className={cn(
                "animate-marquee space-y-8 py-4",
                className
            )}
            style={{ '--marquee-duration': duration } as React.CSSProperties}
        >
            {reviews.concat(reviews).map((imgSrc, reviewIndex) => (
                <Review
                    imgSrc={imgSrc}
                    key={reviewIndex}
                    className={reviewClassName?.(reviewIndex % reviews.length)}
                />
            ))}
        </div>
    )
}

function splitArray<T>(array: Array<T>, numParts: number) {
    const result: Array<Array<T>> = [];

    for (let i = 0; i < array.length; i++) {
        const index = i % numParts;

        if (!result[index]) {
            result[index] = [];
        }

        result[index].push(array[i]);
    }

    return result;
}

function ReviewGrid() {

    const containerRef = useRef<HTMLDivElement | null>(null);

    const isInView = useInView(containerRef, {
        once: true,
        amount: 0.4
    });

    const columns = splitArray(PHONES, 3);
    const column1 = columns[0];
    const column2 = columns[1];
    const column3 = splitArray(columns[2], 2);

    console.log(column3[1])

    return (
        <div
            ref={containerRef}
            className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
        >
            {isInView ? (
                <>
                    <ReviewColumn
                        reviews={[...column2, ...column3[1]]}
                        reviewClassName={(reviewIndex) => cn({
                            "md:hidden": reviewIndex >= column1.length + column3[0].length,
                            "lg:hidden": reviewIndex >= column1.length
                        })}
                        msPerPixel={10}
                    />

                    <ReviewColumn
                        reviews={[...column1, ...column3.flat(), ...column2]}
                        reviewClassName={(reviewIndex) => reviewIndex >= column2.length ? "lg:hidden" : ""}
                        msPerPixel={15}
                        className="hidden md:block"
                    />

                    <ReviewColumn
                        reviews={[...column3.flat()]}
                        msPerPixel={10}
                        className="hidden md:block"
                    />
                </>
            ) : null}

            <div className="pointer-events-none bg-gradient-to-b from-slate-50 absolute top-0 h-32 inset-x-0" />

            <div className="pointer-events-none bg-gradient-to-t from-slate-50 absolute bottom-0 h-32 inset-x-0" />
        </div>
    );
}

export const Reviews = () => {
    return (
        <MaxWidthWrapper className="relative max-w-5xl">
            <img
                aria-hidden={true}
                src="/what-people-are-buying.png"
                className=""
            />

            <ReviewGrid />
        </MaxWidthWrapper>
    );
}