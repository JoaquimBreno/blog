// TODO: Uncomment when Subscribe feature is ready
// import SubscribeForm from "@/components/Subscribe";
import { Metadata } from 'next';
import AboutMe from "@/components/AboutMe";


export const metadata: Metadata = {
  title: 'About Me',
  description: 'A little about me',
};


async function MainContent() {

    return (
      <div className="flex-1 p-4 lg:p-8 bg-white">
        <AboutMe />
        {/* TODO: Uncomment when Subscribe feature is ready */}
        {/* <div className="max-w-4xl mx-auto">
          <SubscribeForm />
        </div> */}
      </div>
    );
 
}

export default MainContent;