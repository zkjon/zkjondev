'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Github, Linkedin, Twitter, Mail, MapPin, Briefcase } from 'lucide-react'

export default function Header() {
  const headerRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLHeadingElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)
  const socialRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const visualRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()

    // Animación de entrada del título
    tl.fromTo(titleRef.current,
      {
        y: 100,
        opacity: 0,
        scale: 0.8
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out"
      }
    )

    // Animación del subtítulo
    .fromTo(subtitleRef.current,
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      },
      "-=0.6"
    )

    // Animación de la información
    .fromTo(infoRef.current,
      {
        x: -30,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out"
      },
      "-=0.4"
    )

    // Animación de los botones sociales (uno por uno)
    .fromTo(socialRef.current?.children || [],
      {
        y: 30,
        opacity: 0,
        scale: 0.8
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)"
      },
      "-=0.3"
    )

    // Animación de los CTAs
    .fromTo(ctaRef.current?.children || [],
      {
        y: 20,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      },
      "-=0.2"
    )

    // Animación del lado visual
    .fromTo(visualRef.current?.children || [],
      {
        scale: 0,
        opacity: 0,
        rotation: 180
      },
      {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 1.5,
        stagger: 0.3,
        ease: "elastic.out(1, 0.5)"
      },
      "-=1"
    )

    // Animación continua de las formas geométricas
    if (visualRef.current) {
      const shapes = visualRef.current.children
      Array.from(shapes).forEach((shape, index) => {
        gsap.to(shape, {
          rotation: 360,
          duration: 20 + index * 5,
          repeat: -1,
          ease: "none"
        })

        gsap.to(shape, {
          scale: 1.1,
          duration: 3 + index,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut"
        })
      })
    }

    // Efecto de escritura en el gradiente del nombre
    const nameGradient = titleRef.current?.querySelector('.gradient-text')
    if (nameGradient) {
      gsap.fromTo(nameGradient,
        {
          backgroundPosition: '200% center'
        },
        {
          backgroundPosition: '0% center',
          duration: 2,
          ease: "power2.inOut",
          delay: 0.5
        }
      )
    }

  }, [])

  return (
    <header ref={headerRef} className="min-h-screen bg-gradient-to-br from-primary-50 to-blue-50 flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido principal */}
          <div>
            <div className="mb-6">
              <h1 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Jon Imanol{' '}
                <span className="gradient-text bg-gradient-to-r from-primary-600 via-blue-600 to-primary-600 bg-[length:200%_100%]">
                  Ruiz Hermoso
                </span>
              </h1>
                <h2 ref={subtitleRef} className="text-xl md:text-2xl text-gray-600 mb-6">
                Desarrollador <strong>Full-Stack</strong> especializado en frameworks modernos de frontend, servidores <strong>MCP</strong> y soluciones <strong>IA-First</strong>.
                </h2>
            </div>

            {/* Información adicional */}
            <div ref={infoRef} className="flex flex-wrap gap-4 text-gray-600 mb-8">
              <div className="flex items-center">
                <MapPin size={18} className="mr-2 text-primary-600" />
                <span>España</span>
              </div>
              <div className="flex items-center">
                <Briefcase size={18} className="mr-2 text-primary-600" />
                <span>Trabajando en <a href="https://www.apis.es" target="_blank" rel="noopener noreferrer">Apis</a></span>
              </div>
            </div>

            {/* Enlaces sociales */}
            <div ref={socialRef} className="flex flex-wrap gap-4 mb-8">
              <a
                href="https://github.com/zkjon"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105 hover:shadow-xl"
              >
                <Github size={20} className="mr-2" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/zkjon/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 hover:scale-105 hover:shadow-xl"
              >
                <Linkedin size={20} className="mr-2" />
                LinkedIn
              </a>
              <a
                href="https://x.com/zkjondev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105 hover:shadow-xl"
              >
                <Twitter size={20} className="mr-2" />
                Twitter
              </a>
              <a
                href="mailto:fovusyts@gmail.com"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-200 hover:scale-105 hover:shadow-xl"
              >
                <Mail size={20} className="mr-2" />
                Contacto
              </a>
            </div>

            {/* CTA adicional */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-200 font-medium hover:scale-105 hover:shadow-xl"
              >
                Ver Proyectos
              </a>
              <a
                href="#technologies"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-all duration-200 font-medium hover:scale-105"
              >
                Tecnologías
              </a>
            </div>
          </div>

          {/* Lado derecho - Visual */}
          <div className="hidden lg:block">
            <div ref={visualRef} className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary-400 to-blue-500 rounded-full opacity-20"></div>
              <div className="absolute top-10 left-10 w-60 h-60 bg-gradient-to-br from-blue-400 to-primary-500 rounded-full opacity-30"></div>
              <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-primary-500 to-blue-400 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </header>
  )
}
