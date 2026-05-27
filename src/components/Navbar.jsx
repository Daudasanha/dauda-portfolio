import { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { name: 'Sobre', href: '#about' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contato', href: '#contact' },
  ]

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [menuOpen])

  return (
    <>
      <header className="fixed left-0 top-0 z-[999] w-full border-b border-sky-500/10 bg-[#020617]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-6 md:py-5">
          <a href="#" className="text-2xl font-black text-sky-400">
            Dauda<span className="text-white">.dev</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition hover:text-sky-400"
              >
                {link.name}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden rounded-full bg-sky-400 px-6 py-3 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-sky-300 md:inline-block"
          >
            Fale comigo
          </a>

          <button
            onClick={() => setMenuOpen(true)}
            className="rounded-xl border border-sky-500/20 bg-white/[0.04] p-3 text-xl text-sky-400 md:hidden"
            aria-label="Abrir menu"
          >
            <FaBars />
          </button>
        </nav>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[2000] bg-[#020617] px-5 py-6 md:hidden">
          <div className="flex items-center justify-between">
            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-black text-sky-400"
            >
              Dauda<span className="text-white">.dev</span>
            </a>

            <button
              onClick={() => setMenuOpen(false)}
              className="rounded-2xl border border-sky-500/20 bg-white/[0.04] p-4 text-2xl text-sky-400"
              aria-label="Fechar menu"
            >
              <FaTimes />
            </button>
          </div>

          <div className="mt-16 flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-3xl border border-sky-500/20 bg-slate-900 px-6 py-6 text-xl font-black text-slate-100"
              >
                {link.name}
              </a>
            ))}

            <a
              href="https://wa.me/5548996507181?text=Olá Dauda! Vi seu portfólio e gostaria de conversar sobre um projeto."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-4 rounded-full bg-sky-400 px-6 py-5 text-center text-lg font-black text-slate-950"
            >
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar