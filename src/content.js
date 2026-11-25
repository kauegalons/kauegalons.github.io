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

// Conceitos de engenharia de IA aplicados no dia a dia
const aiPrinciples = {
  pt: [
    { title: "Orquestração", text: "A sessão principal delega cada etapa a um subagente especializado e recebe o relatório de volta." },
    { title: "Engenharia de contexto", text: "Constitution, arquivo de regras (CLAUDE.md), skills carregadas sob demanda e memória persistente entre sessões." },
    { title: "Custo", text: "Compressão de saída (caveman) e contexto enxuto para gastar menos tokens." },
    { title: "Guardrails e humano no loop", text: "Confirmação passo a passo, revisão só de leitura e nada publicado sem OK. Nota de risco de alucinação, credenciais só por variável de ambiente (nunca em resposta, arquivo ou log) e sistemas antigos só com leitura." },
    { title: "Quality gates", text: "Analyze, checklist, TDD e Sonar antes de qualquer código seguir adiante." },
    { title: "Portabilidade", text: "O time trocou de ferramenta (Kiro → Claude Code) e os agentes continuaram os mesmos. O valor está no processo e no contexto, não na ferramenta." },
  ],
  en: [
    { title: "Orchestration", text: "The main session delegates each step to a specialized subagent and gets a report back." },
    { title: "Context engineering", text: "Constitution, a rules file (CLAUDE.md), on-demand skills and persistent memory across sessions." },
    { title: "Cost", text: "Output compression (caveman) and lean context to spend fewer tokens." },
    { title: "Guardrails & human in the loop", text: "Step-by-step confirmation, read-only review and nothing published without approval. Hallucination-risk notes, credentials only via environment variables (never in a response, file or log) and legacy systems read-only." },
    { title: "Quality gates", text: "Analyze, checklist, TDD and Sonar before any code moves forward." },
    { title: "Portability", text: "The team switched tools (Kiro → Claude Code) and the agents stayed the same. The value lives in the process and the context, not the tool." },
  ],
};

const tech = ["Java 11 · 17 · 21", "Spring Boot", "AWS", "Claude Code", "Python", "PostgreSQL", "Microservices", "Docker / Kubernetes", "JUnit", "TDD"];

export const content = {
  pt: {
    nav: ["sobre", "ia", "experiência", "projetos", "contato"],
    intro: {
      hi: "oi, eu sou o",
      name: "Kauê Galon",
      typed: [
        "Java & Spring Boot no backend.",
        "IA aplicada ao desenvolvimento.",
        "software ponta a ponta, com IA.",
      ],
      bio: "Engenheiro de software em Curitiba. Construo backends em Java e Spring Boot e fluxos de IA com agentes orquestrados, ponta a ponta. Busco vagas remotas como AI Engineer.",
      cta: "Fale comigo",
      cta2: "Ver projetos",
    },
    about: {
      title: "sobre mim",
      paragraphs: [
        "Sou engenheiro de software com 5 anos de experiência em backend Java e Spring Boot, construindo microsserviços para plataformas grandes e críticas para o negócio. Sou formado em Ciência da Computação pela Universidade Positivo e falo inglês avançado (C1).",
        "Na Wipro, migrei sistemas bancários legados de COBOL para Java em ambiente mainframe e fui promovido de Trainee a Desenvolvedor Java. Depois, num time internacional em inglês, desenvolvi microsserviços em Java e Spring Boot para a plataforma de onboarding de dispositivos de uma fabricante global de tecnologia. Na Senior Sistemas, numa plataforma de HCM com 40+ microsserviços, liderei a migração do Java 11 para o 17, construí o subsistema de notificações de ponta a ponta e atuo como revisor de código em 30+ serviços.",
        "Hoje construo fluxos de desenvolvimento com IA: orquestro agentes e subagentes especializados, com engenharia de contexto, guardrails e quality gates em cada etapa. Busco vagas remotas como AI Engineer, construindo sistemas com LLMs integrados ao produto, RAG e evals.",
      ],
      techIntro: "Tecnologias com que tenho trabalhado:",
      tech,
    },
    ai: {
      title: "IA no dia a dia",
      lead: "Desenvolvo com agentes de IA orquestrados no Claude Code, com os agentes especializados do time. Cada etapa roda com contexto definido, guardrails e quality gates, e nada vai adiante sem a minha revisão.",
      principlesTitle: "Conceitos que aplico no dia a dia",
      nextTitle: "Próximo passo",
      next: "Migrar para AI Engineer / Forward Deployed Engineer: levar LLMs para dentro do produto, com RAG, evals, custo e latência sob controle em produção.",
      tools: ["Claude Code", "GitHub Spec Kit", "MCP", "Skills", "Subagentes"],
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
      text: "Estou aberto a vagas remotas como AI Engineer e em Java, e também a trocar ideia sobre agentes, LLMs e backend. Minha caixa de entrada está sempre aberta!",
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
        "end-to-end software, with AI.",
      ],
      bio: "Software engineer based in Curitiba, Brazil. I build Java / Spring Boot backends and AI workflows with orchestrated agents, end to end. Looking for remote AI Engineer roles.",
      cta: "Get in touch",
      cta2: "See projects",
    },
    about: {
      title: "about me",
      paragraphs: [
        "I'm a software engineer with 5 years of experience in Java and Spring Boot backends, building microservices for large-scale, business-critical platforms. I hold a Computer Science degree from Universidade Positivo and speak advanced English (C1).",
        "At Wipro, I migrated legacy banking systems from COBOL to Java in a mainframe environment and was promoted from Trainee to Java Developer. Then, in an international English-speaking team, I built Java and Spring Boot microservices for the device onboarding platform of a global technology manufacturer. At Senior Sistemas, on an HCM platform with 40+ microservices, I led the Java 11 → 17 migration, built the notification subsystem end to end and act as a code reviewer across 30+ services.",
        "Today I build AI-driven development workflows: I orchestrate specialized agents and subagents, with context engineering, guardrails and quality gates at every step. I'm looking for remote AI Engineer roles, building systems with LLMs integrated into the product, RAG and evals.",
      ],
      techIntro: "Technologies I've been working with:",
      tech,
    },
    ai: {
      title: "AI in my daily work",
      lead: "I develop with AI agents orchestrated in Claude Code, using my team's specialized agents. Every step runs with defined context, guardrails and quality gates, and nothing moves forward without my review.",
      principlesTitle: "Concepts I apply every day",
      nextTitle: "Next step",
      next: "Move into an AI Engineer / Forward Deployed Engineer role: bringing LLMs into the product, with RAG, evals, and cost and latency under control in production.",
      tools: ["Claude Code", "GitHub Spec Kit", "MCP", "Skills", "Subagents"],
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
      text: "I'm open to remote AI Engineer and Java roles, and always happy to chat about agents, LLMs and backend. My inbox is always open!",
      button: "Say hi 👋",
    },
    footer: "Built with ☕ and React by Kauê Galon",
  },
};

export const projects = { featured, others };
export { aiFlow, aiPrinciples };
export { experience } from "./experience.js";
