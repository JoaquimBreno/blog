import { Linkedin, Github, Mail, MapPin, Globe } from "lucide-react";

export function Resume() {
  const monoFont = { fontFamily: "Geist Mono, monospace", lineHeight: "150%" };

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
          Professional Summary
        </h2>
        <p className="text-lg leading-relaxed bg-gray-50 p-6 border-l-4 border-black" style={monoFont}>
          Machine Learning Engineer with a strong background in deep learning, signal processing, and 
          large-scale model deployment. Experienced in bridging research and product using reproducible 
          pipelines and modern MLOps practices. Skilled in developing data-driven solutions for structured 
          and unstructured data across GCP and AWS.
        </p>
      </section>

      {/* Education */}
      <section className="mb-12">
        <h2 className="text-2xl mb-8 font-bold" style={monoFont}>
          Education
        </h2>
        <div className="space-y-6">
          {/* Master's Degree */}
          <div className="bg-gray-50 p-6 border-l-4 border-black">
            <div className="flex flex-wrap justify-between items-baseline gap-2 mb-2">
              <h3 className="font-bold text-lg" style={monoFont}>Federal University of Paraíba (UFPB)</h3>
              <span className="text-sm px-3 py-1 bg-black text-white" style={monoFont}>In Progress</span>
            </div>
            <p className="text-sm mb-3" style={monoFont}>M.Sc. in Computer Science • 📍 João Pessoa, Brazil</p>
            <p className="text-sm" style={monoFont}>
              <span className="font-semibold">Focus:</span> Machine Learning, Deep Learning, AI Research
            </p>
          </div>

          {/* Bachelor's Degree */}
          <div className="bg-gray-50 p-6 border-l-4 border-gray-400">
            <div className="flex flex-wrap justify-between items-baseline gap-2 mb-2">
              <h3 className="font-bold text-lg" style={monoFont}>Federal University of Paraíba (UFPB)</h3>
              <span className="text-sm px-3 py-1 bg-gray-200" style={monoFont}>Graduated Oct 2025</span>
            </div>
            <p className="text-sm mb-3" style={monoFont}>B.E. in Computer Engineering • 📍 João Pessoa, Brazil</p>
            <p className="text-sm" style={monoFont}>
              <span className="font-semibold">Relevant coursework:</span> Machine Learning, Deep Learning, Signal Processing, Algorithms
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-12">
        <h2 className="text-2xl mb-8 font-bold" style={monoFont}>
          Experience
        </h2>
        <div className="space-y-8">
          {/* Machine Learning Researcher */}
          <div className="border-l-2 border-gray-300 pl-6 hover:border-black transition-colors">
            <div className="flex flex-wrap justify-between items-baseline gap-2 mb-2">
              <h3 className="font-bold text-lg" style={monoFont}>Machine Learning Researcher — Music AI</h3>
              <span className="text-sm px-3 py-1 bg-black text-white" style={monoFont}>Sep 2025 – Present</span>
            </div>
            <p className="text-sm mb-3 text-gray-600" style={monoFont}>📍 Salt Lake City, UT</p>
            <p style={monoFont}>
              Develop ML models to auto tune and enhance vocals and data pipelines for large-scale metadata 
              generation and processing audio data across GCP. Lead experimentation, model versioning, 
              deployment, and user validation studies.
            </p>
          </div>

          {/* Software Engineer & Co-founder */}
          <div className="border-l-2 border-gray-300 pl-6 hover:border-black transition-colors">
            <div className="flex flex-wrap justify-between items-baseline gap-2 mb-2">
              <h3 className="font-bold text-lg" style={monoFont}>Software Engineer & Co-founder — GoodsLeads</h3>
              <span className="text-sm px-3 py-1 bg-gray-200" style={monoFont}>Dec 2024 – Aug 2025</span>
            </div>
            <p className="text-sm mb-3 text-gray-600" style={monoFont}>📍 João Pessoa, Brazil</p>
            <p style={monoFont}>
              Developed a lead data catching and tracking{' '}
              <a href="https://goodsleads.com/" target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:text-gray-600">
                platform
              </a>{' '}
              using Google Maps API for targeted lead capture. Implemented LLM-based segmentation with Claude 
              and LangChain for intelligent lead classification. Built automated email and content generation 
              workflows using n8n. Architected scalable infrastructure on AWS for data processing and automation 
              pipelines.
            </p>
          </div>

          {/* ML Research Fellow */}
          <div className="border-l-2 border-gray-300 pl-6 hover:border-black transition-colors">
            <div className="flex flex-wrap justify-between items-baseline gap-2 mb-2">
              <h3 className="font-bold text-lg" style={monoFont}>ML Research Fellow — Research Grant</h3>
              <span className="text-sm px-3 py-1 bg-gray-200" style={monoFont}>Sep 2023 – Sep 2025</span>
            </div>
            <p className="text-sm mb-3 text-gray-600" style={monoFont}>📍 Salt Lake City, UT</p>
            <p style={monoFont}>
              Designed and implemented high-performing architectures for temporal audio synchronization with 
              state-of-the-art with 5ms of accuracy and low latency. Built chords diagrams and chords extensions 
              with Next/FastAPI. Published research findings in national Web Systems and MIR conferences.
            </p>
          </div>

          {/* Machine Learning Intern */}
          <div className="border-l-2 border-gray-300 pl-6 hover:border-black transition-colors">
            <div className="flex flex-wrap justify-between items-baseline gap-2 mb-2">
              <h3 className="font-bold text-lg" style={monoFont}>Machine Learning Intern — Moises Inc.</h3>
              <span className="text-sm px-3 py-1 bg-gray-200" style={monoFont}>Sep 2021 – Sep 2023</span>
            </div>
            <p className="text-sm mb-3 text-gray-600" style={monoFont}>📍 Salt Lake City, UT</p>
            <p style={monoFont}>
              Developed generative and classification models used by millions of users - semantic song labeling. 
              Built scalable ML infrastructure with Docker and designed end-to-end data preprocessing pipelines 
              for large-scale model training.
            </p>
          </div>

          {/* Fullstack Development Intern */}
          <div className="border-l-2 border-gray-300 pl-6 hover:border-black transition-colors">
            <div className="flex flex-wrap justify-between items-baseline gap-2 mb-2">
              <h3 className="font-bold text-lg" style={monoFont}>Fullstack Development Intern</h3>
              <span className="text-sm px-3 py-1 bg-gray-200" style={monoFont}>May 2021 – Feb 2022</span>
            </div>
            <p className="text-sm mb-3 text-gray-600" style={monoFont}>📍 João Pessoa, Brazil</p>
            <p style={monoFont}>
              Created secure data portals and interactive dashboards for government transparency platforms using 
              Angular and Flask REST APIs with real-time analytics.
            </p>
          </div>
        </div>
      </section>

      {/* Selected Publications */}
      <section className="mb-12">
        <h2 className="text-2xl mb-8 font-bold" style={monoFont}>
          Selected Publications
        </h2>
        <div className="space-y-6">
          <div className="border-l-2 border-gray-300 pl-6">
            <h3 className="font-bold text-lg mb-2" style={monoFont}>
              Representation Matters: Evaluating Spectral Representations for Temporal Modeling
            </h3>
            <p className="text-sm mb-2 text-gray-600" style={monoFont}>📄 Cavalcante et al. • 2024</p>
            <p style={monoFont}>
              Proposed architecture improving temporal estimation accuracy by 26% on benchmark datasets.
            </p>
          </div>
          <div className="border-l-2 border-gray-300 pl-6">
            <h3 className="font-bold text-lg mb-2" style={monoFont}>
              HeroKeys: AI-Based Virtual Environment for Music Learning
            </h3>
            <p className="text-sm mb-2 text-gray-600" style={monoFont}>📄 Jordão, Cavalcante et al. • 2024</p>
            <p style={monoFont}>
              Developed interactive platform combining ML-based performance analysis and gamified visualization.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership & Contributions */}
      <section className="mb-12">
        <h2 className="text-2xl mb-8 font-bold" style={monoFont}>
          Leadership & Contributions
        </h2>
        <p className="text-lg leading-relaxed bg-gray-50 p-6 border-l-4 border-gray-400" style={monoFont}>
          Led integration of ML models into production systems impacting large user bases. Conducted product 
          research and A/B testing for model improvement. Contributed to open-source projects in ML, signal 
          processing, and AI education.
        </p>
      </section>
      </div>
    </div>
  );
}

