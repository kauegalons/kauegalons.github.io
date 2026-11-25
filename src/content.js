// Todo o texto do site fica aqui. Edite à vontade — PT e EN lado a lado.

export const links = {
  email: "kauegalons@gmail.com",
  github: "https://github.com/kauegalons",
  linkedin: "https://www.linkedin.com/in/kauegalon",
};

const gh = (repo) => `https://github.com/kauegalons/${repo}`;

// Projetos em destaque (cards grandes) — foco em IA e Java
const featured = [
  {
    title: "SmartFridge",
    repo: gh("SmartFridge"),
    tech: ["Java", "LangChain4j", "LLM"],
    desc: {
      pt: "Aplicação com IA que identifica os produtos disponíveis na geladeira e gera receitas personalizadas. Integra um LLM ao Java com LangChain4j para sugerir refeições práticas com o que você já tem em casa.",
      en: "AI-powered app that identifies the products in your fridge and generates personalized recipes. Integrates an LLM into Java with LangChain4j to suggest practical meals from what you already have.",
    },
  },
  {
    title: "Transactions API",
    repo: gh("java-spring-transactions-api"),
    tech: ["Java 17", "Spring Boot", "Concurrency"],
    desc: {
      pt: "API REST em Java 17 e Spring Boot que recebe transações e calcula estatísticas em tempo real sobre uma janela de tempo deslizante, com armazenamento em memória thread-safe. Solução de um desafio técnico de backend do Itaú.",
      en: "REST API in Java 17 and Spring Boot that receives transactions and computes real-time statistics over a sliding time window, using thread-safe in-memory storage. Solution to an Itaú backend technical challenge.",
    },
  },
  {
    title: "Java Design Patterns",
    repo: gh("java-design-patterns"),
    tech: ["Java", "Strategy", "Singleton", "Concurrency"],
    desc: {
      pt: "Implementações de padrões de projeto em Java: Strategy para escolher o meio de transporte de um frete em tempo de execução e um Singleton thread-safe com double-checked locking para configuração global.",
      en: "Design pattern implementations in Java: Strategy to pick a freight transport method at runtime, and a thread-safe Singleton with double-checked locking for global configuration.",
    },
  },
  {
    title: "Machine Learning",
    repo: gh("machine-learning-coursework"),
    tech: ["Python", "scikit-learn", "K-Means", "Random Forest"],
    desc: {
      pt: "Segmentação de clientes com K-Means e escolha numérica do número de grupos, e classificação de qualidade de vinhos com Random Forest, balanceamento com SMOTE e busca aleatória de hiperparâmetros.",
      en: "Customer segmentation with K-Means and numeric elbow selection, and wine-quality classification with Random Forest, SMOTE balancing and randomized hyperparameter search.",
    },
  },
];

// Demais projetos (grade)
const others = [
  {
    title: "Computer Vision",
    repo: gh("computer-vision-coursework"),
    tech: ["Python", "OpenCV", "CNN"],
    desc: {
      pt: "Detecção de features (Harris, Shi-Tomasi, SIFT), GUI de processamento de imagens e uma CNN no CIFAR-10.",
      en: "Feature detection (Harris, Shi-Tomasi, SIFT), an image-processing GUI and a CNN on CIFAR-10.",
    },
  },
  {
    title: "Iris Classifier",
    repo: gh("flask-iris-classifier"),
    tech: ["Python", "Flask", "scikit-learn"],
    desc: {
      pt: "App web para treinar e comparar classificadores, com acurácia, precisão, recall, F1 e matriz de confusão.",
      en: "Web app to train and compare classifiers, reporting accuracy, precision, recall, F1 and a confusion matrix.",
    },
  },
  {
    title: "Java Fundamentals",
    repo: gh("java-fundamentals"),
    tech: ["Java", "Streams API"],
    desc: {
      pt: "Trilha de estudos em três níveis: orientação a objetos, coleções e generics, complexidade e Streams API.",
      en: "Three-level learning path: object orientation, collections and generics, complexity and the Streams API.",
    },
  },
  {
    title: "NoNameCoin Consensus",
    repo: gh("nonamecoin-consensus"),
    tech: ["Python", "Flask", "SQLite"],
    desc: {
      pt: "Sistema distribuído que simula validação por consenso ponderado por stake, com três serviços Flask.",
      en: "Distributed system simulating stake-weighted consensus validation across three Flask services.",
    },
  },
  {
    title: "Card Insights",
    repo: gh("card-insights"),
    tech: ["TypeScript"],
    desc: {
      pt: "Dashboard privado de gastos da fatura do cartão. Roda 100% no navegador — os dados não saem da sua máquina.",
      en: "Private spending dashboard for your card statement. Runs entirely in the browser — data never leaves your machine.",
    },
  },
  {
    title: "Orders API",
    repo: gh("orders-api"),
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    desc: {
      pt: "API REST de pedidos com autenticação JWT, arquitetura em camadas e tratamento centralizado de erros.",
      en: "Order management REST API with JWT auth, layered architecture and centralized error handling.",
    },
  },
  {
    title: "Cryptography from Scratch",
    repo: gh("cryptography-coursework"),
    tech: ["Python"],
    desc: {
      pt: "SHA-256, HMAC-SHA256 e Base64 implementados do zero, sem bibliotecas criptográficas, validados contra a stdlib.",
      en: "SHA-256, HMAC-SHA256 and Base64 implemented from scratch, no crypto libraries, verified against the stdlib.",
    },
  },
  {
    title: "MIPS Simulator",
    repo: gh("mips-simulator"),
    tech: ["C"],
    desc: {
      pt: "Interpretador interativo de instruções MIPS sobre registradores e memória simulados.",
      en: "Interactive MIPS interpreter running against a simulated register file and memory.",
    },
  },
];

