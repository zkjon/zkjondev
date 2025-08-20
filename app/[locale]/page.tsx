import Header from '../../components/Header'
import TechSlider from '../../components/TechSlider'
import Projects from '../../components/Projects'
import { getTranslations } from '../../lib/translations'

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function LocalePage({ params }: PageProps) {
  const { locale } = await params;
  const t = getTranslations(locale);

  return (
    <main className="min-h-screen">
      <Header locale={locale} />
      
      <section id="technologies">
        <TechSlider locale={locale} />
      </section>
      
      <section id="projects">
        <Projects locale={locale} />
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">{t.footer.ready}</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              {t.footer.description}
            </p>
            <a
              href="mailto:focusyts@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium"
            >
              {t.footer.sendMessage}
            </a>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Jon Imanol Ruiz Hermoso. {t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
