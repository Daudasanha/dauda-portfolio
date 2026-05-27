import { motion } from 'framer-motion'

const skills = [
  {
    category: 'Frontend',
    description: 'Criação de interfaces modernas, responsivas e bem estruturadas.',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    description: 'Construção de APIs, lógica de servidor e integração com sistemas.',
    items: ['Java', 'Spring Boot', 'Python', 'APIs REST'],
  },
  {
    category: 'Banco de Dados',
    description: 'Organização, persistência e manipulação de dados.',
    items: ['MySQL'],
  },
  {
    category: 'Ferramentas',
    description: 'Ferramentas usadas para desenvolvimento, versionamento e deploy.',
    items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Vercel'],
  },
]

function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-[#020617] px-6 py-28">
      <div className="absolute right-[-180px] top-32 h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-sky-500/20 bg-sky-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-sky-400">
            Skills
          </span>

          <h2 className="mt-8 text-4xl font-black leading-tight text-white md:text-6xl">
            Tecnologias que uso para criar soluções digitais.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            Stack e ferramentas que utilizo para desenvolver projetos modernos,
            organizados, responsivos e prontos para publicação.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-sky-500/20 bg-white/[0.04] p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:border-sky-400"
            >
              <h3 className="text-3xl font-black text-sky-400">
                {skill.category}
              </h3>

              <p className="mt-4 leading-relaxed text-slate-400">
                {skill.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-sky-500/20 bg-slate-950/50 px-5 py-3 text-sm font-semibold text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills