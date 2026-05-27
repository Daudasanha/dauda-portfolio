import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { projects } from '../data/projects'

function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-slate-950 px-6 py-28">
      <div className="absolute left-[-180px] top-40 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-sky-500/20 bg-sky-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-sky-400">
            Projetos
          </span>

          <h2 className="mt-8 text-4xl font-black leading-tight text-white md:text-6xl">
            Trabalhos que mostram minha evolução.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            Projetos desenvolvidos para praticar tecnologias modernas, criar
            soluções reais e construir uma presença profissional na área de
            desenvolvimento web.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-[2rem] border border-sky-500/20 bg-white/[0.04] backdrop-blur-xl transition hover:-translate-y-2 hover:border-sky-400"
            >
              <div className="overflow-hidden border-b border-sky-500/20">
                <img
                  src={project.image}
                  alt={`Preview do projeto ${project.title}`}
                  className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-105 md:h-[420px]"
                />
              </div>

              <div className="p-8">
                <span className="text-sm font-bold uppercase tracking-[4px] text-sky-400">
                  {project.category}
                </span>

                <h3 className="mt-5 text-3xl font-black text-white">
                  {project.title}
                </h3>

                <p className="mt-5 leading-relaxed text-slate-400">
                  {project.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-sky-500/20 bg-slate-950/50 px-4 py-2 text-sm text-sky-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-full bg-sky-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-sky-300"
                  >
                    <FaExternalLinkAlt />
                    Ver projeto
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-full border border-sky-400 px-6 py-3 font-bold text-sky-400 transition hover:bg-sky-400 hover:text-slate-950"
                  >
                    <FaGithub />
                    Código
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects