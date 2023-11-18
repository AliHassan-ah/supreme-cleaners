import React from "react";
import PagesHeader from "../components/PagesHeader";
import BG from "../assets/images/booking-bg.png";
import icon1 from "../assets/images/book-icon/Online_booking_icons.001_200x.png";
import icon2 from "../assets/images/book-icon/Online_booking_icons.002_200x.png";
import icon3 from "../assets/images/book-icon/Online_booking_icons.003_200x.png";
import icon4 from "../assets/images/book-icon/Online_booking_icons.004_200x.png";
import icon5 from "../assets/images/book-icon/Online_booking_icons.005_200x.png";
import img1 from "../assets/images/book-icon/iphone_app_900x.jpg";
import img2 from "../assets/images/book-icon/iphone_app_900x_2.jpg";
import CustomerReviews from "../components/CustomerReviews";
import ActiveAccordion from "../components/Faq/ActiveAccordion";
import SimpleAccordion from "../components/Faq/SimpleAccordion";
import PlaceAnOrder from "../components/PlaceAnOrder";

export default function Booking() {
  const FaqContent1 = (
    <p className="text-content text-sm">
      We aim to collect your clothes, give them our expert care and attention
      and deliver them back within 3 working days. The delivery timing will be
      provided to you as soon as the items have been inspected at our Main
      Branch. For leather, curtains and rugs the turnaround time is estimated
      between 1 to 3 weeks, due to the delicate nature of these items.
    </p>
  );
  const FaqContent2 = (
    <p className="text-content text-sm">
      If you haven't set up any delivery preferences in your online account, you
      will need to be home when our drivers come to collect and deliver your
      items. If you're not going to be home or if you would like someone else to
      be able to collect your order, you can set up a preferred delivery contact
      (neighbour, housekeeper, concierge) in your delivery preferences.
    </p>
  );
  const FaqContent3 = (
    <p className="text-content text-sm">
      Yes, if you’re not sure how to make a booking online, you can contact our
      Customer Care team at 020 8004 2630 or info@blancliving.co and they will
      be happy to assist and send you a booking confirmation email.
    </p>
  );
  const FaqContent4 = (
    <p className="text-content text-sm">
      We currently collect & deliver in most central London postcodes. You can
      visit our Locations page to see if your postcode is served or find a BLANC
      store nearby. If your postcode is not serviced yet, please note that we
      are expanding quickly and could be there soon: just register your email
      and we will contact you when we get there, with a special intro offer!
    </p>
  );
  const FaqContent5 = (
    <p className="text-content text-sm">
      Yes! You can book a regular pickup and delivery slot (once a week, or
      twice a week) directly in your online account (just click “Book a
      recurring booking” in your homepage). You can also give us a call on 020
      8004 2630 and one of our Customer Care representatives can book it for
      you. This saves having to deal with laundry and to re-book on a regular
      basis, and you can cancel at any time if you don’t need a delivery that
      week.
    </p>
  );
  const FaqContent6 = (
    <p className="text-content text-sm">
      If you miss a collection or delivery and have not notified us at least 12
      hours before the deadline, a R220,00 fee will apply yo your order to cover
      the driver’s visit.
    </p>
  );
  const FaqContent7 = (
    <p className="text-content text-sm">
      There is no minimum order but note that a R220,00 delivery fee is charged
      if the total value of the order is less than £25. For orders above £25,
      the collection & delivery is free!
    </p>
  );
  const FaqContent8 = (
    <p className="text-content text-sm">
      You can view all the details of your current bookings in the “Current
      Orders” section of your Account (visible from your online account
      homepage).
    </p>
  );
  const FaqContent9 = (
    <p className="text-content text-sm">
      Sometimes you get surprised with other arrangements - we understand. You
      can edit your booking date & time until 5pm the day before the slot
      initially scheduled. If you don’t know when you will be free next, you can
      cancel your booking and place a new one when you’re ready. Note that if
      you need to change your address details for a new postcode, you may have
      to pick new collection & delivery slots.
    </p>
  );
  return (
    <>
      <PagesHeader
        imageUrl={BG}
        SubHeading="Services"
        Heading={`Collection & Delivery \n Service
        `}
      />
      <section>
        <div className="container mx-auto">
          <div className="py-12 px-[10%]">
            <h1 className="text-lg md:text-3xl text-secondary ">
              SUPREME offers a dry cleaning and laundry collection and delivery
              service for individuals and businesses in a growing number of East
              Rand, South and Northern JHB suburb areas, so you don’t have to
              miss out on healthier, softer, eco-friendly dry cleaning.
            </h1>
          </div>
        </div>
      </section>
      <section className="">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-primary sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full  flex-shrink-0">
              <img src={icon1} alt="" />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-secondary text-xl title-font font-medium mb-2">
                1. Pick the slots that work for you
              </h2>
              <p className="leading-relaxed text-sm text-content">
                {/* Choose the 3-hours pick-up and delivery times that suit. */}
                ​We offer slots during weekdays and the weekend for maximum
                convenience
              </p>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-primary sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-secondary text-xl title-font font-medium mb-2">
                2. Provide specific instructions if needed
              </h2>
              <p className="leading-relaxed text-sm text-content">
                If necessary, you can provide some comments for our cleaning
                experts, as well as specific instructions for any alterations to
                be made.
              </p>
            </div>
            <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <img src={icon2} alt="" />
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-primary sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full  flex-shrink-0">
              <img src={icon3} alt="" />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-secondary text-xl title-font font-medium mb-2">
                3. We collect straight from your doorstep
              </h2>
              <p className="leading-relaxed text-sm text-content">
                Our driver will come to your address on the agreed date & time
                to collect your order. Make sure to have your bag ready during
                this slot!
              </p>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-primary sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-secondary text-xl title-font font-medium mb-2">
                4. We send your itemised e-receipt
              </h2>
              <p className="leading-relaxed text-sm text-content">
                Book now, pay later! Your card will only be charged after we
                have inspected your items in our Atelier and your e-receipt will
                show the breakdown per item.
              </p>
            </div>
            <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <img src={icon4} alt="" />
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto  sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full  flex-shrink-0">
              <img src={icon5} alt="" />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-secondary text-xl title-font font-medium mb-2">
                5. We deliver on the agreed date & time!
              </h2>
              <p className="leading-relaxed text-sm text-content">
                Once your items have been processed and quality-checked, our
                driver will deliver them back to you on the agreed date & time.
              </p>
            </div>
          </div>
        </div>
      </section>
      <PlaceAnOrder />
      <section>
        <div className="container mx-auto px-[10%]">
          <div className="grid grid-cols-1 ">
            <div className=" flex flex-col md:flex-row  p-8 border border-primary rounded-[50px]">
              <div className="basis-full md:basis-1/2">
                <img src={img1} className="rounded-[50px]" alt="" />
              </div>
              <div className="basis-full md:basis-1/2 flex flex-col justify-between pt-11 md:pt-0 md:pl-11">
                <div>
                  <h1 className="pb-3 text-xl">Even better on your phone!</h1>
                  <p className=" text-content text-base">
                    You can also download the app to your mobile phone:
                  </p>
                </div>
                <div>
                  <p className="pb-5 text-content text-base">
                    <span className="pb">If you have an iPhone,</span>
                    download from the app store by clicking the button below.
                    <br /> <br />
                    <span className="pb">If you have an Android,</span>
                    tap the "Add to home screen banner", then tap "Install" in
                    the pop up.
                  </p>
                  <a
                    className="px-4 py-2 border border-content rounded-lg text-base"
                    href="/"
                  >
                    Download Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-[10%]">
          <div className="grid grid-cols-1 ">
            <div className=" flex flex-col md:flex-row  p-8 border border-primary rounded-[50px]">
              <div className="basis-full md:basis-1/2 flex flex-col justify-between pt-11 md:pt-0">
                <div className="my-auto md:pr-11">
                  <h1 className="pb-3 text-xl">
                    Reserve your weekly recurring slot!
                  </h1>
                  <p className="pb-5 text-content text-base">
                    Ideal for workwear, laundry or bed linen items that need to
                    be cleaned regularly! You can set up visits once a week or
                    twice a week depending on your needs. 100% convenient, Zero
                    commitment: you can cancel or pause anytime!
                  </p>
                  <a
                    className="px-4 py-2 border border-content rounded-lg text-base"
                    href="/"
                  >
                    RESERVE MY SLOT
                  </a>
                </div>
              </div>
              <div className="basis-full md:basis-1/2 pt-8 md:pt-0">
                <img src={img2} className="rounded-[50px] " alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <CustomerReviews />
      <section className="pt-12 pb-24 bg-[#f9f9f9]">
        <div className="container mx-auto px-[15%]">
          <div className="text-center mb-20">
            <h1 className="sm:text-2xl text-3xl  text-secondary mb-4 uppercase">
              Faq
            </h1>
          </div>
          <div className="flex flex-col hs-accordion-group">
            <ActiveAccordion
              title="WHAT IS THE TURNAROUND TIME?"
              content={FaqContent1}
            />
            <SimpleAccordion
              title="DO I HAVE TO BE HOME WHEN YOU COLLECT/DELIVER?"
              content={FaqContent2}
            />
            {/* <SimpleAccordion
              title="CAN I MAKE AN ORDER THROUGH THE PHONE?"
              content={FaqContent3}
            /> */}
            {/* <SimpleAccordion
              title="WHAT LOCATIONS DO YOU SERVICE?"
              content={FaqContent4}
            /> */}
            {/* <SimpleAccordion
              title="CAN I BOOK A REGULAR PICKUP & DELIVERY?"
              content={FaqContent5}
            /> */}
            <SimpleAccordion
              title="WHAT HAPPENS IF I MISS A COLLECTION OR DELIVERY?"
              content={FaqContent6}
            />
            {/* <SimpleAccordion
              title="WHAT IS YOUR MINIMUM ORDER VALUE?"
              content={FaqContent7}
            /> */}
            {/* <SimpleAccordion
              title="HOW CAN I CHECK THE STATUS OF MY BOOKING?"
              content={FaqContent8}
            /> */}
            <SimpleAccordion
              title="CAN I EDIT MY BOOKING DETAILS OR CANCEL MY BOOKING?"
              content={FaqContent9}
            />
          </div>
        </div>
      </section>
    </>
  );
}
