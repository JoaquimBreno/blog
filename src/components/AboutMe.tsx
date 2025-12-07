import { Profile } from "@/components/Profile";
import { AboutSection } from "@/components/AboutSection";

export default function AboutMe() {
  return (
    <div className="bg-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <Profile />
          <AboutSection />
        </div>
      </div>
    </div>
  );
}
