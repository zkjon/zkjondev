'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import {
	SiNextdotjs,
	SiReact,
	SiTypescript,
	SiTailwindcss,
	SiVuedotjs,
	SiNuxtdotjs,
	SiNodedotjs,
	SiMdx,
	SiWordpress,
	SiEslint,
	SiVite,
	SiAstro,
	SiDeno,
	SiShelly,
	SiHibernate,
	SiSass,
	SiBun,
	SiPnpm,
	SiNpm,
	SiPrettier,
	SiCss3,
	SiBootstrap,
	SiPostgresql,
	SiMysql,
	SiMongodb,
	SiGit,
	SiExpress,
	SiFigma,
	SiExcalidraw,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { getTranslations } from '../lib/translations';

interface TechSliderProps {
	locale?: string;
}

const technologies = [
	{
		name: 'Next.js',
		icon: SiNextdotjs,
		color: '#000000',
		category: 'Frontend',
	},
	{ name: 'React', icon: SiReact, color: '#61DAFB', category: 'Frontend' },
	{ name: 'Astro', icon: SiAstro, color: '#FF5D01', category: 'Frontend' },
	{ name: 'Vue.js', icon: SiVuedotjs, color: '#4FC08D', category: 'Frontend' },
	{ name: 'Nuxt.js', icon: SiNuxtdotjs, color: '#00DC82', category: 'Frontend' },
	{ name: 'Express', icon: SiExpress, color: '#000000', category: 'Backend' },
	{
		name: 'TypeScript',
		icon: SiTypescript,
		color: '#3178C6',
		category: 'Language',
	},
	{ name: 'Java', icon: FaJava, color: '#ED8B00', category: 'Language' },
	{
		name: 'Tailwind CSS',
		icon: SiTailwindcss,
		color: '#06B6D4',
		category: 'Styling',
	},
	{ name: 'SASS', icon: SiSass, color: '#CC6699', category: 'Styling' },
	{
		name: 'Bootstrap',
		icon: SiBootstrap,
		color: '#7952B3',
		category: 'Styling',
	},
	{ name: 'CSS3', icon: SiCss3, color: '#1572B6', category: 'Styling' },
	{ name: 'Bun', icon: SiBun, color: '#000000', category: 'Runtime' },
	{ name: 'Deno', icon: SiDeno, color: '#000000', category: 'Runtime' },
	{ name: 'Node.js', icon: SiNodedotjs, color: '#339933', category: 'Runtime' },
	{ name: 'pnpm', icon: SiPnpm, color: '#F69220', category: 'Package Manager' },
	{ name: 'npm', icon: SiNpm, color: '#CB3837', category: 'Package Manager' },
	{ name: 'Vite', icon: SiVite, color: '#646CFF', category: 'Build Tool' },
	{ name: 'MDX', icon: SiMdx, color: '#1B1F24', category: 'Content' },
	{ name: 'WordPress', icon: SiWordpress, color: '#21759B', category: 'CMS' },
	{
		name: 'Hibernate',
		icon: SiHibernate,
		color: '#59666C',
		category: 'Database',
	},
	{
		name: 'PostgreSQL',
		icon: SiPostgresql,
		color: '#336791',
		category: 'Database',
	},
	{ name: 'MySQL', icon: SiMysql, color: '#4479A1', category: 'Database' },
	{ name: 'MongoDB', icon: SiMongodb, color: '#47A248', category: 'Database' },
	{ name: 'Git', icon: SiGit, color: '#F05032', category: 'Version Control' },
	{ name: 'Shell Script', icon: SiShelly, color: '#89E051', category: 'Tools' },
	{ name: 'ESLint', icon: SiEslint, color: '#4B32C3', category: 'Tools' },
	{ name: 'Prettier', icon: SiPrettier, color: '#F7B93A', category: 'Tools' },
	{ name: 'Figma', icon: SiFigma, color: '#F24E1E', category: 'Design' },
	{
		name: 'Excalidraw',
		icon: SiExcalidraw,
		color: '#F24E1E',
		category: 'Design',
	},
];

export default function TechSlider({ locale = 'es' }: TechSliderProps) {
	const t = getTranslations(locale);
	const [mounted, setMounted] = useState(false);
	const sliderRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		if (!mounted || !sliderRef.current) return;

		const slider = sliderRef.current;

		// Animación infinita más simple y efectiva
		const animation = gsap.to(slider, {
			x: '-50%', // Mover la mitad del contenido (que es una repetición completa)
			duration: 30, // Duración más larga para movimiento más suave
			ease: 'none',
			repeat: -1,
		});

		return () => {
			animation.kill();
		};
	}, [mounted]);

	return (
		<div
			id="technologies"
			className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
						<span className="gradient-text">
							{t.technologies.title.split(' ')[0]}
						</span>{' '}
						{t.technologies.title.split(' ').slice(1).join(' ')}
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						{t.technologies.subtitle}
					</p>
				</div>

				{/* Slider container */}
				<div
					ref={containerRef}
					className="relative h-48 overflow-hidden"
					style={{
						maskImage:
							'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
						WebkitMaskImage:
							'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
					}}
				>
					<div
						ref={sliderRef}
						className="flex items-center h-full whitespace-nowrap"
						style={{ width: 'max-content' }}
					>
						{/* Primera serie de tecnologías */}
						{technologies.map((tech, index) => {
							const IconComponent = tech.icon;
							return (
								<div
									key={`first-${tech.name}-${index}`}
									className="tech-card-slider inline-flex flex-col items-center justify-center cursor-pointer mx-4"
									style={{
										width: '160px',
										height: '140px',
									}}
								>
									<div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 w-full h-full flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-xl">
										<IconComponent
											size={48}
											style={{ color: tech.color }}
											className="tech-icon mb-3 transition-transform duration-300"
										/>
										<span className="tech-text text-sm font-semibold text-gray-700 text-center leading-tight">
											{tech.name}
										</span>
										<span className="text-xs text-gray-500 mt-1 font-medium">
											{
												t.technologies.categories[
													tech.category as keyof typeof t.technologies.categories
												]
											}
										</span>
									</div>
								</div>
							);
						})}
						{/* Segunda serie de tecnologías (duplicada para efecto infinito) */}
						{technologies.map((tech, index) => {
							const IconComponent = tech.icon;
							return (
								<div
									key={`second-${tech.name}-${index}`}
									className="tech-card-slider inline-flex flex-col items-center justify-center cursor-pointer mx-4"
									style={{
										width: '160px',
										height: '140px',
									}}
								>
									<div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 w-full h-full flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-xl">
										<IconComponent
											size={48}
											style={{ color: tech.color }}
											className="tech-icon mb-3 transition-transform duration-300"
										/>
										<span className="tech-text text-sm font-semibold text-gray-700 text-center leading-tight">
											{tech.name}
										</span>
										<span className="text-xs text-gray-500 mt-1 font-medium">
											{
												t.technologies.categories[
													tech.category as keyof typeof t.technologies.categories
												]
											}
										</span>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				{/* Categories indicator */}
				<div className="flex flex-wrap justify-center gap-3 mt-12">
					{Array.from(new Set(technologies.map((tech) => tech.category))).map(
						(category) => (
							<span
								key={category}
								className="px-4 py-2 bg-primary-100/70 text-primary-700 rounded-full text-sm font-medium backdrop-blur-sm border border-primary-200/50 hover:bg-primary-200/70 transition-all duration-300"
							>
								{
									t.technologies.categories[
										category as keyof typeof t.technologies.categories
									]
								}
							</span>
						),
					)}
				</div>
			</div>
		</div>
	);
}
