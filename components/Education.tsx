
import React from 'react';
import { GraduationCap } from 'lucide-react';

export const Education: React.FC = () => {
    return (
        <div>
            <div className="flex items-end justify-between mb-16">
                <h2 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.85]">
                    EDUCATION
                </h2>
            </div>

            <div className="group relative overflow-hidden rounded-[2.5rem] bg-[#111] hover:bg-[#151515] transition-all cursor-pointer p-8 md:p-12 border border-white/5 hover:border-white/10">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-[#FF5C00] group-hover:scale-110 transition-transform shrink-0">
                        <GraduationCap size={32} />
                    </div>

                    <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter group-hover:text-[#FF5C00] transition-colors">
                                Government College University
                            </h3>
                            <span className="text-neutral-500 font-bold uppercase tracking-widest text-sm md:text-base mt-2 md:mt-0">Oct 2021 - July 2025</span>
                        </div>

                        <p className="text-xl md:text-2xl text-white font-bold mb-1">
                            Faisalabad, Pakistan
                        </p>
                        <p className="text-lg text-white/60 font-medium mb-6">
                            Bachelors of Science in Data Science
                        </p>

                        <div className="space-y-4">
                            <div>
                                <span className="text-[#FF5C00] font-bold uppercase tracking-widest text-xs mb-2 block">Concentrations</span>
                                <p className="text-neutral-300">Data Science and Analytics</p>
                            </div>

                            <div>
                                <span className="text-[#FF5C00] font-bold uppercase tracking-widest text-xs mb-2 block">Related Coursework</span>
                                <p className="text-neutral-400 leading-relaxed text-sm">
                                    Computing in Python, Descriptive and Inferential Statistics in R, Machine Learning, Data Analysis, Mathematics, Artificial Intelligence, Data Visualization, Data Structures, Databases, Data warehousing and BI, Data Analysis using SQL.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
