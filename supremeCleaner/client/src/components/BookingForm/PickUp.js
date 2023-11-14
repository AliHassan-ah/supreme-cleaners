import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

const PickUp = () => {
  const scheduleData = [
    {
      date: "Fri. 27 Oct",
      slots: ["8-10 am", "10-12 pm", "12-2 pm", "2-4 pm", "4-6 pm", "6-8 pm"],
    },
    {
      date: "Sat. 28 Oct",
      slots: ["8-10 am", "10-12 pm", "12-2 pm", "2-4 pm", "4-6 pm", "6-8 pm"],
    },
    {
      date: "Sun. 29 Oct",
      slots: ["8-10 am", "10-12 pm", "12-2 pm", "2-4 pm", "4-6 pm", "6-8 pm"],
    },
    {
      date: "Mon. 30 Oct",
      slots: ["8-10 am", "10-12 pm", "12-2 pm", "2-4 pm", "4-6 pm", "6-8 pm"],
    },
    {
      date: "Tue. 31 Oct",
      slots: ["8-10 am", "10-12 pm", "12-2 pm", "2-4 pm", "4-6 pm", "6-8 pm"],
    },
    {
      date: "Wed. 1 Nov",
      slots: ["8-10 am", "10-12 pm", "12-2 pm", "2-4 pm", "4-6 pm", "6-8 pm"],
    },
  ];

  const [selectedDate, setSelectedDate] = useState(scheduleData[0].date);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  return (
    <div className="bg-white shadow-lg rounded-md  mx-auto px-8 py-6 my-10 relative">
      <div className="mb-10">
        <h4 className="text-xl pb-2">Please choose a pick up slot</h4>
        <p className="pm text-sm text-content ">
          Our driver will pick up your bag of dry cleaning, tailoring and/or
          wash & fold.
        </p>
      </div>

      <div
        className="schedule-container animation-fade-in"
        style={{ position: "relative" }}
      >
        <Swiper
          // slidesPerView={4}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {scheduleData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="text-base text-black pb py-5 ">{item.date}</div>
              <div className="slots">
                {item.slots.map((slot, slotIndex) => (
                  <div
                    key={slotIndex}
                    className={`slot text-base text-secondary px-6 py-3 m-3 bg-content bg-opacity-5 rounded-md cursor-pointer pm ${
                      selectedDate === item.date && selectedTimeSlot === slot
                        ? "selected bg-content bg-opacity-75 text-white pm"
                        : ""
                    }`}
                    onClick={() => {
                      setSelectedDate(item.date);
                      setSelectedTimeSlot(slot);
                    }}
                  >
                    {slot}
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PickUp;
