import { Resume } from "@/components/Resume";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume - Joaquim Breno',
  description: 'Professional resume of Joaquim Breno Brito Cavalcante',
};

export default function ResumePage() {
  return (
    <div className="flex-1 p-4 lg:p-8 bg-white">
      <Resume />
    </div>
  );
}

