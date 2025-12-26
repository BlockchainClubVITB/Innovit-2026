import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DecryptedText from './DecryptedText';
import { ParticleCard } from './MagicEffects';
import { useIsMobile } from '../hooks/useIsMobile';
import Reveal from './Reveal';
import { Lightbulb, Heart, Activity, Sprout, Shield, X, Info } from 'lucide-react';

const ProblemStatement = () => {
    const isMobile = useIsMobile();
    const [selectedTheme, setSelectedTheme] = useState(null);

    const themes = [
        {
            id: 'TH01',
            name: 'Open Innovation',
            icon: <Lightbulb className="w-8 h-8" />,
            color: 'from-yellow-500 to-amber-600',
            background: 'Background',
            backgroundText: "India is a rapidly developing nation with unique challenges and opportunities across sectors such as education, healthcare, governance, sustainability, agriculture, and digital inclusion. While technological advancement has created new possibilities, many real-world problems still require innovative, affordable, and scalable solutions tailored specifically to Indian contexts. Addressing these challenges through indigenous innovation is a key pillar of the Atmanirbhar Bharat mission, which emphasizes self-reliance, local problem-solving, and sustainable growth.",
            problem: 'Problem Description',
            problemText: "Under this theme, participants are encouraged to independently identify a real-world problem of national or societal relevance and design a technology-driven solution to address it. The problem should be clearly defined, well-researched, and rooted in real challenges faced by communities, institutions, or industries in India. The proposed solution must demonstrate innovation, feasibility, and the potential to scale beyond a limited use case. Teams are expected to justify the need for their solution, identify stakeholders, and explain how the solution contributes to India's technological and economic self-reliance.",
            outcomes: [
                'Indigenous and scalable solutions addressing Indian challenges',
                'Innovation aligned with local needs, constraints, and resources',
                'Measurable social, economic, or governance impact through technology'
            ],
            domains: ['Web Development', 'App Development', 'Artificial Intelligence (AI)', 'Machine Learning (ML)']
        },
        {
            id: 'TH02',
            name: 'Heritage & Culture',
            icon: <Heart className="w-8 h-8" />,
            color: 'from-pink-500 to-rose-600',
            background: 'Background',
            backgroundText: "India's cultural heritage is one of the richest and most diverse in the world, encompassing historical monuments, traditional art forms, indigenous knowledge systems, languages, crafts, rituals, and community practices. However, many of these cultural assets face challenges such as lack of documentation, limited accessibility, declining awareness among younger generations, and risks of deterioration over time. Strengthening cultural preservation and promotion through technology plays a vital role in building national identity and contributing to sustainable economic growth under the Atmanirbhar Bharat mission.",
            problem: 'Problem Description',
            problemText: "Participants are required to design a technology-driven solution that supports the preservation, promotion, accessibility, or engagement of India's cultural heritage. The solution should address real challenges such as documentation, digital access, education, tourism support, or community participation while maintaining authenticity and cultural sensitivity. Teams must clearly define the cultural context, stakeholders involved, and the value their solution brings in protecting or promoting heritage at a local or national level. The proposed solution should be feasible, scalable, and capable of creating long-term cultural and social impact.",
            outcomes: [
                'Digital preservation and documentation of cultural assets',
                'Increased awareness, accessibility, and engagement',
                'Sustainable promotion of heritage and cultural livelihoods'
            ],
            domains: ['Web Development', 'App Development', 'Artificial Intelligence (AI)', 'Machine Learning (ML)']
        },
        {
            id: 'TH03',
            name: 'MedTech / BioTech / HealthTech',
            icon: <Activity className="w-8 h-8" />,
            color: 'from-blue-500 to-cyan-500',
            background: 'Background',
            backgroundText: "India's healthcare ecosystem serves a vast and diverse population, with significant disparities in access, affordability, and quality of care, especially in rural and underserved regions. Rapid advancements in medical technology, biotechnology, and digital health present opportunities to address these challenges through indigenous, scalable solutions. Strengthening healthcare infrastructure through technology is a critical component of the Atmanirbhar Bharat mission, enabling self-reliant, efficient, and inclusive healthcare systems for the nation.",
            problem: 'Problem Description',
            problemText: "Participants are required to design an innovative technology-driven solution that improves healthcare delivery, diagnostics, monitoring, patient management, or biomedical processes. The solution should address real-world healthcare challenges such as early disease detection, continuous patient monitoring, accessibility of medical services, or data-driven healthcare decision-making. Teams must clearly define the healthcare problem, identify beneficiaries, and demonstrate how their solution enhances efficiency, affordability, and reliability while being feasible for deployment in Indian conditions.",
            outcomes: [
                'Improved accessibility and affordability of healthcare services',
                'Technology-enabled diagnostics, monitoring, and care delivery',
                'Strengthened healthcare systems supporting national self-reliance'
            ],
            domains: ['Web Development', 'App Development', 'Artificial Intelligence (AI)', 'Machine Learning (ML)']
        },
        {
            id: 'TH04',
            name: 'Agriculture, FoodTech & Rural Development',
            icon: <Sprout className="w-8 h-8" />,
            color: 'from-green-500 to-emerald-600',
            background: 'Background',
            backgroundText: "Agriculture and rural development form the backbone of India's economy and livelihood, supporting a significant portion of the population. Despite advancements, the sector continues to face challenges such as inefficient resource utilization, limited access to real-time information, post-harvest losses, fragmented supply chains, and sustainability concerns. Leveraging technology to strengthen agriculture and rural ecosystems is essential for achieving food security, improving farmer income, and building a self-reliant rural economy under the Atmanirbhar Bharat mission.",
            problem: 'Problem Description',
            problemText: "Participants are required to develop a technology-driven solution that addresses challenges in agriculture, food systems, or rural development. The solution should aim to improve productivity, optimize resources, enhance supply chain efficiency, or empower farmers and rural communities. Teams must clearly define the problem context, identify stakeholders such as farmers, cooperatives, or rural institutions, and demonstrate how the solution can be practically implemented in Indian rural settings while remaining scalable and sustainable.",
            outcomes: [
                'Improved agricultural productivity and resource efficiency',
                'Reduction in post-harvest losses and supply chain gaps',
                'Empowerment of farmers and rural communities through technology'
            ],
            domains: ['Web Development', 'App Development', 'Artificial Intelligence (AI)', 'Machine Learning (ML)']
        },
        {
            id: 'TH05',
            name: 'Blockchain & Cybersecurity',
            icon: <Shield className="w-8 h-8" />,
            color: 'from-purple-500 to-indigo-600',
            background: 'Background',
            backgroundText: "As India rapidly advances toward a digitally empowered society, the need for secure, transparent, and trustworthy digital systems has become increasingly critical. Digital governance, online services, financial systems, and data-driven platforms rely heavily on secure infrastructures to protect sensitive information and ensure user trust. Strengthening cybersecurity and promoting indigenous digital security solutions are key pillars of the Atmanirbhar Bharat mission, aimed at reducing dependence on external systems and enhancing national digital resilience.",
            problem: 'Problem Description',
            problemText: "Participants are required to design a secure and technology-driven solution that addresses challenges related to data protection, privacy, fraud prevention, digital trust, or system security. The solution may leverage blockchain, cryptography, decentralized architectures, or cybersecurity mechanisms to improve transparency, integrity, and resilience of digital systems. Teams must clearly define the security challenge, identify stakeholders, and demonstrate how their solution enhances trust, reduces vulnerabilities, and can be practically deployed within India's digital ecosystem.",
            outcomes: [
                'Secure and transparent digital platforms',
                'Enhanced data integrity, privacy, and trust',
                'Strengthened digital infrastructure supporting national self-reliance'
            ],
            domains: ['Web Development', 'App Development', 'Artificial Intelligence (AI)', 'Machine Learning (ML)']
        }
    ];

    return (
        <section className="section-padding relative overflow-hidden pt-24 md:pt-32 mt-16 md:mt-20">
            <div className="container relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-10 md:mb-14 px-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-3">
                        <DecryptedText
                            text="Hackathon Themes"
                            animateOn="view"
                            speed={8}
                            className="gradient-text"
                            encryptedClassName="text-yellow-200/50"
                        />
                    </h1>
                    <p className="text-base md:text-lg text-[#fbe9bb] max-w-3xl mx-auto">
                        Choose one theme and develop an innovative solution addressing real-world challenges in India
                    </p>
                </motion.div>

                {/* Theme Cards */}
                <div className="max-w-6xl mx-auto px-4 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {themes.map((theme, index) => (
                        <Reveal key={theme.id} delay={index * 0.1}>
                            <ParticleCard
                                className="magic-card"
                                particleCount={isMobile ? 4 : 8}
                                glowColor="245, 188, 34"
                                enableTilt={!isMobile}
                                enableBorderGlow={!isMobile}
                            >
                                <div className="glass-strong rounded-2xl p-5 md:p-6 h-full flex flex-col">
                                    {/* Icon */}
                                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${theme.color} mb-3 self-start`}>
                                        {theme.icon}
                                    </div>

                                    {/* Theme ID Badge */}
                                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 bg-gradient-to-r ${theme.color} self-start`}>
                                        {theme.id}
                                    </div>

                                    {/* Theme Name */}
                                    <h3 className="text-xl md:text-2xl font-bold mb-4 gradient-text">
                                        {theme.name}
                                    </h3>

                                    {/* Details Button */}
                                    <button
                                        onClick={() => setSelectedTheme(theme)}
                                        className="mt-auto btn-primary px-4 py-2 rounded-lg hover:scale-105 transition-transform flex items-center gap-2 justify-center"
                                    >
                                        <Info className="w-4 h-4" />
                                        View Details
                                    </button>
                                </div>
                            </ParticleCard>
                        </Reveal>
                    ))}
                </div>
            </div>

            {/* Theme Details Modal */}
            <AnimatePresence>
                {selectedTheme && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedTheme(null)}
                    >
                        {/* Backdrop */}
                        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-strong rounded-2xl p-6 md:p-8"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedTheme(null)}
                                className="absolute top-4 right-4 p-2 rounded-full glass hover:bg-red-500/20 transition-colors"
                            >
                                <X className="w-6 h-6 text-[#fff1ce]" />
                            </button>

                            {/* Theme Header */}
                            <div className="flex items-start gap-4 mb-6 pr-12">
                                <div className={`p-4 rounded-xl bg-gradient-to-br ${selectedTheme.color}`}>
                                    {selectedTheme.icon}
                                </div>
                                <div>
                                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 bg-gradient-to-r ${selectedTheme.color}`}>
                                        {selectedTheme.id}
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold gradient-text">
                                        {selectedTheme.name}
                                    </h2>
                                </div>
                            </div>

                            {/* Theme Details */}
                            <div className="space-y-6">
                                {/* Background */}
                                <div className="glass p-4 rounded-lg">
                                    <h3 className="text-lg font-bold text-yellow-400 mb-3">{selectedTheme.background}</h3>
                                    <p className="text-[#fbe9bb] text-sm leading-relaxed">
                                        {selectedTheme.backgroundText}
                                    </p>
                                </div>

                                {/* Problem Description */}
                                <div className="glass p-4 rounded-lg">
                                    <h3 className="text-lg font-bold text-yellow-400 mb-3">{selectedTheme.problem}</h3>
                                    <p className="text-[#fbe9bb] text-sm leading-relaxed">
                                        {selectedTheme.problemText}
                                    </p>
                                </div>

                                {/* Expected Outcomes */}
                                <div className="glass p-4 rounded-lg">
                                    <h3 className="text-lg font-bold text-yellow-400 mb-3">Expected Outcomes</h3>
                                    <ul className="space-y-2">
                                        {selectedTheme.outcomes.map((outcome, i) => (
                                            <li key={i} className="flex gap-2 items-start text-[#fbe9bb] text-sm">
                                                <span className="text-yellow-400 mt-1">•</span>
                                                <span>{outcome}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Technical Domains */}
                                <div className="glass p-4 rounded-lg">
                                    <h3 className="text-lg font-bold text-yellow-400 mb-3">Field / Technical Domain</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedTheme.domains.map((domain, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                                            >
                                                {domain}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ProblemStatement;
