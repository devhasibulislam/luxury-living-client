import Sidebar from "../pages/dashboard/sidebar";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  return (
    <section>
      <section className="fixed top-0 right-0 h-screen lg:px-2 md:px-1 flex justify-center items-center bg-[#eef4f8] z-50 shadow">
        <Sidebar />
      </section>
      <section className="container mx-auto">
        <div className="lg:mt-12 md:m-12 m-4">{children}</div>
      </section>
      <Toaster />
    </section>
  );
};
export default Layout;

/**
 * reference - dashboard sidebar
 * https://www.youtube.com/watch?v=ooy92nDRHzU
 * https://github.com/dieudonneAwa/blog-dashboard
 */
