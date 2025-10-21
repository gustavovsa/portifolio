import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-bg text-text font-sans selection:bg-cyan/30 selection:text-white">
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