// Seção "IA no dia a dia" — fluxo spec-driven com agentes
const aiFlow = {
  pt: [
    { step: "Especificar", agents: "constitution · specify · clarify", text: "Regras do projeto, o que construir e por quê. As dúvidas são resolvidas comigo antes de seguir." },
    { step: "Planejar", agents: "plan · tasks", text: "O agente lê o código real, desenha a solução e quebra em tarefas ordenadas." },
    { step: "Revisar antes do código", agents: "analyze", text: "Revisão só de leitura entre spec, plano e tarefas: os erros aparecem no papel, não em produção." },
    { step: "Implementar com TDD", agents: "implement", text: "O teste nasce antes e precisa começar falhando. Eu confirmo cada passo." },
    { step: "Code review com IA", agents: "pré-review", text: "Identifica o tipo do PR e chama o revisor certo. Ele pega o óbvio; eu foco em arquitetura e risco." },
    { step: "QA da API", agents: "qa", text: "Testes de contrato, jornada, autorização e segurança, com relatório." },
  ],
  en: [
    { step: "Specify", agents: "constitution · specify · clarify", text: "Project rules, what to build and why. Open questions get resolved with me before moving on." },
    { step: "Plan", agents: "plan · tasks", text: "The agent reads the real code, designs the solution and breaks it into ordered tasks." },
    { step: "Review before code", agents: "analyze", text: "Read-only review across spec, plan and tasks: mistakes show up on paper, not in production." },
    { step: "Implement with TDD", agents: "implement", text: "The test comes first and must start failing. I confirm every step." },
    { step: "AI code review", agents: "pre-review", text: "Detects the PR type and calls the right reviewer. It catches the obvious; I focus on architecture and risk." },
    { step: "API QA", agents: "qa", text: "Contract, journey, authorization and security tests, with a report." },
  ],
};

const aiPrinciples = {
  pt: [
    { title: "Humano no controle", text: "Confirmo os passos, respondo as dúvidas e nada é publicado sem o meu OK." },
    { title: "Confiar, mas conferir", text: "Confiro no código o que o agente afirma e comparo com a linha de base antes de culpar ou inocentar uma mudança." },
    { title: "Custo e contexto", text: "Skills carregadas só quando precisa e compressão de texto para gastar menos tokens." },
    { title: "Guardrails", text: "Credenciais só em variável de ambiente, sistemas legados só leitura e operação irreversível só com plano revisado." },
  ],
  en: [
    { title: "Human in the loop", text: "I confirm steps, answer open questions, and nothing gets published without my OK." },
    { title: "Trust, but verify", text: "I check the agent's claims against the code and compare with a baseline before blaming or clearing a change." },
    { title: "Cost & context", text: "Skills loaded only when needed and compressed output to spend fewer tokens." },
    { title: "Guardrails", text: "Credentials only in environment variables, legacy systems read-only, irreversible operations only after a reviewed plan." },
  ],
};

const tech = ["Java 17", "Spring Boot", "LangChain4j", "Claude Code", "Spec-driven dev", "Python", "PostgreSQL", "Microservices", "Docker / Kubernetes", "JUnit · TDD"];

