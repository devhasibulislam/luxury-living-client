import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import { Toaster } from "react-hot-toast";

const Index = () => {
  return (
    <section>
      <Banner />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
      <Toaster />
    </section>
  );
};
export default Index;
