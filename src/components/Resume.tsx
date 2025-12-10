import { Linkedin, Github, Mail, MapPin, Globe } from "lucide-react";

export function Resume({ locale = 'pt' }: { locale?: string }) {
  const monoFont = { fontFamily: "Geist Mono, monospace", lineHeight: "150%" };

  const t = locale === 'pt' ? {
    professionalSummary: 'Resumo Profissional',
    professionalSummaryText: 'Engenheiro de Machine Learning com forte experiência em deep learning, processamento de sinais e implantação de modelos em larga escala. Experiente em conectar pesquisa e produto usando pipelines reproduzíveis e práticas modernas de MLOps. Habilidoso no desenvolvimento de soluções orientadas por dados para dados estruturados e não estruturados em GCP e AWS.',
    education: 'Educação',
    inProgress: 'Em Andamento',
    graduated: 'Graduado Out 2025',
    focus: 'Foco',
    relevantCoursework: 'Disciplinas relevantes',
    experience: 'Experiência',
    present: 'Presente',
    publications: 'Publicações Selecionadas',
    leadership: 'Liderança e Contribuições',
    leadershipText: 'Liderou a integração de modelos de ML em sistemas de produção impactando grandes bases de usuários. Conduziu pesquisa de produto e testes A/B para melhoria de modelos. Contribuiu para projetos open-source em ML, processamento de sinais e educação em IA.',
  } : {
    professionalSummary: 'Professional Summary',
    professionalSummaryText: 'Machine Learning Engineer with a strong background in deep learning, signal processing, and large-scale model deployment. Experienced in bridging research and product using reproducible pipelines and modern MLOps practices. Skilled in developing data-driven solutions for structured and unstructured data across GCP and AWS.',
    education: 'Education',
    inProgress: 'In Progress',
    graduated: 'Graduated Oct 2025',
    focus: 'Focus',
    relevantCoursework: 'Relevant coursework',
    experience: 'Experience',
    present: 'Present',
    publications: 'Selected Publications',
    leadership: 'Leadership & Contributions',
    leadershipText: 'Led integration of ML models into production systems impacting large user bases. Conducted product research and A/B testing for model improvement. Contributed to open-source projects in ML, signal processing, and AI education.',
  };

  return (
    <div className="bg-white p-6">
      <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12 pb-8 border-b-2 border-gray-200">
        <h1 className="text-4xl mb-6 font-bold" style={monoFont}>Joaquim Breno Brito Cavalcante</h1>
        
        {/* Contact Info */}
        <div className="space-y-2 text-sm mb-6" style={monoFont}>
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>João Pessoa, Brazil</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <a href="mailto:contatojoaquim.breno@gmail.com" className="hover:underline transition-opacity hover:opacity-70">
              contatojoaquim.breno@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Globe size={16} />
            <a href="https://joaquimbreno.com" className="hover:underline transition-opacity hover:opacity-70">
              joaquimbreno.com
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 text-sm" style={monoFont}>
          <a href="https://linkedin.com/in/joaquimbreno" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline transition-opacity hover:opacity-70">
            <Linkedin size={16} />
            <span>linkedin.com/in/joaquimbreno</span>
          </a>
          <a href="https://github.com/joaquimbreno" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline transition-opacity hover:opacity-70">
            <Github size={16} />
            <span>github.com/joaquimbreno</span>
          </a>
        </div>
      </div>

      {/* Professional Summary */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6 font-bold" style={monoFont}>
          {t.professionalSummary}
        </h2>
        <p className="text-lg leading-relaxed bg-gray-50 p-6 border-l-4 border-black" style={monoFont}>
          {t.professionalSummaryText}
        </p>
      </section>

      {/* Education */}
      <section className="mb-12">
        <h2 className="text-2xl mb-8 font-bold" style={monoFont}>
          {t.education}
        </h2>
        <div className="space-y-6">
          {/* Master's Degree */}
          <div className="bg-gray-50 p-6 border-l-4 border-black">
            <div className="flex flex-wrap justify-between items-baseline gap-2 mb-2">
              <h3 className="font-bold text-lg" style={monoFont}>
                {locale === 'pt' ? 'Universidade Federal da Paraíba (UFPB)' : 'Federal University of Paraíba (UFPB)'}
              </h3>
              <span className="text-sm px-3 py-1 bg-black text-white" style={monoFont}>{t.inProgress}</span>
            </div>
            <p className="text-sm mb-3" style={monoFont}>
              {locale === 'pt' ? 'Mestrado em Ciência da Computação' : 'M.Sc. in Computer Science'} • 📍 João Pessoa, Brazil
            </p>
            <p className="text-sm" style={monoFont}>
              <span className="font-semibold">{t.focus}:</span> Machine Learning, Deep Learning, AI Research
            </p>
          </div>

          {/* Bachelor's Degree */}
          <div className="bg-gray-50 p-6 border-l-4 border-gray-400">
            <div className="flex flex-wrap justify-between items-baseline gap-2 mb-2">
              <h3 className="font-bold text-lg" style={monoFont}>
                {locale === 'pt' ? 'Universidade Federal da Paraíba (UFPB)' : 'Federal University of Paraíba (UFPB)'}
              </h3>
              <span className="text-sm px-3 py-1 bg-gray-200" style={monoFont}>{t.graduated}</span>
            </div>
            <p className="text-sm mb-3" style={monoFont}>
              {locale === 'pt' ? 'Bacharelado em Engenharia de Computação' : 'B.E. in Computer Engineering'} • 📍 João Pessoa, Brazil
            </p>
            <p className="text-sm" style={monoFont}>
              <span className="font-semibold">{t.relevantCoursework}:</span> Machine Learning, Deep Learning, Signal Processing, Algorithms
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-12">
        <h2 className="text-2xl mb-8 font-bold" style={monoFont}>
          {t.experience}
        </h2>
        <div className="space-y-8">
          {/* Machine Learning Researcher */}
          <div className="border-l-2 border-gray-300 pl-6 hover:border-black transition-colors">
            <div className="flex flex-wrap justify-between items-baseline gap-2 mb-2">
              <h3 className="font-bold text-lg" style={monoFont}>
                {locale === 'pt' ? 'Pesquisador de Machine Learning — Music AI' : 'Machine Learning Researcher — Music AI'}
              </h3>
              <span className="text-sm px-3 py-1 bg-black text-white" style={monoFont}>
                {locale === 'pt' ? 'Set 2025 – Presente' : 'Sep 2025 – Present'}
              </span>
            </div>
            <p className="text-sm mb-3 text-gray-600" style={monoFont}>📍 Salt Lake City, UT</p>
            <p style={monoFont}>
              {locale === 'pt' 
                ? 'Desenvolvo modelos de ML para auto-tune e aprimoramento de vocais, além de pipelines de dados para geração de metadados em larga escala e processamento de áudio em GCP. Lidero experimentação, versionamento de modelos, deployment e estudos de validação com usuários.'
                : 'Develop ML models to auto tune and enhance vocals and data pipelines for large-scale metadata generation and processing audio data across GCP. Lead experimentation, model versioning, deployment, and user validation studies.'}
            </p>
          </div>

          {/* Software Engineer & Co-founder */}
          <div className="border-l-2 border-gray-300 pl-6 hover:border-black transition-colors">
            <div className="flex flex-wrap justify-between items-baseline gap-2 mb-2">
              <h3 className="font-bold text-lg" style={monoFont}>
                {locale === 'pt' ? 'Engenheiro de Software e Co-fundador — GoodsLeads' : 'Software Engineer & Co-founder — GoodsLeads'}
              </h3>
              <span className="text-sm px-3 py-1 bg-gray-200" style={monoFont}>
                {locale === 'pt' ? 'Dez 2024 – Ago 2025' : 'Dec 2024 – Aug 2025'}
              </span>
            </div>
            <p className="text-sm mb-3 text-gray-600" style={monoFont}>📍 João Pessoa, Brazil</p>
            <p style={monoFont}>
              {locale === 'pt' ? (
                <>
                  Desenvolvi uma{' '}
                  <a href="https://goodsleads.com/" target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:text-gray-600">
                    plataforma
                  </a>{' '}
                  de captura e rastreamento de leads usando Google Maps API para captura direcionada. Implementei segmentação baseada em LLM com Claude e LangChain para classificação inteligente de leads. Construí workflows automatizados de email e geração de conteúdo usando n8n. Arquitetei infraestrutura escalável em AWS para processamento de dados e pipelines de automação.
                </>
              ) : (
                <>
                  Developed a lead data catching and tracking{' '}
                  <a href="https://goodsleads.com/" target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:text-gray-600">
                    platform
                  </a>{' '}
                  using Google Maps API for targeted lead capture. Implemented LLM-based segmentation with Claude and LangChain for intelligent lead classification. Built automated email and content generation workflows using n8n. Architected scalable infrastructure on AWS for data processing and automation pipelines.
                </>
              )}
            </p>
          </div>

          {/* ML Research Fellow */}
          <div className="border-l-2 border-gray-300 pl-6 hover:border-black transition-colors">
            <div className="flex flex-wrap justify-between items-baseline gap-2 mb-2">
              <h3 className="font-bold text-lg" style={monoFont}>
                {locale === 'pt' ? 'Bolsista de Pesquisa em ML — Bolsa de Pesquisa' : 'ML Research Fellow — Research Grant'}
              </h3>
              <span className="text-sm px-3 py-1 bg-gray-200" style={monoFont}>
                {locale === 'pt' ? 'Set 2023 – Set 2025' : 'Sep 2023 – Sep 2025'}
              </span>
            </div>
            <p className="text-sm mb-3 text-gray-600" style={monoFont}>📍 Salt Lake City, UT</p>
            <p style={monoFont}>
              {locale === 'pt'
                ? 'Projetei e implementei arquiteturas de alto desempenho para sincronização temporal de áudio com estado-da-arte, alcançando 5ms de precisão e baixa latência. Construí diagramas de acordes e extensões com Next/FastAPI. Publiquei resultados de pesquisa em conferências nacionais de Web Systems e MIR.'
                : 'Designed and implemented high-performing architectures for temporal audio synchronization with state-of-the-art with 5ms of accuracy and low latency. Built chords diagrams and chords extensions with Next/FastAPI. Published research findings in national Web Systems and MIR conferences.'}
            </p>
          </div>

          {/* Machine Learning Intern */}
          <div className="border-l-2 border-gray-300 pl-6 hover:border-black transition-colors">
            <div className="flex flex-wrap justify-between items-baseline gap-2 mb-2">
              <h3 className="font-bold text-lg" style={monoFont}>
                {locale === 'pt' ? 'Estagiário de Machine Learning — Moises Inc.' : 'Machine Learning Intern — Moises Inc.'}
              </h3>
              <span className="text-sm px-3 py-1 bg-gray-200" style={monoFont}>
                {locale === 'pt' ? 'Set 2021 – Set 2023' : 'Sep 2021 – Sep 2023'}
              </span>
            </div>
            <p className="text-sm mb-3 text-gray-600" style={monoFont}>📍 Salt Lake City, UT</p>
            <p style={monoFont}>
              {locale === 'pt'
                ? 'Desenvolvi modelos generativos e de classificação usados por milhões de usuários - rotulagem semântica de músicas. Construí infraestrutura escalável de ML com Docker e projetei pipelines de pré-processamento de dados ponta-a-ponta para treinamento de modelos em larga escala.'
                : 'Developed generative and classification models used by millions of users - semantic song labeling. Built scalable ML infrastructure with Docker and designed end-to-end data preprocessing pipelines for large-scale model training.'}
            </p>
          </div>

          {/* Fullstack Development Intern */}
          <div className="border-l-2 border-gray-300 pl-6 hover:border-black transition-colors">
            <div className="flex flex-wrap justify-between items-baseline gap-2 mb-2">
              <h3 className="font-bold text-lg" style={monoFont}>
                {locale === 'pt' ? 'Estagiário de Desenvolvimento Fullstack' : 'Fullstack Development Intern'}
              </h3>
              <span className="text-sm px-3 py-1 bg-gray-200" style={monoFont}>
                {locale === 'pt' ? 'Mai 2021 – Fev 2022' : 'May 2021 – Feb 2022'}
              </span>
            </div>
            <p className="text-sm mb-3 text-gray-600" style={monoFont}>📍 João Pessoa, Brazil</p>
            <p style={monoFont}>
              {locale === 'pt'
                ? 'Criei portais de dados seguros e dashboards interativos para plataformas de transparência governamental usando Angular e APIs REST Flask com analytics em tempo real.'
                : 'Created secure data portals and interactive dashboards for government transparency platforms using Angular and Flask REST APIs with real-time analytics.'}
            </p>
          </div>
        </div>
      </section>

      {/* Selected Publications */}
      <section className="mb-12">
        <h2 className="text-2xl mb-8 font-bold" style={monoFont}>
          {t.publications}
        </h2>
        <div className="space-y-6">
          <div className="border-l-2 border-gray-300 pl-6">
            <h3 className="font-bold text-lg mb-2" style={monoFont}>
              Representation Matters: Evaluating Spectral Representations for Temporal Modeling
            </h3>
            <p className="text-sm mb-2 text-gray-600" style={monoFont}>📄 Cavalcante et al. • 2024</p>
            <p style={monoFont}>
              {locale === 'pt'
                ? 'Propôs arquitetura melhorando a precisão de estimação temporal em 26% em datasets de referência.'
                : 'Proposed architecture improving temporal estimation accuracy by 26% on benchmark datasets.'}
            </p>
          </div>
          <div className="border-l-2 border-gray-300 pl-6">
            <h3 className="font-bold text-lg mb-2" style={monoFont}>
              HeroKeys: AI-Based Virtual Environment for Music Learning
            </h3>
            <p className="text-sm mb-2 text-gray-600" style={monoFont}>📄 Jordão, Cavalcante et al. • 2024</p>
            <p style={monoFont}>
              {locale === 'pt'
                ? 'Desenvolveu plataforma interativa combinando análise de performance baseada em ML e visualização gamificada.'
                : 'Developed interactive platform combining ML-based performance analysis and gamified visualization.'}
            </p>
          </div>
        </div>
      </section>

      {/* Leadership & Contributions */}
      <section className="mb-12">
        <h2 className="text-2xl mb-8 font-bold" style={monoFont}>
          {t.leadership}
        </h2>
        <p className="text-lg leading-relaxed bg-gray-50 p-6 border-l-4 border-gray-400" style={monoFont}>
          {t.leadershipText}
        </p>
      </section>
      </div>
    </div>
  );
}

