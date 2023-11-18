// import { useQuery } from "@apollo/client";
// import gql from "graphql-tag";
// import { useState, useEffect } from "react";
// import PagesHeader from "../../components/PagesHeader";
// import BG from "../../assets/images/blog_1800x.png";

// const GET_ORDERS_QUERY = gql`
//   query GetORDERS($email: String!) {
//     orders(filters: { email: { eq: $email } }) {
//       data {
//         id
//         attributes {
//           name
//           email
//           phone
//           address
//           items
//           amount
//           cellphone
//           city
//           postcode
//           note
//           approved
//         }
//       }
//     }
//   }
// `;

// export default function OrderListPage() {
//   const [orders, setOrders] = useState([]);
//   const email = localStorage.getItem("userEmail");

//   const { loading, error, data } = useQuery(GET_ORDERS_QUERY, {
//     variables: { email },
//   });

//   // console.log(email);

//   useEffect(() => {
//     if (data) {
//       setOrders(data.orders.data);
//     }
//   }, [data]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   const filteredOrders = orders.filter(
//     (order) => order.attributes.email === email
//   );

//   return (
//     <>
//       <PagesHeader imageUrl={BG} SubHeading="" Heading={`My Account`} />

//       <section>
//         <div className="container mx-auto py-20">
//           <div className="flex">
//             <div className="w-full">
//               <h1>Order list </h1>
//               <div>
//                 <table className="table-auto w-full">
//                   <thead>
//                     <tr>
//                       <th className="text-left px-4 py-2">Order</th>
//                       <th className="text-left px-4 py-2">Name</th>
//                       <th className="text-left px-4 py-2">Email</th>
//                       <th className="text-left px-4 py-2">Items</th>
//                       <th className="text-left px-4 py-2">Total Amount</th>
//                       <th className="text-left px-4 py-2">Note</th>
//                       <th className="text-left px-4 py-2">Status</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {filteredOrders.length === 0 ? (
//                       <tr>You have not placed any orders yet.</tr>
//                     ) : (
//                       filteredOrders.map((order) => (
//                         <tr
//                           key={order.id}
//                           className="py-5 bg-white shadow my-5"
//                         >
//                           <td>#{order.id}</td>
//                           <td>{order.attributes.name}</td>
//                           <td>{order.attributes.email}</td>
//                           <td>{order.attributes.items}</td>
//                           <td>{order.attributes.amount}</td>
//                           {/* <td>Phone: {order.attributes.phone}</td>
//                           <td>Address: {order.attributes.address}</td>
//                           <td>Cellphone: {order.attributes.cellphone}</td>
//                           <td>City: {order.attributes.city}</td>
//                           <td>Postcode: {order.attributes.postcode}</td> */}
//                           <td>{order.attributes.note}</td>
//                           <td>
//                             {" "}
//                             {order.attributes.approved
//                               ? "Approved"
//                               : "Unapproved"}
//                           </td>
//                         </tr>
//                       ))
//                     )}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

import React from "react";
import SideBar from "../../components/SideBar";
import { Tab } from "@headlessui/react";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MyAccountPage() {
  return (
    <>
      <section>
        <div className="flex flex-col md:flex-row">
          <div className="basis-full md:basis-3/12">
            <SideBar />
          </div>
          <div className="basis-full md:basis-9/12 p-3">
            <div className="bg-content  bg-opacity-10 ">
              <div className="mx-auto max-w-xl py-10 px-5">
                <h1 className="text-4xl">Your orders </h1>
              </div>
            </div>
            <div>
              <Tab.Group as="div" className="mx-auto max-w-xl">
                <Tab.List className="">
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        "w-2/4  py-2.5 pb",
                        " ring-offset-0  focus:outline-none focus:ring-0",
                        selected ? "border-b border-primary" : " "
                      )
                    }
                  >
                    Current orders (0)
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        "w-2/4  py-2.5 pb",
                        " ring-offset-0  focus:outline-none focus:ring-0",
                        selected ? "border-b border-primary" : " "
                      )
                    }
                  >
                    Past orders
                  </Tab>
                </Tab.List>
                <Tab.Panels>
                  <Tab.Panel className="py-10">
                    <div className="h-72 flex flex-col justify-center items-center gap-5">
                      <h1 className="text-lg">
                        You don’t have any current orders yet.
                      </h1>
                      <h1 className="text-lg">
                        Schedule your first Home pick up & delivery now!
                      </h1>
                      <Link
                        to="/booking-form"
                        className="bg-primary py-5 px-11 flex items-center justify-center gap-8 text-white rounded-md uppercase font-semibold  hover:bg-blue-600 focus:outline-none  transition-all text-sm  "
                      >
                        New Booking
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-arrow-right"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                          />
                        </svg>
                      </Link>
                    </div>
                    <div>
                      <ul className="flex flex-col gap-5">
                        <li className="shadow-md bg-white gap-3 rounded">
                          <div className="flex justify-end shadow p-4 ">
                            <p className="text-end bg-primary bg-opacity-30 rounded-full px-3 py-1 text-sm  inline-flex">
                              scheduled
                            </p>
                          </div>
                          <div className="p-4 ">
                            <p className="pm">Pickup: oct 9</p>
                            <p className="pm">12pm - 3pm </p>
                          </div>
                        </li>
                        <li className="shadow-md bg-white gap-3 rounded">
                          <div className="flex justify-end shadow p-4 ">
                            <p className="text-end bg-primary bg-opacity-30 rounded-full px-3 py-1 text-sm  inline-flex">
                              scheduled
                            </p>
                          </div>
                          <div className="p-4 ">
                            <p className="pm">Pickup: oct 9</p>
                            <p className="pm">12pm - 3pm </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </Tab.Panel>
                  <Tab.Panel className="py-10">
                    <div className="h-72 flex flex-col justify-center items-center gap-5">
                      <h1 className="text-lg">
                        You don’t have any past orders yet.
                      </h1>
                    </div>
                    <div>
                      <ul className="flex flex-col gap-5">
                        <li className="shadow-md bg-white gap-3 rounded">
                          <div className="flex justify-end shadow p-4 ">
                            <p className="text-end bg-primary bg-opacity-30 rounded-full px-3 py-1 text-sm  inline-flex">
                              Delivered
                            </p>
                          </div>
                          <div className="p-4 ">
                            <p className="pm">Pickup: oct 9</p>
                            <p className="pm">12pm - 3pm </p>
                          </div>
                        </li>
                        <li className="shadow-md bg-white gap-3 rounded">
                          <div className="flex justify-end shadow p-4 ">
                            <p className="text-end bg-primary bg-opacity-30 rounded-full px-3 py-1 text-sm  inline-flex">
                              Delivered
                            </p>
                          </div>
                          <div className="p-4 ">
                            <p className="pm">Pickup: oct 9</p>
                            <p className="pm">12pm - 3pm </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
