/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Star } from "lucide-react";

import { Phone } from "@/components/phone";
import { Icons } from "@/components/icons";
import { Reviews } from "@/components/reviews";
import { buttonVariants } from "@/components/ui/button";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";

export default function Home() {
    return (
        <div className="bg-slate-50">
            <section>
                <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:pb-52 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32">
                    <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
                        <div className="relative mx-auto text-center flex flex-col items-center lg:items-start lg:text-left">
                            <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                                <img
                                    src="/muscular-eagle-1.png"
                                    className="w-full"
                                />
                            </div>

                            <h1 className="relative w-fit tracking-tight text-balance mt-16
                            font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl"
                            >
                                Your image on a <span className="bg-orange-700 px-2 text-white rounded-sm">Custom</span> Phone Case
                            </h1>

                            <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                                Welcome to PouchEagle, where your phone pouch becomes a canvas for your most <span className="font-bold">cherished memories</span>. With us, you can design a pouch as unique as you are, capturing and preserving the moments that matter most. From adding a picture of your loved ones to showcasing your favorite pet, PouchEagle allows you to transform your phone into a cherished keepsake. Protect your memories, not just your phone, with PouchEagle.
                            </p>

                            <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                                <div className="space-y-2">
                                    <li className="flex gap-1.5 items-center text-left">
                                        <Check className="h-5 w-5 shrink-0 text-orange-700" />
                                        High-quality, durable material
                                    </li>

                                    <li className="flex gap-1.5 items-center text-left">
                                        <Check className="h-5 w-5 shrink-0 text-orange-700" />
                                        5 years print guarantee
                                    </li>

                                    <li className="flex gap-1.5 items-center text-left">
                                        <Check className="h-5 w-5 shrink-0 text-orange-700" />
                                        Modern IPhone models supported
                                    </li>
                                </div>
                            </ul>

                            <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                                <div className="flex -space-x-4">
                                    <Image
                                        alt="user image"
                                        src={'/users/user-1.png'}
                                        className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                                        width={100}
                                        height={100}
                                    />

                                    <Image
                                        alt="user image"
                                        src={'/users/user-2.png'}
                                        className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                                        width={100}
                                        height={100}
                                    />

                                    <Image
                                        alt="user image"
                                        src={'/users/user-3.png'}
                                        className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                                        width={100}
                                        height={100}
                                    />

                                    <Image
                                        alt="user image"
                                        src={'/users/user-4.jpg'}
                                        className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                                        width={100}
                                        height={100}
                                    />

                                    <Image
                                        alt="user image"
                                        src={'/users/user-5.jpg'}
                                        className="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100"
                                        width={100}
                                        height={100}
                                    />
                                </div>

                                <div className="flex flex-col justify-between items-center sm:items-start">
                                    <div className="flex gap-0.5">
                                        <Star className="h-4 w-4 text-orange-700 fill-orange-700" />
                                        <Star className="h-4 w-4 text-orange-700 fill-orange-700" />
                                        <Star className="h-4 w-4 text-orange-700 fill-orange-700" />
                                        <Star className="h-4 w-4 text-orange-700 fill-orange-700" />
                                        <Star className="h-4 w-4 text-orange-700 fill-orange-700" />
                                    </div>

                                    <p>
                                        <span className="font-semibold">1.250</span> happy customers
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
                        <div className="relative md:max-w-xl">
                            <img
                                src="/your-image.png"
                                alt="your image"
                                className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
                            />

                            <img
                                src="/line.png"
                                alt="line image"
                                className="absolute w-20 -left-6 -bottom-6 select-none"
                            />

                            <Phone
                                className="w-64"
                                imgSrc="/testimonials/eagle-2.jpg"
                            />
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>

            {/* value proposition section */}
            <section className="bg-slate-200 py-24">
                <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
                    <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
                        <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
                            What our {' '}
                            <span className="relative px-2">
                                customers <Icons.underline className="absolute hidden sm:block pointer-events-none inset-x-0 -bottom-6 text-orange-700" />
                            </span> say
                        </h2>

                        <img
                            src="/muscular-eagle-2.png"
                            className="w-24 order-0 lg:order-2"
                        />
                    </div>

                    <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
                        <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
                            <div className="flex gap-0.5 mb-2">
                                <Star className="h-5 w-5 text-orange-700 fill-orange-700" />
                                <Star className="h-5 w-5 text-orange-700 fill-orange-700" />
                                <Star className="h-5 w-5 text-orange-700 fill-orange-700" />
                                <Star className="h-5 w-5 text-orange-700 fill-orange-700" />
                                <Star className="h-5 w-5 text-orange-700 fill-orange-700" />
                            </div>

                            <div className="text-lg leading-8">
                                <p>
                                    &ldquo;I recently purchased this case from PouchEagle, and I&apos;m beyond impressed! The customization options allowed me to create a truly unique design that perfectly reflects my personality. The process was simple and fun, and I was amazed by how quickly my custom pouch arrived. Not only does it look fantastic, but the quality is top-notch too. The pouch provides excellent protection for my phone without adding unnecessary bulk. I&apos;ve already recommended PouchEagle to all my friends, and I&apos;ll definitely be back for more designs in the future!&ldquo;
                                </p>
                            </div>

                            <div className="flex gap-4 mt-2">
                                <img
                                    alt="user-review"
                                    src="/users/user-1.png"
                                    className="rounded-full h-12 w-12 object-cover"
                                />

                                <div className="flex flex-col">
                                    <p className="font-semibold">John Wick</p>

                                    <div className="flex gap-1.5 items-center text-zinc-600">
                                        <Check className="h-4 w-4 stroke-[3px] text-orange-700" />
                                        <p className="text-sm">Verified Purchase</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
                            <div className="flex gap-0.5 mb-2">
                                <Star className="h-5 w-5 text-orange-700 fill-orange-700" />
                                <Star className="h-5 w-5 text-orange-700 fill-orange-700" />
                                <Star className="h-5 w-5 text-orange-700 fill-orange-700" />
                                <Star className="h-5 w-5 text-orange-700 fill-orange-700" />
                                <Star className="h-5 w-5 text-orange-700 fill-orange-700" />
                            </div>

                            <div className="text-lg leading-8">
                                <p>
                                    &ldquo;I&apos;ve been using this pouch for a few months now, and I couldn&apos;t be happier with my purchase. Not only does it feel incredibly durable, but the compliments I&apos;ve received on the design have been endless. What&apos;s truly remarkable is that even after months of daily use, <span className="p-0.5 bg-slate-800 text-white rounded-sm">the image on the pouch remains as clear as the day I received it</span>. It&apos;s a testament to the quality and craftsmanship of this product. Highly recommended!&ldquo;
                                </p>
                            </div>

                            <div className="flex gap-4 mt-2">
                                <img
                                    alt="user-review"
                                    src="/users/user-4.jpg"
                                    className="rounded-full h-12 w-12 object-cover"
                                />

                                <div className="flex flex-col">
                                    <p className="font-semibold">Clark Kent</p>

                                    <div className="flex gap-1.5 items-center text-zinc-600">
                                        <Check className="h-4 w-4 stroke-[3px] text-orange-700" />
                                        <p className="text-sm">Verified Purchase</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>

                <div className="pt-16">
                    <Reviews />
                </div>
            </section>

            <section>
                <MaxWidthWrapper className="py-24">
                    <div className="mb-12 px-6  lg:px-8">
                        <div className="mx-auto max-w-2xl sm:text-center">
                            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
                                Upload your photo and get{' '}
                                <span className="relative px-2 bg-orange-700 text-white rounded-sm">
                                    your own pouch 
                                </span> now
                            </h2>
                        </div>
                    </div>

                    <div className="mx-auto max-w-6xl px-6 lg:px-8">
                        <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
                            <img 
                                src="/arrow.png"
                                className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 -translate-x-1/2 rotate-90 md:rotate-0 z-10 left-1/2"
                            />

                            <div className="relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
                                <img 
                                    src="/horse.jpg"
                                    className="rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/5 h-full w-full"
                                />
                            </div>

                            <Phone 
                                imgSrc="/horse_phone.jpg"
                                className="w-60"
                            />
                        </div>
                    </div>

                    <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit">
                        <li className="w-fit">
                            <Check className="h-5 w-5 text-orange-700 inline mr-1.5" />
                            High-quality silicone material
                        </li>
                        <li className="w-fit">
                            <Check className="h-5 w-5 text-orange-700 inline mr-1.5" />
                            Scratch and fingerprint resistant coating
                        </li>
                        <li className="w-fit">
                            <Check className="h-5 w-5 text-orange-700 inline mr-1.5" />
                            Wireless charging compatible
                        </li>
                        <li className="w-fit">
                            <Check className="h-5 w-5 text-orange-700 inline mr-1.5" />
                            5 years print warranty
                        </li>

                        <div className="flex justify-center">
                            <Link 
                                href={'/configure/upload'}
                                className={buttonVariants({
                                    size:'lg',
                                    className: "mx-auto mt-8 bg-orange-700"
                                })}
                            >
                                Create your own pouch now
                                <ArrowRight />
                            </Link>
                        </div>
                    </ul>
                </MaxWidthWrapper>
            </section>
        </div>
    )
}