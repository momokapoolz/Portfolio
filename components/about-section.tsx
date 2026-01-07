"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { User } from "lucide-react"

interface AboutSectionProps {
    readonly about: string
}

export function AboutSection({ about }: AboutSectionProps) {
    return (
        <section className="py-20 px-4 bg-muted/20" id="about">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-12 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-accent font-mono">01.</span> About Me
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <motion.div
                        whileHover={{
                            y: -8,
                            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 border-2 hover:border-accent/50">
                            <motion.div
                                className="flex justify-center mb-6"
                                initial={{ scale: 0, rotate: -180 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.4,
                                    type: "spring",
                                    stiffness: 200
                                }}
                            >
                                <motion.div
                                    className="p-4 bg-accent/10 rounded-full"
                                    whileHover={{
                                        rotate: [0, -10, 10, -10, 0],
                                        scale: 1.1
                                    }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <User className="h-8 w-8 text-accent" />
                                </motion.div>
                            </motion.div>

                            <motion.p
                                className="text-muted-foreground leading-relaxed text-center text-base md:text-lg max-w-3xl mx-auto"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                {about.split('. ').map((sentence, index) => {
                                    const sentences = about.split('. ')
                                    return (
                                        <motion.span
                                            key={`sentence-${sentence.substring(0, 20)}-${index}`}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.4,
                                                delay: 0.7 + index * 0.1
                                            }}
                                        >
                                            {sentence}{index < sentences.length - 1 ? '. ' : ''}
                                        </motion.span>
                                    )
                                })}
                            </motion.p>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

