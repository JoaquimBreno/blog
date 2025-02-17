import { Card } from "@/components/ui/card";

export function AboutSection() {
  return (
    <Card className="relative overflow-hidden border backdrop-blur-2xl" style={{
      backgroundColor: 'var(--background)',
      color: 'var(--card-foreground)',
    }}>
      <div className="absolute inset-0 z-0" style={{
        background: `linear-gradient(to bottom, var(--blur-1), var(--blur-3))`,
      }} />
      <div className="relative z-10 p-8">
        <h2 className="text-2xl font-light mb-8" style={{ color: 'var(--foreground)' }}>About Me</h2>
        <div className="space-y-8">
          <p className="leading-relaxed text-lg" style={{ color: 'var(--muted-foreground)' }}>
            Hey there! 👋 I’m someone who gets a real kick out of seeing my knowledge solve real-world problems—bonus points if I can actually see it working, whether in the digital realm or the physical world.
            Computing has been my gateway into this crazy journey, and I have a serious habit of experimenting with things. Maybe that’s why research and business are the two words that keep buzzing in my vocabulary.
            In this blog, I share bits of my experiences, from my very first steps in tech to my latest (mis)adventures. Hopefully, even the nonsense I write here helps someone with similar interests.
            Oh, and one last thing… <span className="force-text">May the Force be with you! ✨</span>
          </p>
        </div>
      </div>
    </Card>
  );
}