import { motion } from 'framer-motion'
import { FaWhatsapp, FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-slate-950 px-6 py-28">
      <div className="absolute left-[-180px] bottom-20 h-[350px] w-[350px] rounded-full bg-sky-500/10 blur-[110px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="rounded-full border border-sky-500/20 bg-sky-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-sky-400">
            Contato
          </span>

          <h2 className="mt-8 text-4xl font-black leading-tight text-white md:text-6xl">
            Vamos transformar uma ideia em projeto real?
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            Estou aberto para oportunidades, projetos freelance, networking,
            colaborações e novos desafios na área de desenvolvimento web.
          </p>

          <div className="mt-8 flex items-center gap-3 text-slate-400">
            <FaMapMarkerAlt className="text-sky-400" />
            <span>Palhoça - SC | Brasil</span>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/5548996197255?text=Olá Dauda! Vi seu portfólio e gostaria de conversar sobre um projeto."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-full bg-sky-400 px-8 py-4 font-bold text-slate-950 transition hover:bg-sky-300"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

            <a
              href="mailto:dauda.sanha@aluno.fmpsc.edu.br"
              className="flex items-center justify-center gap-3 rounded-full border border-sky-400 px-8 py-4 font-bold text-sky-400 transition hover:bg-sky-400 hover:text-slate-950"
            >
              <FaEnvelope />
              Email
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-[2rem] border border-sky-500/20 bg-white/[0.04] p-8 backdrop-blur-xl"
        >
          <h3 className="text-3xl font-black text-sky-400">
            Links profissionais
          </h3>

          <p className="mt-4 text-slate-400">
            Acesse meus principais canais profissionais e projetos publicados.
          </p>

          <div className="mt-8 grid gap-4">
            <a
              href="https://github.com/Daudasanha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-2xl border border-sky-500/20 bg-slate-950/40 p-5 text-slate-300 transition hover:border-sky-400 hover:text-sky-400"
            >
              <span className="flex items-center gap-4">
                <FaGithub className="text-2xl" />
                GitHub
              </span>
              <span>→</span>
            </a>

            <a
              href="https://www.linkedin.com/in/dauda-sanha-228330315"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-2xl border border-sky-500/20 bg-slate-950/40 p-5 text-slate-300 transition hover:border-sky-400 hover:text-sky-400"
            >
              <span className="flex items-center gap-4">
                <FaLinkedin className="text-2xl" />
                LinkedIn
              </span>
              <span>→</span>
            </a>

            <a
              href="mailto:dauda.sanha@aluno.fmpsc.edu.br"
              className="flex items-center justify-between rounded-2xl border border-sky-500/20 bg-slate-950/40 p-5 text-slate-300 transition hover:border-sky-400 hover:text-sky-400"
            >
              <span className="flex items-center gap-4">
                <FaEnvelope className="text-2xl" />
                Email
              </span>
              <span>→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact