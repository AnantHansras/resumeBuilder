import { useState } from "react";
import OTPInput from "react-otp-input";

export default function OTP() {
  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.length === 6) {
      console.log("OTP Submitted:", otp);
      alert(`Your OTP ${otp} has been submitted.`);
    } else {
      alert("Please enter a valid 6-digit OTP.");
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#f9faff] p-4">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-6 shadow-md">
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tight text-[#07142b]">
            Enter OTP
          </h1>
          <p className="mt-2 text-sm text-[#46464e]">
            Please enter the 6-digit code sent to your device
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="flex justify-center">
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              shouldAutoFocus
              inputStyle={{
                width: "3rem",
                height: "3rem",
                margin: "0 0.5rem",
                fontSize: "1.5rem",
                borderRadius: "0.5rem",
                border: "1px solid #ccc",
                textAlign: "center",
              }}
              renderInput={(props) => <input {...props} />}
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-[#ffc85e] hover:bg-[#ffd78e] text-[#07142b] py-2 px-4 rounded-md font-medium"
            >
              Verify OTP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

