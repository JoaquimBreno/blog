import Image from "next/image";
import { Linkedin, Github } from "lucide-react";

export function Profile() {
  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <Image
          src="https://avatars.githubusercontent.com/u/62159887?v=4"
          alt="Profile"
          className="w-32 h-32 object-cover mb-6 border border-gray-200"
          width={128}
          height={128}
        />
      </div>
      <div>
        <h1 className="text-3xl mb-6" style={{ fontFamily: "Geist Mono, monospace" }}>Joaquim Breno</h1>
        <p className="mb-4" style={{ fontFamily: "Geist Mono, monospace", lineHeight: "150%" }}>
          ML Engineer / Computer Engineer / Tech Enthusiast
        </p>
        
        {/* Social Links */}
        <div className="flex gap-4 text-sm" style={{ fontFamily: "Geist Mono, monospace" }}>
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
    </div>
  );
}