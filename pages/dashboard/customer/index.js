import Head from "next/head";
import Layout from "../../../components/Layout";
import Booking from "./book";

const Customer = () => {
  return (
    <section>
      <Head>
        <title>Customer - Luxury Living</title>
      </Head>
      <section>
        <Layout>
          <Booking />
        </Layout>
      </section>
    </section>
  );
};
export default Customer;
