import React, { useState } from "react";

export default function BusinessServiceForm() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [cellNumber, setCellNumber] = useState('');
  const [email, setEmail] = useState('');
  const [numberOfInquiry, setNumberOfInquiry] = useState('');
  const [companyReg, setCompanyReg] = useState('')
  const [detailMessage, setDetailMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = `${detailMessage}\n\nRegards, \nName: ${name}\nPhone No: ${phoneNumber}\nTel No: ${cellNumber}\nInquiry No: ${numberOfInquiry}\nCompany Reg No: ${companyReg}\nEmail: ${email}`
    const subject = 'Business Service Contact'
    try {
      const response = await fetch(
        `${process.env.REACT_APP_ADMIN_BASE_URL}/api/send/mail`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${process.env.REACT_APP_ADMIN_TOKEN}`, // Optional: Add authorization token here
          },
          body: JSON.stringify({message, subject}),
        }
      );
      const resdata = await response.json();
      setName('')
      setCompany('')
      setEmail('')
      setPhoneNumber('')
      setCellNumber('')
      setNumberOfInquiry('')
      setCompanyReg('')
      setDetailMessage('')
    } catch (error) {
      console.error('error is', error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4 lg:gap-6 pt-10">
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <input
                value={name}
                type="text"
                name="hs-firstname-contacts-1"
                id="hs-firstname-contacts-1"
                placeholder="Name"
                className="hl focus:outline-none py-3 px-4 block w-full border-[#ccc] rounded-0 text-sm text-content border-b "
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                value={company}
                type="text"
                name="hs-lastname-contacts-1"
                id="hs-lastname-contacts-1"
                className="hl focus:outline-none py-3 px-4 block w-full border-[#ccc] rounded-0 text-sm text-content border-b "
                placeholder="Company"
                onChange={(e) => setCompany(e.target.value)}
                required
              />
            </div>
          </div>
          {/* End Grid */}
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <input
                value={phoneNumber}
                type="tel"
                name="hs-phone-number-1"
                id="hs-phone-number-1"
                className="hl focus:outline-none py-3 px-4 block w-full border-[#ccc] rounded-0 text-sm text-content border-b "
                placeholder="Phone Number"
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                value={cellNumber}
                type="tel"
                name="hs-email-contacts-1"
                id="hs-email-contacts-1"
                autoComplete="phone"
                className="hl focus:outline-none py-3 px-4 block w-full border-[#ccc] rounded-0 text-sm text-content border-b "
                placeholder="Cell Phone Number"
                onChange={(e) => setCellNumber(e.target.value)}
              />
            </div>
          </div>
          {/* End Grid */}
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <input
                value={email}
                type="email"
                name="hs-email-contacts-1"
                id="hs-email-contacts-1"
                autoComplete="email"
                className="hl focus:outline-none py-3 px-4 block w-full border-[#ccc] rounded-0 text-sm text-content border-b "
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                value={companyReg}
                type="text"
                name="hs-company-reg"
                id="hs-phone-number-1"
                className="hl focus:outline-none py-3 px-4 block w-full border-[#ccc] rounded-0 text-sm text-content border-b "
                placeholder="Company Reg"
                onChange={(e) => setCompanyReg(e.target.value)}
                required
              />
            </div>
          </div>
          {/* End Grid */}
          <div>
            <input
              value={numberOfInquiry}
              type="text"
              name="hs-phone-number-1"
              id="hs-phone-number-1"
              className="hl focus:outline-none py-3 px-4 block w-full border-[#ccc] rounded-0 text-sm text-content border-b "
              placeholder="Nature of the enquiry"
              onChange={(e) => setNumberOfInquiry(e.target.value)}
              required

            />
          </div>
          <div>
            <textarea
              value={detailMessage}
              id="hs-about-contacts-1"
              name="hs-about-contacts-1"
              rows={4}
              className="hl  focus:outline-none py-3 px-4 block w-full border-[#ccc] rounded-0 text-sm text-content border-b "
              placeholder="Message"
              onChange={(e) => setDetailMessage(e.target.value)}
              required
            />
          </div>
        </div>
        {/* End Grid */}
        <div className="mt-6 grid">
          <span className="flex justify-end">
            <button
              type="submit"
              className="inline-flex justify-center items-center gap-x-3 text-center bg-primary hover:bg-#317c16 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2  transition py-3 px-4 "
            >
              Send
            </button>
          </span>
        </div>
      </form>
    </>
  );
}
