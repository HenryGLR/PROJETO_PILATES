// Todos os dados são demonstrativos. Substitua-os antes de usar comercialmente.
export const studio = {
  name: "Studio Essenza Pilates",
  whatsapp: "5511999999999",
  phone: "(11) 99999-9999",
  email: "contato@studioessenza.com.br",
  address: "Rua das Acácias, 245",
  neighborhood: "Vila Mariana, São Paulo — SP",
  hours: ["Segunda a sexta: 7h às 21h", "Sábado: 8h às 13h"],
  // Adicione a URL oficial para exibir um link externo. Sem perfil fictício.
  instagram: "",
  message:
    "Olá! Conheci o Studio Essenza pelo site e gostaria de saber mais sobre a aula experimental.",
};

export const whatsappUrl = `https://wa.me/${studio.whatsapp}?text=${encodeURIComponent(studio.message)}`;

export const navigation = [
  ["Início", "inicio"],
  ["O Studio", "studio"],
  ["Modalidades", "modalidades"],
  ["Profissionais", "profissionais"],
  ["Depoimentos", "depoimentos"],
  ["Contato", "contato"],
];

export const images = {
  hero: {
    src: `${import.meta.env.BASE_URL}images/pilates-hero.webp`,
    alt: "Mulher praticando um movimento de Pilates em reformer de madeira, em um espaço iluminado",
  },
  studio: {
    src: `${import.meta.env.BASE_URL}images/studio-interior.webp`,
    alt: "Espaço de Pilates com equipamentos de madeira, plantas e iluminação natural",
  },
  lesson: {
    src: `${import.meta.env.BASE_URL}images/pilates-aula.webp`,
    alt: "Prática de alongamento no reformer em um ambiente equipado para Pilates",
  },
};

export const services = [
  {
    name: "Pilates Individual",
    label: "Um tempo só seu",
    description:
      "Atendimento exclusivo, com exercícios definidos de acordo com suas necessidades e objetivos.",
    icon: "person",
  },
  {
    name: "Pilates em Pequenos Grupos",
    label: "Movimento compartilhado",
    description:
      "Turmas reduzidas para garantir atenção, segurança e acompanhamento próximo durante toda a aula.",
    icon: "group",
  },
  {
    name: "Pilates para Idosos",
    label: "Autonomia em cada fase",
    description:
      "Exercícios adaptados para trabalhar equilíbrio, força, mobilidade e autonomia com segurança.",
    icon: "sun",
  },
  {
    name: "Pilates para Gestantes",
    label: "Cuidado em dobro",
    description:
      "Uma prática cuidadosa para acompanhar as mudanças do corpo durante a gestação, sempre com liberação médica.",
    icon: "heart",
  },
  {
    name: "Pilates para Condicionamento",
    label: "Sua próxima evolução",
    description:
      "Aulas para quem deseja desenvolver força, flexibilidade, estabilidade e consciência corporal.",
    icon: "activity",
  },
];

export const professionals = [
  {
    name: "Marina Albuquerque",
    role: "Fisioterapeuta e instrutora de Pilates",
    description:
      "Acredita na escuta como ponto de partida. Conduz cada aula com atenção aos detalhes e respeito ao ritmo de cada pessoa.",
    image: `${import.meta.env.BASE_URL}images/marina.webp`,
  },
  {
    name: "Camila Nogueira",
    role: "Fisioterapeuta e especialista em movimento funcional",
    description:
      "Encontra no movimento uma forma de cuidar. Sua abordagem une orientação próxima, acolhimento e incentivo a cada descoberta.",
    image: `${import.meta.env.BASE_URL}images/camila.webp`,
  },
];

export const testimonials = [
  {
    quote:
      "As aulas viraram meu momento de pausa na semana. Passei a prestar mais atenção ao meu corpo e me sinto mais disposta no dia a dia.",
    name: "Renata M.",
    detail: "Pilates em pequenos grupos",
    initials: "RM",
  },
  {
    quote:
      "O que mais gosto é do cuidado com cada movimento. Aqui posso perguntar, aprender no meu tempo e me sentir acompanhada de verdade.",
    name: "Juliana S.",
    detail: "Pilates individual",
    initials: "JS",
  },
  {
    quote:
      "Comecei com receio de não acompanhar, mas os exercícios respeitam meu ritmo. Hoje me sinto mais confiante nas atividades da rotina.",
    name: "Antônio R.",
    detail: "Pilates para idosos",
    initials: "AR",
  },
];

export const faqs = [
  [
    "Preciso ter experiência para fazer Pilates?",
    "Não. As aulas são adaptadas tanto para quem está começando quanto para quem já pratica. Você recebe orientação para conhecer os movimentos e evoluir no seu ritmo.",
  ],
  [
    "Como funciona a aula experimental?",
    "O primeiro passo é conversar pelo WhatsApp e combinar um horário. Na aula, conhecemos seus objetivos, apresentamos o espaço e acompanhamos você nos primeiros movimentos. Consulte a equipe sobre valores e disponibilidade.",
  ],
  [
    "As aulas são individuais ou em grupo?",
    "Oferecemos atendimento individual e turmas de até 4 alunos. A escolha considera seus objetivos, suas necessidades e os horários disponíveis.",
  ],
  [
    "Quantas vezes por semana é recomendado?",
    "A frequência é definida em conjunto com um profissional habilitado, considerando sua rotina, seus objetivos e sua condição física. A equipe pode orientar você após uma avaliação individual.",
  ],
  [
    "Idosos podem praticar Pilates?",
    "Sim, com orientação e exercícios adaptados às necessidades de cada pessoa. Condições de saúde, limitações e a necessidade de liberação para a prática devem ser avaliadas por um profissional habilitado.",
  ],
  [
    "Gestantes podem fazer as aulas?",
    "A prática durante a gestação depende de liberação médica e acompanhamento adequado. Informe à equipe o período da gestação e as orientações do profissional responsável pelo seu pré-natal.",
  ],
  [
    "O Studio oferece estacionamento?",
    "Neste projeto demonstrativo, não há estacionamento confirmado. Em um atendimento real, consulte a equipe sobre as opções de acesso e estacionamento antes de agendar sua visita.",
  ],
  [
    "O que preciso levar para a primeira aula?",
    "Venha com roupas confortáveis que permitam movimento, traga sua garrafa de água e meias antiderrapantes, se tiver. Informe condições de saúde e leve eventuais orientações do profissional que acompanha você.",
  ],
];
