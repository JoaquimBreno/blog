// TODO: Uncomment when Subscribe feature is ready
// import SubscribeForm from "@/components/Subscribe";
import AboutMe from "@/components/AboutMe";

async function MainContent({ locale = 'pt' }: { locale?: string }) {
  return (
    <div className="flex-1 p-4 lg:p-8 bg-white">
      <AboutMe locale={locale} />
      {/* TODO: Uncomment when Subscribe feature is ready */}
      {/* <div className="max-w-4xl mx-auto">
        <SubscribeForm locale={locale} />
      </div> */}
    </div>
  );
}

export default MainContent;