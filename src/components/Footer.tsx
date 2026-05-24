export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-md bg-gradient-to-br from-sky-400 to-indigo-500 flex items-center justify-center text-xs font-bold text-white">
            A
          </span>
          <span className="text-sm font-semibold text-slate-400">AntaresCorp</span>
        </div>

        <p className="text-sm text-slate-600">
          © {new Date().getFullYear()} AntaresCorp Limited · United Kingdom
        </p>

        <nav className="flex items-center gap-5 text-sm text-slate-500">
          <a href="#about" className="hover:text-sky-400 transition-colors">About</a>
          <a href="#services" className="hover:text-sky-400 transition-colors">Services</a>
          <a href="#contact" className="hover:text-sky-400 transition-colors">Contact</a>
          <a href="mailto:hello@antarescorp.uk" className="hover:text-sky-400 transition-colors">Email</a>
        </nav>
      </div>
    </footer>
  );
}
