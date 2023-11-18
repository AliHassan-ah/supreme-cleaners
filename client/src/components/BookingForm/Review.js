import React from "react";

export default function Review() {
  return (
    <div className="bg-white shadow-lg rounded-md max-w-xl mx-auto px-8 py-6 my-10 relative">
      <h4 className="text-xl pb-4">Payment information</h4>
      <div className="card animation-fade-in">
        <form className="grid grid-cols-1 gap-3">
          <div className="field-wrapper custom-input-wrapper holder-name">
            <label className="text-content text-sm block pm">
              Card holder full name
            </label>
            <input
              type="text"
              className="w-full border-b border-0 border-content outline-none  text-sm focus:ring-0 focus:ring-offset-0 focus:shadow-none focus:border-b focus:border-b-content"
            />
          </div>
          <div className="field-wrapper custom-input-wrapper card-number">
            <label className="text-content text-sm block pm">Card number</label>
            <input
              type="text"
              className="w-full border-b border-0 border-content outline-none  text-sm focus:ring-0 focus:ring-offset-0 focus:shadow-none focus:border-b focus:border-b-content"
            />
          </div>
          <div className="grid grid-cols-3 gap-5">
            <div>
              <label className="text-content text-sm block pm">
                Expiry date
              </label>
              <input
                type="number"
                inputMode="numeric"
                name="month"
                placeholder="MM"
                className="w-full border-b border-0 border-content outline-none  text-sm focus:ring-0 focus:ring-offset-0 focus:shadow-none focus:border-b focus:border-b-content"
              />
            </div>

            <div>
              <label>&nbsp;</label>
              <input
                type="number"
                inputMode="numeric"
                name="year"
                placeholder="YY"
                id="year"
                className="w-full border-b border-0 border-content outline-none  text-sm focus:ring-0 focus:ring-offset-0 focus:shadow-none focus:border-b focus:border-b-content"
              />
            </div>

            <div>
              <label className="text-content text-sm block pm">CVV</label>
              <input
                type="number"
                inputMode="numeric"
                name="cvc"
                placeholder
                id="cvc"
                className="w-full border-b border-0 border-content outline-none  text-sm focus:ring-0 focus:ring-offset-0 focus:shadow-none focus:border-b focus:border-b-content"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 pt-5 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="bi bi-lock text-content"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
            </svg>

            <span className="text-sm text-content">
              Your card details will be securely encrypted and stored with
              Stripe
            </span>
          </div>
          <hr />
          <div>
            <p className="text-xl pb pb-3">Delivery policy</p>
            <p className="text-content pm">
              Delivery is FREE for orders over £25. Typically, this is a suit
              and three shirts, or a dress and a top. You will be charged a
              delivery fee for orders under the £25 threshold.
            </p>
          </div>
          <div>
         
          </div>
        </form>
      </div>
    </div>
  );
}
