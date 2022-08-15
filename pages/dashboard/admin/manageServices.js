import React, { useState } from "react";
import Layout from "../../../components/Layout";
import Mockup from "../../../components/Mockup";
import Image from "next/image";
import Head from "next/head";
import useSWR from "swr";
import axios from "axios";
import toast from "react-hot-toast";

const ManageServices = () => {
  const [modal, setModal] = useState(false);
  const [newPrice, setNewPrice] = useState(0);
  const [serviceID, setServiceID] = useState("");

  const handlePriceUpdate = async () => {
    const { data } = await axios.put(
      `http://localhost:5000/admin/servicing/${serviceID}`,
      { price: newPrice }
    );

    if (data?.acknowledged) {
      toast.success(`Price updated to $${newPrice}`);
    }
  };

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data: services } = useSWR(
    "http://localhost:5000/admin/servicing",
    fetcher,
    { refreshInterval: 1000 }
  );

  if (!services) return <p>Loading...</p>;

  return (
    <section>
      <Head>
        <title>Manage Services - Luxury Living</title>
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
                          src={`http://localhost:5000/${service.avatar}`}
                          alt={service.name}
                          className="w-[100px] h-[100px] object-cover rounded-full shadow-xl"
                          style={{ maxWidth: "100%" }}
                        />
                      </picture>
                    </span>
                    <span className="flex justify-end items-start gap-x-4">
                      <label
                        htmlFor="update-modal"
                        className="shadow-md hover:shadow-lg duration-500 hover:text-green-500 cursor-pointer block w-fit rounded-full p-2 bg-green-50 text-green-900"
                        onClick={() => {
                          setModal(true);
                          setServiceID(service._id);
                          setNewPrice(service.price);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                      </label>
                      <span className="shadow-md hover:shadow-lg duration-500 hover:text-red-500 cursor-pointer block w-fit rounded-full p-2 bg-red-50 text-red-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </span>
                    </span>
                  </div>
                  <h3 className="font-bold text-xl">{service.name}</h3>
                  <p className="text-justify text-gray-500">
                    {service.description}
                  </p>
                  <h3 className="text-2xl font-bold mt-auto">
                    $
                    <span className="text-base font-medium text-red-500">
                      {service.price}
                    </span>
                  </h3>
                </div>
              ))}
            </div>
          </Mockup>
        </section>
      </Layout>
      {modal && (
        <>
          <input type="checkbox" id="update-modal" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box" style={{ borderRadius: "5px" }}>
              <h3 className="font-bold text-lg">
                You are able to change only service price!
              </h3>
              <p className="py-4 flex flex-col gap-y-4">
                <div>
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    htmlFor="file_input"
                  >
                    <span className="flex items-center gap-x-2">
                      <span className="font-medium">Upload file</span>
                      <Image
                        src="/assets/upload.svg"
                        alt="upload logo"
                        height={24}
                        width={24}
                      />
                    </span>
                  </label>
                  <input
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 p-2 rounded shadow"
                    id="file_input"
                    type="file"
                  />
                </div>
                <div>
                  <span className="font-medium mb-2 block">
                    Enter new price
                  </span>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    placeholder={`i.e. ${newPrice}`}
                    className="shadow w-full p-4"
                    onChange={(e) => setNewPrice(e.target.value)}
                  />
                </div>
              </p>
              <div className="modal-action">
                <label
                  htmlFor="update-modal"
                  className="btn btn-sm rounded bg-red-500 border-0 capitalize"
                >
                  Cancel
                </label>
                <label
                  htmlFor="update-modal"
                  className="btn btn-sm rounded bg-green-500 border-0 capitalize"
                  onClick={handlePriceUpdate}
                >
                  Okay
                </label>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};
export default ManageServices;
