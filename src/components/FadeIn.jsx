import React, { useEffect, useRef } from 'react'

const FadeIn = ({ children, delay = 0 }) => {
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('is-visible')
                } else {
                    el.classList.remove('is-visible')
                }
            },
            { threshold: 0.1 }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <div ref={ref} className='fade-section' style={{ transitionDelay: `${delay}ms` }}>
            {children}
        </div>
    )
}

export default FadeIn
