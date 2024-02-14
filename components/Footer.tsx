import Image from "next/image";
import React from "react";

const Footer = () => {
    return (
        <footer className="border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 rounded-full h-4 w-40 md:w-80 z-9 blur-lg absolute top-0  "></div>
            <div className="container p-12 flex justify-between">
                <span>
                    <Image
                    src="/section.png"
                    alt="logo"
                    height={50}
                    width={50}
                    />
                </span>
                <p className="text-slate-600 md:mt-4 mt-3">All rights reserved.</p>

            </div>
        </footer>
    );
};

export default Footer;