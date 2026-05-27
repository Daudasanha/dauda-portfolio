import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { name: 'Sobre', href: '#about' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contato', href: '#contact' },
  ]

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-sky-500/10 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
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
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 rounded-xl border border-sky-500/20 bg-white/[0.04] p-3 text-xl text-sky-400 md:hidden"
          aria-label="Abrir menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 top-[76px] z-40 bg-slate-950/95 px-6 py-8 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl border border-sky-500/20 bg-white/[0.04] px-6 py-5 text-lg font-bold text-slate-200 transition hover:border-sky-400 hover:text-sky-400"
              >
                {link.name}
              </a>
            ))}

            <a
              href="https://wa.me/5548996507181?text=Olá Dauda! Vi seu portfólio e gostaria de conversar sobre um projeto."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-4 rounded-full bg-sky-400 px-6 py-4 text-center font-black text-slate-950"
            >
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar