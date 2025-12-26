
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Certifications: React.FC = () => {
    const certifications = [
        {
            id: 1,
            title: "100 Days of Code™: The Complete Python Pro Bootcamp",
            issuer: "Udemy",
            tags: ["Python", "Bootcamp"],
        },
        {
            id: 2,
            title: "Forward Leadership",
            issuer: "McKinsey Forward",
            tags: ["Leadership", "Managment"],
        },
        {
            id: 3,
            title: "Supervised Learning with scikit-learn",
            issuer: "DataCamp",
            tags: ["Machine Learning", "Python"],
        },
        {
            id: 4,
            title: "Introduction to Deep Learning in Python",
            issuer: "DataCamp",
            tags: ["Deep Learning", "AI"],
        }
    ];

    return (
        <div>
            <div className="flex items-end justify-between mb-16">
                <h2 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.85]">
                    LICENSES & <br />
                    <span className="text-outline">CERT.</span>
                </h2>
            </div>

            <div className="space-y-6">
                {certifications.map((cert) => (
                    <div key={cert.id} className="group relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-[#111] hover:bg-[#151515] transition-all cursor-pointer p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-8 items-center border border-white/5 hover:border-white/10">
                        <div className="flex-1 flex flex-col justify-center text-center md:text-left">
                            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-3 md:mb-4">
                                {cert.tags.map(tag => (
                                    <span key={tag} className="text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 bg-white/5 border border-white/5 rounded-full text-neutral-500">{tag}</span>
                                ))}
                            </div>
                            <h3 className="text-3xl font-black uppercase tracking-tighter mb-2 group-hover:text-[#FF5C00] transition-colors">
                                {cert.title}
                            </h3>
                            <p className="text-neutral-500 font-bold uppercase text-xs tracking-[0.3em]">{cert.issuer}</p>
                        </div>

                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-600 group-hover:bg-[#FF5C00] group-hover:text-white group-hover:border-[#FF5C00] transition-all self-center md:self-auto shrink-0">
                            <ArrowUpRight size={24} className="md:w-7 md:h-7" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

