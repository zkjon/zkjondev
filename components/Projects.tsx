'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Mail, ExternalLink } from 'lucide-react';
import { getTranslations } from '../lib/translations';

// Registrar el plugin ScrollTrigger
if (typeof window !== 'undefined') {
	gsap.registerPlugin(ScrollTrigger);
}

const projects = {
	es: [
		{
			title: 'Forker de Deno',
			description:
				'Contribución y fork del runtime de JavaScript/TypeScript de Deno con mejoras personalizadas.',
			technologies: ['Deno', 'TypeScript', 'Rust', 'JavaScript'],
			github: 'https://github.com/zkjon/deno',
			demo: null,
			featured: true,
		},
		{
			title: 'MCP Weather Server',
			description:
				'Servidor MCP que proporciona información meteorológica en tiempo real usando la API de Open-Meteo.',
			technologies: ['TypeScript', 'MCP SDK', 'Open-Meteo API', 'Bun'],
			github: 'https://github.com/zkjon/mcp-weather',
			demo: null,
			featured: true,
		},
		{
			title: 'MDX Reader',
			description:
				'Aplicación web para leer y procesar archivos MDX con soporte completo para componentes React.',
			technologies: ['Next.js', 'MDX', 'TypeScript', 'React'],
			github: 'https://github.com/zkjon/mdx-reader',
			demo: null,
			featured: true,
		},
		{
			title: 'zkjondev Portfolio',
			description:
				'Mi portafolio personal desarrollado con Next.js, featuring animaciones GSAP y diseño responsive.',
			technologies: [
				'Next.js',
				'TypeScript',
				'React',
				'TailwindCSS',
				'GSAP',
				'Framer Motion',
			],
			github: 'https://github.com/zkjon/zkjondev',
			demo: null,
			featured: true,
		},
	],
	en: [
		{
			title: 'Deno Fork',
			description:
				'Contribution and fork of the Deno JavaScript/TypeScript runtime with custom improvements.',
			technologies: ['Deno', 'TypeScript', 'Rust', 'JavaScript'],
			github: 'https://github.com/zkjon/deno',
			demo: null,
			featured: true,
		},
		{
			title: 'MCP Weather Server',
			description:
				'Servidor MCP que proporciona información meteorológica en tiempo real usando la API de Open-Meteo.',
			technologies: ['TypeScript', 'MCP SDK', 'Open-Meteo API', 'Bun'],
			github: 'https://github.com/zkjon/mcp-weather',
			demo: null,
			featured: true,
		},
		{
			title: 'MDX Reader',
			description:
				'Web application to read and process MDX files with full support for React components.',
			technologies: ['Next.js', 'MDX', 'TypeScript', 'React'],
			github: 'https://github.com/zkjon/mdx-reader',
			demo: null,
			featured: true,
		},
		{
			title: 'zkjondev Portfolio',
			description:
				'My personal portfolio developed with Next.js, featuring GSAP animations and responsive design.',
			technologies: [
				'Next.js',
				'TypeScript',
				'React',
				'TailwindCSS',
				'GSAP',
				'Framer Motion',
			],
			github: 'https://github.com/zkjon/zkjondev',
			demo: null,
			featured: true,
		},
	],
};

interface ProjectsProps {
	locale?: string;
}

