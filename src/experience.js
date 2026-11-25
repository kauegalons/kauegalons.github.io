// Experiências — em bullets, só com o que está no currículo

export const experience = [
  {
    company: "Senior Sistemas",
    role: { pt: "Software Engineer II (Pleno)", en: "Software Engineer II (Mid)" },
    period: { pt: "OUT 2025 — HOJE", en: "OCT 2025 — PRESENT" },
    context: {
      pt: "Plataforma de HCM (RH) com 40+ microsserviços independentes: folha, benefícios, ponto, férias, analytics e rede social corporativa.",
      en: "HCM platform with 40+ independently deployed microservices: payroll, benefits, time & attendance, vacation, analytics and a corporate social network.",
    },
    bullets: {
      pt: [
        "Liderei a migração do Java 11 para o 17 no backend da rede social corporativa, em quatro frentes coordenadas para manter o serviço publicável a cada passo. Atualizei QueryDSL e bibliotecas internas, reconciliei versões pelo Maven BOM central, troquei APIs depreciadas e consertei a suíte de testes. Levei a migração depois para um segundo serviço.",
        "Projetei e construí de ponta a ponta o subsistema de notificações da plataforma, com tipos de evento para posts e espaços colaborativos e 4 modos de entrega (individual ou em massa, com ou sem link direto).",
        "Diagnostiquei uma release com defeito em produção no serviço de notificações, fiz um revert controlado, entreguei a funcionalidade de novo de forma limpa e resolvi os apontamentos de análise estática que o incidente revelou.",
        "Corrigi métricas de analytics: um indicador de engajamento inflado e uma view mensal do PostgreSQL com agregados errados, devolvendo a confiabilidade aos relatórios da gestão. Entreguei novas análises de engajamento de perfil.",
        "Fechei brechas de permissão que permitiam editar e excluir perfis corporativos sem autorização, corrigindo na API e na interface, além de uma falha de acesso a recurso.",
        "Implementei a persistência e a API de um carrossel de conteúdo configurável na página inicial da plataforma, junto com o time de front-end.",
        "Revisei 77 merge requests em 30+ serviços (cerca de 2 revisões para cada MR meu), incluindo a migração GitLab → GitHub (CI/CD de ~20 repositórios), o hardening de acesso ao PostgreSQL e o domínio de benefícios de saúde e odonto.",
        "Resolvi apontamentos de análise estática na causa raiz, em vez de suprimi-los.",
      ],
      en: [
        "Led the Java 11 → 17 migration of the corporate social network backend across four coordinated work streams, keeping the service releasable at every step. Upgraded QueryDSL and internal libraries, reconciled versions through the central Maven BOM, replaced deprecated APIs and repaired the test suite. Later propagated the migration to a second service.",
        "Designed and built the platform's notification subsystem end to end, with event types for posts and collaborative spaces and 4 delivery modes (single or bulk, with or without deep links).",
        "Diagnosed a defective production release in the notification service, executed a controlled revert, re-delivered the feature cleanly and resolved the static-analysis findings the incident surfaced.",
        "Fixed analytics accuracy issues: an inflated total-engagement metric and a monthly PostgreSQL view returning wrong aggregates, restoring the reliability of management reports. Delivered new profile-engagement analytics.",
        "Closed permission-bypass defects that allowed unauthorized edit and delete actions on corporate profiles, at both API and UI layers, and fixed a resource-access flaw.",
        "Implemented persistence and the retrieval API for a configurable content carousel on the platform's landing page, together with the front-end team.",
        "Reviewed 77 merge requests across 30+ services (~2:1 review-to-authorship ratio), including the GitLab → GitHub migration (CI/CD for ~20 repositories), the PostgreSQL access hardening and the health & dental benefits domain.",
        "Resolved static-analysis findings at the root cause instead of suppressing them.",
      ],
    },
  },
  {
    company: "Wipro",
    tab: "Wipro · 2024–25",
    role: { pt: "Software Engineer", en: "Software Engineer" },
    period: { pt: "OUT 2024 — OUT 2025", en: "OCT 2024 — OCT 2025" },
    context: {
      pt: "Consultoria para uma fabricante global de tecnologia e dispositivos. Time internacional, dia a dia em inglês.",
      en: "Consulting engagement for a global technology & device manufacturer. International, English-speaking team.",
    },
    bullets: {
      pt: [
        "Desenvolvi novas funcionalidades de impressoras numa plataforma modular de onboarding de dispositivos, com Java e Spring Boot.",
        "Resolvi uma inconsistência crítica na criação de sessão, em que alguns usuários recebiam respostas incorretas ou incompletas num fluxo de alto volume entre vários microsserviços. Rastreei a requisição pelos correlation IDs no Splunk e reconstruí o payload a partir dos logs para reproduzir a falha localmente.",
        "Redesenhei a estrutura do payload e padronizei o tratamento dos campos entre serviços, estabilizando o fluxo e reduzindo o tempo de criação de sessão de 15s para 3s (80% mais rápido).",
        "Revisei pull requests e participei de discussões de arquitetura para manter boas práticas de design e manutenibilidade.",
      ],
      en: [
        "Built new printer features for a modular device onboarding platform, using Java and Spring Boot.",
        "Resolved a critical session-creation inconsistency where some users got incorrect or incomplete responses in a high-volume, multi-service flow. Traced the request via correlation IDs in Splunk and rebuilt the payload from logs to reproduce the failure locally.",
        "Redesigned the payload structure and standardized field handling across services, stabilizing the flow and cutting session creation from 15s to 3s (80% faster).",
        "Reviewed pull requests and took part in architecture discussions to uphold design and maintainability best practices.",
      ],
    },
  },
  {
    company: "Wipro",
    tab: "Wipro · 2022–24",
    role: { pt: "Trainee → Desenvolvedor Java", en: "Trainee → Java Developer" },
    period: { pt: "ABR 2022 — OUT 2024", en: "APR 2022 — OCT 2024" },
    context: {
      pt: "Consultoria no setor bancário, em ambiente mainframe crítico para o negócio. Promovido de Trainee a Desenvolvedor Java.",
      en: "Consulting engagement in the banking sector, in a business-critical mainframe environment. Promoted from Trainee to Java Developer.",
    },
    bullets: {
      pt: [
        "Migrei sistemas bancários legados de COBOL para Java, garantindo as regras de negócio e a confiabilidade, e adaptei programas para arquiteturas modernas.",
        "Trabalhei com Java, COBOL, CICS, DB2 e Python em otimização de rotinas, análise de dados, resolução de incidentes e manutenção de programas de empréstimo.",
        "Apliquei automação para reduzir tarefas manuais.",
      ],
      en: [
        "Migrated legacy banking systems from COBOL to Java, preserving business rules and reliability, and adapted programs to modern architectures.",
        "Worked with Java, COBOL, CICS, DB2 and Python on routine optimization, data analysis, incident resolution and maintenance of loan programs.",
        "Applied automation practices to reduce manual tasks.",
      ],
    },
  },
  {
    company: "Colégio Positivo",
    role: { pt: "Estagiário de Desenvolvimento", en: "Software Development Intern" },
    period: { pt: "SET 2021 — MAR 2022", en: "SEP 2021 — MAR 2022" },
    context: null,
    bullets: {
      pt: [
        "Desenvolvi aplicações de alocação de salas e funcionalidades em JavaScript para o site da escola, melhorando a eficiência operacional e a experiência dos usuários.",
      ],
      en: [
        "Built classroom-scheduling applications and JavaScript features for the school's website, improving operational efficiency and user experience.",
      ],
    },
  },
];
