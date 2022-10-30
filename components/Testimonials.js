import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useSWR from "swr";

const Testimonials = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data: testimonials } = useSWR(
    "https://luxury-living-ll-server.onrender.com/customer/review",
    fetcher,
    { revalidateOnFocus: true }
  );

  if (!testimonials) return <p>Loading...</p>;

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  if (!testimonials) return <p>Loading...</p>;

  return (
    <section className="bg-base-200 py-28">
      <div className="container mx-auto">
        <div className="mb-20">
          <h1 className="text-center text-4xl font-bold">Testimonials</h1>
        </div>
        <Carousel responsive={responsive}>
          {testimonials
            ?.map((testimonial) => (
              <div
                className="bg-white p-8 rounded-lg shadow hover:shadow-lg duration-500 transition-shadow mx-4"
                key={testimonial._id}
              >
                <div className="flex flex-col gap-y-4">
                  <article>
                    <div className="flex items-center gap-x-4">
                      <div>
                        <span className="h-[64px] w-[64px] p-2 shadow rounded-full text-lg">
                          {testimonial.avatar}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl">
                          {testimonial.name}
                        </h3>
                        <h5 className="font-semibold text-gray-500">
                          {testimonial.designation}
                        </h5>
                      </div>
                    </div>
                    <p className="text-gray-400 mt-4">
                      {testimonial.description}
                    </p>
                  </article>
                  <div className="flex gap-x-1">
                    {[...Array(parseInt(testimonial.rating)).keys()]?.map(
                      (ratings) => (
                        <Image
                          key={ratings}
                          src="/assets/star.svg"
                          alt="user ratings"
                          height={22}
                          width={22}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            ))
            .reverse()}
        </Carousel>
      </div>
    </section>
  );
};
export default Testimonials;
