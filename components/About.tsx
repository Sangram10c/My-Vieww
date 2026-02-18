"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { MountainSnow } from "lucide-react";

export const About = () => {
    return (
        <section className="py-20 w-full px-4 md:px-8 relative overflow-hidden border-y border-neutral-200 dark:border-neutral-900 rounded-lg shadow-sm shadow-neutral-200 dark:shadow-neutral-900">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image Content (Left Side) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative aspect-[3/4] w-full max-w-sm mx-auto md:mx-0 rounded-2xl overflow-hidden shadow-xl"
                    >
                        <Image
                            src="/MyPhoto.jpeg"
                            alt="About Me"
                            fill
                            quality={100}
                            sizes="(min-width: 768px) 50vw, 100vw"
                            className="object-cover object-top hover:scale-105 transition-transform duration-700 shadow-lg shadow-neutral-200 dark:shadow-neutral-900"
                        />
                    </motion.div>

                    {/* Text Content (Right Side) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl md:text-5xl font-semibold text-neutral-700 dark:text-neutral-400  underline underline-offset-8">
                            About Me
                        </h2>
                        <p className=" text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            Hi! I’m Sangram Chougule, a MERN Stack Developer based in Pune, Maharashtra, with a background in Computer Engineering (Graduate, 2025). I enjoy building modern, scalable web applications and turning ideas into clean, functional user experiences.
                        </p>
                        <div>
                            <p className="   text-neutral-600 dark:text-neutral-400 leading-relaxed">
                               I’m driven by curiosity and a hands-on mindset, constantly sharpening my skills across the MERN stack while exploring new tools and best practices in real-world development. Outside of coding, you’ll usually find me bike riding or gaming, which keeps me refreshed and fuels my problem-solving mindset. My goal is to keep growing as a developer and contribute to impactful, well-engineered products.
                            </p>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};