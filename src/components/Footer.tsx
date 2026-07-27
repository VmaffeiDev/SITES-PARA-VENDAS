export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-neutral-500 md:flex-row">
        <span>© {new Date().getFullYear()} SitesParaVendas. Todos os direitos reservados.</span>
        <div className="flex gap-6">
          <a href="#catalogo" className="hover:text-white">Catálogo</a>
          <a href="#planos" className="hover:text-white">Planos</a>
          <a href="#faq" className="hover:text-white">Perguntas</a>
        </div>
      </div>
    </footer>
  );
}
