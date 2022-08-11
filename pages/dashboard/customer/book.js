import Head from "next/head";
import Image from "next/image";
import React from "react";
import Mockup from "../../../components/Mockup";
import styles from "../../../styles/customer/book.module.css";

const Booking = () => {
  return (
    <section className="lg:w-1/2 md:w-3/4 w-full">
      <Head>
        <title>Booking - Luxury Living</title>
      </Head>
      <Mockup>
        <form>
          <div className="flex flex-col gap-y-4">
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
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
              />
            </div>
            <div>
              <input
                className={styles.inputter}
                type="text"
                name="services"
                id="services"
                placeholder="Your Service"
              />
            </div>
          </div>
          <div className="mt-8">
            <h4 className="font-bold">Pay with</h4>
            <div className="flex lg:items-center md:items-center lg:gap-x-4 md:gap-x-4 gap-y-4 my-4 lg:flex-row md:flex-row flex-col">
              <span className="flex items-center gap-x-1">
                <input type="radio" name="payment" id="credit" />
                <Image
                  src="/assets/payments/creadit.svg"
                  alt="creadit card"
                  height={20}
                  width={20}
                />
                <span>Creadit Card</span>
              </span>
              <span className="flex items-center gap-x-1">
                <input type="radio" name="payment" id="paypal" />
                <Image
                  src="/assets/payments/paypal.svg"
                  alt="master card"
                  height={20}
                  width={20}
                />
                <span>Paypal</span>
              </span>
            </div>
            <div className="flex flex-col gap-y-4">
              <div>
                <input
                  className={styles.inputter}
                  type="text"
                  name="cNumber"
                  id="cNumber"
                  placeholder="Card Number"
                />
              </div>
              <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-4 gap-y-4">
                <div>
                  <div>
                    <input
                      className={styles.inputter}
                      type="text"
                      name="Year"
                      id="Year"
                      placeholder="MM / YY"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <input
                      className={styles.inputter}
                      type="text"
                      name="cvc"
                      id="cvc"
                      placeholder="CVC"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-y-0 gap-y-4">
              <p>
                Your service charge will be{" "}
                <span className="font-bold">$1000</span>
              </p>
              <div className="text-right">
                <button className="btn btn-md rounded bg-[#251D58] text-white w-fit px-8 capitalize">
                  Pay
                </button>
              </div>
            </div>
          </div>
        </form>
      </Mockup>
    </section>
  );
};
export default Booking;
