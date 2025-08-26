export const translations = {
	es: {
		header: {
			subtitle:
				'Desarrollador <strong>Full-Stack</strong> especializado en frameworks modernos de frontend, servidores <strong>MCP</strong> y soluciones <strong>IA-First</strong>.',
			location: 'España',
			workingAt: 'Trabajando en',
			contact: 'Contacto',
			viewProjects: 'Ver Proyectos',
			technologies: 'Tecnologías',
		},
		technologies: {
			title: 'Tecnologías y Herramientas',
			subtitle:
				'Especializado en tecnologías modernas para crear experiencias web excepcionales',
			categories: {
				Frontend: 'Frontend',
				Backend: 'Backend',
				Language: 'Lenguaje',
				Styling: 'Estilos',
				Runtime: 'Runtime',
				'Package Manager': 'Gestor de Paquetes',
				'Build Tool': 'Herramienta de Build',
				Content: 'Contenido',
				CMS: 'CMS',
				Database: 'Base de Datos',
				'Version Control': 'Control de Versiones',
				Tools: 'Herramientas',
				Design: 'Diseño',
			},
		},
		footer: {
			ready: '¿Listo para trabajar juntos?',
			description:
				'Siempre estoy interesado en nuevos proyectos y oportunidades emocionantes. Si tienes una idea o simplemente quieres conversar sobre tecnología, no dudes en contactarme.',
			sendMessage: 'Enviar mensaje',
			rights: 'Todos los derechos reservados.',
		},
		projects: {
			title: 'Proyectos Destacados',
			description:
				'Una selección de los proyectos más significativos en los que he trabajado, desde aplicaciones web hasta servidores MCP y soluciones de IA.',
			viewCode: 'Ver Código',
			liveDemo: 'Demo en Vivo',
			comingSoon: 'Próximamente',
			ctaTitle: '¿Interesado en ver más proyectos o colaborar?',
			ctaDescription:
				'Siempre estoy abierto a nuevas oportunidades y proyectos emocionantes. ¡Conectemos!',
			viewGithub: 'Ver en GitHub',
			contact: 'Contactar',
		},
	},
	en: {
		header: {
			subtitle:
				'<strong>Full-Stack</strong> Developer specialized in modern frontend frameworks, <strong>MCP</strong> servers and <strong>AI-First</strong> solutions.',
			location: 'Spain',
			workingAt: 'Working at',
			contact: 'Contact',
			viewProjects: 'View Projects',
			technologies: 'Technologies',
		},
		technologies: {
			title: 'Technologies & Tools',
			subtitle:
				'Specialized in modern technologies to create exceptional web experiences',
			categories: {
				Frontend: 'Frontend',
				Backend: 'Backend',
				Language: 'Language',
				Styling: 'Styling',
				Runtime: 'Runtime',
				'Package Manager': 'Package Manager',
				'Build Tool': 'Build Tool',
				Content: 'Content',
				CMS: 'CMS',
				Database: 'Database',
				'Version Control': 'Version Control',
				Tools: 'Tools',
				Design: 'Design',
			},
		},
		footer: {
			ready: 'Ready to work together?',
			description:
				"I'm always interested in new projects and exciting opportunities. If you have an idea or just want to chat about technology, don't hesitate to contact me.",
			sendMessage: 'Send Message',
			rights: 'All rights reserved.',
		},
		projects: {
			title: 'Featured Projects',
			description:
				"A selection of the most significant projects I've worked on, from web applications to MCP servers and AI solutions.",
			viewCode: 'View Code',
			liveDemo: 'Live Demo',
			comingSoon: 'Coming Soon',
			ctaTitle: 'Interested in seeing more projects or collaborating?',
			ctaDescription:
				"I'm always open to new opportunities and exciting projects. Let's connect!",
			viewGithub: 'View on GitHub',
			contact: 'Contact',
		},
	},
};

export type Locale = keyof typeof translations;

export function getTranslations(locale: string) {
	return translations[locale as Locale] || translations.es;
}
