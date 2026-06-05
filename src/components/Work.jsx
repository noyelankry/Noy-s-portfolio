import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import RasPi from '../assets/raspberrypi.png'
import NbdArticle from '../assets/nbd_article.png'
import FetchMusicImg from '../assets/fetchMusic.png'

const ChipIcon = () => (
    <svg className='w-4 h-4 text-gray-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <rect x="4" y="4" width="16" height="16" rx="1" />
        <rect x="9" y="9" width="6" height="6" />
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

const projects = [
    {
        title: 'IoT Device Firmware',
        description: 'Low-power firmware for an IoT device with secure OTA updates and sensor management.',
        tags: ['C / C++', 'FreeRTOS', 'IoT'],
        image: RasPi,
        link: 'https://github.com/noyelankry',
        icon: <ChipIcon />,
    },
    {
        title: 'NBD Protocol Deep Dive',
        description: 'Technical article on the Linux Network Block Device protocol — kernel-level networking explained.',
        tags: ['Linux', 'Kernel', 'C'],
        image: NbdArticle,
        link: 'https://dev.to/noyelankry/understanding-nbd-linux-network-block-device-protocol-406k',
        icon: <ChipIcon />,
    },
    {
        title: 'Fetch Music',
        description: 'Web app for searching and browsing music via the iTunes API with a clean, responsive interface.',
        tags: ['JavaScript', 'React', 'API'],
        image: FetchMusicImg,
        link: 'https://noyelankry.github.io/fetch-music-modules/',
        icon: <ChipIcon />,
    },
]

const Work = () => {
    return (
        <div name="work" className='w-full py-20' style={{ background: '#0a0a0a' }}>
            <div className='max-w-[1200px] mx-auto px-6'>
                <div className='rounded-2xl p-8 md:p-12'
                     style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.08)' }}>

                    {/* Section header */}
                    <div className='flex items-center justify-between mb-8'>
                        <p className='text-gray-500 text-xs tracking-[0.3em] uppercase'
                           style={{ fontFamily: "'Archivo', sans-serif" }}>
                            Featured Projects
                        </p>
                        <a href="https://github.com/noyelankry" target="_blank" rel="noreferrer"
                           className='text-gray-500 text-xs hover:text-white transition-colors duration-200 flex items-center gap-1 cursor-pointer'>
                            View all projects <HiArrowNarrowRight />
                        </a>
                    </div>

                    {/* Cards */}
                    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {projects.map((project, idx) => (
                            <a key={idx}
                               href={project.link}
                               target="_blank"
                               rel="noreferrer"
                               className='group block rounded-xl overflow-hidden transition-all duration-300 cursor-pointer'
                               style={{
                                   background: 'rgba(255,255,255,0.02)',
                                   border: '1px solid rgba(255,255,255,0.08)',
                               }}
                               onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'}
                               onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}>

                                {/* Image */}
                                <div className='relative overflow-hidden' style={{ height: 176, background: '#0d1117' }}>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className='w-full h-full object-cover transition-all duration-500 group-hover:scale-105'
                                        style={{ opacity: 0.55 }}
                                        onMouseEnter={e => e.target.style.opacity = '0.75'}
                                        onMouseLeave={e => e.target.style.opacity = '0.55'}
                                    />
                                    <div className='absolute inset-0'
                                         style={{ background: 'linear-gradient(to top, #0a0a0a 0%, rgba(10,10,10,0.2) 60%, transparent 100%)' }} />
                                    <div className='absolute top-3 right-3 w-8 h-8 rounded-lg flex items-center justify-center'
                                         style={{ border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}>
                                        {project.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className='p-4'>
                                    <h3 className='text-white font-semibold mb-1.5 text-sm'
                                        style={{ fontFamily: "'Archivo', sans-serif" }}>
                                        {project.title}
                                    </h3>
                                    <p className='text-gray-500 text-xs leading-relaxed mb-3'>
                                        {project.description}
                                    </p>
                                    <div className='flex flex-wrap gap-1.5'>
                                        {project.tags.map(tag => (
                                            <span key={tag}
                                                  className='px-2 py-0.5 text-xs text-gray-400'
                                                  style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: 2 }}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Work
