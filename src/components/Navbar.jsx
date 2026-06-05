import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { Link } from 'react-scroll'
import Logo from '../assets/NOY-ELANKRY_WHITE.png'

const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'contact', label: 'Contact' },
]



const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [active, setActive] = useState('home')

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <div className='fixed w-full z-50 transition-all duration-300'
             style={{
                 background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
                 backdropFilter: scrolled ? 'blur(12px)' : 'none',
                 borderBottom: `1px solid ${scrolled ? 'rgba(255,255,255,0.05)' : 'transparent'}`,
             }}>
            <div className='max-w-[1200px] mx-auto px-6 h-[70px] flex items-center justify-between'>

                {/* Logo */}
                <img src={Logo} alt="Noy Elankry" style={{ height: 38 }} className='select-none' />

                {/* Desktop nav */}
                <ul className='hidden md:flex items-center gap-8'>
                    {navLinks.map(({ id, label }) => (
                        <li key={id} className='relative list-none p-0'>
                            <Link
                                to={id}
                                smooth={true}
                                duration={500}
                                spy={true}
                                onSetActive={() => setActive(id)}
                                className={`text-sm transition-colors duration-200 cursor-pointer ${active === id ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                            >
                                {label}
                                {active === id && (
                                    <span className='absolute -bottom-1 left-0 right-0 h-px bg-white' />
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Social icon buttons */}
                <div className='hidden md:flex items-center gap-2'>
                    <a href="https://github.com/noyelankry" target="_blank" rel="noreferrer"
                       className='w-9 h-9 border border-white/20 rounded-md flex items-center justify-center text-gray-400 hover:text-white hover:border-white/50 transition-all duration-200 cursor-pointer'>
                        <FaGithub size={15} />
                    </a>
                    <a href="https://www.linkedin.com/in/noyelankry/" target="_blank" rel="noreferrer"
                       className='w-9 h-9 border border-white/20 rounded-md flex items-center justify-center text-gray-400 hover:text-white hover:border-white/50 transition-all duration-200 cursor-pointer'>
                        <FaLinkedin size={15} />
                    </a>
                    <a href="mailto:noy.elankry@gmail.com"
                       className='w-9 h-9 border border-white/20 rounded-md flex items-center justify-center text-gray-400 hover:text-white hover:border-white/50 transition-all duration-200 cursor-pointer'>
                        <HiOutlineMail size={17} />
                    </a>
                </div>

                {/* Mobile toggle */}
                <button onClick={() => setNav(!nav)} className='md:hidden text-white z-10'>
                    {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
                </button>
            </div>

            {/* Mobile menu */}
            {nav && (
                <div className='md:hidden absolute top-[70px] left-0 w-full border-t border-white/10 py-6'
                     style={{ background: 'rgba(10,10,10,0.98)' }}>
                    <ul className='flex flex-col items-center gap-6'>
                        {navLinks.map(({ id, label }) => (
                            <li key={id} className='list-none p-0'>
                                <Link to={id} smooth={true} duration={500} onClick={() => setNav(false)}
                                      className='text-gray-300 hover:text-white text-lg cursor-pointer'>
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className='flex justify-center gap-4 mt-8'>
                        <a href="https://github.com/noyelankry" target="_blank" rel="noreferrer"
                           className='w-10 h-10 border border-white/20 rounded-md flex items-center justify-center text-gray-400 hover:text-white'>
                            <FaGithub size={16} />
                        </a>
                        <a href="https://www.linkedin.com/in/noyelankry/" target="_blank" rel="noreferrer"
                           className='w-10 h-10 border border-white/20 rounded-md flex items-center justify-center text-gray-400 hover:text-white'>
                            <FaLinkedin size={16} />
                        </a>
                        <a href="mailto:noy.elankry@gmail.com"
                           className='w-10 h-10 border border-white/20 rounded-md flex items-center justify-center text-gray-400 hover:text-white'>
                            <HiOutlineMail size={18} />
                        </a>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar
