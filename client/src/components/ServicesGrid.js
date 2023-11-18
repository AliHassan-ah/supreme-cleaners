import React from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const SERVICES = gql`
  query GetServices {
    services {
      data {
        id

        attributes {
          ServiceName
          Slug
          Excerpt
          FeaturedImage {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
export default function ServicesGrid() {
  const { data, loading, error } = useQuery(SERVICES);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  //   console.log(data);
  return (
    <>
      {data.services.data.map((item) => (
        <div className=" md:w-1/3  m-6 text-center mx-auto px-6 " key={item.id}>
          <div className=" h-64 overflow-hidden">
            <Link to={`/service/${item.attributes.Slug}`}>
              <img
                className="object-cover w-full object-center h-full  mx-auto hover:opacity-70"
                src={item.attributes.FeaturedImage.data[0].attributes.url}
                alt={item.attributes.ServiceName}
              />
            </Link>
          </div>
          <div className="bg-[#f9f9f9] ">
            <div className="md:p-6 flex flex-col">
              <Link
                to={`/service/${item.attributes.Slug}`}
                className="h1 text-3xl text-secondary mb-4 hover:text-primary mt-5 md:mt-2"
              >
                {item.attributes.ServiceName}
              </Link>
              <p className="text-base text-content mb-4">
                {item.attributes.Excerpt}
              </p>
            </div>
            <div className="pb-6 flex justify-end items-center ">
              <Link
                to={`/service/${item.attributes.Slug}`}
                className="bg-content hover:bg-primary text-white py-2 px-5 text-sm flex flex-row rounded-l-md "
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 ml-3 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
