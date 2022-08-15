import Head from "next/head";
import React, { useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import Mockup from "../../../components/Mockup";
import styles from "../../../styles/customer/book.module.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../config/firebase";
import axios from "axios";
import toast from "react-hot-toast";

const Review = () => {
  const [user] = useAuthState(auth);
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    setDisable(localStorage.getItem(`${user?.displayName}-review`) === "true");
  }, []);

  const handleReview = async (event) => {
    event.preventDefault();

    const name = user?.displayName;
    const designation = event.target.designation.value;
    const description = event.target.description.value;
    const rating = event.target.rating.value;
    let avatar = user.displayName
      .match(/\b(\w)/g)
      .join("")
      .toUpperCase();

    const reviewer = {
      name,
      email: user?.email,
      designation,
      description,
      avatar,
      rating
    };

    const { data } = await axios.post(
      "https://ll-luxury-living.herokuapp.com/customer/review",
      reviewer
    );

    if (data?.acknowledged) {
      toast.success("Review posted successfully!");
      localStorage.setItem(`${user?.displayName}-review`, true);
      event.target.reset();
    }
  };

  return (
    <section>
      <Head>
        <title>Review - Luxury Living</title>
      </Head>
      <Layout>
        <section className="w-full">
          <Mockup>
            <form onSubmit={handleReview}>
              <div className="grid grid-cols-1 gap-y-4 lg:min-w-[500px] md:min-w-[450px]">
                <div>
                  <div className="grid lg:grid-cols-2 lg:gap-x-4 grid-cols-1 gap-y-4">
                    <input
                      className={styles.inputter}
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                      value={user?.displayName}
                      readOnly
                    />
                    <input
                      className={styles.inputter}
                      type="number"
                      name="rating"
                      id="rating"
                      placeholder="i.e: 5 or 3"
                    />
                  </div>
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
              <button
                className="btn btn-md rounded bg-[#251D58] text-white w-fit px-8 capitalize mt-4"
                type="submit"
                disabled={disable}
              >
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
