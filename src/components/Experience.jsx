import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Desenvolvimento Frontend',
    period: '2025 - Atual',
    description:
      'Construção de landing pages modernas, responsivas e interfaces profissionais utilizando React, Tailwind CSS e Framer Motion.',
  },

  {
    title: 'Projetos Full Stack',
    period: '2025 - Atual',
    description:
      'Desenvolvimento de APIs REST e sistemas backend utilizando Java, Spring Boot, MySQL e integração frontend/backend.',
  },

  {
    title: 'Construção de Portfólio Profissional',
    period: 'Atual',
    description:
      'Criação de projetos reais com deploy online, GitHub organizado, responsividade premium e foco em experiência do usuário.',
  },
]

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#020617] px-6 py-28"
    >
      <div className="absolute right-[-200px] top-20 h-[400px] w-[400px] rounded-full bg-sky-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <span className="rounded-full border border-sky-500/20 bg-sky-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-sky-400">
            Jornada
          </span>

          <h2 className="mt-8 text-4xl font-black leading-tight text-white md:text-6xl">
            Minha evolução como desenvolvedor.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            Experiências, estudos e projetos que vêm construindo minha trajetória
            na área de desenvolvimento web e software.
          </p>
        </div>

        <div className="relative mt-20 border-l border-sky-500/20 pl-8 md:pl-12">
          {experiences.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative mb-14"
            >
              <div className="absolute -left-[43px] top-2 h-5 w-5 rounded-full border-4 border-slate-950 bg-sky-400 shadow-lg shadow-sky-500/30 md:-left-[51px]" />

              <div className="rounded-[2rem] border border-sky-500/20 bg-white/[0.04] p-8 backdrop-blur-xl">
                <span className="text-sm font-semibold uppercase tracking-[3px] text-sky-400">
                  {item.period}
                </span>

                <h3 className="mt-4 text-2xl font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-5 leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience