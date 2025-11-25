import Navbar from "../../components/site/Navbar";
import Footer from "../../components/site/Footer";
import Hero from "../../components/sections/Hero";
import Deliver from "../../components/sections/Deliver";
import Philosophy from "../../components/sections/Philosophy";
import CaseStudies from "../../components/sections/CaseStudies";
import Labs from "../../components/sections/Labs";
import About from "../../components/sections/About";
import Contact from "../../components/sections/Contact";
import { copy } from "../../components/sections/_content";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Deliver />
      <Philosophy />
      <CaseStudies
        title={copy.cases.heading}
        intro={copy.cases.oneLiner}
        items={copy.cases.teasers.map((teaser, idx) => ({
          id: `case-${idx}`,
          heading: teaser.title,
          body: teaser.line,
          mediaLabel: teaser.title
        }))}
      />
      <Labs />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
