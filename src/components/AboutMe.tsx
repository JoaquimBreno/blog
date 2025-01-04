import { Profile }from "@/components/Profile";
import { AboutSection } from "@/components/AboutSection";
import { Skills } from "@/components/Skills";

export default function AboutMe() {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))] p-6 relative transition-colors duration-300">
      {/* Background blur elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-[hsl(var(--blur-1))] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-[hsl(var(--blur-2))] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[hsl(var(--blur-3))] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>
      {/* Content */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Profile />
          <AboutSection />
          {/* <Skills /> */}
        </div>
      </div>
    </div>
  );
}
