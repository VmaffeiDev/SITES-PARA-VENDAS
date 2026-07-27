const areas = [
  { title: "Direito Trabalhista", desc: "Defesa de direitos e acordos trabalhistas." },
  { title: "Direito de Família", desc: "Divórcios, pensão e guarda com cuidado humano." },
  { title: "Direito Empresarial", desc: "Contratos e consultoria jurídica para empresas." },
  { title: "Direito Imobiliário", desc: "Contratos de compra, venda e locação de imóveis." },
];

const stats = [
  { value: "15+", label: "anos de atuação" },
  { value: "800+", label: "casos atendidos" },
  { value: "98%", label: "clientes satisfeitos" },
];

const team = [
  { name: "Dra. Fernanda Souza", role: "Sócia fundadora · Trabalhista" },
  { name: "Dr. Rafael Lima", role: "Sócio · Empresarial" },
  { name: "Dra. Beatriz Nunes", role: "Advogada · Família" },
];

export default function InstitucionalPreview() {
  return (
    <div className="font-sans text-neutral-900">
      <header className="flex flex-wrap items-center justify-between gap-y-2 border-b border-neutral-100 px-8 py-5">
        <span className="text-lg font-bold text-blue-900">FS Advocacia</span>
        <nav className="flex gap-4 text-xs text-neutral-500">
          <span>Áreas de atuação</span>
          <span>Equipe</span>
          <span>Contato</span>
        </nav>
      </header>

      <section className="bg-gradient-to-br from-blue-900 to-indigo-700 px-8 py-16 text-white">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-200">
          Advocacia especializada
        </p>
        <h1 className="mt-3 max-w-lg text-3xl font-extrabold leading-tight">
          Soluções jurídicas claras para pessoas e empresas
        </h1>
        <span className="mt-6 inline-block rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-900">
          Agendar consulta
        </span>
        <div className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-white/20 pt-6">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-extrabold">{stat.value}</p>
              <p className="text-xs text-blue-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-6 px-8 py-14">
        {areas.map((area) => (
          <div key={area.title} className="rounded-xl border border-neutral-100 p-6 shadow-sm">
            <p className="font-semibold text-blue-900">{area.title}</p>
            <p className="mt-2 text-sm text-neutral-500">{area.desc}</p>
          </div>
        ))}
      </section>

      <section className="bg-neutral-50 px-8 py-14">
        <h2 className="text-center text-xl font-bold text-blue-900">Nossa equipe</h2>
        <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-6">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-blue-100" />
              <p className="mt-3 font-semibold text-blue-900">{member.name}</p>
              <p className="text-xs text-neutral-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="px-8 py-8 text-center text-xs text-neutral-400">
        © FS Advocacia — conteúdo de demonstração
      </footer>
    </div>
  );
}
