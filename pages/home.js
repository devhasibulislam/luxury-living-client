import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <section>
      <Banner />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
    </section>
  );
};
export default Home;
