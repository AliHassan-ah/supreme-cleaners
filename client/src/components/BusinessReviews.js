import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import { useQuery, gql } from "@apollo/client";

const Breviews = gql`
  query GetBREVIEWS {
    breviews {
      data {
        id
        attributes {
          Breview
        }
      }
    }
  }
`;
export default function BusinessReviews() {
  const { data, loading, error } = useQuery(Breviews);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  // console.log(data);
  return (
    <>
      <section className="py-12 ">
        <div className=" container  mx-auto">
          <div className="flex text-center flex-col">
            <h1 className="text-base text-primary p">Customer Reviews</h1>
          </div>
          <div className="flex max-w-4xl mx-auto">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              //   autoplay={{
              //     delay: 2500,
              //     disableOnInteraction: false,
              //   }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {data.breviews.data.map((item) => (
                <SwiperSlide className="p-8" key={item.id}>
                  <div>
                    <p className="text-2xl text-secondary pb-6">
                      {item.attributes.Breview}
                    </p>
                    <p className="pb-6 text-content text-2xl">★ ★ ★ ★ ★</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
