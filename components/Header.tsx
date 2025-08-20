"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Briefcase,
} from "lucide-react";
import { getTranslations } from "../lib/translations";
import LanguageSelector from "./LanguageSelector";

interface HeaderProps {
  locale?: string;
}

export default function Header({ locale = "es" }: HeaderProps) {
  const t = getTranslations(locale);
  const [mounted, setMounted] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const pendulumRef = useRef<HTMLDivElement>(null);
  const firstBallRef = useRef<HTMLDivElement>(null);
  const lastBallRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const tl = gsap.timeline();

    // Animación de entrada del título
    tl.fromTo(
      titleRef.current,
      {
        y: 100,
        opacity: 0,
        scale: 0.8,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
      }
    )

      // Animación del subtítulo
      .fromTo(
        subtitleRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6"
      )

      // Animación de la información
      .fromTo(
        infoRef.current,
        {
          x: -30,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      )

      // Animación de los botones sociales (uno por uno)
      .fromTo(
        socialRef.current?.children || [],
        {
          y: 30,
          opacity: 0,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      )

      // Animación de los CTAs
      .fromTo(
        ctaRef.current?.children || [],
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.2"
      )

      // Animación del lado visual (excluyendo el péndulo)
      .fromTo(
        Array.from(visualRef.current?.children || []).filter(
          child => !child.classList.contains('no-gsap-animation')
        ),
        {
          scale: 0,
          opacity: 0,
          rotation: 180,
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 1.5,
          stagger: 0.3,
          ease: "elastic.out(1, 0.5)",
        },
        "-=1"
      );

    // Animación específica para el péndulo (solo opacity y scale, sin rotation)
    const pendulumElement = visualRef.current?.querySelector('.pendulum');
    if (pendulumElement) {
      tl.fromTo(
        pendulumElement,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.8"
      );
    }

    // Animación del péndulo con GSAP
    const firstBall = pendulumRef.current?.querySelector('.ball.first');
    const lastBall = pendulumRef.current?.querySelector('.ball.last');
    
    if (firstBall && lastBall) {
      // Timeline para el péndulo
      const pendulumTl = gsap.timeline({ repeat: -1, delay: 1 });
      
      // Fase 1: Primera bola se mueve hacia el centro
      pendulumTl.fromTo(firstBall, 
        { rotation: 35 },
        { 
          rotation: 0,
          duration: 0.45,
          ease: "power2.in"
        }
      )
      // Fase 2: Pausa en el centro (impacto)
      .set({}, {}, "+=0.05")
      // Fase 3: Última bola se mueve hacia afuera
      .fromTo(lastBall,
        { rotation: 0 },
        { 
          rotation: -35,
          duration: 0.45,
          ease: "power2.out"
        }
      )
      // Fase 4: Última bola regresa al centro
      .to(lastBall,
        { 
          rotation: 0,
          duration: 0.45,
          ease: "power2.in"
        }
      )
      // Fase 5: Pausa en el centro (impacto inverso)
      .set({}, {}, "+=0.05")
      // Fase 6: Primera bola se mueve hacia afuera
      .to(firstBall,
        { 
          rotation: 35,
          duration: 0.45,
          ease: "power2.out"
        }
      );
    }

 

    // Efecto de escritura en el gradiente del nombre
    const nameGradient = titleRef.current?.querySelector(".gradient-text");
    if (nameGradient) {
      gsap.fromTo(
        nameGradient,
        {
          backgroundPosition: "200% center",
        },
        {
          backgroundPosition: "0% center",
          duration: 2,
          ease: "power2.inOut",
          delay: 0.5,
        }
      );
    }
  }, [mounted]);

  if (!mounted) {
    return (
      <header className="min-h-screen bg-gradient-to-br from-primary-50 to-blue-50 flex items-center relative">
        <div className="absolute top-6 right-6 z-10">
          <LanguageSelector />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                  Jon Imanol{" "}
                  <span className="gradient-text bg-gradient-to-r from-primary-600 via-blue-600 to-primary-600 bg-[length:200%_100%]">
                    Ruiz Hermoso
                  </span>
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
                  {locale === "es" ? (
                    <>
                      Desarrollador <strong>Full-Stack</strong> especializado en
                      frameworks modernos de frontend, servidores{" "}
                      <strong>MCP</strong> y soluciones{" "}
                      <strong>IA-First</strong>.
                    </>
                  ) : (
                    <>
                      <strong>Full-Stack</strong> Developer specialized in
                      modern frontend frameworks, <strong>MCP</strong> servers
                      and <strong>AI-First</strong> solutions.
                    </>
                  )}
                </h2>
              </div>

              <div className="flex flex-wrap gap-4 text-gray-600 mb-8">
                <div className="flex items-center">
                  <MapPin size={18} className="mr-2 text-primary-600" />
                  <span>{t.header.location}</span>
                </div>
                <div className="flex items-center">
                  <Briefcase size={18} className="mr-2 text-primary-600" />
                  <span>
                    {t.header.workingAt}{" "}
                    <a
                      href="https://www.apis.es"
                      target="_blank"
                      rel="noopener noreferrer">
                      Apis
                    </a>
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="https://github.com/zkjon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105 hover:shadow-xl">
                  <Github size={20} className="mr-2" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/zkjon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 hover:scale-105 hover:shadow-xl">
                  <Linkedin size={20} className="mr-2" />
                  LinkedIn
                </a>
                <a
                  href="https://x.com/zkjondev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105 hover:shadow-xl">
                  <Twitter size={20} className="mr-2" />
                  Twitter
                </a>
                <a
                  href="mailto:focusyts@gmail.com"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-200 hover:scale-105 hover:shadow-xl">
                  <Mail size={20} className="mr-2" />
                  {t.header.contact}
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-200 font-medium hover:scale-105 hover:shadow-xl">
                  {t.header.viewProjects}
                </a>
                <a
                  href="#technologies"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-all duration-200 font-medium hover:scale-105">
                  {t.header.technologies}
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-primary-400 to-blue-500 rounded-full opacity-20"></div>
                <div className="absolute top-10 left-10 w-60 h-60 bg-gradient-to-br from-blue-400 to-primary-500 rounded-full opacity-30"></div>
                <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-primary-500 to-blue-400 rounded-full opacity-40"></div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header
      ref={headerRef}
      className="min-h-screen bg-gradient-to-br from-primary-50 to-blue-50 flex items-center relative">
      {/* Language Selector */}
      <div className="absolute top-6 right-6 z-10">
        <LanguageSelector />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido principal */}
          <div>
            <div className="mb-6">
              <h1
                ref={titleRef}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Jon Imanol{" "}
                <span className="gradient-text bg-gradient-to-r from-primary-600 via-blue-600 to-primary-600 bg-[length:200%_100%]">
                  Ruiz Hermoso
                </span>
              </h1>
              <h2
                ref={subtitleRef}
                className="text-xl md:text-2xl text-gray-600 mb-6">
                {locale === "es" ? (
                  <>
                    Desarrollador <strong>Full-Stack</strong> especializado en
                    frameworks modernos de frontend, servidores{" "}
                    <strong>MCP</strong> y soluciones <strong>IA-First</strong>.
                  </>
                ) : (
                  <>
                    <strong>Full-Stack</strong> Developer specialized in modern
                    frontend frameworks, <strong>MCP</strong> servers and{" "}
                    <strong>AI-First</strong> solutions.
                  </>
                )}
              </h2>
            </div>

            {/* Información adicional */}
            <div
              ref={infoRef}
              className="flex flex-wrap gap-4 text-gray-600 mb-8">
              <div className="flex items-center">
                <MapPin size={18} className="mr-2 text-primary-600" />
                <span>{t.header.location}</span>
              </div>
              <div className="flex items-center">
                <Briefcase size={18} className="mr-2 text-primary-600" />
                <span>
                  {t.header.workingAt}{" "}
                  <a
                    href="https://www.apis.es"
                    target="_blank"
                    rel="noopener noreferrer">
                    Apis
                  </a>
                </span>
              </div>
            </div>

            {/* Enlaces sociales */}
            <div ref={socialRef} className="flex flex-wrap gap-4 mb-8">
              <a
                href="https://github.com/zkjon"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105 hover:shadow-xl">
                <Github size={20} className="mr-2" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/zkjon/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 hover:scale-105 hover:shadow-xl">
                <Linkedin size={20} className="mr-2" />
                LinkedIn
              </a>
              <a
                href="https://x.com/zkjondev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105 hover:shadow-xl">
                <Twitter size={20} className="mr-2" />
                Twitter
              </a>
              <a
                href="mailto:focusyts@gmail.com"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-200 hover:scale-105 hover:shadow-xl">
                <Mail size={20} className="mr-2" />
                {t.header.contact}
              </a>
            </div>

            {/* CTA adicional */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-200 font-medium hover:scale-105 hover:shadow-xl">
                {t.header.viewProjects}
              </a>
              <a
                href="#technologies"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-all duration-200 font-medium hover:scale-105">
                {t.header.technologies}
              </a>
            </div>
          </div>

          {/* Lado derecho - Visual */}
          <div className="hidden lg:block">
            <div ref={visualRef} className="relative">
              <div ref={pendulumRef} className="pendulum no-gsap-animation">
                <div className="pendulum_box">
                  <div ref={firstBallRef} className="ball first"></div>
                  <div className="ball"></div>
                  <div className="ball"></div>
                  <div className="ball"></div>
                  <div ref={lastBallRef} className="ball last"></div>
                </div>
              </div>
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
  );
}
