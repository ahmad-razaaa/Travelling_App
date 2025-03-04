import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Form() {
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  const navigate = useNavigate();

  function checkCredentials() {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = users.find(
      (user) => user.mail === mail && user.password === password
    );

    if (validUser) {
      navigate("/booking");
    } else {
      alert("Invalid credentials!");
    }
  }


  return (
    <div className="bg-yellow-100 h-screen flex items-center justify-center">
      <div className="bg-white shadow-2xl border-2 border-yellow-500 w-[500px] p-10 rounded-xl">
        <h1 className="font-extrabold text-3xl text-gray-800 text-center">
          Welcome Back!
        </h1>
        <p className="text-gray-600 text-center mt-2">
          Please enter your details
        </p>

        <div className="mt-6">
          <label className="block text-gray-700 font-semibold mb-1">
            Email address
          </label>
          <input
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            type="email"
            className="w-full border border-gray-400 rounded-lg px-4 py-2"
            placeholder="Enter your email"
          />
        </div>

        <div className="mt-4">
          <label className="block text-gray-700 font-semibold mb-1">
            Password
          </label>
          <div className="relative">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"} //
              className="w-full border border-gray-400 rounded-lg px-4 py-2"
              placeholder="Enter your password"
            />
            <button
              type="button"
              className="absolute  inset-y-0 right-3 text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
        </div>

        <div className="text-right mt-2">
          <span
            className="underline text-base text-red-600 hover:cursor-pointer"
            onClick={() => navigate("/forgot")}
          >
            Forgot Password ?
          </span>
        </div>

        <div className="mt-6">
          <button
            className="w-full hover:bg-black/90 hover:scale-105 active:scale-95 bg-black text-white font-bold rounded-lg py-3"
            onClick={checkCredentials}
          >
            Sign In
          </button>
        </div>
        <div className="mt-4">
          <button
            className="w-full flex items-center justify-center gap-2 hover:bg-white/90 hover:scale-105 active:scale-95 bg-white text-black font-semibold rounded-lg border border-black py-[10px]"
            onClick={() => navigate("/signwithgoogle")}
          >
            <img src="gIcon.webp" className="h-7 w-7" alt="Google Icon" />
            Sign In with Google
          </button>
        </div>
        <div className="text-center mt-3 text-gray-700">
          Don't have an account?
          <button
            className="underline ml-2 text-red-600 hover:cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
