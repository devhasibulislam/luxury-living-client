import Head from "next/head";
import React, { useState } from "react";
import Layout from "../../../components/Layout";
import Mockup from "../../../components/Mockup";
import styles from "../../../styles/customer/book.module.css";
import useSWR from "swr";
import axios from "axios";
import toast from "react-hot-toast";

const MakeAdmin = () => {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState(null);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data: users } = useSWR("https://ll-luxury-living.herokuapp.com/user", fetcher, {
    revalidateOnFocus: true,
  });

  if (!users) return <p>Loading...</p>;

  const handleAdmin = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;

    const { data } = await axios.put(`https://ll-luxury-living.herokuapp.com/user/${email}`, {
      email: email,
    });

    if (data?.acknowledged) {
      toast.success(`${email} treated as Admin.`);
      setEmail(null);
      event.target.reset();
    }
  };

  return (
    <section>
      <Head>
        <title>Make Admin - Luxury Living</title>
      </Head>
      <Layout>
        <section className="w-full">
          <Mockup>
            <section>
              <form onSubmit={handleAdmin}>
                <div className="grid grid-cols-1 gap-y-4 lg:min-w-[500px] md:min-w-[450px]">
                  <div className="flex flex-col gap-y-4">
                    <h2 className="text-2xl font-bold">Email Address</h2>
                    <input
                      className={styles.inputter}
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      placeholder="Enter Email Address"
                      autoComplete="off"
                      onChange={(event) => setEmail(event.target.value)}
                      onClick={() => setVisible(true)}
                    />
                    {visible && (
                      <div className="flex flex-col gap-y-2 h-[88px] z-10 overflow-auto">
                        {users.map((user) => (
                          <p
                            key={user._id}
                            className="bg-white p-2 rounded w-full"
                            onClick={() => setEmail(user.email)}
                          >
                            {user.email}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <button className="btn btn-md rounded bg-[#251D58] text-white w-fit px-8 capitalize mt-4">
                  Submit
                </button>
              </form>
            </section>
          </Mockup>
          <span
            className="fixed w-screen h-screen bg-white top-0 left-0 -z-10"
            onClick={() => setVisible(false)}
          ></span>
        </section>
      </Layout>
    </section>
  );
};
export default MakeAdmin;
