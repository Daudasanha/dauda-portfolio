function Footer() {
  return (
    <footer className="border-t border-sky-500/20 bg-[#020617] px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center md:flex-row">
        <h2 className="text-2xl font-black text-sky-400">
          Dauda<span className="text-white">.dev</span>
        </h2>

        <p className="text-sm text-slate-500">
          © 2026 Dauda Sanhá. Desenvolvido com React, Tailwind CSS e Vite.
        </p>
      </div>
    </footer>
  )
}

export default Footer