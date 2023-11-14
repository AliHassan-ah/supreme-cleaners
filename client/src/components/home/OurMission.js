import React from "react";
import banner from "../../assets/images/Website_Temporary_Banner_App_Store_1600_x_600px_1700x.png";

export default function OurMission() {
  return (
    <>
      <section className="bg-[#f9f9f9] text-center">
        <div className="container mx-auto flex p-12 mb-12  flex-col items-center">
          <div className="row">
            <div className=" text-center ">
              <h4 className="text-base text-primary p">Our mission</h4>
              <p className="text-xl text-content">
                Supreme Cleaners was founded with the mission to clean up the
                dry cleaning industry and make <br></br>clothes last.<br></br>
                <br></br>
                At Supreme Cleaners, we clean & care for clothes naturally, and
                always with love.<br></br>
                <br></br>
                Because the most sustainable clothes are the ones you already
                own.<br></br>
                <br></br>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto text-center flex justify-center items-center">
          <img src={banner} alt="" />
        </div>
      </section>
    </>
  );
}
