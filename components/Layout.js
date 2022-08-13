import Sidebar from "../pages/dashboard/sidebar";

const Layout = ({ children }) => {
  return (
    <section>
      <section className="fixed top-0 right-0 h-screen lg:px-2 md:px-1 flex justify-center items-center bg-[#eef4f8] z-50 shadow">
        <Sidebar />
      </section>
      {/* <div className="bg-[#f4f7fc] flex-1 p-4 lg:ml-[3.4rem] md:ml-12 ml-10 mr-4">{children}</div> */}
      {/* <div className="bg-[#f4f7fc] h-screen w-screen flex justify-center items-center">{children}</div> */}
      <section className="container mx-auto">
        <div className="lg:mt-12 md:m-12 m-4">{children}</div>
      </section>
    </section>
  );
};
export default Layout;

/**
 * reference - dashboard sidebar
 * https://www.youtube.com/watch?v=ooy92nDRHzU
 * https://github.com/dieudonneAwa/blog-dashboard
 */
