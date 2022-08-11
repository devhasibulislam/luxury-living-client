import Head from "next/head";
import Layout from "../../../components/Layout";
import OrderList from "./orderList";

const Admin = () => {
  return (
    <section>
      <Head>
        <title>Admin - Luxury Living</title>
      </Head>
      <section className="">
        <Layout>
          <OrderList />
        </Layout>
      </section>
    </section>
  );
};
export default Admin;
