import React from "react";
import ActiveAccordion from "../components/Faq/ActiveAccordion";
import SimpleAccordion from "../components/Faq/SimpleAccordion";
import PagesHeader from "../components/PagesHeader";
import BG from "../assets/images/price-guide_1800x.png";
import PricingTable from "../components/pricing/PricingTable";
import {
  data,
  data2,
  data3,
  data4,
  data5,
  data6,
  data7,
  data8,
  data9,
  data10,
  data11,
  data12,
  data13,
  data14,
  data15,
  data16,
  data17,
  data18,
  data19,
  data20,
  data21,
  data22,
  data23,
  data24,
} from "../components/Data/PriceList";
export default function Prices() {
  const FaqContent1 = (
    <p className="text-content text-sm">
      After picking up your clothes, our experts will examine them and determine
      the total amount of your invoice based on the extent of the work that
      needs to be carried out on each item. Until then, you can get an estimate
      of your order according to our price list here. We are unable to be more
      exact at this stage because some items require more time and specific
      treatment, and final prices may vary based on fabric, design, or specific
      features. <br /> <br />
      We will then send you an email detailing your invoice, item by item, and
      charge your card on that basis. If you disagree with anything that we have
      detailed on your invoice, please feel free to call our Customer Care team
      on 0118256507 or to email
      <a className="pb" href="mailto:supremeclean@telkomsa.net">
        supremeclean@telkomsa.net
      </a>
      and we will be happy to look into this for you.
    </p>
  );
  const FaqContent2 = (
    <p className="text-content text-sm">
      If you have questions about what can be done, about any particular stain
      or fabric, please call us on 011825657, WhatsApp at 0118256507 or send us
      an email at supremeclean@telkomsa.net or come see us in person in one of
      our store. We will be delighted to help and provide a detailed quote.
      <br />
      <br />
      If you are using our Home pick up & Delivery service and would like to
      receive a quote before we process your order, you can specify the cleaning
      quote request while completing your online booking by adding a comment in
      your garment instructions - or contact our customer care team.
    </p>
  );
  const FaqContent3 = (
    <p className="text-content text-sm">
      Our pricing varies based on material (for very delicate fabrics such as
      silk, for example) or embellishments (beads, lace, or embroideries) that
      require more care and more time from our artisans.
      <br />
      <br />
      Please note that the following Couture brands are often taken as Quote
      Only and priced after assessment of one of our cleaning experts: Azzedine
      Alaïa, Alexandre Vauthier, Balmain, Carolina Herrera, Chanel, Dior, Elie
      Saab, Gabriela Hearst, Giambattista Valli, Givenchy, Hermès, Jean Paul
      Gaultier, Jenny Packham, Loro Piana, Marchesa, Oscar de la Renta, Saint
      Laurent, Stefano Ricci, Valentino, Zilli , Jenny Button, Georgio Armani,
      Burberry etc.
      <br />
      <br />
      For any questions, you can send us an email at{" "}
      <a href="mailto:supremeclean@telkomsa.net" className="pb">
        supremeclean@telkomsa.net
      </a>{" "}
      .
    </p>
  );
  const FaqContent4 = (
    <p className="text-content text-sm">
      Yes! We offer a 25% discount on all children's clothes cleaning. If you
      want to drop off children's garments, you can specify it when booking
      online in “Special instructions”, or mention it on the Drop Off form that
      our drivers will provide you with.
    </p>
  );
  const FaqContent5 = (
    <p className="text-content text-sm">
      Please note that this Price Guide is not exhaustive, so even if you can’t
      find the item you’re looking for, we will most likely be able to clean it.
      Our eco-cleaning process is suitable for anything from specialty outdoor
      and activewear to wedding dresses, and we can also clean very bulky
      homewares such as sofa covers, cushions, curtains, or rugs.
      <br />
      <br />
      For any specific request, feel free to get in touch with our Customer Care
      team at
      <a href="mailto:supremeclean@telkomsa.net">supremeclean@telkomsa.net</a> .
    </p>
  );
  const FaqContent6 = (
    <p className="text-content text-sm">
      All prices include VAT and are indicative – exact quotes can only be based
      on fabric & design. Prices may vary based on a number of factors
      including:
      <br />
      <br />
      • fabric (for very delicate materials such as silk or cashmere). <br />
      • complexities (such as beads, embroideries or leather patches that
      require more care and more time from our artisans). <br />
      • and your order preferences (for example if you want items folded or
      require an express delivery).
      <br />
      <br />
      Even though we take great care of every garment entrusted to us, some
      items require a lot more time and very specific treatment. This concerns
      especially delicate materials (silk, cashmere, angora...) or items that
      include ornaments such as beads, lace or embroideries. Those will most
      often attract a price supplement in consideration for the level of
      complexity associated with cleaning them compared to more basic items.
      <br />
      <br />
      If you still think there was a mistake in the way we charged you or if you
      don’t understand our price policy, please contact us on 0118256507 or
      email{" "}
      <a href="mailto:supremeclean@telkomsa.net" className="pb">
        supremeclean@telkomsa.net
      </a>{" "}
      and we will be happy to look into this for you.
    </p>
  );
  const FaqContent7 = (
    <p className="text-content text-sm">
      During your booking process online, you will be asked to register your
      credit or debit card details in our encrypted system so we can take
      payment from you once we have generated an invoice (after examining your
      garments).
      <br />
      <br />
      Rest assured that your payment details will not be stored locally - i.e.
      we have absolutely no access to them. We use an encrypted and highly
      secure platform managed by Verifone, so your data will be safeguarded from
      end-to-end.
    </p>
  );

  const PriceContent1 = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
      <PricingTable title="Tops" title2="from" data={data3} />
      <PricingTable title="Trousers" title2="from" data={data4} />
      <PricingTable title="Dresses" title2="from" data={data5} />
      <PricingTable title="Jackets & Coats" title2="from" data={data6} />
      <PricingTable title="Sportswear" title2="from" data={data7} />
      <PricingTable title="Accessories" title2="from" data={data8} />
    </div>
  );
  const PriceContent2 = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
      <PricingTable
        title="5 pcs and more - Basic hand-finish"
        title2="from"
        data={data9}
        add="Premium hand-finished shirt service with crease : +R30.00
        view our shirts page for more info"
      />
      <PricingTable
        title="Less than 5 pcs - Basic hand-finish"
        title2="from"
        data={data10}
        add="Premium hand-finished shirt service with crease : +R30.00
        view our shirts page for more info"
      />
    </div>
  );
  const PriceContent3 = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
      <PricingTable title="One off" title2="from" data={data11} />
      <PricingTable title="Regular" title2="from" data={data12} />
    </div>
  );
  const PriceContent4 = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
      <PricingTable title="Flat sheets" title2="from" data={data13} />
      <PricingTable title="Fitted sheets" title2="from" data={data14} />
      <PricingTable title="Duvet covers" title2="from" data={data15} />
      <PricingTable title="Mattress covers" title2="from" data={data16} />
      <PricingTable title="Duvets" title2="from" data={data17} />
      <PricingTable title="Bedspreads" title2="from" data={data18} />
      <PricingTable title="Pillows" title2="from" data={data19} />
      <PricingTable title="Towels" title2="from" data={data20} />
      <PricingTable title="Curtains" title2="per sqm" data={data21} />
      <PricingTable title="Rugs" title2="per sqm" data={data22} />
      <PricingTable
        title="Cushions / sofa covers"
        title2="from"
        data={data23}
      />
      <PricingTable title="Table linen" title2="from" data={data24} />
    </div>
  );

  return (
    <>
      <PagesHeader
        imageUrl={BG}
        SubHeading="Price Guide"
        Heading={`Cleaning, Restoration \n Services`}
      />
      <section className="py-12">
        <div className="container mx-auto px-6 md:px-[12%]">
          <div className="flex">
            <h1 className="text-primary pb-8 text-xl">Popular items</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <PricingTable title2="from" data={data} />
            <PricingTable title2="from" data={data2} />
          </div>
        </div>
      </section>
      <section className="pb-12">
        <div className="container mx-auto px-6 md:px-[12%]">
          <div className="flex flex-col hs-accordion-group">
            <ActiveAccordion title="Dry Cleaning" content={PriceContent1} />
            <SimpleAccordion title="Shirt Service" content={PriceContent2} />
            <SimpleAccordion
              title="Laundry Wash, Tumble Dry & Fold"
              content={PriceContent3}
            />
            <SimpleAccordion
              title="Home & Bedding: sheets, duvets, curtains, rugs, sofas"
              content={PriceContent4}
            />
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
              title="WHEN WILL MY CARD BE CHARGED?	"
              content={FaqContent1}
            />
            <SimpleAccordion
              title="CAN I RECEIVE A QUOTE BEFORE MY ITEM IS PROCESSED?	"
              content={FaqContent2}
            />
            <SimpleAccordion
              title="DO YOU CHARGE A DIFFERENT PRICE FOR LUXURY BRANDS?	"
              content={FaqContent3}
            />
            <SimpleAccordion
              title="DO YOU HAVE A DIFFERENT PRICE FOR CHILDREN'S CLOTHES?"
              content={FaqContent4}
            />
            <SimpleAccordion
              title="WHAT IF I CAN NOT FIND THE SERVICE I NEED IN THE PRICE GUIDE?	  "
              content={FaqContent5}
            />
            <SimpleAccordion
              title="WHY DOES MY ORDER COST MORE THAN I THOUGHT BASED ON YOUR PRICE LIST? "
              content={FaqContent6}
            />
            <SimpleAccordion
              title="HOW ARE MY PAYMENT DETAILS STORED AND TRANSMITTED?	"
              content={FaqContent7}
            />
          </div>
        </div>
      </section>
    </>
  );
}
