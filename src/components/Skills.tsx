import { GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

const technicalSkills = ["JavaScript/TypeScript", "React", "Node.js", "Python", "Database Design"];
const softSkills = ["Problem Solving", "Team Leadership", "Communication", "Creative Thinking", "Adaptability"];

export function Skills() {
  return (
    <Card className="relative overflow-hidden bg-black/40 border-0 backdrop-blur-xl lg:col-span-2">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-black/50 z-0" />
      <div className="relative z-10 p-8">
        <div className="flex items-center gap-4 mb-8">
          <GraduationCap className="w-6 h-6 text-zinc-300" />
          <h2 className="text-2xl font-light text-zinc-100">Education & Skills</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillList title="Technical Skills" skills={technicalSkills} />
          <SkillList title="Soft Skills" skills={softSkills} />
        </div>
      </div>
    </Card>
  );
}

function SkillList({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div>
      <h3 className="text-lg font-medium text-zinc-200 mb-4">{title}</h3>
      <div className="space-y-3">
        {skills.map((skill) => (
          <div key={skill} className="flex items-center gap-3 group">
            <div className="h-1.5 w-1.5 rounded-full bg-zinc-700 transition-colors duration-300
                          group-hover:bg-zinc-500" />
            <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}