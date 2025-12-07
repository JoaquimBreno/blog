// TODO: Uncomment when Subscribe feature is ready
// import SubscribeForm from "@/components/Subscribe";
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Subscribe',
  description: 'Just Subscribe',
};


async function Subscribe() {

    return (
      <div className="flex-1 p-4 lg:p-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl mb-8" style={{ fontFamily: "Geist Mono, monospace" }}>Subscribe</h1>
          <p style={{ fontFamily: "Geist Mono, monospace", lineHeight: "150%" }}>
            Subscribe feature coming soon...
          </p>
          {/* TODO: Uncomment when Subscribe feature is ready */}
          {/* <SubscribeForm /> */}
        </div>
      </div>
    );
 
}

export default Subscribe;