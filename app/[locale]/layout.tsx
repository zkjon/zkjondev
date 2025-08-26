import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"

import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

const metadata = {
	es: {
		title: 'Portfolio de Jon Imanol Ruiz Hermoso',
		description:
			'Portfolio profesional de Jon Imanol Ruiz Hermoso, Desarrollador Full-Stack especializado en frameworks de frontend modernos, creación de MCP Servers e IA-First.',
		keywords:
			'zkjon, Jon Imanol Ruiz Hermoso, Desarrollador Full-Stack, React, Next.js, TypeScript, JavaScript, Portfolio',
	},
	en: {
		title: 'Jon Imanol Ruiz Hermoso Portfolio',
		description:
			'Professional portfolio of Jon Imanol Ruiz Hermoso, Full-Stack Developer specialized in modern frontend frameworks, MCP Servers creation and AI-First development.',
		keywords:
			'zkjon, Jon Imanol Ruiz Hermoso, Full-Stack Developer, React, Next.js, TypeScript, JavaScript, Portfolio',
	},
};

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const isSpanish = locale === 'es';
	const meta = isSpanish ? metadata.es : metadata.en;
	const lang = isSpanish ? 'es-ES' : 'en-US';
	const url = isSpanish ? 'https://zkjon.dev' : 'https://zkjon.dev/en';

	return {
		title: meta.title,
		description: meta.description,
		keywords: meta.keywords,
		metadataBase: new URL('https://zkjon.dev'),
		authors: [{ name: 'Jon Imanol Ruiz Hermoso' }],
		creator: 'Jon Imanol Ruiz Hermoso',
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
			},
		},
		alternates: {
			canonical: url,
			languages: {
				'es-ES': 'https://zkjon.dev',
				'en-US': 'https://zkjon.dev/en',
			},
		},
		category: 'technology',
		icons: {
			icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
			apple: [
				{ url: '/apple-icon.svg', sizes: '180x180', type: 'image/svg+xml' },
			],
		},
		openGraph: {
			type: 'website',
			locale: lang,
			url: url,
			title: meta.title,
			description: meta.description,
			siteName: meta.title,
		},
		twitter: {
			card: 'summary_large_image',
			title: meta.title,
			description: meta.description,
			creator: '@zkjondev',
		},
		other: {
			'application/ld+json': JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'Person',
				name: 'Jon Imanol Ruiz Hermoso',
				url: 'https://zkjon.dev',
				sameAs: [
					'https://twitter.com/zkjondev',
					'https://github.com/zkjon',
					'https://www.linkedin.com/in/zkjon',
				],
				jobTitle: isSpanish
					? 'Desarrollador Full-Stack'
					: 'Full-Stack Developer',
			}),
		},
	};
}

export async function generateViewport({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	return {
		themeColor: '#000000',
	};
}

export default async function LocaleLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	const lang = locale === 'es' ? 'es' : 'en';

	return (
		<html lang={lang}>
			<body className={inter.className}>
				{children}
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
