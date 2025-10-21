export default function About() {
  return (
    <section id="about" className="container py-16">
      <h2 className="title mb-6 text-center">Sobre mim</h2>
      <p className="subtitle max-w-3xl mx-auto text-center">
        Tenho experiência com React, Vite, Tailwind/WindiCSS e design UI/UX.  
        Busco sempre unir estética e performance, criando interfaces leves, responsivas e únicas.
      </p>
      <div className="flex justify-center gap-4 mt-6">
        <a href="https://github.com/gustavovsa" target="_blank" className="btn">GitHub</a>
        <a href="https://linkedin.com/in/gustavovsa" target="_blank" className="btn-purple">LinkedIn</a>
        
      </div>
    </section>
  )
}
