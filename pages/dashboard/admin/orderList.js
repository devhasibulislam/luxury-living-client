import axios from "axios";
import Head from "next/head";
import React from "react";
import useSWR from "swr";
import Mockup from "../../../components/Mockup";
import toast from "react-hot-toast";

const OrderList = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data: booking } = useSWR(
    "https://ll-luxury-living.herokuapp.com/customer/booking",
    fetcher,
    { revalidateOnFocus: true }
  );

  const handleStatus = async (id, status) => {
    const { data } = await axios.put("https://ll-luxury-living.herokuapp.com/customer/booking", {
      id,
      status,
    });
    
    if(data?.acknowledged){
      toast.success("Status updated!");
    }
  };

  return (
    <section>
      <Head>
        <title>Order List - Luxury Living</title>
      </Head>
      <section className="w-full">
        <Mockup>
          <div className="overflow-x-auto shadow rounded-md">
            <table className="table w-full">
              <thead>
                <tr className="bg-red-300">
                  <th></th>
                  <th>Name</th>
                  <th>Email ID</th>
                  <th>Services</th>
                  <th>Pay With</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {booking?.map((book) => (
                  <tr className="hover" key={book._id}>
                    <th>1</th>
                    <td>{book?.name}</td>
                    <td>{book?.email}</td>
                    <td>{book?.service}</td>
                    <td>{book?.payment_method}</td>
                    <td>
                      <select
                        className="select select-sm max-w-xs shadow w-[105px]"
                        onChange={(event) =>
                          handleStatus(book._id, event.target.value)
                        }
                      >
                        <option disabled selected>
                          {book?.status}
                        </option>
                        <option value="Pending" className="text-red-700">
                          Pending
                        </option>
                        <option value="Ongoing" className="text-orange-700">
                          Ongoing
                        </option>
                        <option value="Done" className="text-green-700">
                          Done
                        </option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Mockup>
      </section>
    </section>
  );
};
export default OrderList;
