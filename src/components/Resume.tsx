export function Resume() {
  const monoFont = { fontFamily: "Geist Mono, monospace", lineHeight: "150%" };

  return (
    <div className="bg-white p-6">
      <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl mb-4" style={monoFont}>Joaquim Breno Brito Cavalcante</h1>
        <div className="space-y-1 text-sm" style={monoFont}>
          <p>João Pessoa, Brazil </p>
          <p>
            <a href="mailto:contatojoaquim.breno@gmail.com" className="hover:underline">
              contatojoaquim.breno@gmail.com
            </a>
          </p>
          <p>
            <a href="https://joaquimbreno.com" className="hover:underline">joaquimbreno.com</a>
            {' | '}
            <a href="https://linkedin.com/in/joaquimbreno" target="_blank" rel="noopener noreferrer" className="hover:underline">
              linkedin.com/in/joaquimbreno
            </a>
            {' | '}
            <a href="https://github.com/joaquimbreno" target="_blank" rel="noopener noreferrer" className="hover:underline">
              github.com/joaquimbreno
            </a>
          </p>
        </div>
      </div>

      {/* Professional Summary */}
      <section className="mb-8">
        <h2 className="text-xl mb-6 font-semibold border-b border-gray-300 pb-3" style={monoFont}>
          Professional Summary
        </h2>
        <p style={monoFont}>
          Machine Learning Engineer with a strong background in deep learning, signal processing, and 
          large-scale model deployment. Experienced in bridging research and product using reproducible 
          pipelines and modern MLOps practices. Skilled in developing data-driven solutions for structured 
          and unstructured data across GCP and AWS.
        </p>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-xl mb-6 font-semibold border-b border-gray-300 pb-3" style={monoFont}>
          Education
        </h2>
        <div>
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="font-semibold" style={monoFont}>Federal University of Paraíba (UFPB)</h3>
            <span className="text-sm" style={monoFont}>Graduated Oct 2025</span>
          </div>
          <p className="text-sm mb-2" style={monoFont}>B.E. in Computer Engineering — João Pessoa, Brazil</p>
          <p style={monoFont}>
            Relevant coursework: Machine Learning, Deep Learning, Signal Processing, Algorithms
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <h2 className="text-xl mb-6 font-semibold border-b border-gray-300 pb-3" style={monoFont}>
          Experience
        </h2>
        <div className="space-y-6">
          {/* Machine Learning Researcher */}
          <div>
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="font-semibold" style={monoFont}>Machine Learning Researcher — Music AI</h3>
              <span className="text-sm" style={monoFont}>Sep 2025 – Present</span>
            </div>
            <p className="text-sm mb-2" style={monoFont}>Salt Lake City, UT</p>
            <p style={monoFont}>
              Develop ML models to auto tune and enhance vocals and data pipelines for large-scale metadata 
              generation and processing audio data across GCP. Lead experimentation, model versioning, 
              deployment, and user validation studies.
            </p>
          </div>

          {/* Software Engineer & Co-founder */}
          <div>
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="font-semibold" style={monoFont}>Software Engineer & Co-founder — GoodsLeads</h3>
              <span className="text-sm" style={monoFont}>Dec 2024 – Aug 2025</span>
            </div>
            <p className="text-sm mb-2" style={monoFont}>João Pessoa, Brazil</p>
            <p style={monoFont}>
              Developed a lead data catching and tracking{' '}
              <a href="https://goodsleads.com/" target="_blank" rel="noopener noreferrer" className="underline">
                platform
              </a>{' '}
              using Google Maps API for targeted lead capture. Implemented LLM-based segmentation with Claude 
              and LangChain for intelligent lead classification. Built automated email and content generation 
              workflows using n8n. Architected scalable infrastructure on AWS for data processing and automation 
              pipelines.
            </p>
          </div>

          {/* ML Research Fellow */}
          <div>
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="font-semibold" style={monoFont}>ML Research Fellow — Research Grant in Machine Learning</h3>
              <span className="text-sm" style={monoFont}>Sep 2023 – Sep 2025</span>
            </div>
            <p className="text-sm mb-2" style={monoFont}>Salt Lake City, UT</p>
            <p style={monoFont}>
              Designed and implemented high-performing architectures for temporal audio synchronization with 
              state-of-the-art with 5ms of accuracy and low latency. Built chords diagrams and chords extensions 
              with Next/FastAPI. Published research findings in national Web Systems and MIR conferences.
            </p>
          </div>

          {/* Machine Learning Intern */}
          <div>
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="font-semibold" style={monoFont}>Machine Learning Intern — Moises Inc.</h3>
              <span className="text-sm" style={monoFont}>Sep 2021 – Sep 2023</span>
            </div>
            <p className="text-sm mb-2" style={monoFont}>Salt Lake City, UT</p>
            <p style={monoFont}>
              Developed generative and classification models used by millions of users - semantic song labeling. 
              Built scalable ML infrastructure with Docker and designed end-to-end data preprocessing pipelines 
              for large-scale model training.
            </p>
          </div>

          {/* Fullstack Development Intern */}
          <div>
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="font-semibold" style={monoFont}>Fullstack Development Intern — State Court of Auditors of Paraíba</h3>
              <span className="text-sm" style={monoFont}>May 2021 – Feb 2022</span>
            </div>
            <p className="text-sm mb-2" style={monoFont}>João Pessoa, Brazil</p>
            <p style={monoFont}>
              Created secure data portals and interactive dashboards for government transparency platforms using 
              Angular and Flask REST APIs with real-time analytics.
            </p>
          </div>
        </div>
      </section>

      {/* Selected Publications */}
      <section className="mb-8">
        <h2 className="text-xl mb-6 font-semibold border-b border-gray-300 pb-3" style={monoFont}>
          Selected Publications
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold" style={monoFont}>
              Representation Matters: Evaluating Spectral Representations for Temporal Modeling (2024)
            </h3>
            <p className="text-sm mb-1" style={monoFont}>Cavalcante et al.</p>
            <p style={monoFont}>
              Proposed architecture improving temporal estimation accuracy by 26% on benchmark datasets.
            </p>
          </div>
          <div>
            <h3 className="font-semibold" style={monoFont}>
              HeroKeys: AI-Based Virtual Environment for Music Learning (2024)
            </h3>
            <p className="text-sm mb-1" style={monoFont}>Jordão, Cavalcante et al.</p>
            <p style={monoFont}>
              Developed interactive platform combining ML-based performance analysis and gamified visualization.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership & Contributions */}
      <section className="mb-8">
        <h2 className="text-xl mb-6 font-semibold border-b border-gray-300 pb-3" style={monoFont}>
          Leadership & Contributions
        </h2>
        <p style={monoFont}>
          Led integration of ML models into production systems impacting large user bases. Conducted product 
          research and A/B testing for model improvement. Contributed to open-source projects in ML, signal 
          processing, and AI education.
        </p>
      </section>
      </div>
    </div>
  );
}

