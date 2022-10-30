import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import Layout from "../../../components/Layout";
import Mockup from "../../../components/Mockup";
import styles from "../../../styles/customer/book.module.css";
import axios from "axios";
import toast from "react-hot-toast";

const AddService = () => {
  const [avatar, setAvatar] = useState("");

  const fileOnChange = (event) => {
    // setImage(event.target.files[0]);

    let formData = new FormData();

    formData.append("avatar", event.target.files[0]);
    fetch("https://luxury-living-ll-server.onrender.com/admin/service", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.avatar);
        setAvatar(data.avatar);
      });
  };

  const handleAddService = async (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const description = event.target.description.value;

    // let formData = new FormData();

    // formData.append("avatar", image);
    // fetch("https://luxury-living-ll-server.onrender.com/admin/service", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data?.path);
    //     setPath(data?.path);
    //   });

    const service = { name, description, avatar, price: 499 };
    // console.log(service);
    const { data } = await axios.post(
      "https://luxury-living-ll-server.onrender.com/admin/servicing",
      service
    );
    if (data?.acknowledged) {
      toast.success("New service added.");
      event.target.reset();
    }
  };

  return (
    <section>
      <Head>
        <title>Add Service - Luxury Living</title>
      </Head>
      <Layout>
        <section className="w-full">
          <Mockup>
            <form onSubmit={handleAddService}>
              <div className="grid grid-cols-1 gap-y-4 lg:min-w-[500px] md:min-w-[450px]">
                <div>
                  <input
                    className={styles.inputter}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter service name"
                  />
                </div>
                <div>
                  <textarea
                    name="description"
                    id="description"
                    className="w-full h-40 p-4 rounded-lg shadow"
                    placeholder="Write Comment"
                  />
                </div>
                <div className="">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    htmlFor="file_input"
                  >
                    <span className="flex items-center gap-x-2">
                      <span>Upload file</span>
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
                    onChange={fileOnChange}
                  />
                </div>
              </div>
              <button className="btn btn-md rounded bg-[#251D58] text-white w-fit px-8 capitalize mt-4">
                Submit
              </button>
            </form>
          </Mockup>
        </section>
      </Layout>
    </section>
  );
};
export default AddService;
