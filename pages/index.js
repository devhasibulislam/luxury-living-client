import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import { Toaster } from "react-hot-toast";
import Head from "next/head";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

const Index = () => {
  return (
    <section>
      <Head>
        <title>Home - Luxury Living</title>
        <meta property="og:image" content="/luxury_living.png" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://llc-luxury-living-client.vercel.app/"
        />
        <meta property="og:title" content="Luxury Living" />
        <meta property="og:description" content="Reinvent your luxury" />
      </Head>
      <Header />
      <Banner />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
      <Toaster />
      <Footer />
    </section>
  );
};
export default Index;

// meta data reference1: https://www.adhesion.co.nz/blog/how-to-change-website-thumbnail-in-facebook-post
// meta data reference2: https://medium.com/wesionary-team/customize-social-media-preview-of-your-nextjs-website-links-82f6bce035b
