import React from 'react'
import ShowreelVideo from '../assets/ok_now_can_you_generate_based.mp4'

const Showreel = () => (
    <div className='w-full py-12' style={{ background: '#0a0a0a' }}>
        <div className='max-w-[1200px] mx-auto px-6 flex flex-col items-center'>

            <p className='text-gray-500 text-xs tracking-[0.3em] uppercase mb-6'
               style={{ fontFamily: "'Archivo', sans-serif" }}>
                Showreel
            </p>

            <div className='rounded-2xl overflow-hidden'
                 style={{
                     width: '100%',
                     maxWidth: 520,
                     aspectRatio: '4 / 3',
                     border: '1px solid rgba(255,255,255,0.08)',
                     background: '#050508',
                 }}>
                <video
                    src={ShowreelVideo}
                    className='w-full h-full object-cover'
                    autoPlay
                    muted
                    loop
                    playsInline
                />
            </div>

        </div>
    </div>
)

export default Showreel
