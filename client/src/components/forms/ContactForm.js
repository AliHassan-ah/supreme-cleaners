import React, { useRef, useState } from "react";

export default function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [details, setDetails] = useState('')
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const fullName = `${capitalizeFirstLetter(firstName)} ${capitalizeFirstLetter(lastName)}`;

    const message = `${details}\n\nRegards,\nName: ${fullName}\nContact No: ${phoneNumber}\nEmail: ${email}`;
    const subject = 'Contact Form'
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
      setFirstName('')
      setLastName('')
      setEmail('')
      setPhoneNumber('')
      setDetails('')
    } catch (error) {
      console.error('error is', error);
    }
  }
  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="grid gap-4">
          <div>
            <label htmlFor="hs-firstname-contacts-1" className="sr-only">
              First Name
            </label>
            <input
              type="text"
              value={firstName}
              name="hs-firstname-contacts-1"
              id="hs-firstname-contacts-1"
              className="hl focus:outline-none py-3 px-4 block w-full border-[#ccc] rounded-0 text-sm text-content border-b bg-[#f9f9f9]"
              placeholder="First Name"
              onChange={(e) => {
                setFirstName(e.target.value)
              }}
            />
          </div>
          <div>
            <label htmlFor="hs-lastname-contacts-1" className="sr-only">
              Last Name
            </label>
            <input
              type="text"
              value={lastName}
              name="hs-lastname-contacts-1"
              id="hs-lastname-contacts-1"
              className="hl focus:outline-none py-3 px-4 block w-full border-[#ccc] rounded-0 text-sm text-content border-b bg-[#f9f9f9]"
              placeholder="Last Name"
              onChange={(e) => {
                setLastName(e.target.value)
              }}
            />
          </div>

          <div>
            <label htmlFor="hs-email-contacts-1" className="sr-only">
              Email
            </label>
            <input
              type="email"
              value={email}
              name="hs-email-contacts-1"
              id="hs-email-contacts-1"
              autoComplete="email"
              className="hl focus:outline-none py-3 px-4 block w-full border-[#ccc] rounded-0 text-sm text-content border-b bg-[#f9f9f9]"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
          </div>
          <div>
            <label htmlFor="hs-phone-number-1" className="sr-only">
              Phone Number
            </label>
            <input
              type="text"
              value={phoneNumber}
              name="hs-phone-number-1"
              id="hs-phone-number-1"
              className="hl focus:outline-none py-3 px-4 block w-full border-[#ccc] rounded-0 text-sm text-content border-b bg-[#f9f9f9]"
              placeholder="Phone Number"
              onChange={(e) => {
                setPhoneNumber(e.target.value)
              }}
            />
          </div>
          <div>
            <label htmlFor="hs-about-contacts-1" className="sr-only">
              Details
            </label>
            <textarea
              id="hs-about-contacts-1"
              name="hs-about-contacts-1"
              value={details}
              rows={4}
              className="hl  focus:outline-none py-3 px-4 block w-full border-[#ccc] rounded-0 text-sm text-content border-b bg-[#f9f9f9]  "
              placeholder="Details"
              onChange={(e) => {
                setDetails(e.target.value)
              }}
            />
          </div>
        </div>
        {/* End Grid */}
        <div className="mt-4 grid">
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