export const content = {
  pt: {
    nav: ["sobre", "ia", "experiência", "projetos", "contato"],
    intro: {
      hi: "oi, eu sou o",
      name: "Kauê Galon",
      typed: [
        "Java & Spring Boot no backend.",
        "IA aplicada ao desenvolvimento.",
        "da spec ao código, com agentes.",
      ],
      bio: "Engenheiro de software em Curitiba. Construo backends em Java e Spring Boot e uso IA de forma estruturada no desenvolvimento, da especificação ao code review. Agora estou me preparando para construir produtos com IA dentro.",
      cta: "Fale comigo",
      cta2: "Ver projetos",
    },
    about: {
      title: "sobre mim",
      paragraphs: [
        "Sou engenheiro de software com cerca de 4 anos e meio de experiência em backend Java e Spring Boot, construindo microsserviços para plataformas grandes e críticas para o negócio.",
        "Comecei como trainee na Wipro, migrando sistemas bancários de COBOL para Java, e fui promovido a desenvolvedor. Depois, ainda pela Wipro, fui para um time internacional, em inglês, numa plataforma de microsserviços de uma fabricante global de tecnologia. Desde outubro de 2025 estou na Senior Sistemas, onde entrego funcionalidades e reviso código de mais de 30 serviços.",
        "No último ano a IA mudou a forma como eu trabalho. Hoje quero ir além de usar IA: quero construir sistemas com IA, como LLMs integrados ao produto, RAG e evals.",
        "Me formei em Ciência da Computação pela Universidade Positivo em dezembro de 2025, trabalhando durante toda a faculdade, e falo inglês em nível avançado (C1).",
      ],
      techIntro: "Tecnologias com que tenho trabalhado:",
      tech,
    },
    ai: {
      title: "IA no dia a dia",
      lead: "Não uso IA só pedindo código num chat. Uso o Claude Code com agentes especializados do time, seguindo o GitHub Spec Kit, um fluxo de desenvolvimento guiado por especificação. Eu conduzo cada etapa, confiro o que os agentes afirmam e passo feedback quando eles erram.",
      principlesTitle: "Como eu mantenho a IA honesta",
      nextTitle: "Próximo passo",
      next: "Hoje eu uso e ajudo a melhorar agentes. O próximo passo é construir IA que atende o usuário final: LLMs integrados ao produto, RAG, evals automatizadas, custo e latência em produção. O SmartFridge, com LangChain4j, é onde eu já estou praticando isso.",
      tools: ["Claude Code", "GitHub Spec Kit", "MCP", "Skills", "LangChain4j"],
    },
    experience: { title: "experiência" },
    projects: {
      title: "projetos",
      featuredLabel: "Projeto em destaque",
      othersTitle: "outros projetos",
      more: "ver todos no GitHub",
    },
    contact: {
      title: "contato",
      heading: "Bora conversar?",
      text: "Estou aberto a oportunidades em Java e IA, e também a trocar ideia sobre agentes, LLMs e backend. Minha caixa de entrada está sempre aberta!",
      button: "Dizer oi 👋",
    },
    footer: "Feito com ☕ e React por Kauê Galon",
  },
  en: {
    nav: ["about", "ai", "experience", "projects", "contact"],
    intro: {
      hi: "hi, I'm",
      name: "Kauê Galon",
      typed: [
        "Java & Spring Boot on the backend.",
        "AI applied to software development.",
        "from spec to code, with agents.",
      ],
      bio: "Software engineer based in Curitiba, Brazil. I build Java / Spring Boot backends and use AI in a structured way across development, from specification to code review. Now I'm preparing to build products with AI inside.",
      cta: "Get in touch",
      cta2: "See projects",
    },
    about: {
      title: "about me",
      paragraphs: [
        "I'm a software engineer with about 4.5 years of experience in Java and Spring Boot backends, building microservices for large-scale, business-critical platforms.",
        "I started as a trainee at Wipro, migrating banking systems from COBOL to Java, and was promoted to developer. Then, still through Wipro, I joined an international, English-speaking team working on a microservices platform for a global technology manufacturer. Since October 2025 I've been at Senior Sistemas, shipping features and reviewing code across 30+ services.",
        "Over the last year AI changed the way I work. Now I want to go beyond using AI and build AI systems: LLMs integrated into the product, RAG and evals.",
        "I graduated in Computer Science from Universidade Positivo in December 2025, working throughout college, and I speak advanced English (C1).",
      ],
      techIntro: "Technologies I've been working with:",
      tech,
    },
    ai: {
      title: "AI in my daily work",
      lead: "I don't just ask a chat for code. I use Claude Code with my team's specialized agents, following GitHub Spec Kit, a spec-driven development flow. I drive each step, verify what the agents claim and give feedback when they get it wrong.",
      principlesTitle: "How I keep AI honest",
      nextTitle: "Next step",
      next: "Today I use agents and help improve them. The next step is building AI that serves end users: LLMs integrated into the product, RAG, automated evals, cost and latency in production. SmartFridge, with LangChain4j, is where I'm already practicing this.",
      tools: ["Claude Code", "GitHub Spec Kit", "MCP", "Skills", "LangChain4j"],
    },
    experience: { title: "experience" },
    projects: {
      title: "projects",
      featuredLabel: "Featured project",
      othersTitle: "other projects",
      more: "see all on GitHub",
    },
    contact: {
      title: "contact",
      heading: "Let's talk?",
      text: "I'm open to opportunities in Java and AI, and always happy to chat about agents, LLMs and backend. My inbox is always open!",
      button: "Say hi 👋",
    },
    footer: "Built with ☕ and React by Kauê Galon",
  },
};

export const projects = { featured, others };
export { aiFlow, aiPrinciples };
export { experience } from "./experience.js";
