import Head from "next/head";
import React from "react";
import Layout from "../../../components/Layout";
import Mockup from "../../../components/Mockup";
import styles from "../../../styles/customer/book.module.css";

const Review = () => {
  return (
    <section>
      <Head>
        <title>Review - Luxury Living</title>
      </Head>
      <Layout>
        <section className="w-full">
          <Mockup>
            <form>
              <div className="grid grid-cols-1 gap-y-4 lg:min-w-[500px] md:min-w-[450px]">
                <div>
                  <input
                    className={styles.inputter}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <input
                    className={styles.inputter}
                    type="text"
                    name="designation"
                    id="designation"
                    placeholder="Your Designation"
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
export default Review;
