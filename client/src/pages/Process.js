import React from "react";
import PagesHeader from "../components/PagesHeader";
import BG from "../assets/images/eco-cleaning-header.png";
import icon1 from "../assets/images/icons/PROCESS_icon_1.png";
import icon2 from "../assets/images/icons/PROCESS_icon_2.png";
import icon3 from "../assets/images/icons/PROCESS_icon_3.png";
import icon4 from "../assets/images/icons/PROCESS_icon_4.png";
import icon5 from "../assets/images/icons/PROCESS_icon_5.png";
import icon6 from "../assets/images/icons/PROCESS_icon_6.png";
import ActiveAccordion from "../components/Faq/ActiveAccordion";
import SimpleAccordion from "../components/Faq/SimpleAccordion";

export default function Process() {
  const FaqContent1 = (
    <p className="text-content text-sm">
      Don’t worry if you are unsure how your clothes should be treated, it is
      our job, not yours! Our expert cleaners will carefully examine all your
      items and clean them under the manufacturer’s instructions using the most
      suited technology. If there’s any doubt or if we are unable to find a care
      label on the item, we will ask for your authorisation prior to proceeding.
    </p>
  );
  const FaqContent2 = (
    <p className="text-content text-sm">
      We will try our best! To give us every possible chance of removing stains,
      please bring your stained item to us as soon as you can and let us know
      what originally caused it. On some occasions, unfortunately, there might
      be stains that we are simply unable to remove. If we believe removing a
      deep-set stain might alter the garment, we will always let you know.
    </p>
  );
  const FaqContent3 = (
    <p className="text-content text-sm">
      Generally, yes. Our process, which combines artisan care with expert tech,
      is suitable for most items, even the most delicate ones or those with a
      “dry clean only” care label.
      <br />
      <br />
      However, if our in-house experts assess that better results would be
      achieved by using a solvent-based cleaning method for a specific item, we
      can send the item to our subcontractor to use a different cleaning
      technology, including solvents. In such a case, we will always let you
      know and ask for your authorisation prior to processing, you then decide
      if you want us to proceed.
    </p>
  );
  const FaqContent4 = (
    <p className="text-content text-sm">
      We clean your clothes at 219 Victoria St, Germiston, Germiston, Gauteng
      7800l. Just a note here, while most garments will always remain on the
      Supreme Cleaners premises, some specialty items will be sent out to
      carefully selected, trusted partners from time to time for additional
      care.
    </p>
  );
  const FaqContent5 = (
    <p className="text-content text-sm">
      As we constantly strive to obtain the best clean while taking extra care
      of the most delicate fabrics, a lot of brides (including our owner!) have
      entrusted us with their wedding dress and we are expert at cleaning those
      pieces. Please note that the sooner you bring your dress in after your
      wedding, the better the results, as leaving little time for stains to set
      helps us clean with less risk to a better finish.
      <br />
      <br />
      We can also clean other bespoke items - just ask one of your store
      assistants if you would like more information or to ask for a quote.
    </p>
  );
  return (
    <>
      <PagesHeader
        imageUrl={BG}
        SubHeading="How it works"
        Heading={`Our Award-Winning \n Process`}
      />
      {/* <section className="py-12">
        <div className="container mx-auto px-[5%]">
          <div className="text-center text-content pb-12">
            <h1 className="text-3xl hl">Did you know?</h1>
          </div>
          <div className="flex flex-col md:flex-row md:gap-12 pb-12">
            <div className="bg-[#f1f1f1] p-8 basis-full md:basis-5/12">
              <h1 className="text-[#444444] text-4xl">85%</h1>
              <h2 className="text-[#444444] text-xl pb-4">
                of dry cleaners use PERC, a very toxic solvent
              </h2>
              <p className="text-sm">
                * Known to be carcinogenic <br /> * Already banned in France,
                Denmark and some US states
              </p>
            </div>
            <div className=" p-8 basis-full md:basis-7/12 ">
              <h2 className="text-[#444444] text-lg pb-4">
                A little bit of myth busting about conventional dry cleaning...
              </h2>
              <p className="text-sm">
                Very few people know but dry cleaning is neither dry or clean:
                it consists of soaking clothes in toxic solvents which are then
                evaporated at very high temperatures.
                <br />
                <br />
                Find out more about PERC and toxicity in conventional dry
                cleaning industry.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-12 pb-12">
            <div className="bg-[#f1f1f1] p-8 basis-full md:basis-5/12">
              <h1 className="text-[#444444] text-4xl">20%</h1>
              <h2 className="text-[#444444] text-xl pb-4">
                of fashion carbon emissions come from product use
              </h2>
              <p className="text-sm">
                * From washing, drying, ironing, etc.
                <br />* Source: McKinsey, 2020
              </p>
            </div>
            <div className=" p-8 basis-full md:basis-7/12">
              <h2 className="text-[#444444] text-lg pb-4">
                Reducing the fashion impact with cleaning that doesn’t cost the
                Earth
              </h2>
              <p className="text-sm">
                Here at SUPREME, we believe that the world needs a sustainable
                way of cleaning the many clothes it produces. We use
                eco-technologies which are the most sustainable and
                health-friendly methods of cleaning currently available.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-12 pb-12">
            <div className="bg-[#f1f1f1] p-8 basis-full md:basis-5/12">
              <h1 className="text-[#444444] text-4xl">70%</h1>
              <h2 className="text-[#444444] text-xl pb-4">
                of clothes we throw away have irreversible damage
              </h2>
              <p className="text-sm">
                * Such as colour fading, stubborn stains or shrinking <br />*
                Source: Fashion Revolution
              </p>
            </div>
            <div className=" p-8 basis-full md:basis-7/12">
              <h2 className="text-[#444444] text-lg pb-4">
                On a mission to make clothes last <br />
                #CareRepairRewear
              </h2>
              <p className="text-sm">
                The most sustainable fashion is the one already is our wardrobe.
                By caring for our clothes properly and repairing/mending them
                when needed, we can extend the lifespan of our clothes
                considerably. Good for the planet… and the wallet!
              </p>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section>
        <div className="container mx-auto">
          <div className="flex">
            <p className="hl text-2xl text-center mb-[100px] px-[10%]">
              Supreme Cleaners is the leading UK specialist in sustainable
              aftercare. We have replaced the toxic solvents used by
              conventional dry cleaners with expert eco-cleaning technologies
              that are health-friendly, much gentler on textile fibres, and have
              a low environmental impact.{" "}
            </p>
          </div>
        </div>
      </section>
      <section className="pb-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6">
            <div className=" border border-primary rounded-3xl text-center mx-5 md:mx-0">
              <div className="p-6">
                <div className="text-center px-5 py-[15px] text-xl border rounded-full mx-auto border-primary w-fit">
                  <h1 className="text-xl hl text-primary">w</h1>
                </div>
                <h1 className="text-primary text-center my-4 h-3 text-xl">
                  WET CLEANING
                </h1>
                <p className="text-content text-left ">
                  Wet cleaning combines artisan care with expert tech, and the
                  process leaves garments softer, brighter and fresher. This
                  Woolmark-approved process uses biodegradable detergents, and
                  pure water - and the pre-spotting and custom cycles ensures
                  fibres are respected.
                </p>
                <h1 className="text-center text-base pb-2">Benefits</h1>
                <ul className="list-image-[url(checkmark.png)] text-content text-left pl pb-5">
                  <li>
                    Removes organic stains, which conventional dry cleaning can
                    not treat
                  </li>
                  <li>No toxic chemicals on your skin or clothes</li>
                  <li>Safe for children and allergy sufferers</li>
                  <li>Reduces polluting toxins into the air and water</li>
                  <li>Low on energy use</li>
                </ul>
              </div>
              <div className="flex  flex-row justify-end mb-5">
                <a
                  href="#"
                  className="flex flex-row px-5 py-2 bg-primary text-sm  rounded-l-lg text-white "
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 my-auto ml-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className=" border border-primary rounded-3xl text-center mx-5 md:mx-0">
              <div className="p-6">
                <div className="text-center px-5 py-[15px] text-xl border rounded-full mx-auto border-primary w-fit">
                  <h1 className="text-xl hl text-primary">CO₂</h1>
                </div>
                <h1 className="text-primary text-center my-4 h-3 text-xl">
                  LIQUID CO₂ CLEANING
                </h1>
                <p className="text-content text-left ">
                  Carbon dioxide is a non-toxic and naturally occurring gas
                  which turns liquid when exposed to high pressure and becomes a
                  super-efficient natural solvent. <br /> It’s particularly good
                  at tackling oil-based stains and enables to clean extremely
                  delicate garments.
                </p>
                <h1 className="text-center text-base pb-2">Benefits</h1>
                <ul className="list-image-[url(checkmark.png)] text-content text-left pl pb-5">
                  <li>
                    Enables to clean clothes with high colour contrast or
                    structured fabrics
                  </li>
                  <li>Very efficient on greasy stains</li>
                  <li>Completely non-toxic</li>
                  <li>Environmental Impact is minimal</li>
                  <li>The process involves no water waste</li>
                </ul>
              </div>
              <div className="flex  flex-row justify-end mb-5">
                <a
                  href="#"
                  className="flex flex-row px-5 py-2 bg-primary text-sm  rounded-l-lg text-white "
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 my-auto ml-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className=" border border-primary rounded-3xl text-center mx-5 md:mx-0">
              <div className="p-6">
                <div className="text-center px-5 py-[15px] text-xl border rounded-full mx-auto border-primary w-fit">
                  <h1 className="text-xl hl text-primary">O₃</h1>
                </div>
                <h1 className="text-primary text-center my-4 h-3 text-xl">
                  OZONE DISINFECTION
                </h1>
                <p className="text-content text-left ">
                  The Ozonation process uses clean technology to break down the
                  biological structure of bacteria, leaving items totally
                  disinfected.
                  <br />
                  <br />
                  It is proven to sanitise items entirely, including against the
                  coronavirus, while preventing unnecessary cleaning.
                </p>
                <h1 className="text-center text-base pb-2">Benefits</h1>
                <ul className="list-image-[url(checkmark.png)] text-content text-left pl pb-5">
                  <li>Removes all odours, including, sweat, mould and smoke</li>
                  <li>Sanitise items entirely</li>
                  <li>
                    Chemical-free process that doesn’t use any cleaning
                    solvents, fluids or powders
                  </li>
                  <li>100% environmentally-friendly</li>
                  <li>Hypoallergenic</li>
                </ul>
              </div>
              <div className="flex  flex-row justify-end mb-5">
                <a
                  href="#"
                  className="flex flex-row px-5 py-2 bg-primary text-sm  rounded-l-lg text-white "
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 my-auto ml-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className=" py-12">
        <div className="container mx-auto">
          <div className="text-center text-content pb-12">
            <h1 className="text-3xl hl">Our process, step by step</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-[15%]">
            <div className="bg-[#f1f1f1] p-5 rounded-[30px] text-center ">
              <img
                src={icon1}
                className=" w-28 text-left mx-auto mb-2"
                alt=""
              />
              <h1 className="mb-2 text-secondary text-lg">Inspection</h1>
              <p className="text-content text-sm">
                All the received items are individually inspected
              </p>
            </div>
            <div className="bg-[#f1f1f1] p-5 rounded-[30px] text-center ">
              <img
                src={icon2}
                className=" w-28 text-left mx-auto mb-2"
                alt=""
              />
              <h1 className="mb-2 text-secondary text-lg">System tracking</h1>
              <p className="text-content text-sm">
                Each item is recorded in our system then tracked through the
                entire process via our smart barcodes
              </p>
            </div>
            <div className="bg-[#f1f1f1] p-5 rounded-[30px] text-center ">
              <img
                src={icon3}
                className=" w-28 text-left mx-auto mb-2"
                alt=""
              />
              <h1 className="mb-2 text-secondary text-lg">Customer support</h1>
              <p className="text-content text-sm">
                Our customer care team is available by Phone/ SMS / WhatsApp to
                assist and answer any question.
              </p>
            </div>
            <div className="bg-[#f1f1f1] p-5 rounded-[30px] text-center ">
              <img
                src={icon4}
                className=" w-28 text-left mx-auto mb-2"
                alt=""
              />
              <h1 className="mb-2 text-secondary text-lg">
                Cleaning, Ironing, and Drying
              </h1>
              <p className="text-content text-sm">
                Our best-in-class cleaners, ironers and take care of clothes.
              </p>
            </div>
            <div className="bg-[#f1f1f1] p-5 rounded-[30px] text-center ">
              <img
                src={icon5}
                className=" w-28 text-left mx-auto mb-2"
                alt=""
              />
              <h1 className="mb-2 text-secondary text-lg">Quality control</h1>
              <p className="text-content text-sm">
                Our quality controllers inspect all items to ensure the best
                standards have been achieved.
              </p>
            </div>
            <div className="bg-[#f1f1f1] p-5 rounded-[30px] text-center ">
              <img
                src={icon6}
                className=" w-28 text-left mx-auto mb-2"
                alt=""
              />
              <h1 className="mb-2 text-secondary text-lg">
                Collection & Delivery
              </h1>
              <p className="text-content text-sm">
                Our turnaround is 3 working days and you can get a home delivery
                or choose to collect in store.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-12 pb-24 bg-[#f9f9f9]">
        <div className="container mx-auto px-[15%]">
          <div className="text-center mb-20">
            <h1 className="sm:text-2xl text-3xl  text-secondary mb-4 uppercase">
              Faq
            </h1>
          </div>
          <div className="flex flex-col hs-accordion-group">
            <ActiveAccordion
              title="WHICH METHOD OF ECO-CLEANING DOES MY GARMENT NEED?	"
              content={FaqContent1}
            />
            <SimpleAccordion
              title="CAN YOU REMOVE THE STAIN ON MY ITEM?				"
              content={FaqContent2}
            />
            <SimpleAccordion
              title="IS ECO-DRY CLEANING SUITABLE FOR ALL ITEMS?"
              content={FaqContent3}
            />
            <SimpleAccordion
              title="WHERE DO YOU CLEAN MY CLOTHES?"
              content={FaqContent4}
            />
            <SimpleAccordion
              title="DO YOU DRY CLEAN WEDDING DRESSES AND OTHER BESPOKE ITEMS?"
              content={FaqContent5}
            />
          </div>
        </div>
      </section>
    </>
  );
}
