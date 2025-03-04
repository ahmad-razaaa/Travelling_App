import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Forgot() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  function verify() {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const userIndex = users.findIndex((user) => user.mail === mail);

    if (userIndex !== -1) {
      if (password === confirmPassword) {
        // ✅ Update password
        users[userIndex].password = password;
        localStorage.setItem("users", JSON.stringify(users)); // ✅ Save back to localStorage

        alert(
          "Password updated successfully. Now you can Sign In using this Password"
        );
        navigate("/form");
      } else {
        alert("Confirm Password Unsuccessful!");
      }
    } else {
      alert("User with given details not found!");
    }
  }

  return (
    <div className="bg-gradient-to-br from-blue-500 to-blue-700 h-screen flex items-center justify-center">
      <div className="bg-white/80 backdrop-blur-lg shadow-lg border border-blue-300 w-[500px] p-10 rounded-3xl">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
          Reset Password
        </h1>

        <div className="mb-5">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter your name"
            className="block w-full px-5 py-3 rounded-xl shadow-sm border-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-5">
          <input
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            className="block w-full px-5 py-3 rounded-xl shadow-sm border-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-5 relative">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            placeholder="Enter new password"
            className="block w-full px-5 py-3 rounded-xl shadow-sm border-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-5 flex items-center text-gray-500 hover:text-gray-700"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>

        <div className="mb-6 relative">
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm new password"
            className="block w-full px-5 py-3 rounded-xl shadow-sm border-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-5 flex items-center text-gray-500 hover:text-gray-700"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? "🙈" : "👁️"}
          </button>
        </div>

        <button
          className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:opacity-90 text-white font-semibold py-3 rounded-xl shadow-md transition-all duration-150 transform hover:scale-[1.02] active:scale-95"
          onClick={verify}
        >
          Update Password
        </button>
      </div>
    </div>
  );
}
