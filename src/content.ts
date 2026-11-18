import type { Lang } from './i18n'

// Todos os textos do site, em português e em inglês. O inglês foi escrito
// para soar natural, não traduzido palavra a palavra.

const pt = {
  meta: {
    title: 'TIVA TECH | Desenvolvimento web e móvel, automação e inteligência artificial',
    description:
      'Empresa de tecnologia em Maputo. Desenvolvimento web e móvel, automação de processos e soluções de inteligência artificial para empresas.',
  },
  skip: 'Saltar para o conteúdo',
  intro: {
    // Cada palavra entra em separado; a primeira linha vai clareando.
    line1: ['Software', 'feito', 'à', 'medida,', 'em', 'Maputo.'],
    line2: ['Para', 'empresas', 'daqui', 'e', 'de', 'fora.'],
    slogan: 'Ideias em soluções digitais.',
    tagline: 'Engenharia de software em Moçambique.',
    skip: 'Saltar',
  },
  nav: {
    label: 'Principal',
    services: 'Serviços',
    products: 'Produtos',
    about: 'Sobre nós',
    contact: 'Contacto',
    language: 'Idioma',
  },
  hero: {
    // Frase completa para leitores de ecrã e motores de busca.
    title: 'TIVA TECH, uma empresa inovadora especializada em desenvolvimento web, desenvolvimento móvel, automação de processos e soluções de inteligência artificial.',
    intro: 'Uma empresa inovadora,',
    lead: 'especializada em',
    // Escrevem-se e apagam-se uma a uma, por esta ordem.
    words: ['Desenvolvimento Web', 'Desenvolvimento Móvel', 'Automação de processos', 'Soluções de inteligência artificial'],
  },
  about: {
    title: 'Sobre nós',
    paragraphs: [
      'A TIVA TECH é uma empresa moçambicana dedicada a transformar ideias em soluções digitais. Estamos em Maputo e trabalhamos com empresas e instituições de Moçambique e de fora.',
      'Cada projecto começa por ouvir. Queremos perceber como a sua empresa trabalha hoje e o que a impede de crescer, e só depois propomos a solução.',
    ],
  },
  needs: {
    title: 'Problemas que resolvemos',
    items: [
      'A empresa ainda funciona em papel, cadernos ou folhas de Excel.',
      'A equipa perde horas com tarefas que se repetem todos os dias.',
      'A mesma informação tem de ser copiada à mão de um sistema para outro.',
      'Para saber como vão as vendas ou o stock, tem de perguntar a várias pessoas.',
      'A empresa não tem site, ou o site está antigo e ninguém o encontra no Google.',
    ],
    question: 'Reconhece algum destes problemas?',
    cta: 'Fale connosco',
  },
  services: {
    title: 'Serviços',
    items: [
      {
        title: 'Desenvolvimento Web',
        text: 'Plataformas web e sistemas de gestão à medida, acessíveis a partir de qualquer navegador, que reúnem a informação e a operação da empresa num só lugar.',
      },
      {
        title: 'Desenvolvimento Móvel',
        text: 'Soluções móveis que levam os serviços da empresa até aos clientes e dão às equipas no terreno acesso à informação de que precisam.',
      },
      {
        title: 'Automação de processos',
        text: 'Automatizamos tarefas manuais e repetitivas e integramos os sistemas da empresa, da facturação ao stock e aos pagamentos móveis, para reduzir erros e ganhar tempo.',
      },
      {
        title: 'Soluções de inteligência artificial',
        text: 'Sistemas que analisam imagens, vídeo e texto para apoiar decisões, acelerar a análise de dados e detectar o que exige atenção.',
      },
    ],
  },
  products: {
    title: 'Produtos',
    items: [
      {
        name: 'TivaCV',
        kind: 'Criação de currículos',
        url: 'https://tivacv.netlify.app/',
        cta: 'Experimentar o TivaCV',
        imageAlt: 'Página inicial do TivaCV, com dois modelos de currículo',
        text: 'Uma plataforma que ajuda a criar um CV profissional em poucos minutos.',
        features: [
          'Vários modelos à escolha',
          'Melhoria do texto com inteligência artificial',
          'Tradução do CV para inglês',
        ],
      },
    ],
  },
  sectors: {
    title: 'Para quem trabalhamos',
    items: [
      { title: 'Comércio', text: 'Criamos soluções para o ponto de venda, o controlo de stock e a facturação.' },
      { title: 'Serviços públicos', text: 'Aproximamos as instituições dos cidadãos com serviços que se tratam à distância.' },
      { title: 'Saúde e bem-estar', text: 'Desenvolvemos ferramentas que ajudam as pessoas a cuidar da saúde no dia-a-dia.' },
      { title: 'Transporte e logística', text: 'Desenhamos soluções para gerir frotas, entregas e rotas.' },
      { title: 'Educação', text: 'Levamos a gestão escolar e a aprendizagem para o digital.' },
    ],
  },
  faq: {
    title: 'Perguntas',
    items: [
      {
        q: 'Como peço uma proposta?',
        a: 'Mande mensagem pelo WhatsApp ou por email. Marcamos uma conversa curta e depois enviamos a proposta por escrito: o que vamos fazer, o prazo e o preço.',
      },
      {
        q: 'Há acompanhamento depois da entrega?',
        a: 'Sim, num plano à parte. Ajudamos com dúvidas, corrigimos problemas e acrescentamos o que for preciso.',
      },
      {
        q: 'Que tipo de projectos aceitam?',
        a: 'Sistemas de gestão, plataformas web e soluções móveis, para pequenas empresas e organizações de maior dimensão.',
      },
      {
        q: 'A quem pertence o sistema?',
        a: 'À sua empresa. O sistema, o domínio e as contas ficam em nome do cliente.',
      },
      { q: 'Trabalham com clientes fora de Moçambique?', a: 'Sim, à distância, em português ou em inglês.' },
    ],
  },
  contact: {
    title: 'Fale connosco',
    text: 'Conte-nos em poucas linhas o que precisa. A mensagem abre no WhatsApp já escrita, é só enviar.',
    name: 'Nome',
    company: 'Empresa (opcional)',
    message: 'O que precisa?',
    send: 'Enviar pelo WhatsApp',
    greeting: 'Olá, TIVA TECH.',
    from: 'Sou',
    of: 'da',
    where: 'Onde estamos',
    city: 'Maputo, Moçambique',
    write: 'Escreva-nos',
  },
  footer: {
    menu: 'Menu',
    contact: 'Contacto',
  },
}

