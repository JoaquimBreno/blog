import { NavItems } from "@/components/NavItems";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function SidebarContent() {
  return (
    <div className="space-y-8">
      <div className="px-3 py-2">
        <NavItems />
        <div className="mt-8 pt-4 border-t border-gray-200">
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}