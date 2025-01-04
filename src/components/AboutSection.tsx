import { Code2, Music2, Dumbbell } from "lucide-react";
import { Card } from "@/components/ui/card";

const aboutItems = [
  {
    icon: Code2,
    title: "Computer Engineering",
    description: "Passionate about creating innovative solutions through code. Specialized in web development and always exploring new technologies to build better digital experiences."
  },
  {
    icon: Music2,
    title: "Music Enthusiast",
    description: "Music is my creative outlet. Whether playing instruments or producing tracks, I find harmony between technology and musical expression."
  },
  {
    icon: Dumbbell,
    title: "Jiu-jitsu Practitioner",
    description: "Training in jiu-jitsu has taught me discipline, patience, and the importance of continuous learning - principles I apply to both my personal and professional life."
  }
];

export function AboutSection() {
  return (
    <Card className="relative overflow-hidden border backdrop-blur-2xl" style={{
      backgroundColor: 'var(--background)',
      color: 'var(--card-foreground)'
    }}>
      <div className="absolute inset-0 z-0" style={{
        background: `linear-gradient(to bottom, var(--blur-1), var(--blur-3))`
      }} />
      <div className="relative z-10 p-8">
        <h2 className="text-2xl font-light mb-8" style={{ color: 'var(--foreground)' }}>About Me</h2>
        <div className="space-y-8">
          {aboutItems.map((item, index) => (
            <div key={index} className="flex items-start gap-4 group">
              <div className="p-3 rounded-lg backdrop-blur-lg border" style={{
                backgroundColor: 'rgba(var(--zinc), 0.5)',
                borderColor: 'var(--border)'
              }}>
                <item.icon className="w-5 h-5" style={{ color: 'var(--primary-foreground)' }} />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2" style={{ color: 'var(--secondary-foreground)' }}>{item.title}</h3>
                <p className="leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}