"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-5  grid grid-cols-2 text-purple-500">
                <li>Node.js</li>
                <li>Tailwind</li>
                <li>NextJs</li>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>React</li>
                <li>HTML</li>
                <li>TypeScript</li>
                <li>Prisma</li>
                <li>MongoDB</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-5 text-pink-500">
                <li>Fullstack Academy of Code</li>
                <li>Ort Singalovski TLV</li>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-5 text-blue-500">
                <li>Software engineer certificate</li>
                <li>Certification of MHT</li>
            </ul>
        ),
    },
];



const AboutSection = () => {
    const [tab, setTab] = useState<string>("skills");
    const [isPending, startTransition] = useTransition();

    const selectedTabData = TAB_DATA.find((t) => t.id === tab);

    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
                <Image
                    src="/about-image.png"
                    width={500}
                    height={500}
                    alt="about image"
                    className="md:rounded-l-2xl shadow shadow-slate-700"
                />
                <div className="mt-4 md:mt-0 text-left flex-col h-full md:border-r pr-2 rounded-2xl border-purple-300">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                        I am a full stack web developer with a passion for creating
                        interactive and responsive web applications. I have experience
                        working with JavaScript, React, NextJs, Node.js, Express,
                        I am also familiar with HTML, CSS, Git, MongoDB, Prisma and more.
                      <br/>  I am a quick learner and I am always
                        looking to expand my knowledge and skill set. I am a team player and
                        I am excited to work with others to create amazing applications.
                    </p>
                    <div className="flex flex-row justify-start mt-4">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"}
                        >
                            {" "}
                            Certifications{" "}
                        </TabButton>
                    </div>
                    <div className="mt-2">
                        {selectedTabData ? selectedTabData.content : null}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
