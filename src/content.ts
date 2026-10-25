import type { Lang } from './i18n'

// Todos os textos da homepage, em português e em inglês. O inglês foi
// escrito para soar natural, não traduzido palavra a palavra.

export type TechCategory = 'dev' | 'mobile' | 'data' | 'cloud' | 'apis' | 'automation' | 'ai' | 'tools'

const pt = {
  meta: {
    title: 'TIVA TECH — Transformamos problemas de negócio em software',
    description:
      'Engenharia de software à medida em Moçambique: sistemas, plataformas web, aplicações, integrações, IA e automação.',
  },
  skip: 'Saltar para o conteúdo',
  nav: {
    label: 'Principal',
    services: 'Serviços',
    work: 'Projectos',
    about: 'Empresa',
    contact: 'Contactos',
    cta: 'Solicitar proposta',
    menu: 'Menu',
    language: 'Idioma',
  },
  hero: {
    title: 'Transformamos problemas de negócio em software.',
    lead: 'Software feito à medida para empresas em Moçambique e lá fora, do sistema interno à aplicação no telemóvel.',
    primary: 'Solicitar uma proposta',
    secondary: 'Explorar projectos',
    imageAlt: 'Posto de trabalho com dois ecrãs e um portátil a mostrar código',
  },
  whatWeDo: {
    title: 'O que podemos fazer pelo seu negócio',
    action: 'Ver como fazemos',
    tabs: [
      {
        title: 'Digitalizar processos',
        text: 'Folhas, cadernos e Excel passam a um sistema que toda a equipa usa, com os dados certos no sítio certo.',
      },
      {
        title: 'Criar produtos digitais',
        text: 'Websites, lojas e aplicações para os seus clientes, rápidos e fáceis de manter.',
      },
      {
        title: 'Integrar sistemas',
        text: 'Facturação, stock e pagamentos móveis passam a trocar dados sozinhos, sem cópias à mão.',
      },
    ],
  },
  services: {
    title: 'Seis serviços, uma só equipa',
    all: 'Ver todos os serviços',
    more: 'Saber mais',
    items: [
      { title: 'Software e sistemas à medida', text: 'O processo da sua empresa num sistema feito para ele.' },
      { title: 'Websites e plataformas web', text: 'Uma presença rápida, encontrada no Google, que traz contactos.' },
      { title: 'Aplicações móveis', text: 'O seu serviço no telemóvel do cliente, Android e iOS.' },
      { title: 'Sistemas empresariais e APIs', text: 'Os programas que já tem passam a falar entre si.' },
      { title: 'IA e automação', text: 'O trabalho repetido passa a fazer-se sozinho.' },
      { title: 'Consultoria tecnológica', text: 'Da dúvida ao plano certo, antes de gastar.' },
    ],
  },
  tech: {
    title: 'Tecnologias com que trabalhamos',
    lead: 'Escolhemos a ferramenta pelo problema. Estas são as que usamos no dia-a-dia.',
    filter: 'Filtrar tecnologias',
    all: 'Todas',
    categories: {
      dev: 'Desenvolvimento',
      mobile: 'Mobile',
      data: 'Bases de dados',
      cloud: 'Cloud e DevOps',
      apis: 'APIs e pagamentos',
      automation: 'Automação',
      ai: 'IA e visão computacional',
      tools: 'Ferramentas',
    } satisfies Record<TechCategory, string>,
  },
  work: {
    title: 'Projectos seleccionados',
    lead: 'O problema, a solução e o que mudou para o cliente, em cada caso.',
    all: 'Explorar todos os projectos',
    items: [
      { kind: 'Sistema de gestão', name: 'Nome do projecto', text: 'Problema, solução e resultado do cliente, em duas linhas.' },
      { kind: 'Website e loja online', name: 'Nome do projecto', text: 'Problema, solução e resultado do cliente, em duas linhas.' },
      { kind: 'Aplicação móvel', name: 'Nome do projecto', text: 'Problema, solução e resultado do cliente, em duas linhas.' },
    ],
  },
  why: {
    title: 'Porquê a TivaTech',
    imageAlt: 'Equipa de programadores a trabalhar em computadores num escritório',
    items: [
      { title: 'Feito para o seu caso', text: 'Partimos da necessidade real, não de um pacote pronto.' },
      { title: 'Qualidade e segurança', text: 'Código revisto e testado antes de cada entrega.' },
      { title: 'Pronto para crescer', text: 'Arquitectura pensada para mais utilizadores e novas funções.' },
      { title: 'Comunicação clara', text: 'Cada decisão explicada em português claro, sem jargão.' },
      { title: 'Acompanhamento', text: 'Suporte e evolução depois da entrega, quando contratado.' },
      { title: 'O sistema é seu', text: 'Código, domínio e contas em nome da sua empresa.' },
    ],
  },
  process: {
    title: 'Como trabalhamos',
    lead: 'Cinco etapas. Em cada uma sabe o que está a acontecer e o que recebe no fim.',
    steps: [
      { when: 'Semana 1', name: 'Descoberta', text: 'Ouvimos o negócio e o problema real.' },
      { when: '1 a 2 semanas', name: 'Planeamento', text: 'Âmbito, prazo e preço por escrito.' },
      { when: '4 a 12 semanas', name: 'Concepção e desenvolvimento', text: 'Entregas curtas que pode ver e testar.' },
      { when: '1 semana', name: 'Testes e entrega', text: 'Testamos com dados reais e publicamos. A equipa recebe formação.' },
      { when: 'Contínuo', name: 'Manutenção e evolução', text: 'Suporte e novas funções, quando contratado.' },
    ],
  },
  about: {
    title: 'Sobre a TivaTech',
    text: 'Uma empresa de engenharia de software em Moçambique. A nossa missão é dar às empresas daqui sistemas tão bem feitos como os de qualquer lugar, e explicá-los em português claro.',
    facts: [
      { label: 'Base', value: 'Maputo' },
      { label: 'Clientes', value: 'Moçambique e exterior' },
    ],
    action: 'Conhecer a empresa',
    imageAlt: 'Dois profissionais a analisar um sistema num portátil',
  },
  faq: {
    title: 'Perguntas frequentes',
    lead: 'Não encontra a sua? Fale connosco no WhatsApp.',
    items: [
      {
        q: 'Como peço uma proposta?',
        a: 'Preencha o formulário ou fale connosco no WhatsApp. Marcamos uma conversa curta sobre o problema e enviamos a proposta por escrito, com âmbito, prazo e preço.',
      },
      {
        q: 'Como definem o âmbito e o prazo?',
        a: 'Na descoberta listamos o que o sistema tem de fazer e o que fica para depois. O prazo sai desse âmbito e fica escrito antes de começarmos.',
      },
      {
        q: 'Que tipo de projectos aceitam?',
        a: 'Desde sistemas internos a aplicações e automação, para pequenas empresas e para organizações maiores.',
      },
      {
        q: 'Há acompanhamento depois da entrega?',
        a: 'Sim, quando contratado: suporte, correcções e evolução do sistema, num plano à parte.',
      },
      { q: 'O código e os dados ficam de quem?', a: 'Da sua empresa. O código, o domínio e as contas ficam em nome do cliente.' },
      { q: 'Trabalham com clientes fora de Moçambique?', a: 'Sim, à distância, em português ou em inglês.' },
    ],
  },
  cta: {
    title: 'Vamos falar do seu projecto',
    text: 'Conte-nos o problema em poucas linhas. Respondemos com as perguntas certas e, depois, com uma proposta por escrito.',
    primary: 'Solicitar uma proposta',
    whatsapp: 'Falar no WhatsApp',
    whatsappSubject: 'um projecto',
    flow: {
      label: 'Animação: um pedido do cliente passa a proposta, depois a código e por fim a um sistema publicado',
      steps: ['Pedido', 'Proposta', 'Código', 'Sistema'],
      requestCaption: 'Pedido do cliente',
      request: 'Precisamos de controlar o stock das três lojas num só sítio.',
      requestMeta: 'WhatsApp · 09:14',
      proposalCaption: 'Proposta por escrito',
      proposal: ['Âmbito: stock e vendas, 3 lojas', 'Prazo: 8 semanas', 'Preço fechado'],
      systemCaption: 'Sistema publicado',
      systemTitle: 'Stock · 3 lojas',
      published: 'Publicado',
      stores: [
        ['Loja Baixa', '142'],
        ['Loja Matola', '98'],
        ['Loja Polana', '61'],
      ],
    },
  },
  footer: {
    tagline: 'Engenharia de software à medida, em Moçambique e para fora.',
    social: 'Redes sociais',
    services: 'Serviços',
    servicesLinks: ['Software à medida', 'Websites', 'Aplicações', 'Sistemas e APIs', 'IA e automação', 'Consultoria'],
    company: 'Empresa',
    companyLinks: { about: 'Sobre', work: 'Projectos', faq: 'Perguntas' },
    contact: 'Contacto',
    privacy: 'Privacidade',
    terms: 'Termos',
  },
}

