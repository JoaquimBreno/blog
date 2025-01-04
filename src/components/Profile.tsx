import { Card } from "@/components/ui/card";

export function Profile() {
  const tags = [
    "ML Research", "Music", "Computer things", 
    "Lifestyle", "Jiu-jitsu", "Coding", 
    "Running", "Reading", "Gaming"
  ];
  return (
    <Card className="relative overflow-hidden bg-[hsl(var(--card-background))]/40 border-[hsl(var(--border-color))] backdrop-blur-xl transition-colors duration-300">
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--card-background))]/50 to-[hsl(var(--card-background))]/50 z-0" />
      <div className="relative z-10 p-8">
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 rounded-full overflow-hidden mb-8 ring-2 ring-[hsl(var(--border-color))]">
            <img
              src="https://avatars.githubusercontent.com/u/62159887?v=4"
              alt="Profile"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-light text-[hsl(var(--text-primary))] mb-3">Joaquim Breno</h1>
            <p className="text-lg text-[hsl(var(--text-secondary))] mb-8 font-light">Computer Engineer & Tech Enthusiast</p>
            <div className="inline-block">
              {tags.map((tag, index) => (
                <div key={index} className="inline-block mx-1 mb-2">
                  <span
                    className="px-4 py-1 rounded-full bg-[hsl(var(--card-background))]/50 text-[hsl(var(--text-secondary))] 
                              text-sm backdrop-blur-sm border border-[hsl(var(--border-color))] transition-colors duration-300 
                              hover:bg-[hsl(var(--card-background))]/70"
                  >
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}