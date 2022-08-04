import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const navMenu = (
    <>
      <Link href="/home">Home</Link>
      <Link href="/about">About us</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/contact">Contact us</Link>
      <Link href="/dashboard/admin">Admin</Link>
      <Link href="/dashboard/customer">Customer</Link>
    </>
  );
  return (
    <section className="bg-base-200">
      <div className="container mx-auto">
        <div className="navbar bg-base-200">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded w-52"
              >
                <div className="flex flex-col gap-x-4">{navMenu}</div>
              </ul>
            </div>
            <Link href="/">
              <Image
                alt="luxury living logo"
                src="/assets/logo.svg"
                height={51}
                width={125}
              />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <div className="flex flex-row gap-x-4">{navMenu}</div>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn btn-sm rounded px-6 capitalize bg-[#251D58]">
              Login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Header;
