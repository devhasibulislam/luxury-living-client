import Image from "next/image";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("/api/testimonials")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

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

  return (
    <section className="bg-base-200 py-28">
      <div className="container mx-auto">
        <div className="mb-20">
          <h1 className="text-center text-4xl font-bold">Testimonials</h1>
        </div>
        <Carousel responsive={responsive}>
          {testimonials
            .map((testimonial) => (
              <div
                className="bg-white p-8 rounded-lg shadow hover:shadow-lg duration-500 transition-shadow mx-4"
                key={testimonial._id}
              >
                <div className="flex flex-col gap-y-4">
                  <article>
                    <div className="flex items-center gap-x-4">
                      <div>
                        <Image
                          src={testimonial.avatar}
                          alt="user-nash"
                          height={64}
                          width={64}
                        />
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
                    <p className="text-gray-400 mt-4">{testimonial.comment}</p>
                  </article>
                  <div className="flex gap-x-1">
                    {[...Array(testimonial.rating).keys()].map((ratings) => (
                      <Image
                        key={ratings}
                        src="/assets/star.svg"
                        alt="user ratings"
                        height={22}
                        width={22}
                      />
                    ))}
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
