// Experiências — cada conquista no método STAR (Situação, Tarefa, Ação, Resultado)

export const starLabels = {
  pt: { s: "Situação", t: "Tarefa", a: "Ação", r: "Resultado", ai: "Ponte com IA" },
  en: { s: "Situation", t: "Task", a: "Action", r: "Result", ai: "AI bridge" },
};

export const experience = [
  {
    company: "Senior Sistemas",
    role: { pt: "Software Engineer II (Pleno)", en: "Software Engineer II (Mid)" },
    period: { pt: "OUT 2025 — HOJE", en: "OCT 2025 — PRESENT" },
    context: {
      pt: "Plataforma de HCM (RH) com 40+ microsserviços independentes: folha, benefícios, ponto, férias, analytics e rede social corporativa.",
      en: "HCM platform with 40+ independently deployed microservices: payroll, benefits, time & attendance, vacation, analytics and a corporate social network.",
    },
    star: {
      pt: [
        {
          title: "Liderei a migração Java 11 → 17",
          s: "O backend da rede social corporativa rodava em Java 11 e dependia de bibliotecas compartilhadas com outros serviços.",
          t: "Liderar a migração para Java 17 sem travar as entregas nem quebrar os serviços dependentes.",
          a: "Dividi o trabalho em quatro frentes coordenadas, atualizei QueryDSL e as bibliotecas internas, reconciliei versões pelo Maven BOM central, troquei APIs depreciadas, corrigi o log que mudou com o JDK novo e consertei a suíte de testes sem desligar nenhum teste.",
          r: "O serviço continuou publicável a cada passo, e a migração foi levada depois para um segundo serviço pelo mesmo caminho.",
          ai: "Dividir uma mudança grande em partes que funcionam sozinhas é o que o fluxo de spec, plano e tarefas faz com os agentes.",
        },
        {
          title: "Subsistema de notificações de ponta a ponta",
          s: "A rede social corporativa não avisava as pessoas sobre novidades em posts e espaços colaborativos.",
          t: "Projetar e construir a capacidade de notificação do zero.",
          a: "Criei tipos de evento próprios para posts e espaços e 4 modos de entrega: individual ou em massa, com ou sem link direto para o conteúdo. Testes com JUnit e Mockito.",
          r: "Subsistema em produção cobrindo todos os cenários de entrega da plataforma.",
        },
        {
          title: "Release com defeito em produção",
          s: "Uma versão do serviço de notificações foi para produção com defeito.",
          t: "Estabilizar rápido e entregar a funcionalidade corretamente.",
          a: "Diagnostiquei a causa, fiz um revert controlado da branch, entreguei a funcionalidade de novo de forma limpa e resolvi os apontamentos de análise estática que o incidente revelou.",
          r: "Produção estabilizada e funcionalidade entregue sem o defeito, com o código mais limpo do que antes. Primeiro estabilizar, depois corrigir direito.",
        },
        {
          title: "Brecha de permissão fechada",
          s: "Usuários sem permissão conseguiam editar e excluir perfis corporativos.",
          t: "Fechar a brecha de forma que não pudesse ser contornada pelo cliente.",
          a: "Corrigi a validação na API e na interface, em vez de só esconder o botão, e corrigi também uma falha de acesso a recurso.",
          r: "Ações sensíveis protegidas nas duas camadas.",
          ai: "Com agentes é igual: permissão mínima e confirmação humana em ação sensível. Esconder não é proteger.",
        },
        {
          title: "Segredo fixo removido do código",
          s: "O Sonar apontou um segredo fixo no código de um serviço.",
          t: "Tirar o segredo do código sem quebrar o serviço e sem expor o valor.",
          a: "O valor saiu do código e passou para uma configuração gerenciada pelo time de SRE. Para provar que a configuração do ambiente batia com o código sem expor o valor, colocamos logs temporários do handler até o ponto da chamada, validamos no ambiente de teste e depois removemos os logs extras.",
          r: "O apontamento sumiu da análise do Sonar e o PR foi aprovado.",
          ai: "Com agentes vale a mesma regra: credencial só em variável de ambiente, nunca em resposta, arquivo ou log.",
        },
        {
          title: "Métricas de analytics confiáveis",
          s: "Um indicador de engajamento total estava inflado e uma view mensal do PostgreSQL devolvia agregados errados.",
          t: "Devolver a confiabilidade aos relatórios usados pela gestão.",
          a: "Corrigi a diferenciação de usuários no cálculo e a view do PostgreSQL, e entreguei novas análises de engajamento de perfil.",
          r: "Relatórios da gestão voltaram a refletir os números reais.",
          ai: "Avaliar IA depende de métrica certa. Com métrica errada você comemora o que está errado.",
        },
        {
          title: "Revisor de código em 30+ serviços",
          s: "Plataforma com 40+ serviços e mudanças grandes em andamento: a migração GitLab → GitHub (CI/CD de ~20 repositórios), um hardening que tirou o acesso direto dos serviços ao schema public do PostgreSQL e a construção do domínio de benefícios de saúde e odonto.",
          t: "Garantir qualidade e consistência para além do meu próprio módulo.",
          a: "Atuei como revisor transversal, usando agentes de IA no pré code review para pegar o óbvio e focando em arquitetura, regra de negócio e risco.",
          r: "77 merge requests revisados em mais de 30 serviços, cerca de 2 revisões para cada MR meu.",
          ai: "Por isso me interessei pelos agentes de code review: o pré-review com IA pega o óbvio, e eu foco em arquitetura, regra de negócio e risco.",
        },
      ],
      en: [
        {
          title: "Led the Java 11 → 17 migration",
          s: "The corporate social network backend ran on Java 11 and depended on libraries shared with other services.",
          t: "Lead the migration to Java 17 without blocking deliveries or breaking dependent services.",
          a: "Split the work into four coordinated streams, upgraded QueryDSL and internal libraries, reconciled versions through the central Maven BOM, replaced deprecated APIs, fixed logging changed by the new JDK and repaired the test suite without disabling tests.",
          r: "The service stayed releasable at every step, and the migration was later propagated to a second service the same way.",
          ai: "Splitting a big change into parts that work on their own is exactly what the spec → plan → tasks flow does with agents.",
        },
        {
          title: "End-to-end notification subsystem",
          s: "The corporate social network didn't notify people about activity in posts and collaborative spaces.",
          t: "Design and build the notification capability from scratch.",
          a: "Created dedicated event types for posts and spaces and 4 delivery modes: single or bulk, with or without deep links. Tested with JUnit and Mockito.",
          r: "Subsystem in production covering every delivery scenario on the platform.",
        },
        {
          title: "Defective production release",
          s: "A notification service release reached production with a defect.",
          t: "Stabilize quickly and deliver the feature correctly.",
          a: "Diagnosed the cause, executed a controlled branch revert, re-delivered the feature cleanly and resolved the static-analysis findings the incident surfaced.",
          r: "Production stabilized and the feature shipped without the defect, with cleaner code than before. Stabilize first, then fix it properly.",
        },
        {
          title: "Permission bypass closed",
          s: "Users without permission could edit and delete corporate profiles.",
          t: "Close the gap so it couldn't be bypassed client-side.",
          a: "Fixed validation at both API and UI layers instead of just hiding the button, and fixed a resource-access flaw.",
          r: "Sensitive actions protected at both layers.",
          ai: "Same with agents: least privilege and human confirmation on sensitive actions. Hiding is not protecting.",
        },
        {
          title: "Hardcoded secret removed",
          s: "Sonar flagged a hardcoded secret in a service's code.",
          t: "Get the secret out of the code without breaking the service or exposing the value.",
          a: "The value moved to a configuration managed by the SRE team. To prove the environment config matched the code without exposing it, we added temporary logs from the handler to the call site, validated them in the test environment and then removed them.",
          r: "The finding disappeared from Sonar and the PR was approved.",
          ai: "Same rule with agents: credentials only in environment variables, never in a response, file or log.",
        },
        {
          title: "Reliable analytics",
          s: "A total-engagement metric was inflated and a monthly PostgreSQL view returned wrong aggregates.",
          t: "Restore the reliability of management reports.",
          a: "Fixed user differentiation in the calculation and the PostgreSQL view, and delivered new profile-engagement analytics.",
          r: "Management reports reflect the real numbers again.",
          ai: "Evaluating AI depends on the right metric. With the wrong one, you celebrate what is wrong.",
        },
        {
          title: "Code reviewer across 30+ services",
          s: "A 40+ service platform with large changes in flight: the GitLab → GitHub migration (CI/CD for ~20 repos), hardening that removed direct service access to the PostgreSQL public schema, and the health & dental benefits domain build-out.",
          t: "Ensure quality and consistency beyond my own module.",
          a: "Acted as a cross-cutting reviewer, using AI agents for pre-review to catch the obvious while I focused on architecture, business rules and risk.",
          r: "77 merge requests reviewed across 30+ services, about 2 reviews for every MR I authored.",
          ai: "That is why I got into code review agents: AI pre-review catches the obvious, and I focus on architecture, business rules and risk.",
        },
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
    star: {
      pt: [
        {
          title: "Criação de sessão de 15s para 3s",
          s: "Numa plataforma de onboarding de dispositivos com muitos microsserviços e alto volume, alguns usuários recebiam respostas incorretas ou incompletas na criação de sessão. O time era internacional e o dia a dia era em inglês.",
          t: "Achar a causa raiz num fluxo que atravessava vários microsserviços.",
          a: "Rastreei a requisição de ponta a ponta pelos correlation IDs no Splunk, reconstruí o payload a partir dos logs e reproduzi a falha localmente. A causa era excesso de dados e campos tratados de forma diferente entre serviços, então redesenhei o payload e padronizei o tratamento.",
          r: "Fluxo estável e tempo de resposta da criação de sessão de 15s para 3s, uma melhora de 80%.",
          ai: "É o mesmo raciocínio que uso com agentes: menos dado e mais padronizado deixa tudo mais rápido e mais barato. E reproduzir e comparar é como eu valido o que a IA afirma.",
        },
        {
          title: "Novas funcionalidades de impressoras",
          s: "A plataforma de onboarding precisava suportar novas funcionalidades de impressoras.",
          t: "Implementar sem comprometer os fluxos existentes, num time internacional em inglês.",
          a: "Desenvolvi as funcionalidades com Java e Spring Boot e participei de code reviews e discussões de arquitetura.",
          r: "Funcionalidades entregues em colaboração com times globais.",
        },
      ],
      en: [
        {
          title: "Session creation from 15s to 3s",
          s: "On a high-volume device onboarding platform with many microservices, some users got incorrect or incomplete responses when creating a session. The team was international and worked in English.",
          t: "Find the root cause in a flow spanning several microservices.",
          a: "Traced the request end to end via correlation IDs in Splunk, rebuilt the payload from logs and reproduced the failure locally. The cause was excess data and inconsistent field handling across services, so I redesigned the payload and standardized the handling.",
          r: "Stable flow and session-creation response time down from 15s to 3s, an 80% improvement.",
          ai: "Same reasoning I use with agents: less, more standardized data makes everything faster and cheaper. And reproducing and comparing is how I validate what AI claims.",
        },
        {
          title: "New printer features",
          s: "The onboarding platform needed to support new printer features.",
          t: "Implement them without compromising existing flows, in an international English-speaking team.",
          a: "Built the features with Java and Spring Boot and took part in code reviews and architecture discussions.",
          r: "Features delivered in collaboration with global teams.",
        },
      ],
    },
  },
  {
    company: "Wipro",
    tab: "Wipro · 2022–24",
    role: { pt: "Trainee → Desenvolvedor Java", en: "Trainee → Java Developer" },
    period: { pt: "ABR 2022 — OUT 2024", en: "APR 2022 — OCT 2024" },
    context: {
      pt: "Consultoria no setor bancário, em ambiente mainframe crítico para o negócio.",
      en: "Consulting engagement in the banking sector, in a business-critical mainframe environment.",
    },
    star: {
      pt: [
        {
          title: "De COBOL para Java",
          s: "Sistemas legados de empréstimo, escritos em COBOL, rodando num mainframe crítico.",
          t: "Migrar para Java mantendo todas as regras de negócio e a confiabilidade.",
          a: "Migrei e adaptei programas para arquiteturas modernas, trabalhando com Java, COBOL, CICS e DB2. Também cuidei de suporte e incidentes em programas de empréstimo e usei Python para análise de dados e automação de tarefas manuais.",
          r: "Modernização entregue com confiabilidade e promoção de Trainee a Desenvolvedor Java.",
          ai: "Código legado é onde a IA mais ajuda a entender, e onde mais precisa ser conferida, porque a regra de negócio está escondida no código.",
        },
      ],
      en: [
        {
          title: "From COBOL to Java",
          s: "Legacy loan systems written in COBOL, running on a business-critical mainframe.",
          t: "Migrate to Java while keeping every business rule and the reliability.",
          a: "Migrated and adapted programs to modern architectures with Java, COBOL, CICS and DB2. Also handled support and incidents on loan programs and used Python for data analysis and automating manual tasks.",
          r: "Modernization delivered reliably, and a promotion from Trainee to Java Developer.",
          ai: "Legacy code is where AI helps most to understand, and where it most needs checking, because the business rules hide in the code.",
        },
      ],
    },
  },
  {
    company: "Colégio Positivo",
    role: { pt: "Estagiário de Desenvolvimento", en: "Software Development Intern" },
    period: { pt: "SET 2021 — MAR 2022", en: "SEP 2021 — MAR 2022" },
    context: null,
    star: {
      pt: [
        {
          title: "Alocação de salas e site da escola",
          s: "A equipe administrativa precisava organizar a alocação de salas, e o site da escola precisava de novas funcionalidades.",
          t: "Criar ferramentas que deixassem a operação mais eficiente.",
          a: "Desenvolvi aplicações de alocação de salas e funcionalidades em JavaScript para o site.",
          r: "Mais eficiência operacional e uma experiência melhor para alunos e equipe.",
        },
      ],
      en: [
        {
          title: "Classroom scheduling and school website",
          s: "The admin team needed to organize classroom allocation, and the school website needed new features.",
          t: "Build tools that made operations more efficient.",
          a: "Built classroom-scheduling applications and JavaScript features for the website.",
          r: "Better operational efficiency and a better experience for students and staff.",
        },
      ],
    },
  },
];
