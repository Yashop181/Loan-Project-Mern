import React, { useContext, useState } from "react";
import { AuthContext } from "../App";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setLoggedIn, setToken, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      if (!email || !password) throw "Please fill all fields!";
      const user = await axios.post(
        "http://localhost:5000/api/v1/auth/signup",
        {
          email,
          password,
          name,
        }
      );
      setUser(user.data.user);
      setToken(user.data.token);
      setLoggedIn(true);
      localStorage.setItem("token", user.data.token);
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error(`Can't create account!\nError: ${error}`);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded shadow-md w-full md:w-96">
        <h2 className="text-4xl font-bold mb-4 text-center text-blue-600">Signup</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-green-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-green-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="button"
            onClick={(e) => handleSignup(e)}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-yellow-500 focus:outline-none focus:border-yellow-700 focus:ring focus:ring-yellow-200 w-full"
          >
            Signup
          </button>
        </form>
        <div className="mt-4">
          <a
            href="/login"
            className="text-black hover:text-blue-700 focus:outline-none focus:underline"
          >
            Already have an account?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
