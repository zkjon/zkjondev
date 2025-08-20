import Header from '../components/Header'
import TechSlider from '../components/TechSlider'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section id="technologies">
        <TechSlider />
      </section>
      
      <section id="projects">
        <Projects />
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">¿Listo para trabajar juntos?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Siempre estoy interesado en nuevos proyectos y oportunidades emocionantes. 
              Si tienes una idea o simplemente quieres conversar sobre tecnología, no dudes en contactarme.
            </p>
            <a
              href="mailto:fovusyts@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium"
            >
              Enviar mensaje
            </a>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Jon Imanol Ruiz Hermoso. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
