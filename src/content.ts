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
    work: 'Projectos',
    about: 'Sobre nós',
    contact: 'Contacto',
    language: 'Idioma',
  },
  hero: {
    // Frase completa para leitores de ecrã e motores de busca.
    title: 'TIVA TECH, especializada em desenvolvimento web, desenvolvimento móvel, automação de processos e soluções de inteligência artificial.',
    lead: 'Especializada em',
    // Escrevem-se e apagam-se uma a uma, por esta ordem.
    words: ['Desenvolvimento Web', 'Desenvolvimento Móvel', 'Automação de processos', 'Soluções de inteligência artificial'],
  },
  about: {
    title: 'Sobre nós',
    paragraphs: [
      'A TIVA TECH é uma empresa de tecnologia em Maputo. Criamos programas, sites e aplicações de telemóvel para empresas em Moçambique e fora.',
      'Começamos sempre pelo problema. Primeiro ouvimos como a sua empresa trabalha hoje, só depois propomos uma solução.',
    ],
  },
  needs: {
    title: 'Problemas que resolvemos',
    items: [
      'A empresa ainda funciona em papel, cadernos ou folhas de Excel.',
      'A equipa perde horas com tarefas que se repetem todos os dias.',
      'A mesma informação tem de ser copiada à mão de um programa para outro.',
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
        text: 'Sites e programas de gestão que abrem no navegador, para controlar vendas, stock ou clientes sem papel nem Excel.',
      },
      {
        title: 'Desenvolvimento Móvel',
        text: 'Aplicações de telemóvel para os seus clientes ou para a sua equipa, em Android e iPhone.',
      },
      {
        title: 'Automação de processos',
        text: 'O que alguém faz à mão todos os dias passa a ser feito pelo computador. A facturação, o stock e os pagamentos por M‑Pesa ou e‑Mola passam a trocar informação sozinhos.',
      },
      {
        title: 'Soluções de inteligência artificial',
        text: 'Programas que analisam vídeos, fotos ou textos sozinhos. No SGDIT, por exemplo, o sistema vê o vídeo de uma infracção e envia o caso ao posto policial certo.',
      },
    ],
  },
  work: {
    title: 'Projectos',
    items: [
      {
        kind: 'denúncias de trânsito',
        name: 'SGDIT',
        text: 'O cidadão filma a infracção de trânsito e envia o vídeo pelo telemóvel. O sistema analisa o vídeo sozinho e o caso chega ao posto policial certo, com a prova guardada.',
      },
      {
        kind: 'treino e bem-estar',
        name: 'App de treino',
        text: 'Um treinador virtual monta o plano de treino de cada pessoa. Tem mais de 1300 exercícios com demonstração, vídeos de treino, yoga e meditação.',
      },
    ],
  },
  process: {
    title: 'Como trabalhamos',
    steps: [
      { when: 'Semana 1', name: 'Conversa', text: 'Ouvimos como funciona o seu negócio e o que precisa de resolver.' },
      { when: '1 a 2 semanas', name: 'Proposta', text: 'Enviamos por escrito o que vamos fazer, quanto tempo leva e quanto custa.' },
      { when: '4 a 12 semanas', name: 'Construção', text: 'Mostramos o trabalho por partes, para ir vendo e dando a sua opinião.' },
      { when: '1 semana', name: 'Entrega', text: 'Experimentamos com a sua informação real, pomos a funcionar e ensinamos a equipa a usar.' },
      { when: 'Depois', name: 'Apoio', text: 'Ajudamos com dúvidas e problemas e acrescentamos o que for preciso, se contratar.' },
    ],
  },
  sectors: {
    title: 'Sectores',
    items: [
      { title: 'Comércio', text: 'Vendas, stock e facturação num só programa, com pagamentos por M‑Pesa e e‑Mola.' },
      {
        title: 'Serviços públicos',
        text: 'Plataformas para o cidadão tratar de assuntos pelo telemóvel, como as denúncias de trânsito do SGDIT.',
      },
      { title: 'Saúde e bem-estar', text: 'Aplicações para acompanhar pessoas e planos, como a nossa app de treino.' },
      { title: 'Transporte e logística', text: 'Registo de entregas, rotas e viaturas, com o mapa sempre actualizado.' },
      { title: 'Educação', text: 'Inscrições, notas e contacto com os encarregados de educação num só lugar.' },
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
        a: 'Programas para uso interno, sites e aplicações, para pequenas empresas e para organizações maiores.',
      },
      {
        q: 'O programa fica em nome de quem?',
        a: 'Da sua empresa. O programa, o endereço do site e as contas pertencem-lhe a si.',
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
    work: 'Work',
    about: 'About',
    contact: 'Contact',
    language: 'Language',
  },
  hero: {
    title: 'TIVA TECH, specialised in web development, mobile development, process automation and artificial intelligence solutions.',
    lead: 'Specialised in',
    words: ['Web Development', 'Mobile Development', 'Process Automation', 'Artificial Intelligence Solutions'],
  },
  about: {
    title: 'About us',
    paragraphs: [
      'TIVA TECH is a technology company in Maputo. We build software, websites and phone apps for businesses in Mozambique and abroad.',
      'We always start with the problem. First we learn how your business works today, and only then do we suggest a solution.',
    ],
  },
  needs: {
    title: 'Problems we solve',
    items: [
      'The business still runs on paper, notebooks or spreadsheets.',
      'Your team loses hours on the same tasks every day.',
      'The same information has to be copied by hand from one program to another.',
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
        text: 'Websites and management software that open in the browser, to keep track of sales, stock or customers without paper or spreadsheets.',
      },
      {
        title: 'Mobile Development',
        text: 'Phone apps for your customers or your team, on Android and iPhone.',
      },
      {
        title: 'Process Automation',
        text: 'What someone does by hand every day gets done by the computer. Invoicing, stock and payments like M‑Pesa or e‑Mola share information on their own.',
      },
      {
        title: 'Artificial Intelligence Solutions',
        text: 'Software that checks videos, photos or text on its own. In SGDIT, for example, the system watches the video of a violation and sends the case to the right police station.',
      },
    ],
  },
  work: {
    title: 'Work',
    items: [
      {
        kind: 'traffic reports',
        name: 'SGDIT',
        text: 'Citizens film a traffic violation and send the video from their phone. The system checks the video on its own and the case goes to the right police station, with the evidence saved.',
      },
      {
        kind: 'fitness and wellbeing',
        name: 'Training app',
        text: 'A virtual coach builds a training plan for each person. It has over 1,300 exercises with demonstrations, plus workout, yoga and meditation videos.',
      },
    ],
  },
  process: {
    title: 'How we work',
    steps: [
      { when: 'Week 1', name: 'Conversation', text: 'We learn how your business works and what you need to solve.' },
      { when: '1 to 2 weeks', name: 'Proposal', text: 'We send in writing what we will do, how long it takes and what it costs.' },
      { when: '4 to 12 weeks', name: 'Building', text: 'We show you the work in parts, so you can see it and give your opinion.' },
      { when: '1 week', name: 'Handover', text: 'We try it with your real information, switch it on and teach your team to use it.' },
      { when: 'After', name: 'Support', text: 'We help with questions and problems and add what you need, if you want.' },
    ],
  },
  sectors: {
    title: 'Sectors',
    items: [
      { title: 'Retail', text: 'Sales, stock and invoicing in one program, with M‑Pesa and e‑Mola payments.' },
      {
        title: 'Public services',
        text: 'Platforms for citizens to get things done from their phone, like the SGDIT traffic reports.',
      },
      { title: 'Health and wellbeing', text: 'Apps to follow people and their plans, like our training app.' },
      { title: 'Transport and logistics', text: 'Deliveries, routes and vehicles on record, with the map always up to date.' },
      { title: 'Education', text: 'Enrolments, grades and contact with parents in one place.' },
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
        a: 'Software for internal use, websites and apps, for small businesses and larger organisations alike.',
      },
      {
        q: 'Who owns the software?',
        a: 'Your company does. The software, the website address and the accounts belong to you.',
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
