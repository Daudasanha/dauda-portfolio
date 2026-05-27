import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaWhatsapp, FaReact, FaJava } from 'react-icons/fa'
import { SiTailwindcss, SiSpringboot } from 'react-icons/si'

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020617] px-5 pt-28 md:px-6 md:pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.16),_transparent_35%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 py-14 md:py-20 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-sky-500/20 bg-white/[0.04] px-4 py-2 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            <span className="text-xs font-semibold text-slate-300 md:text-sm">
              Disponível para projetos freelance
            </span>
          </div>

          <h1 className="mt-7 text-4xl font-black leading-tight text-white sm:text-5xl md:text-7xl">
            Criando interfaces modernas para negócios digitais.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
            Eu sou <span className="font-semibold text-sky-400">Dauda Sanhá</span>,
            estudante de Análise e Desenvolvimento de Sistemas, focado em
            desenvolvimento web, landing pages profissionais e soluções digitais
            com React, Tailwind CSS e tecnologias modernas.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="rounded-full bg-sky-400 px-8 py-4 text-center font-bold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:-translate-y-1 hover:bg-sky-300"
            >
              Ver meus projetos
            </a>

            <a
              href="#contact"
              className="rounded-full border border-sky-400 px-8 py-4 text-center font-bold text-sky-400 transition hover:-translate-y-1 hover:bg-sky-400 hover:text-slate-950"
            >
              Fale comigo
            </a>
          </div>

          <div className="mt-8 flex gap-5 text-2xl text-slate-400">
            <a href="https://github.com/Daudasanha" target="_blank" rel="noopener noreferrer" className="transition hover:-translate-y-1 hover:text-sky-400">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/dauda-sanha-228330315" target="_blank" rel="noopener noreferrer" className="transition hover:-translate-y-1 hover:text-sky-400">
              <FaLinkedin />
            </a>

            <a href="https://wa.me/5548996197255" target="_blank" rel="noopener noreferrer" className="transition hover:-translate-y-1 hover:text-sky-400">
              <FaWhatsapp />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2.5rem] bg-sky-500/20 blur-3xl" />

          <div className="relative rounded-[2rem] border border-sky-500/20 bg-white/[0.05] p-5 shadow-2xl backdrop-blur-xl md:p-6">
            <div className="rounded-[1.5rem] border border-sky-500/10 bg-slate-950 p-5 md:p-7">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <span className="text-xs text-slate-500 md:text-sm">
                  portfolio.jsx
                </span>
              </div>

              <pre className="overflow-x-auto text-xs leading-7 text-slate-300 sm:text-sm md:text-base md:leading-8">
                <code>
{`const dauda = {
  role: 'Frontend Developer',
  focus: 'Full Stack',
  stack: ['React', 'Tailwind', 'Java'],
  location: 'Palhoça - SC',
  mission: 'Criar soluções reais'
}`}
                </code>
              </pre>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-500/10 bg-slate-950/70 p-4 md:p-5">
                <p className="text-2xl font-black text-sky-400 md:text-3xl">01+</p>
                <p className="mt-1 text-xs text-slate-400 md:text-sm">Projeto online</p>
              </div>

              <div className="rounded-2xl border border-sky-500/10 bg-slate-950/70 p-4 md:p-5">
                <p className="text-2xl font-black text-sky-400 md:text-3xl">Full</p>
                <p className="mt-1 text-xs text-slate-400 md:text-sm">Stack em evolução</p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-sky-500/20 bg-slate-950/90 p-4 text-sky-400 shadow-xl backdrop-blur-xl md:flex">
            <FaReact className="text-3xl" />
          </div>

          <div className="absolute -right-6 top-12 hidden rounded-2xl border border-sky-500/20 bg-slate-950/90 p-4 text-sky-400 shadow-xl backdrop-blur-xl md:flex">
            <SiTailwindcss className="text-3xl" />
          </div>

          <div className="absolute -right-2 bottom-20 hidden rounded-2xl border border-sky-500/20 bg-slate-950/90 p-4 text-green-400 shadow-xl backdrop-blur-xl md:flex">
            <SiSpringboot className="text-3xl" />
          </div>

          <div className="absolute -left-3 top-24 hidden rounded-2xl border border-sky-500/20 bg-slate-950/90 p-4 text-orange-400 shadow-xl backdrop-blur-xl md:flex">
            <FaJava className="text-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero