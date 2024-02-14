'use client'

import Link from "next/link";
import NavLink from "./NavLink";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuMobile from "./MenuMobile";
import Image from "next/image";

const NavLinks = [
    {
        title: "About",
        path: "#about"
    },
    {
        title: "Projects",
        path: "#projects"
    },
    {
        title: "Contact",
        path: "#contact"
    }
]

export default function NavBar() {

    const [nav, setNav] = useState(false)
    return (
        <nav className="fixed nt-24 top-0 right-0 left-0 z-10 bg-[#121212] bg-opacity-100">
            <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold">
                    <Image
                        src="/section.png"
                        alt=""
                        height={60}
                        width={60}
                    />
                </Link>
                <div className="mobile-menu block md:hidden">
                    {
                        !nav ? (
                            <button className="text-slate-200 flex items-center border rounded border-slate-200 hover:text-white" onClick={() => setNav(true)}><Bars3Icon className="h-5 w-5" /></button>
                        ) : (
                            <button className="text-slate-200 flex items-center border rounded border-slate-200 hover:text-white" onClick={() => setNav(false)}><XMarkIcon className="h-5 w-5" /></button>
                        )
                    }
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-o sm:flex-row md:space-x-8 mt-0">
                        {NavLinks.map((link, index) => (
                            <li key={index}>
                                <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 rounded-full h-4 w-40 md:w-80 z-9 blur-lg absolute top-6 "></div>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {
                nav ? <MenuMobile links={NavLinks} /> : null
            }
        </nav>
    )
}
