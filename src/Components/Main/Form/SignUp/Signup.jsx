import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name,setName] = useState('')
  const [password, setPassword] = useState("");
  const [confirm,setConfirm] = useState('');
  const [mail, setMail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function Handle() {
    if (!mail || !password || !name) {
      alert("SignUp details are required!");
      return;
    }
    if(password != confirm){
      alert("Password did not matched");
      return;

    }
    let users = JSON.parse(localStorage.getItem("users") || []);

    const userExists = users.some((user) => user.mail === mail);

    if (userExists) {
      alert("Email already exists! Try signing in.");
      return;
    }

    users.push({name, mail, password });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful! You can now sign in.");
    navigate("/form");
  }

  const navigate = useNavigate();
  return (
    <>
      <div className="bg-blue-100 h-[fit] py-5 ">
        <div className=" h-[fit]  flex items-center justify-center">
          <div className="bg-white shadow-2xl border-2 border-blue-500 w-[500px] p-10 rounded-xl">
            <h1 className="font-extrabold text-3xl text-gray-800 text-center">
              Create Account
            </h1>
            <p className="text-gray-600 text-center mt-2">
              Please enter your details
            </p>

            <div className="mt-6">
              <label className="block text-gray-700 font-semibold mb-1">
                Name
              </label>
              <input
                value={name}
                type="text"
                className="w-full border border-gray-400 rounded-lg px-4 py-2"
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your first name"
              />
            </div>

            <div className="mt-6">
              <input
                type="text"
                className="w-full border border-gray-400 rounded-lg px-4 py-2"
                placeholder="Enter your last name"
              />
            </div>

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

            <div className="mt-4">
              <div className="relative">
                <input
                value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  type={showPassword ? "text" : "password"} //
                  className="w-full border border-gray-400 rounded-lg px-4 py-2"
                  placeholder="Confirm password"
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

            {/* Sign In Button */}
            <div className="mt-6">
              <button className="w-full hover:bg-black/90 hover:scale-105 active:scale-95 bg-black text-white font-bold rounded-lg py-3"
              onClick={Handle}
              >
                Create Account
              </button>
            </div>

            <div className="text-center mt-3 text-gray-700">
              Already have an account?
              <button
                className="underline ml-2 text-red-600 hover:cursor-pointer"
                onClick={() => navigate("/signup")}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
