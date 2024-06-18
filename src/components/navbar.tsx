import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const Navbar = async () => {

    const { getUser } = getKindeServerSession();
    const user = await getUser();
    const isAdmin = user?.email === process.env.ADMIN_EMAIL;

    return (
        <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                    <Link
                        href="/"
                        className="flex z-40 font-semibold"
                    >
                        pouch<span className="text-orange-700">eagle</span>
                    </Link>

                    <div className="h-full flex items-center space-x-4">
                        {user ? (
                            <>
                                <Link
                                    href={"/api/auth/logout"}
                                    className={buttonVariants({
                                        size: "sm",
                                        variant: "ghost"
                                    })}
                                >
                                    Sign Out
                                </Link>

                                {isAdmin ? (
                                    <Link
                                        href={"/api/auth/logout"}
                                        className={buttonVariants({
                                            size: "sm",
                                            variant: "ghost"
                                        })}
                                    >
                                        Dashboard ✨
                                    </Link>
                                ) : null}

                                <Link
                                    href={"/configure/upload"}
                                    className={buttonVariants({
                                        size: "sm",
                                        className: "hidden sm:flex items-center gap-1"
                                    })}
                                >
                                    Create case
                                    <ArrowRight className="ml-1.5 h-5 w-5" />
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    href={"/api/auth/register"}
                                    className={buttonVariants({
                                        size: "sm",
                                        variant: "ghost"
                                    })}
                                >
                                    Sign up
                                </Link>

                                <Link
                                    href={"/api/auth/login"}
                                    className={buttonVariants({
                                        size: "sm",
                                        variant: "ghost"
                                    })}
                                >
                                    Login
                                </Link>

                                {/* <div className="h-8 w-px hidden sm:block bg-zinc-200" /> */}
                                <Separator
                                    orientation="vertical"
                                    className="h-8 hidden sm:block bg-zinc-200"
                                />

                                <Link
                                    href={"/configure/upload"}
                                    className={buttonVariants({
                                        size: "sm",
                                        className: "hidden sm:flex items-center gap-1 bg-orange-700"
                                    })}
                                >
                                    Create case
                                    <ArrowRight className="ml-1.5 h-5 w-5" />
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    );
}