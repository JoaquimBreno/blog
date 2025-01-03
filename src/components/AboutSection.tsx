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
    <Card className="relative overflow-hidden bg-black/40 border-0 backdrop-blur-xl">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-black/50 z-0" />
      <div className="relative z-10 p-8">
        <h2 className="text-2xl font-light text-zinc-100 mb-8">About Me</h2>
        <div className="space-y-8">
          {aboutItems.map((item) => (
            <div key={item.title} className="flex items-start gap-4 group">
              <div className="p-3 rounded-lg bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/30
                            transition-colors duration-300 group-hover:bg-zinc-700/50">
                <item.icon className="w-5 h-5 text-zinc-300" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-zinc-200 mb-2">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}