export default function Projects({ locale = 'es' }: ProjectsProps) {
	const t = getTranslations(locale);
	const projectsData = projects[locale as keyof typeof projects] || projects.es;
	const [activeProject, setActiveProject] = useState(0);
	const sectionRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const subtitleRef = useRef<HTMLParagraphElement>(null);
	const projectsRef = useRef<HTMLDivElement>(null);
	const ctaRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// Animaciones con ScrollTrigger
		const ctx = gsap.context(() => {
			// Animación del título
			gsap.fromTo(
				titleRef.current,
				{
					y: 50,
					opacity: 0,
				},
				{
					y: 0,
					opacity: 1,
					duration: 0.8,
					scrollTrigger: {
						trigger: titleRef.current,
						start: 'top 80%',
						end: 'bottom 20%',
						toggleActions: 'play none none reverse',
					},
				},
			);

			// Animación del subtítulo
			gsap.fromTo(
				subtitleRef.current,
				{
					y: 30,
					opacity: 0,
				},
				{
					y: 0,
					opacity: 1,
					duration: 0.6,
					delay: 0.2,
					scrollTrigger: {
						trigger: subtitleRef.current,
						start: 'top 80%',
						end: 'bottom 20%',
						toggleActions: 'play none none reverse',
					},
				},
			);

			// Animación de las tarjetas de proyectos
			const projectCards = projectsRef.current?.children;
			if (projectCards) {
				gsap.fromTo(
					projectCards,
					{
						y: 80,
						opacity: 0,
						scale: 0.9,
					},
					{
						y: 0,
						opacity: 1,
						scale: 1,
						duration: 0.8,
						stagger: 0.2,
						ease: 'power2.out',
						scrollTrigger: {
							trigger: projectsRef.current,
							start: 'top 70%',
							end: 'bottom 30%',
							toggleActions: 'play none none reverse',
						},
					},
				);
			}

			// Animación del CTA
			gsap.fromTo(
				ctaRef.current,
				{
					y: 40,
					opacity: 0,
				},
				{
					y: 0,
					opacity: 1,
					duration: 0.8,
					scrollTrigger: {
						trigger: ctaRef.current,
						start: 'top 80%',
						end: 'bottom 20%',
						toggleActions: 'play none none reverse',
					},
				},
			);
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<div
			ref={sectionRef}
			className="py-20 bg-gradient-to-b from-gray-50 to-white"
		>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2
						ref={titleRef}
						className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
					>
						{t.projects.title.split(' ')[0]}{' '}
						<span className="gradient-text">
							{t.projects.title.split(' ')[1]}
						</span>
					</h2>
					<p
						ref={subtitleRef}
						className="text-xl text-gray-600 max-w-3xl mx-auto"
					>
						{t.projects.description}
					</p>
				</div>

				<div ref={projectsRef} className="grid md:grid-cols-2 gap-8">
					{projectsData.map((project, index) => (
						<div
							key={index}
							className={`group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
								project.featured ? 'ring-2 ring-primary-500' : ''
							}`}
							onMouseEnter={() => {
								setActiveProject(index);
								gsap.to(`.project-${index}`, {
									scale: 1.02,
									duration: 0.3,
									ease: 'power2.out',
								});
							}}
							onMouseLeave={() => {
								gsap.to(`.project-${index}`, {
									scale: 1,
									duration: 0.3,
									ease: 'power2.out',
								});
							}}
						>
							{project.featured && (
								<div className="bg-gradient-to-r from-primary-500 to-blue-500 text-white text-sm font-medium px-6 py-3">
									⭐{' '}
									{locale === 'es' ? 'Proyecto Destacado' : 'Featured Project'}
								</div>
							)}

							<div className={`project-${index} p-8`}>
								<h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
									{project.title}
								</h3>
								<p className="text-gray-600 mb-6 leading-relaxed text-lg">
									{project.description}
								</p>

								<div className="flex flex-wrap gap-3 mb-8">
									{project.technologies.map((tech) => (
										<span
											key={tech}
											className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-sm font-medium hover:from-primary-100 hover:to-primary-200 hover:text-primary-700 transition-all duration-300"
										>
											{tech}
										</span>
									))}
								</div>

								<div className="flex space-x-4">
									{project.github && (
										<a
											href={project.github}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg"
										>
											<Github size={20} className="mr-2" />
											{t.projects.viewCode}
										</a>
									)}
									{project.demo && (
										<a
											href={project.demo}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
										>
											<ExternalLink size={20} className="mr-2" />
											{t.projects.liveDemo}
										</a>
									)}
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Call to Action */}
				<div ref={ctaRef} className="text-center mt-16">
					<div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 md:p-12">
						<h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
							{t.projects.ctaTitle}
						</h3>
						<p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
							{t.projects.ctaDescription}
						</p>
						<div className="flex flex-col sm:flex-row justify-center gap-4">
							<a
								href="https://github.com/zkjon"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl font-medium"
							>
								<Github size={24} className="mr-3" />
								{t.projects.viewGithub}
							</a>
							<a
								href="mailto:focusyts@gmail.com"
								className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all duration-300 hover:scale-105 hover:shadow-xl font-medium"
							>
								<Mail size={24} className="mr-3" />
								{t.projects.contact}
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
