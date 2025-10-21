export default function Contact() {
  return (
    <section id="contact" className="container py-16">
      <h2 className="title text-center mb-6">Contato</h2>
      <form
  action="https://formspree.io/f/xblzekjw"
  method="POST"
  className="max-w-md mx-auto flex flex-col gap-4"
>
  <input type="text" name="name" placeholder="Seu nome" required
    className="p-3 rounded-xl bg-bg/70 border border-white/10" />
  <input type="email" name="email" placeholder="Seu e-mail" required
    className="p-3 rounded-xl bg-bg/70 border border-white/10" />
  <textarea name="message" placeholder="Mensagem" required
    className="p-3 rounded-xl bg-bg/70 border border-white/10"></textarea>
  <button type="submit" className="btn-purple mt-2">Enviar</button>
</form>

    </section>
  )
}
