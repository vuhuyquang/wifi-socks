import License from "@/components/pages/page/Lisence";
import Service from "@/components/pages/page/Service";
import Product from "@/components/pages/page/Product";
import Contact from "@/components/pages/page/Contact";
import FAQ from "@/components/pages/page/FAQ";

export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-[1038px] mx-auto">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-[#4A1414] mb-6 sm:mb-8">
          Phần mềm WifiSocks
        </h1>
        <div className="space-y-6 sm:space-y-8">
          <section id="wifi-socks">
            <Service />
          </section>
          <section id="prices">
            <License />
          </section>
          <section id="product">
            <Product />
          </section>
          <section id="contact">
            <Contact />
          </section>
          <section id="faq">
            <FAQ />
          </section>
        </div>
      </div>
    </div>
  );
}
