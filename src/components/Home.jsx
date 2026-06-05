import React from 'react'
import { HiArrowNarrowRight, HiArrowNarrowDown } from 'react-icons/hi'
import { Link } from 'react-scroll'
import Logo from '../assets/NOY-ELANKRY_WHITE.png'
import ChipImg from '../assets/image.png'

const ChipVisual = () => (
    <div className='relative' style={{ width: 580, height: 580 }}>
        {/* Ambient glow matching the chip's rim light */}
        <div className='absolute glow-pulse' style={{
            inset: 0,
            background: 'radial-gradient(ellipse 60% 45% at 50% 62%, rgba(80,110,200,0.12) 0%, transparent 65%)',
            pointerEvents: 'none',
        }} />
        <img
            src={ChipImg}
            alt="chip visual"
            className='w-full h-full object-contain select-none'
            style={{
                maskImage: 'radial-gradient(ellipse 78% 80% at 52% 52%, black 38%, rgba(0,0,0,0.7) 55%, transparent 75%)',
                WebkitMaskImage: 'radial-gradient(ellipse 78% 80% at 52% 52%, black 38%, rgba(0,0,0,0.7) 55%, transparent 75%)',
            }}
        />
    </div>
)


const Home = () => {
    return (
        <div name="home" className='relative w-full min-h-screen' style={{ background: '#0a0a0a' }}>
            {/* Ambient gradient */}
            <div className='absolute inset-0 pointer-events-none' style={{
                background: 'radial-gradient(ellipse 70% 55% at 75% 50%, rgba(25,35,80,0.25) 0%, transparent 70%)'
            }} />

            <div className='relative max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between min-h-screen pt-[70px] overflow-hidden'>
                {/* Left: copy */}
                <div className='flex flex-col justify-center max-w-lg py-16 md:py-0 z-10'>
                    <p className='text-gray-500 text-xs tracking-[0.3em] uppercase mb-5'
                        style={{ fontFamily: "'Archivo', sans-serif" }}>
                        Hello, I'm
                    </p>

                    <img src={Logo} alt="Noy Elankry" className='mb-6 select-none'
                        style={{ width: 'clamp(220px, 30vw, 340px)', maxWidth: '100%' }} />

                    <h2 className='text-white font-semibold mb-4 text-xl'
                        style={{ fontFamily: "'Archivo', sans-serif" }}>
                        Firmware Engineer
                    </h2>

                    <p className='text-gray-400 text-sm leading-relaxed mb-8 max-w-sm'>
                        7+ years of software engineering experience, including 3 years leading end-to-end IoT firmware development from hardware bring-up to production, driving full lifecycle delivery in close collaboration with hardware, backend, and frontend teams.
                    </p>

                    <div className='flex flex-wrap gap-3'>
                        <Link to="work" smooth={true} duration={500}>
                            <button className='px-5 py-3 bg-white text-black text-sm font-medium flex items-center gap-2 hover:bg-gray-100 transition-colors duration-200 cursor-pointer rounded-sm'>
                                View My Work <HiArrowNarrowRight />
                            </button>
                        </Link>
                        <Link to="contact" smooth={true} duration={500}>
                            <button className='px-5 py-3 border border-white/30 text-white text-sm font-medium hover:border-white/60 transition-colors duration-200 cursor-pointer rounded-sm'>
                                Get In Touch
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Right: chip visual — bleeds into background */}
                <div className='hidden md:flex items-center justify-center' style={{ marginRight: '-60px' }}>
                    <ChipVisual />
                </div>
            </div>

            {/* Scroll indicator */}
            <div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2'>
                <p className='text-gray-600 text-xs tracking-[0.3em] uppercase'
                    style={{ fontFamily: "'Archivo', sans-serif" }}>
                    Scroll to Explore
                </p>
                <HiArrowNarrowDown className='text-gray-600 animate-bounce' />
            </div>
        </div>
    )
}

export default Home
