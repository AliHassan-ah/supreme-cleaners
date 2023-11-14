import React, { useState } from "react";
import Slot from "../../components/BookingForm/Slot";
import Address from "../../components/BookingForm/Address";
import Review from "../../components/BookingForm/Review";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    step1Data: "",
    step2Data: "",
    step3Data: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  // Calculate the progress percentage
  const progress = (step - 1) * 33; // Assuming 3 steps, so each step contributes 50% to the progress

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4 ">
      <div className="bg-white  p-5 rounded-md shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Step {step} of 3</h1>
        <div className="relative h-4 rounded-full ">
          <div className="bg-content bg-opacity-10 w-full h-1 rounded-full" />
          <div
            className="absolute top-0 left-0 bg-primary h-1 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="py-5">
        {step === 1 && <Slot />}
        {step === 2 && <Address />}
        {step === 3 && <Review />}
        <div className="mt-4 flex justify-center items-center gap-6">
          {step > 1 && (
            <button
              onClick={prevStep}
              className="bg-primary text-white pm py-2 px-7 rounded-md my-6"
            >
              Previous
            </button>
          )}
          {step < 3 ? (
            <button
              onClick={nextStep}
              className="bg-primary text-white pm py-2 px-7 rounded-md my-6"
            >
              Next
            </button>
          ) : (
            <button className="bg-primary text-white pm py-2 px-7 rounded-md my-6">
            Save & Continue
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
