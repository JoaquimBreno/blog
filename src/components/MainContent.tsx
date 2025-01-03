import SubscribeForm from "@/components/Subscribe";
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'About Me',
  description: 'A little about me',
};


async function MainContent() {

    return (
      <div className="flex-1 p-4 lg:p-8">
        About Me
        <SubscribeForm />
      </div>
    );
 
}

export default MainContent;