export type Content = typeof pt

const en: Content = {
  meta: {
    title: 'TIVA TECH — We turn business problems into software',
    description:
      'Custom software engineering from Mozambique: business systems, web platforms, mobile apps, integrations, AI and automation.',
  },
  skip: 'Skip to content',
  nav: {
    label: 'Main',
    services: 'Services',
    work: 'Work',
    about: 'About',
    contact: 'Contact',
    cta: 'Request a proposal',
    menu: 'Menu',
    language: 'Language',
  },
  hero: {
    title: 'We turn business problems into software.',
    lead: 'Custom software for companies in Mozambique and abroad, from internal systems to the app on your phone.',
    primary: 'Request a proposal',
    secondary: 'See our work',
    imageAlt: 'Workstation with two monitors and a laptop showing code',
  },
  whatWeDo: {
    title: 'What we can do for your business',
    action: 'See how we work',
    tabs: [
      {
        title: 'Digitise your processes',
        text: 'Paper forms, notebooks and spreadsheets become one system your whole team uses, with the right data in the right place.',
      },
      {
        title: 'Build digital products',
        text: 'Websites, online stores and apps for your customers, fast and easy to maintain.',
      },
      {
        title: 'Connect your systems',
        text: 'Invoicing, stock and mobile payments share data on their own, with no copying by hand.',
      },
    ],
  },
  services: {
    title: 'Six services, one team',
    all: 'See all services',
    more: 'Learn more',
    items: [
      { title: 'Custom software and systems', text: 'Your company’s process, in a system built around it.' },
      { title: 'Websites and web platforms', text: 'A fast site that people find on Google and that brings in leads.' },
      { title: 'Mobile apps', text: 'Your service on your customer’s phone, on Android and iOS.' },
      { title: 'Business systems and APIs', text: 'The software you already use starts talking to each other.' },
      { title: 'AI and automation', text: 'Repetitive work gets done on its own.' },
      { title: 'Technology consulting', text: 'From doubt to the right plan, before you spend.' },
    ],
  },
  tech: {
    title: 'Technologies we work with',
    lead: 'We pick the tool for the problem. These are the ones we use every day.',
    filter: 'Filter technologies',
    all: 'All',
    categories: {
      dev: 'Development',
      mobile: 'Mobile',
      data: 'Databases',
      cloud: 'Cloud and DevOps',
      apis: 'APIs and payments',
      automation: 'Automation',
      ai: 'AI and computer vision',
      tools: 'Tools',
    },
  },
  work: {
    title: 'Selected work',
    lead: 'The problem, the solution and what changed for the client, in each case.',
    all: 'See all projects',
    items: [
      { kind: 'Management system', name: 'Project name', text: 'The client’s problem, the solution and the result, in two lines.' },
      { kind: 'Website and online store', name: 'Project name', text: 'The client’s problem, the solution and the result, in two lines.' },
      { kind: 'Mobile app', name: 'Project name', text: 'The client’s problem, the solution and the result, in two lines.' },
    ],
  },
  why: {
    title: 'Why TivaTech',
    imageAlt: 'A team of developers working at computers in an office',
    items: [
      { title: 'Built for your case', text: 'We start from the real need, not from an off-the-shelf package.' },
      { title: 'Quality and security', text: 'Code reviewed and tested before every delivery.' },
      { title: 'Ready to grow', text: 'Architecture designed for more users and new features.' },
      { title: 'Clear communication', text: 'Every decision explained in plain language, without jargon.' },
      { title: 'Ongoing support', text: 'Support and improvements after launch, when you need them.' },
      { title: 'The system is yours', text: 'Code, domain and accounts in your company’s name.' },
    ],
  },
  process: {
    title: 'How we work',
    lead: 'Five stages. At each one you know what is happening and what you get at the end.',
    steps: [
      { when: 'Week 1', name: 'Discovery', text: 'We listen to the business and the real problem.' },
      { when: '1 to 2 weeks', name: 'Planning', text: 'Scope, timeline and price in writing.' },
      { when: '4 to 12 weeks', name: 'Design and development', text: 'Short deliveries you can see and test.' },
      { when: '1 week', name: 'Testing and launch', text: 'We test with real data and go live. Your team gets trained.' },
      { when: 'Ongoing', name: 'Maintenance and growth', text: 'Support and new features, when you need them.' },
    ],
  },
  about: {
    title: 'About TivaTech',
    text: 'A software engineering company based in Mozambique. Our mission is to give local businesses systems as well built as anywhere else, and to explain them in plain language.',
    facts: [
      { label: 'Based in', value: 'Maputo' },
      { label: 'Clients', value: 'Mozambique and abroad' },
    ],
    action: 'Meet the company',
    imageAlt: 'Two professionals reviewing a system on a laptop',
  },
  faq: {
    title: 'Frequently asked questions',
    lead: 'Can’t find yours? Message us on WhatsApp.',
    items: [
      {
        q: 'How do I request a proposal?',
        a: 'Fill in the form or message us on WhatsApp. We set up a short call about the problem and send you a written proposal with scope, timeline and price.',
      },
      {
        q: 'How do you set the scope and timeline?',
        a: 'During discovery we list what the system must do and what can wait. The timeline follows from that scope and is agreed in writing before we start.',
      },
      {
        q: 'What kind of projects do you take on?',
        a: 'From internal systems to apps and automation, for small businesses and larger organisations alike.',
      },
      {
        q: 'Do you offer support after launch?',
        a: 'Yes, on a separate plan: support, fixes and ongoing improvements to the system.',
      },
      { q: 'Who owns the code and the data?', a: 'Your company does. The code, the domain and the accounts are registered in your name.' },
      { q: 'Do you work with clients outside Mozambique?', a: 'Yes, remotely, in Portuguese or English.' },
    ],
  },
  cta: {
    title: 'Let’s talk about your project',
    text: 'Tell us about the problem in a few lines. We’ll come back with the right questions and then a written proposal.',
    primary: 'Request a proposal',
    whatsapp: 'Message us on WhatsApp',
    whatsappSubject: 'a project',
    flow: {
      label: 'Animation: a client request becomes a proposal, then code and finally a live system',
      steps: ['Request', 'Proposal', 'Code', 'System'],
      requestCaption: 'Client request',
      request: 'We need to manage stock for our three stores in one place.',
      requestMeta: 'WhatsApp · 09:14',
      proposalCaption: 'Written proposal',
      proposal: ['Scope: stock and sales, 3 stores', 'Timeline: 8 weeks', 'Fixed price'],
      systemCaption: 'Live system',
      systemTitle: 'Stock · 3 stores',
      published: 'Live',
      stores: [
        ['Baixa store', '142'],
        ['Matola store', '98'],
        ['Polana store', '61'],
      ],
    },
  },
  footer: {
    tagline: 'Custom software engineering, from Mozambique to the world.',
    social: 'Social media',
    services: 'Services',
    servicesLinks: ['Custom software', 'Websites', 'Mobile apps', 'Systems and APIs', 'AI and automation', 'Consulting'],
    company: 'Company',
    companyLinks: { about: 'About', work: 'Work', faq: 'FAQ' },
    contact: 'Contact',
    privacy: 'Privacy',
    terms: 'Terms',
  },
}

export const content: Record<Lang, Content> = { pt, en }
