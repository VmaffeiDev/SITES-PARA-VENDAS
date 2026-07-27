export type SiteTemplate = {
  slug: string;
  name: string;
  category: string;
  price: number;
  description: string;
  tags: string[];
  gradient: string;
  domain: string;
};

export const siteTemplates: SiteTemplate[] = [
  {
    slug: "landing-vendas",
    name: "Landing Page de Vendas",
    category: "Vendas",
    price: 897,
    description:
      "Página única focada em conversão, com oferta, prova social e checkout integrado.",
    tags: ["Alta conversão", "CTA otimizado", "Mobile-first"],
    gradient: "from-fuchsia-500 to-orange-400",
    domain: "sua-oferta.com.br",
  },
  {
    slug: "loja-virtual",
    name: "Loja Virtual",
    category: "E-commerce",
    price: 1997,
    description:
      "E-commerce completo com catálogo, carrinho, pagamento e painel de pedidos.",
    tags: ["Pagamentos online", "Catálogo ilimitado", "Painel admin"],
    gradient: "from-emerald-500 to-teal-400",
    domain: "camilaacessorios.com.br",
  },
  {
    slug: "site-institucional",
    name: "Site Institucional",
    category: "Empresas",
    price: 1197,
    description:
      "Presença profissional multi-página: home, sobre, serviços e contato.",
    tags: ["Multi-página", "SEO pronto", "Formulário de contato"],
    gradient: "from-blue-500 to-indigo-400",
    domain: "fsadvocacia.com.br",
  },
  {
    slug: "portfolio",
    name: "Portfólio Criativo",
    category: "Portfólio",
    price: 697,
    description:
      "Vitrine elegante para fotógrafos, designers e criadores mostrarem seu trabalho.",
    tags: ["Galeria visual", "Animações suaves", "Leve e rápido"],
    gradient: "from-violet-500 to-purple-400",
    domain: "anaduarte.art",
  },
  {
    slug: "restaurante",
    name: "Site para Restaurante",
    category: "Gastronomia",
    price: 997,
    description:
      "Cardápio digital, reservas e localização para bares e restaurantes.",
    tags: ["Cardápio digital", "Reservas online", "Google Maps"],
    gradient: "from-amber-500 to-red-400",
    domain: "saborecia.com.br",
  },
  {
    slug: "imobiliaria",
    name: "Site para Imobiliária",
    category: "Imóveis",
    price: 1497,
    description:
      "Catálogo de imóveis com filtros de busca e formulário de agendamento de visita.",
    tags: ["Busca com filtros", "Fichas de imóveis", "Leads qualificados"],
    gradient: "from-sky-500 to-cyan-400",
    domain: "horizonteimoveis.com.br",
  },
];

export const plans = [
  {
    name: "Essencial",
    price: 697,
    description: "Ideal para quem está começando e precisa entrar no ar rápido.",
    features: [
      "1 site pronto à sua escolha",
      "Domínio e hospedagem por 1 ano",
      "Design responsivo",
      "Entrega em até 5 dias úteis",
    ],
    highlighted: false,
  },
  {
    name: "Profissional",
    price: 1497,
    description: "O mais escolhido por quem quer personalização e suporte.",
    features: [
      "1 site pronto totalmente personalizado",
      "Domínio e hospedagem por 1 ano",
      "SEO básico incluso",
      "Suporte prioritário por 30 dias",
      "Entrega em até 3 dias úteis",
    ],
    highlighted: true,
  },
  {
    name: "Negócios",
    price: 2497,
    description: "Para quem precisa de uma solução completa, com loja e integrações.",
    features: [
      "Loja virtual ou site sob medida",
      "Domínio e hospedagem por 1 ano",
      "Integração com pagamentos",
      "SEO avançado + Google Analytics",
      "Suporte prioritário por 90 dias",
    ],
    highlighted: false,
  },
];

export const faqs = [
  {
    question: "Em quanto tempo meu site fica pronto?",
    answer:
      "A maioria dos sites prontos é personalizada e entregue em até 5 dias úteis. Projetos sob medida podem levar um pouco mais, combinado com você antes de começar.",
  },
  {
    question: "Posso personalizar cores, textos e imagens?",
    answer:
      "Sim. Todo site inclui personalização de identidade visual, textos, imagens e informações do seu negócio antes da entrega final.",
  },
  {
    question: "O domínio e a hospedagem estão inclusos?",
    answer:
      "Sim, todos os planos incluem domínio e hospedagem pelo primeiro ano. Depois disso, a renovação é opcional e cobrada à parte.",
  },
  {
    question: "E se eu precisar de alterações depois da entrega?",
    answer:
      "Oferecemos suporte incluso conforme o plano escolhido, e alterações adicionais podem ser contratadas à parte a qualquer momento.",
  },
  {
    question: "Meus dados e os do meu cliente ficam seguros?",
    answer:
      "Sim. Utilizamos certificado SSL, hospedagem confiável e boas práticas de segurança em todos os sites entregues.",
  },
];
