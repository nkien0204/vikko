import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
// import FAQ from "@/components/FAQ";
// import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
// import Stats from "@/components/Stats";
// import CTA from "@/components/CTA";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      {/* <Logos /> */}
      <Container>
        <Benefits />

        <Section id="products" title="Sản Phẩm" description="">
          <Pricing />
        </Section>

        <Section id="projects" title="Các dự án tiêu biểu" description="">
          <Testimonials />
        </Section>

        {/* <FAQ /> */}

        {/* <Stats /> */}

        {/* <CTA /> */}
      </Container>
    </>
  );
};

export default HomePage;
