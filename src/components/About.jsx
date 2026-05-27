import { motion } from 'framer-motion'

function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#020617] px-6 py-28">
      <div className="absolute right-[-180px] top-20 h-[350px] w-[350px] rounded-full bg-sky-500/10 blur-[110px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="rounded-full border border-sky-500/20 bg-sky-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-sky-400">
            Sobre mim
          </span>

          <h2 className="mt-8 text-4xl font-black leading-tight text-white md:text-6xl">
            Transformando estudo em projetos reais.
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-slate-300">
            Meu nome é Dauda Sanhá, sou estudante de Análise e Desenvolvimento
            de Sistemas e estou construindo minha trajetória como desenvolvedor
            web, com foco em interfaces modernas, responsivas e experiências
            digitais profissionais.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            Tenho interesse em desenvolvimento Full Stack, APIs, backend,
            automação e criação de soluções digitais para pequenos negócios.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid gap-6"
        >
          <div className="rounded-[2rem] border border-sky-500/20 bg-white/[0.04] p-8 backdrop-blur-xl transition hover:-translate-y-1 hover:border-sky-400">
            <h3 className="text-2xl font-bold text-sky-400">
              🚀 Objetivo profissional
            </h3>

            <p className="mt-4 leading-relaxed text-slate-300">
              Evoluir como desenvolvedor Full Stack, criando soluções modernas,
              funcionais e escaláveis para pessoas, empresas e negócios locais.
            </p>
          </div>

          <div className="rounded-[2rem] border border-sky-500/20 bg-white/[0.04] p-8 backdrop-blur-xl transition hover:-translate-y-1 hover:border-sky-400">
            <h3 className="text-2xl font-bold text-sky-400">
              ⚽ Disciplina e evolução
            </h3>

            <p className="mt-4 leading-relaxed text-slate-300">
              O futebol e a rotina de treinos fazem parte da minha vida e me
              ajudam a desenvolver disciplina, foco, trabalho em equipe e
              mentalidade de evolução constante.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About