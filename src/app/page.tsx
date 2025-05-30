import ForePage from "@/components/ForePage";
import Project from "@/components/Project";
import Product from "@/components/Product/Product";
// import FAQ from "@/components/FAQ";
// import Logos from "@/components/Logos";
import Intro from "@/components/Intro/IntroInfo";
import Container from "@/components/Container";
import Section from "@/components/Section";
// import Stats from "@/components/Stats";
// import CTA from "@/components/CTA";

const HomePage: React.FC = () => {
  return (
    <>
      <ForePage />
      {/* <Logos /> */}
      <Container>
        <Intro />

        <Section id="products" title="Sản Phẩm" description="">
          <Product />
        </Section>

        <Section id="projects" title="Các dự án tiêu biểu" description="">
          <Project />
        </Section>

        {/* <FAQ /> */}

        {/* <Stats /> */}

        {/* <CTA /> */}
      </Container>
    </>
  );
};

export default HomePage;
