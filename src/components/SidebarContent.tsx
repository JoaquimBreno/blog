import { NavItems } from "@/components/NavItems";

export function SidebarContent() {
  return (
    <div className="space-y-4">
      <div className="px-3 py-2">
        <div className="flex lg:block justify-center lg:justify-start mb-10" style={{'letterSpacing': "-3px"}}>
        <h1 className="font-system block lg:mt-2 px-2 text-5xl font-light">JOAQUIM</h1>
        <h2 className="font-system block lg:px-2 text-5xl lg:text-5xl font-light">BRENO</h2>
        </div>
        <NavItems />
      </div>
    </div>
  );
}