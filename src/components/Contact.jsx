import React, { useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail, HiArrowNarrowRight } from 'react-icons/hi'
import ShowreelVideo from '../assets/ok_now_can_you_generate_based.mp4'

const inputStyle = {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 4,
    color: '#fff',
    outline: 'none',
    width: '100%',
    fontSize: 13,
    fontFamily: "'Space Grotesk', sans-serif",
    transition: 'border-color 0.2s',
}

const Contact = () => {
    const [sent, setSent] = useState(false)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError(false)
        try {
            const res = await fetch('https://getform.io/f/1740ffc0-6829-41c7-b273-c17e574505e3', {
                method: 'POST',
                body: new FormData(e.target),
                headers: { Accept: 'application/json' },
            })
            if (res.ok) {
                setSent(true)
            } else {
                setError(true)
            }
        } catch {
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div name='contact' className='w-full' style={{ background: '#0a0a0a' }}>
            <div className='max-w-[1200px] mx-auto px-6 py-20'>
                <div className='grid md:grid-cols-2 gap-16 items-start'>

                    {/* Left: form */}
                    <div>
                        <p className='text-gray-500 text-xs tracking-[0.3em] uppercase mb-4'
                            style={{ fontFamily: "'Archivo', sans-serif" }}>
                            Get in touch
                        </p>
                        <h2 className='text-2xl font-semibold text-white mb-2'
                            style={{ fontFamily: "'Archivo', sans-serif" }}>
                            Let's connect
                        </h2>
                        <p className='text-gray-400 text-sm mb-8 leading-relaxed'>
                            Open to new projects, roles, or just a conversation.
                        </p>

                        {sent ? (
                            <p className='text-gray-300 text-sm'>Message sent — I'll get back to you soon.</p>
                        ) : (
                            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                                <input
                                    type='text'
                                    name='name'
                                    placeholder='Name'
                                    required
                                    className='px-4 py-3 placeholder-gray-600'
                                    style={inputStyle}
                                    onFocus={e => e.target.style.borderColor = 'rgba(255,255,255,0.35)'}
                                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                                />
                                <input
                                    type='email'
                                    name='email'
                                    placeholder='Email'
                                    required
                                    className='px-4 py-3 placeholder-gray-600'
                                    style={inputStyle}
                                    onFocus={e => e.target.style.borderColor = 'rgba(255,255,255,0.35)'}
                                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                                />
                                <textarea
                                    name='message'
                                    placeholder='Message'
                                    required
                                    rows={5}
                                    className='px-4 py-3 placeholder-gray-600 resize-none'
                                    style={inputStyle}
                                    onFocus={e => e.target.style.borderColor = 'rgba(255,255,255,0.35)'}
                                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                                />
                                <button
                                    type='submit'
                                    disabled={loading}
                                    className='px-5 py-3 border border-white/30 text-white text-sm font-medium flex items-center gap-2 hover:border-white/60 transition-colors duration-200 cursor-pointer rounded-sm self-start disabled:opacity-50'>
                                    {loading ? 'Sending…' : <> Send Message <HiArrowNarrowRight /> </>}
                                </button>
                                {error && <p className='text-red-400 text-xs mt-1'>Something went wrong — try emailing me directly.</p>}
                            </form>
                        )}
                    </div>

                    {/* Right: social + video */}
                    <div className='flex flex-col gap-8'>
                        <div>
                            <p className='text-gray-500 text-xs tracking-[0.3em] uppercase mb-4'
                                style={{ fontFamily: "'Archivo', sans-serif" }}>
                                Find me on
                            </p>
                            <div className='flex gap-3'>
                                <a href='https://github.com/noyelankry'
                                    target='_blank' rel='noreferrer'
                                    className='w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200'
                                    style={{ border: '1px solid rgba(255,255,255,0.15)', borderRadius: 6 }}
                                    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'}
                                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'}>
                                    <FaGithub size={17} />
                                </a>
                                <a href='https://www.linkedin.com/in/noyelankry/'
                                    target='_blank' rel='noreferrer'
                                    className='w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200'
                                    style={{ border: '1px solid rgba(255,255,255,0.15)', borderRadius: 6 }}
                                    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'}
                                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'}>
                                    <FaLinkedin size={17} />
                                </a>
                                <a href='mailto:noy.elankry@gmail.com'
                                    className='w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200'
                                    style={{ border: '1px solid rgba(255,255,255,0.15)', borderRadius: 6 }}
                                    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'}
                                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'}>
                                    <HiOutlineMail size={19} />
                                </a>
                            </div>
                        </div>

                        <div className='rounded-2xl overflow-hidden'
                            style={{
                                aspectRatio: '4 / 3',
                                maxWidth: 380,
                                border: '1px solid rgba(255,255,255,0.08)',
                                background: '#050508',
                            }}>
                            <video
                                src={ShowreelVideo}
                                className='w-full h-full object-cover'
                                autoPlay muted loop playsInline
                            />
                        </div>
                    </div>

                </div>
            </div>

            {/* Footer */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div className='max-w-[1200px] mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2'>
                    <p className='text-gray-600 text-xs'>© 2026 Noy Elankry. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Contact
