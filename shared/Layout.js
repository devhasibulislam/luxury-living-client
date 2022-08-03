import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <section>
      <Header />
      <div>{children}</div>
      <Footer />
    </section>
  );
};
export default Layout;
