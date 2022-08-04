import Footnote from "./Footnote";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="bg-[#251D58] text-white py-12 ">
      <div className="container mx-auto">
        <div className="lg:px-0 px-4">
          <div className="grid lg:grid-cols-4 lg:gap-0 md:grid-cols-2 md:gap-y-8 grid-cols-1 gap-y-8">
            {/* company location */}
            <div className="flex flex-row gap-x-2">
              <span>
                <Image
                  src="/assets/location.svg"
                  alt="agency location"
                  height={24}
                  width={24}
                />
              </span>
              <span>
                H#000 (0th Floor), Road #00, <br /> New DOHS, Mohakhali, Dhaka,
                Bangladesh
              </span>
            </div>
            {/* company links */}
            <div>
              <h2 className="text-xl font-bold mb-2">Company</h2>
              <div className="flex flex-col">
                <Link href={"/about"}>About</Link>
                <Link href={"/projects"}>Project</Link>
                <Link href={"/ot"}>Our team</Link>
                <Link href={"/tac"}>Terms & Conditions</Link>
                <Link href={"/sl"}>Submit Listing</Link>
              </div>
            </div>
            {/* quick links */}
            <div>
              <h2 className="text-xl font-bold mb-2">Quick Links</h2>
              <div className="flex flex-col">
                <Link href={"/ql"}>Quick Links</Link>
                <Link href={"/rentals"}>Rentals</Link>
                <Link href={"/sales"}>Sales</Link>
                <Link href={"/contact"}>Contact us</Link>
                <Link href={"/ob"}>Our Blog</Link>
              </div>
            </div>
            {/* about us */}
            <div>
              <h2 className="text-xl font-bold mb-2">Quick Links</h2>
              <div>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                  commodo ipsum duis laoreet maecenas. Feugiat
                </p>
                <span>
                  <Link href={"/fb"}>
                    <Image
                      src="/assets/social/facebook.svg"
                      alt="company facebook page"
                      width={26}
                      height={18}
                    />
                  </Link>
                  <Link href={"/ig"}>
                    <Image
                      src="/assets/social/instagram.svg"
                      alt="company facebook page"
                      width={26}
                      height={18}
                    />
                  </Link>
                  <Link href={"/ld"}>
                    <Image
                      src="/assets/social/linkedin.svg"
                      alt="company facebook page"
                      width={26}
                      height={18}
                    />
                  </Link>
                  <Link href={"/yt"}>
                    <Image
                      src="/assets/social/youtube.svg"
                      alt="company facebook page"
                      width={26}
                      height={18}
                    />
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-8 w-1/2 mx-auto" />
      <Footnote />
    </section>
  );
};
export default Footer;
