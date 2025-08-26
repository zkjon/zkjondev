'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';
import { useState } from 'react';

export default function LanguageSelector() {
	const pathname = usePathname();
	const router = useRouter();
	const [isOpen, setIsOpen] = useState(false);

	const currentLocale = pathname.split('/')[1] || 'es';

	const languages = [
		{ code: 'es', name: 'Español', flag: '🇪🇸' },
		{ code: 'en', name: 'English', flag: '🇺🇸' },
	];

	const switchLanguage = (locale: string) => {
		const segments = pathname.split('/');
		segments[1] = locale;
		const newPath = segments.join('/');
		router.push(newPath);
		setIsOpen(false);
	};

	const currentLanguage =
		languages.find((lang) => lang.code === currentLocale) || languages[0];

	return (
		<div className="relative">
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg hover:bg-white transition-all duration-200 shadow-sm"
			>
				<Globe size={18} className="mr-2 text-gray-600" />
				<span className="mr-1">{currentLanguage.flag}</span>
				<span className="text-sm font-medium text-gray-700">
					{currentLanguage.code.toUpperCase()}
				</span>
			</button>

			{isOpen && (
				<div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 min-w-[140px] z-50">
					{languages.map((language) => (
						<button
							key={language.code}
							onClick={() => switchLanguage(language.code)}
							className={`w-full px-4 py-3 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors duration-200 ${
								language.code === currentLocale
									? 'bg-primary-50 text-primary-700'
									: 'text-gray-700'
							}`}
						>
							<span className="mr-2">{language.flag}</span>
							<span className="text-sm font-medium">{language.name}</span>
						</button>
					))}
				</div>
			)}

			{isOpen && (
				<div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
			)}
		</div>
	);
}
