import SubscribeForm from "@/components/Subscribe";
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Subscribe',
  description: 'Just Subscribe',
};


async function Subscribe() {

    return (
      <div className="flex-1 p-4 lg:p-8">
        <SubscribeForm />
      </div>
    );
 
}

export default Subscribe;