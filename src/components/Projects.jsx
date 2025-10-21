import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="container py-16">
      <h2 className="title mb-8 text-center">Projetos</h2>
      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map((proj) => (
          <div key={proj.id}
            className="bg-bg/50 backdrop-blur-md border border-white/10 rounded-2xl p-4 hover:scale-[1.02] transition-all shadow-lg">
            <img src={proj.image} alt={proj.title} className="rounded-xl mb-3" />
            <h3 className="text-xl text-purple font-semibold text-purple">{proj.title}</h3>
            <p className="subtitle mb-3">{proj.description}</p>
            <a href={proj.link} target="_blank" className="btn-purple">
              Ver mais
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
