import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const FirmwareIcon = () => (
    <svg className='w-5 h-5 text-gray-300' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <rect x="4" y="4" width="16" height="16" rx="1" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="9" y="9" width="6" height="6" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="9" y1="1" x2="9" y2="4" strokeLinecap="round" />
        <line x1="12" y1="1" x2="12" y2="4" strokeLinecap="round" />
        <line x1="15" y1="1" x2="15" y2="4" strokeLinecap="round" />
        <line x1="9" y1="20" x2="9" y2="23" strokeLinecap="round" />
        <line x1="12" y1="20" x2="12" y2="23" strokeLinecap="round" />
        <line x1="15" y1="20" x2="15" y2="23" strokeLinecap="round" />
        <line x1="20" y1="9" x2="23" y2="9" strokeLinecap="round" />
        <line x1="20" y1="12" x2="23" y2="12" strokeLinecap="round" />
        <line x1="20" y1="15" x2="23" y2="15" strokeLinecap="round" />
        <line x1="1" y1="9" x2="4" y2="9" strokeLinecap="round" />
        <line x1="1" y1="12" x2="4" y2="12" strokeLinecap="round" />
        <line x1="1" y1="15" x2="4" y2="15" strokeLinecap="round" />
    </svg>
)

const AIIcon = () => (
    <svg className='w-5 h-5 text-gray-300' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M12 2C8 2 6 4.5 6 7c0 1.5.5 2.8 1.3 3.8C5.5 11.8 4 13.8 4 16c0 3.3 3.6 6 8 6s8-2.7 8-6c0-2.2-1.5-4.2-3.3-5.2C17.5 9.8 18 8.5 18 7c0-2.5-2-5-6-5z" />
        <circle cx="9" cy="10" r="1.2" fill="currentColor" stroke="none" />
        <circle cx="15" cy="10" r="1.2" fill="currentColor" stroke="none" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 16s1 1.5 3 1.5 3-1.5 3-1.5" />
    </svg>
)

const About = () => {
    return (
        <div name='about' className='w-full py-20' style={{ background: '#0a0a0a' }}>
            <div className='max-w-[1200px] mx-auto px-6'>
                <div className='rounded-2xl p-8 md:p-12'
                     style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div className='grid md:grid-cols-2 gap-12 items-start'>

                        {/* Left: About Me */}
                        <div className='md:border-r md:border-white/5 md:pr-12'>
                            <p className='text-gray-500 text-xs tracking-[0.3em] uppercase mb-4'
                               style={{ fontFamily: "'Archivo', sans-serif" }}>
                                About Me
                            </p>
                            <h2 className='text-2xl md:text-3xl font-semibold text-white mb-5 leading-snug'
                                style={{ fontFamily: "'Archivo', sans-serif" }}>
                                Passionate about building intelligent solutions.
                            </h2>
                            <p className='text-gray-400 text-sm leading-relaxed mb-8'>
                                I specialize in embedded firmware development and explore the potential of AI to create smarter, more efficient systems. I enjoy turning ideas into practical products that make an impact.
                            </p>
                            <Link to="contact" smooth={true} duration={500}>
                                <span className='text-gray-400 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2 cursor-pointer group'>
                                    Learn more about me
                                    <HiArrowNarrowRight className='group-hover:translate-x-1 transition-transform duration-200' />
                                </span>
                            </Link>
                        </div>

                        {/* Right: What I Do */}
                        <div>
                            <p className='text-gray-500 text-xs tracking-[0.3em] uppercase mb-8'
                               style={{ fontFamily: "'Archivo', sans-serif" }}>
                                What I Do
                            </p>
                            <div className='grid grid-cols-2 gap-6'>
                                <div>
                                    <div className='w-12 h-12 rounded-xl flex items-center justify-center mb-4'
                                         style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)' }}>
                                        <FirmwareIcon />
                                    </div>
                                    <h3 className='text-white font-semibold mb-2 text-sm'>Firmware Development</h3>
                                    <p className='text-gray-500 text-xs leading-relaxed'>
                                        Designing and optimizing embedded systems, drivers, and low-level software for reliable performance.
                                    </p>
                                </div>

                                <div>
                                    <div className='w-12 h-12 rounded-xl flex items-center justify-center mb-4'
                                         style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)' }}>
                                        <AIIcon />
                                    </div>
                                    <h3 className='text-white font-semibold mb-2 text-sm'>AI & Machine Learning</h3>
                                    <p className='text-gray-500 text-xs leading-relaxed'>
                                        Exploring AI models and algorithms to build intelligent, adaptive solutions.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
