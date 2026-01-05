export const myProjects = [
  {
    id: 1,
    title: "Bot de Compra Automatizado para Ativos Financeiros",
    description:
      "Sistema automatizado projetado para executar ordens de compra de ativos financeiros em tempo real para um ambiente bancário.",
    Problem: [
      "A execução manual de operações financeiras era lenta para responder às flutuações do mercado, aumentando o risco operacional e reduzindo a eficiência.",
    ],
    Solution: [
      "Desenvolveu um bot automatizado em C# e .NET para monitorar sinais de mercado e executar ordens de compra com base em regras pré-definidas, com monitoramento em tempo real via SignalR.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/stock_market.jpg",
    tags: [
      { id: 1, name: "C#", path: "/assets/logos/csharp.svg" },
      { id: 2, name: ".NET", path: "/assets/logos/dotnet.svg" },
      { id: 3, name: "SignalR", path: "/assets/logos/signalr.svg" },
    ],
  },
  {
    id: 2,
    title: "Plataforma de Gestão de Contratos Acadêmicos (IECLB)",
    description:
      "Plataforma full-stack desenvolvida para gerenciar fluxos de trabalho de contratos acadêmicos para programas de ensino superior.",
    Problem: [
      "A instituição dependia de processos fragmentados e manuais para gerenciar contratos de estudantes, resultando em baixa rastreabilidade e erros operacionais.",
    ],
    Solution: [
      "Construí uma API REST completa e uma interface frontend para gerenciar todo o ciclo de vida dos contratos, incluindo validações, aprovações e integrações com sistemas externos.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/ieclb.jpg",
    tags: [
      { id: 1, name: ".NET", path: "/assets/logos/dotnet.svg" },
      { id: 2, name: "C#", path: "/assets/logos/csharp.svg" },
      { id: 3, name: "REST API", path: "/assets/logos/api.svg" },
      { id: 4, name: "Frontend", path: "/assets/logos/react.svg" },
    ],
  },
  {
    id: 3,
    title: "Plataforma de Integração de Sistemas Médicos",
    description:
      "Sistema frontend complexo focado na integração de múltiplas plataformas de saúde em uma interface unificada.",
    Problem: [
      "Os dados médicos estavam distribuídos em vários sistemas independentes, dificultando a integração, validação e visualização.",
    ],
    Solution: [
      "Desenvolvi interfaces robustas em Angular e camadas de integração para consumir múltiplas APIs, validar dados médicos e suportar fluxos de trabalho complexos na área da saúde.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/salux.jpg",
    tags: [
      { id: 1, name: "Angular", path: "/assets/logos/angular.svg" },
      { id: 2, name: "TypeScript", path: "/assets/logos/typescript.svg" },
      { id: 3, name: "REST APIs", path: "/assets/logos/rest_api.svg" },
    ],
  },
  {
    id: 4,
    title: "Plataformas Web Acadêmicas (Rede Federal de Ensino)",
    description:
      "Diversos sites acadêmicos desenvolvidos para apoiar estudantes e instituições dentro de uma rede federal de ensino.",
    Problem: [
      "Estudantes e instituições careciam de plataformas web acadêmicas modernas, acessíveis e fáceis de manter.",
    ],
    Solution: [
      "Desenvolvi vários sites acadêmicos utilizando React e Node.js, com foco em responsividade, acessibilidade e facilidade de manutenção.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/ifsul.jpg",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Node.js", path: "/assets/logos/node.svg" },
      { id: 3, name: "JavaScript", path: "/assets/logos/javascript.svg" },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ali-sanati/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ali.sanatidev/reels/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Desenvolvedor de Software - Frontend",
    job: "Empresa de Healthtech & Dispositivos Médicos",
    date: "2024 - 2025",
    contents: [
      "Atuei em um ambiente dinâmico e colaborativo voltado para transformar o setor de saúde por meio de soluções de software avançadas.",
      "Desempenhei papel-chave no desenvolvimento e manutenção de aplicações robustas para aprimorar o atendimento ao paciente e otimizar operações médicas.",
      "Desenvolvi interfaces modernas, responsivas e fáceis de usar para profissionais de saúde e pacientes.",
      "Otimizei a experiência do usuário em aplicações críticas, aumentando a eficiência no diagnóstico e na entrega de cuidados.",
      "Contribuí ativamente em sprints ágeis, entregando funcionalidades de alto impacto.",
      "Trabalhei próximo a equipes multifuncionais, incluindo desenvolvedores seniores, designers UX/UI, engenheiros de QA e gerentes de produto em um fluxo ágil."
    ],
  },
  {
    title: "Full Stack Developer - Com foco em Backend",
    job: "Plataformas de soluções e desenvolvimento de talentos para o ecossistema tech.",
    date: "2025 - Presente",
    contents: [
      "Desenvolvi infraestruturas robustas, escaláveis, modulares e centradas em APIs.",
      "Analisei soluções técnicas propostas com base nos requisitos do cliente.",
      "Colaborei com outros engenheiros para avaliar interfaces de software e hardware.",
      "Coordenei com equipes de engenharia para avaliar e melhorar interfaces de software e hardware."
    ],
  },
  {
    title: "Desenvolvedor Freelancer",
    job: "Projetos pessoais e trabalhos para clientes",
    date: "2025 - Presente",
    contents: [
      "Trabalhei para diferentes clientes em vários setores, entregando soluções de software personalizadas.",
      "Entre meus projetos, desenvolvi um bot automatizado para um banco internacional com objetivo de comprar ou manter ações com base em tendências de mercado, utilizando análise de dados em tempo real.",
      "Criei uma interface completa de aplicação para uma construtora, melhorando o gerenciamento de projetos e a comunicação com clientes por meio de uma solução totalmente personalizada.",
      "Desenvolvi múltiplos sites e aplicações acadêmicas para estudantes de uma universidade federal, com foco em experiência do usuário e funcionalidade."
    ],
  },
];
export const reviews = [
  {
    title: "Entender o problema",
    body: "Dedico tempo para compreender completamente o contexto do negócio antes de escrever qualquer código.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPd7MkEMrR9IHOc4IlPDTIAn6XpdoSOkOdEw&s",
  },
  {
    title: "Projetar a solução",
    body: "Planejo a arquitetura e o fluxo de dados para evitar gargalos futuros.",
    img: "https://i.pinimg.com/736x/75/cd/bb/75cdbb4fec25529b3fa15c24b347384d.jpg",
  },
  {
    title: "Construir com intenção",
    body: "Código limpo e manutenível, com escalabilidade em mente.",
    img: "https://i.pinimg.com/736x/bb/f6/68/bbf668ba01488bc959a9b0709f063d87.jpg",
  },
  {
    title: "Testar e refinar",
    body: "Valido suposições, corrijo casos de borda e aperfeiçoo a experiência.",
    img: "https://i.pinimg.com/736x/5b/94/b5/5b94b57546a4af721b87c94a22e83a65.jpg",
  },
  {
    title: "Requisitos e restrições",
    body: "Compreendendo escopo, prazos e limitações técnicas.",
    img: "https://illustoon.com/photo/7271.png",
  },
  {
    title: "Arquitetura em primeiro lugar",
    body: "Definindo estrutura, responsabilidades e propriedade dos dados.",
    img: "https://illustoon.com/photo/7272.png",
  },
  {
    title: "Entrega incremental",
    body: "Iterações pequenas e testáveis com feedback contínuo.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKaZYojI3ERyVaFCoeSNx8-B29onbL8kBcpA&s",
  },
  {
    title: "Otimização e limpeza",
    body: "Ajuste de performance, refatoração e documentação.",
    img: "https://illustoon.com/photo/7281.png",
  },
];

