export function AboutSection({ locale = 'pt' }: { locale?: string }) {
  const content = locale === 'pt' ? {
    intro: 'Joaquim Breno é um engenheiro da computação brasileiro interessado em ideias sobre machine learning, cultura tech, desenvolvimento de software e inteligência artificial.',
    p1: 'E aí! Bem-vindo(a) a este repositório onde exponho minhas descobertas e teorias — com pontos extras quando consigo ver tudo funcionando na prática. A computação foi minha porta de entrada nessa jornada maluca, e desde então desenvolvi um hábito incurável de experimentar com tudo.',

  } : {
    intro: 'Joaquim Breno is a Brazilian computer engineer interested in ideas surrounding machine learning, tech culture, software development, and artificial intelligence.',
    p1: 'Hey there! Im someone who gets a real kick out of seeing my knowledge solve real-world problems—bonus points if I can actually see it working, whether in the digital realm or the physical world. Computing has been my gateway into this crazy journey, and I have a serious habit of experimenting with things.',
    p2: 'In this blog, I share bits of my experiences, from my very first steps in tech to my latest adventures. Hopefully, even the nonsense I write here helps someone with similar interests.',
  };

  return (
    <div className="max-w-2xl">
      <div className="space-y-4">
        <p style={{ fontFamily: "Geist Mono, monospace", lineHeight: "150%" }}>
          {content.intro}
        </p>
        <p style={{ fontFamily: "Geist Mono, monospace", lineHeight: "150%" }}>
          {content.p1}
        </p>
        <p style={{ fontFamily: "Geist Mono, monospace", lineHeight: "150%" }}>
          {content.p2}
        </p>
      </div>
    </div>
  );
}