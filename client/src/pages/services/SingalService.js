import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import PagesHeader from "../../components/PagesHeader";
import SimpleAccordion from "../../components/Faq/SimpleAccordion";
import CustomerReviews from "../../components/CustomerReviews";
// import PlaceAnOrder from "../../components/PlaceAnOrder";
import ReactMarkdown from "react-markdown";
import { useCart } from "../../context/cartContext";

const GetSERVICE = gql`
  query Services($Slug: String!) {
    services(filters: { Slug: { eq: $Slug } }) {
      data {
        attributes {
          ServiceName
          HeaderImage {
            data {
              attributes {
                url
              }
            }
          }
          Description
          Categories {
            id
            Name
            From
            PriceList {
              id
              item
              price
            }
            info
          }

          Faqs {
            id
            Question
            Answer
          }
        }
      }
    }
  }
`;
export default function SingalService() {
  const { addToCart } = useCart();
  const [selectedItems, setSelectedItems] = useState([]);

  // const { addToCart } = useCart();
  const { slug } = useParams();
  const { data, loading, error } = useQuery(GetSERVICE, {
    variables: { Slug: slug },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  // console.log(data);

  return (
    <>
      <PagesHeader
        imageUrl={
          data.services.data[0].attributes.HeaderImage.data[0].attributes.url
        }
        SubHeading="Services"
        Heading={data.services.data[0].attributes.ServiceName}
      />

      <section className="py-12">
        <div className="container mx-auto">
          <div className="flex px-[10%]">
            <div className="mark-down">
              <ReactMarkdown>
                {data.services.data[0].attributes.Description}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-12">
        <div className="container mx-auto px-6 md:px-[12%]">
          <div className="flex flex-col hs-accordion-group">
            <div className="flex flex-row justify-between py-5">
              <h1>
                {data.services.data[0].attributes.ServiceName} Price Guide
              </h1>

              <button
                className="py-2 px-5  justify-center items-center  rounded-md uppercase font-semibold bg-primary text-white hover:bg-blue-600 focus:outline-none  transition-all text-sm "
                onClick={() => {
                  selectedItems.forEach((item) => addToCart(item));
                  setSelectedItems([]);
                }}
              >
                Add to Cart
              </button>
            </div>
            {/* table start  */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {data.services.data[0].attributes.Categories.map((category) => (
                <React.Fragment key={category.id}>
                  <div className="w-full">
                    <table className="w-full">
                      <thead>
                        <tr className="">
                          <th className="text-start px-5 py-2 text-[#444444] text-lg h">
                            {category.Name}
                          </th>
                          <th className="text-end px-5 py-2 text-[#999999] text-xs p">
                            {category.From}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-[#F9F9F9]">
                        {category.PriceList.map((item) => (
                          <tr key={item.id}>
                            <td className="text-start px-5 py-2 text-sm p text-content">
                              <div className="relative flex items-start w-full">
                                <div className="flex items-center h-5">
                                  <input
                                    id="hs-price-list"
                                    name={item.item}
                                    value={item.price}
                                    type="checkbox"
                                    className="border-primary rounded text-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                    onChange={() => {
                                      if (!selectedItems.includes(item)) {
                                        setSelectedItems([
                                          ...selectedItems,
                                          item,
                                        ]);
                                      } else {
                                        setSelectedItems(
                                          selectedItems.filter(
                                            (i) => i !== item
                                          )
                                        );
                                      }
                                    }}
                                  />
                                </div>
                                <label
                                  htmlFor="hs-list-group-item-checkbox-1"
                                  className="ml-3.5 block w-full text-sm text-content"
                                >
                                  {item.item}
                                </label>
                              </div>
                              {/* {item.item} */}
                            </td>
                            <td className="text-end px-5 py-2 text-sm p">
                              R{item.price}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p className="px-5 py-2 text-sm p  bg-[#F9F9F9] text-content">
                      {category.info}
                    </p>
                  </div>
                </React.Fragment>
              ))}
            </div>

            {/* table End  */}
          </div>
        </div>
      </section>
      <CustomerReviews />
      {/* <PlaceAnOrder /> */}
      <section className="pt-12 pb-24 bg-[#f9f9f9]">
        <div className="container mx-auto px-[15%]">
          <div className="text-center mb-20">
            <h1 className="sm:text-2xl text-3xl  text-secondary mb-4 uppercase">
              Faq
            </h1>
          </div>
          <div className="flex flex-col hs-accordion-group">
            {data.services.data[0].attributes.Faqs.map((item) => (
              <SimpleAccordion
                key={item.id}
                title={item.Question}
                content={item.Answer}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
