import React from 'react'

const techStack = [
    { name: 'C / C++' },
    { name: 'FreeRTOS' },
    { name: 'Zephyr RTOS' },
    { name: 'Git' },
    { name: 'Espressif ESP32' },
    { name: 'Nordic nRF52' },
    { name: 'Azure IoT' },
    { name: 'AWS IoT' },
    { name: 'Python' },
    { name: 'MQTT' },
    { name: 'BLE' },
    { name: 'TinyML' },
    { name: 'CMake' },
]

const Skills = () => {
    return (
        <div name="skills" className='w-full py-12' style={{ background: '#0a0a0a' }}>
            <div className='max-w-[1200px] mx-auto px-6'>
                <p className='text-gray-600 text-xs tracking-[0.3em] uppercase mb-5 text-center'
                    style={{ fontFamily: "'Archivo', sans-serif" }}>
                    Tech Stack
                </p>
                <div className='flex flex-wrap gap-2 justify-center'>
                    {techStack.map(({ name }) => (
                        <span key={name}
                            className='px-3 py-1.5 text-xs text-gray-400 hover:text-gray-200 transition-all duration-200 cursor-default'
                            style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: 2, background: 'rgba(255,255,255,0.02)' }}>
                            {name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills
