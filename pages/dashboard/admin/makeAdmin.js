import Head from "next/head";
import React from "react";
import Layout from "../../../components/Layout";
import Mockup from "../../../components/Mockup";
import styles from "../../../styles/customer/book.module.css";

const MakeAdmin = () => {
  return (
    <section>
      <Head>
        <title>Make Admin - Luxury Living</title>
      </Head>
      <Layout>
        <section className="lg:w-1/2 md:w-3/4 w-full">
          <Mockup>
            <section>
              <form>
                <div className="grid grid-cols-1 gap-y-4 lg:min-w-[500px] md:min-w-[450px]">
                  <div className="flex flex-col gap-y-4">
                    <h2 className="text-2xl font-bold">Email Address</h2>
                    <input
                      className={styles.inputter}
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter Email Address"
                    />
                  </div>
                </div>
                <button className="btn btn-md rounded bg-[#251D58] text-white w-fit px-8 capitalize mt-4">
                  Submit
                </button>
              </form>
            </section>
          </Mockup>
        </section>
      </Layout>
    </section>
  );
};
export default MakeAdmin;
