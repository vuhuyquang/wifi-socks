import License from "@/components/pages/page/Lisence";
import Service from "@/components/pages/page/Service";
import Product from "@/components/pages/page/Product";
import Contact from "@/components/pages/page/Contact";
import FAQ from "@/components/pages/page/FAQ";

export default function Home() {
  return (
    <div className="py-8">
      <div className="">
        <h1 className="container mx-auto max-w-[1038px] text-center text-2xl sm:text-3xl md:text-4xl font-bold text-[#4A1414] mb-6 sm:mb-8">
          Phần mềm WifiSocks
        </h1>
        <div className="space-y-14 sm:space-y-16">
          <section className="container mx-auto max-w-[1038px]" id="wifi-socks">
            <Service />
          </section>
          <section className="w-screen mx-auto" id="prices">
            <License />
          </section>
          <section className="container mx-auto max-w-[1038px]" id="product">
            <Product />
          </section>
          <section className="container mx-auto max-w-[1038px]" id="contact">
            <Contact />
          </section>
          <section className="container mx-auto max-w-[1038px]" id="faq">
            <FAQ />
          </section>
        </div>
      </div>
    </div>
  );
}
