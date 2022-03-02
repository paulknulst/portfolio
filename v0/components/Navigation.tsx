import Link from "next/link"
import React from "react"
import ThemeSwitch from "@components/ThemeSwitch";

const Navigation = () => {
    return (
        <div className="sticky top-0 z-20 py-2 md:py-6 md:mb-6 dark:bg-black bg-white">
            <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
                <div className="items-start flex">
                    <Link href="/">
                        <a className={"font-medium tracking-wider transition-colors text-gray-900 dark:hover:text-sky-500 hover:text-sky-500 uppercase dark:text-white"}>
                            Paul Knulst
                        </a>
                    </Link>
                </div>
                <div className="items-end flex space-x-5">
                    <Link href="/supportme">
                        <a className="font-medium tracking-wider transition-colors text-gray-900 dark:hover:text-sky-500 hover:text-sky-500 uppercase dark:text-white">
                            Support Me
                        </a>
                    </Link>
                    <ThemeSwitch/>
                </div>
            </div>
        </div>
    )
}

export default Navigation;