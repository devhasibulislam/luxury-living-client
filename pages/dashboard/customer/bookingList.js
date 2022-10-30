import React from "react";
import Layout from "../../../components/Layout";
import Mockup from "../../../components/Mockup";
import Head from "next/head";
import useSWR from "swr";

const BookingList = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data: services } = useSWR(
    "https://luxury-living-ll-server.onrender.com/customer/booking",
    fetcher,
    { revalidateOnFocus: true }
  );

  if (!services) return <p>Loading...</p>;

  return (
    <section>
      <Head>
        <title>Booking List - Luxury Living</title>
      </Head>
      <Layout>
        <section className="w-full">
          <Mockup>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
              {services?.map((service) => (
                <div
                  key={service._id}
                  className="bg-white p-4 rounded-lg shadow flex flex-col gap-y-2"
                >
                  <div className="grid grid-cols-2">
                    <span>
                      <picture>
                        <img
                          src={`https://luxury-living-ll-server.onrender.com/${service.avatar}`}
                          alt={service.name}
                          className="w-[70px] h-[70px] object-cover rounded-full shadow-xl"
                          style={{ maxWidth: "100%" }}
                        />
                      </picture>
                    </span>
                    <span className="text-right">
                      <span
                        className={`px-4 py-2 rounded block w-fit ml-auto ${
                          (service?.status === "Done" &&
                            "bg-green-300 text-green-800") ||
                          (service?.status === "Pending" &&
                            "bg-red-300 text-red-800") ||
                          (service?.status === "Ongoing" &&
                            "bg-orange-300 text-orange-700")
                        }`}
                      >
                        {service.status}
                      </span>
                    </span>
                  </div>
                  <h3 className="font-bold text-xl">{service.name}</h3>
                  <p className="text-justify text-gray-500">
                    {service.service}
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </Mockup>
        </section>
      </Layout>
    </section>
  );
};
export default BookingList;