export type Content = typeof pt

const en: Content = {
  meta: {
    title: 'TIVA TECH | Web and mobile development, automation and AI',
    description:
      'Technology company in Maputo. Web and mobile development, process automation and artificial intelligence solutions for businesses.',
  },
  skip: 'Skip to content',
  intro: {
    line1: ['Custom', 'software,', 'made', 'in', 'Maputo.'],
    line2: ['For', 'businesses', 'here', 'and', 'abroad.'],
    slogan: 'Ideas into digital solutions.',
    tagline: 'Software engineering in Mozambique.',
    skip: 'Skip',
  },
  nav: {
    label: 'Main',
    services: 'Services',
    products: 'Products',
    about: 'About',
    contact: 'Contact',
    language: 'Language',
  },
  hero: {
    title: 'TIVA TECH, an innovative company specialised in web development, mobile development, process automation and artificial intelligence solutions.',
    intro: 'An innovative company,',
    lead: 'specialised in',
    words: ['Web Development', 'Mobile Development', 'Process Automation', 'Artificial Intelligence Solutions'],
  },
  about: {
    title: 'About us',
    paragraphs: [
      'TIVA TECH is a Mozambican company dedicated to turning ideas into digital solutions. We are based in Maputo and work with businesses and institutions in Mozambique and abroad.',
      'Every project starts with listening. We want to understand how your business works today and what is holding it back, and only then do we propose a solution.',
    ],
  },
  needs: {
    title: 'Problems we solve',
    items: [
      'The business still runs on paper, notebooks or spreadsheets.',
      'Your team loses hours on the same tasks every day.',
      'The same information has to be copied by hand from one system to another.',
      'To find out how sales or stock are going, you have to ask several people.',
      "You don't have a website, or it's old and nobody finds it on Google.",
    ],
    question: 'Sound familiar?',
    cta: 'Talk to us',
  },
  services: {
    title: 'Services',
    items: [
      {
        title: 'Web Development',
        text: "Custom web platforms and management systems, available from any browser, that bring your company's information and operations together in one place.",
      },
      {
        title: 'Mobile Development',
        text: 'Mobile solutions that bring your services to your customers and give field teams access to the information they need.',
      },
      {
        title: 'Process Automation',
        text: "We automate manual, repetitive tasks and connect your company's systems, from invoicing to stock and mobile payments, to reduce errors and save time.",
      },
      {
        title: 'Artificial Intelligence Solutions',
        text: 'Systems that analyse images, video and text to support decisions, speed up data analysis and flag what needs attention.',
      },
    ],
  },
  products: {
    title: 'Products',
    items: [
      {
        name: 'TivaCV',
        kind: 'CV builder',
        url: 'https://tivacv.netlify.app/',
        cta: 'Try TivaCV',
        imageAlt: 'TivaCV home page, showing two CV templates',
        text: 'A platform that helps you create a professional CV in a few minutes.',
        features: [
          'A choice of templates',
          'Text improvements with artificial intelligence',
          'Translation of your CV into English',
        ],
      },
    ],
  },
  sectors: {
    title: 'Who we work for',
    items: [
      { title: 'Retail', text: 'We build solutions for the point of sale, stock control and invoicing.' },
      { title: 'Public services', text: 'We bring institutions closer to citizens with services they can use from anywhere.' },
      { title: 'Health and wellbeing', text: 'We develop tools that help people look after their health every day.' },
      { title: 'Transport and logistics', text: 'We design solutions to manage fleets, deliveries and routes.' },
      { title: 'Education', text: 'We take school management and learning online.' },
    ],
  },
  faq: {
    title: 'Questions',
    items: [
      {
        q: 'How do I ask for a proposal?',
        a: 'Message us on WhatsApp or by email. We set up a short call and then send a written proposal: what we will do, the timeline and the price.',
      },
      {
        q: 'Do you help after delivery?',
        a: 'Yes, on a separate plan. We help with questions, fix problems and add what you need.',
      },
      {
        q: 'What kind of projects do you take on?',
        a: 'Management systems, web platforms and mobile solutions, for small businesses and larger organisations alike.',
      },
      {
        q: 'Who owns the system?',
        a: 'Your company does. The system, the domain and the accounts are in your name.',
      },
      { q: 'Do you work with clients outside Mozambique?', a: 'Yes, remotely, in Portuguese or English.' },
    ],
  },
  contact: {
    title: 'Get in touch',
    text: 'Tell us in a few lines what you need. The message opens in WhatsApp ready to send.',
    name: 'Name',
    company: 'Company (optional)',
    message: 'What do you need?',
    send: 'Send on WhatsApp',
    greeting: 'Hello, TIVA TECH.',
    from: "I'm",
    of: 'from',
    where: 'Where we are',
    city: 'Maputo, Mozambique',
    write: 'Write to us',
  },
  footer: {
    menu: 'Menu',
    contact: 'Contact',
  },
}

export const content: Record<Lang, Content> = { pt, en }
