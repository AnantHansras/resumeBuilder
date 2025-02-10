import { useState } from "react";
import { Link } from "react-router-dom";
export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset requested for:", email);
  };

  return (
    <div className="flex min-h-screen w-full h-full bg-[#f9faff] items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-md bg-white p-6 shadow-md rounded-md">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#46464e]">Forgot Password</h2>
        <p className="text-[#46464e]">Enter your email to reset your password</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-[#07142b] font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-[#07142b] text-[#07142b] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0c1986]"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#ffc85e] hover:bg-[#ffd78e] text-[#07142b] py-2 rounded-md font-semibold"
        >
          Reset Password
        </button>
      </form>
      <div className="text-sm text-[#07142b] text-center mt-4">
        Remember your password? <Link to='/' className="text-[#0c1986] hover:underline">Log in</Link>
      </div>
    </div>
    </div>
    
  );
}