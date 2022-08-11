import Sidebar from "../pages/dashboard/sidebar";

const Layout = ({ children }) => {
  return (
    <section>
      <div className="fixed h-screen lg:px-2 md:px-1 flex justify-center items-center bg-[#eef4f8]">
        <Sidebar />
      </div>
      <div className="bg-[#f4f7fc] flex-1 p-4 lg:ml-[3.4rem] md:ml-12 ml-10 mr-4">{children}</div>
    </section>
  );
};
export default Layout;

/**
 * reference - dashboard sidebar
 * https://www.youtube.com/watch?v=ooy92nDRHzU
 * https://github.com/dieudonneAwa/blog-dashboard
 */
