import Image from "next/image";

const Banner = () => {
  return (
    <section>
      <div className="hero bg-base-200 py-12">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src="/assets/banner.svg"
            alt="banner image"
            className="max-w-sm rounded-lg shadow-2xl"
            height={502}
            width={571}
          />
          <div>
            <h1 className="text-5xl font-bold capitalize">
              We build <br /> your dream
            </h1>
            <p className="py-6 text-gray-500 lg:w-9/12">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn bg-[#251D58] capitalize px-6 btn-sm rounded">
              Booking
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
