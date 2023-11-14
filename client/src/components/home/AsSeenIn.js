import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function AsSeenIn() {
  return (
    <>
      <section className="py-12  hidden md:block">
        <div className=" container  mx-auto">
          <div className="flex text-center flex-col">
            <h1 className="text-base text-primary p">
              Supreme Cleaners also gets the thumbs-up from Woolmark
            </h1>
          </div>
          <div className="flex mx-auto">
            <Swiper
              spaceBetween={30}
              //   centeredSlides={true}
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
              slidesPerView={3}
              loop={true}
            >
              <SwiperSlide className="p-8">
                <div className="text-center">
                  <p className="text-2xl text-secondary pb-6">
                    "Biodegradable, health-friendly detergents promising a fresh
                    smell and brilliant whites"
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="p-8">
                <div className="text-center">
                  <p className="text-2xl text-secondary pb-6">
                    "Johannesbureg second best dry cleaners: Supreme Cleaners,
                    better for your clothes, skin and the planet"
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="p-8">
                <div className="text-center">
                  <p className="text-2xl text-secondary pb-6">
                    "Many fashion brands already recommend ‘Wet Clean Only’ on
                    their garment care labels"
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="p-8">
                <div className="text-center">
                  <p className="text-2xl text-secondary pb-6">
                    "Supreme Cleaners has a different vision: international,
                    heavily branded, tech-savvy and eco-friendly"
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="p-8">
                <div className="text-center">
                  <p className="text-2xl text-secondary pb-6">
                    "Cleverly, Supreme Cleaners has made the process of cleaning
                    a pleasure"
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <section className="py-12 block md:hidden">
        <div className=" container  mx-auto">
          <div className="flex text-center flex-col">
            <h1 className="text-base text-primary p">As Seen In</h1>
          </div>
          <div className="flex mx-auto">
            <Swiper
              spaceBetween={30}
              //   centeredSlides={true}
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
              // slidesPerView={3}
              loop={true}
            >
              <SwiperSlide className="p-8">
                <div className="text-center">
                  <p className="text-2xl text-secondary pb-6">
                    "Supreme Cleaners also gets the thumbs-up from Woolmark"
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="p-8">
                <div className="text-center">
                  <p className="text-2xl text-secondary pb-6">
                    "Biodegradable, health-friendly detergents promising a fresh
                    smell and brilliant whites"
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="p-8">
                <div className="text-center">
                  <p className="text-2xl text-secondary pb-6">
                    "Johannesbureg second best dry cleaners: Supreme Cleaners,
                    better for your clothes, skin and the planet"
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="p-8">
                <div className="text-center">
                  <p className="text-2xl text-secondary pb-6">
                    "Many fashion brands already recommend ‘Wet Clean Only’ on
                    their garment care labels"
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="p-8">
                <div className="text-center">
                  <p className="text-2xl text-secondary pb-6">
                    "Supreme Cleaners has a different vision: international,
                    heavily branded, tech-savvy and eco-friendly"
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="p-8">
                <div className="text-center">
                  <p className="text-2xl text-secondary pb-6">
                    "Cleverly, Supreme Cleaners has made the process of cleaning
                    a pleasure"
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
