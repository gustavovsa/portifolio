export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-bg text-text">
      <h1 className="text-5xl md:text-6xl font-bold mb-4 text-purple animate-pulse">
        Gustavo Vinicius
      </h1>
      <p className="subtitle z-1 max-w-xl">
        Desenvolvedor front-end criativo que transforma ideias em interfaces visuais e interativas.
      </p>
      <a href="#projects" className="btn-purple mt-8 animate-bounce">
        Ver Projetos ↓
      </a>
    </section>
  )
}
