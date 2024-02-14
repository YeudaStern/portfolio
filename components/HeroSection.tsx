'use client'

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {

    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className='text-white mb-4 text-xl sm:text-5xl  lg:text-6xl font-extrabold'>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                            Hello I&apos;m Yehuda
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                'Full stack developer',
                                1000,
                                'Web developer',
                                1000,
                                'UI/UX Designer',
                                1000,
                                'Responsive app',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">I am happy to share my projects hope you find them useful, I would love to contribute my knowledge.</p>
                    <div>
                        <button className="px-6 py-3 rounded-full w-full mr-2 sm:w-fit mx-auto bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white hover:bg-slate-200"><a href="/#contact" >Hire me</a></button>
                        <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white  mt-3 hover:bg-slate-800">
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"><a href="/CV-Yehuda Shtern.pdf" download>Download CV</a></span>
                        </button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-9 mb-6 md:mt-0">
                    <div className="rounded-full  w-[250px] h-[250px] lg:w-[450px] lg:h-[450px] relative">
                        <Image
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            src="/section.png"
                            alt="protofolio"
                            width={350}
                            height={350}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
