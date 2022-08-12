import Head from "next/head";
import React from "react";
import Mockup from "../../../components/Mockup";
const OrderList = () => {
  return (
    <section>
      <Head>
        <title>Order List - Luxury Living</title>
      </Head>
      <section className="lg:w-3/4 md:w-3/4 w-full">
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
                <tr className="hover">
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>ganderton433@outlook.com</td>
                  <td>Office Interior Design</td>
                  <td>Paypal</td>
                  <td>
                    <select className="select select-sm w-full max-w-xs shadow">
                      <option disabled selected>
                        Done
                      </option>
                      <option className="text-red-700">Pending</option>
                      <option className="text-orange-700">Ongoing</option>
                      <option className="text-green-700">Done</option>
                    </select>
                  </td>
                </tr>
                <tr className="hover">
                  <th>2</th>
                  <td>Cy Ganderton</td>
                  <td>ganderton433@outlook.com</td>
                  <td>Office Interior Design</td>
                  <td>Creadit Card</td>
                  <td>
                    <select className="select select-sm w-full max-w-xs shadow">
                      <option disabled selected>
                        Ongoing
                      </option>
                      <option className="text-red-700">Pending</option>
                      <option className="text-orange-700">Ongoing</option>
                      <option className="text-green-700">Done</option>
                    </select>
                  </td>
                </tr>
                <tr className="hover">
                  <th>3</th>
                  <td>Cy Ganderton</td>
                  <td>ganderton433@outlook.com</td>
                  <td>Office Interior Design</td>
                  <td>Creadit Card</td>
                  <td>
                    <select className="select select-sm w-full max-w-xs shadow">
                      <option disabled selected>
                        Pending
                      </option>
                      <option className="text-red-700">Pending</option>
                      <option className="text-orange-700">Ongoing</option>
                      <option className="text-green-700">Done</option>
                    </select>
                  </td>
                </tr>
                <tr className="hover">
                  <th>4</th>
                  <td>Cy Ganderton</td>
                  <td>ganderton433@outlook.com</td>
                  <td>Office Interior Design</td>
                  <td>Paypal</td>
                  <td>
                    <select className="select select-sm w-full max-w-xs shadow">
                      <option disabled selected>
                        Pending
                      </option>
                      <option className="text-red-700">Pending</option>
                      <option className="text-orange-700">Ongoing</option>
                      <option className="text-green-700">Done</option>
                    </select>
                  </td>
                </tr>
                <tr className="hover">
                  <th>5</th>
                  <td>Cy Ganderton</td>
                  <td>ganderton433@outlook.com</td>
                  <td>Office Interior Design</td>
                  <td>Creadit Card</td>
                  <td>
                    <select className="select select-sm w-full max-w-xs shadow">
                      <option disabled selected>
                        Ongoing
                      </option>
                      <option className="text-red-700">Pending</option>
                      <option className="text-orange-700">Ongoing</option>
                      <option className="text-green-700">Done</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Mockup>
      </section>
    </section>
  );
};
export default OrderList;
