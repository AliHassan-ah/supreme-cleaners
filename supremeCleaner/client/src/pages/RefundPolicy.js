import React from "react";
import PagesHeader from "../components/PagesHeader";
import BG from "../assets/images/privacy-policy_1800x.png";
export default function Cookies() {
  return (
    <>
      <PagesHeader
        imageUrl={BG}
        SubHeading="Customer Service"
        Heading={`Refund Policy`}
      />

      <section>
        <div className="container mx-auto">
          <div className="flex">
            <div className="md:w-1/2 px-5 md:px-0 md:left-[16%] relative py-12">
              <div>
                <p className=" text-[#101010] text-lg">
                  At SUPREME, it is our mission to provide complete customer
                  satisfaction. If you are not totally satisfied with our
                  service, please talk to us & If we can’t put the pep back in
                  your step, then your clean is on us. <br />
                  <br /> SUPREME is pleased to clothing restoration services to
                  you, subject to your compliance with and acceptance of the
                  terms and conditions set forth below. Your use of the clothing
                  restoration services indicates your agreement to be bound by
                  the terms and conditions contained herein. If you do not so
                  agree to the aforementioned, you should inform us and cease
                  using the service immediately.
                  <br /> <br />
                  <span className="pb">General Provisions</span>
                  <br />
                  <br />
                  SUPREME reserves the right to refuse to clean any clothes
                  restoration. We do not guarantee the removal of all stains
                  (wine, coffee, blood, oil/grease & paint stains, material/dye
                  bleeding) and pre-existing damage or defects. SUPREME is not
                  responsible for loss of or damage to any personal or
                  non-cleanable items. The customer agrees not to leave any
                  other items with SUPREME. We cannot hold unclaimed clothing
                  for more than 14 days unless agreed upon. Failure to collect
                  clothing after 14 days grace period will result in storage fee
                  of R100 per week. Beyond this period, unclaimed clothes will
                  be donated to charity (per “Project Run”). <br />
                  <br />
                  <span className="pb">Damage Policy</span>
                  <br />
                  <br />
                  SUPREME will use reasonable efforts to maintain a high quality
                  cleaning service. We accept no liability for damage due to
                  normal cleaning of items without care instructions, and accept
                  no liability for items treated in accordance with the care
                  labels or other instructions provided. SUPREME is not
                  responsible for clothing materials bleeding (such as suede
                  dye) or otherwise changing as a result of normal clothing
                  treatment procedures. Precautions will be taken to alleviate
                  these problems if possible. SUPREME any responsibility for
                  lost or damaged items, should the claim be made more than 3
                  days after customer collection, pick-up or delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
