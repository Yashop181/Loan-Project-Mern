import { useContext, useState } from "react";
import { AuthContext } from "../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const CreateLoan = () => {
  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("");
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!amount || !term) throw "Fill all details!";
      await axios.post(
        "http://localhost:5000/api/v1/loans/create",
        { amount, terms: term },
        {
          headers: {
            "Content-Type": "application/json",
            bearertoken: token,
          },
        }
      );
      toast.success("Loan creation successful!");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error(`Can't create the loan!\nError: ${error}`);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500">
      <div className="bg-white shadow-md rounded-md p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-purple-500">Loan Application Form</h2>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div className="bg-gray-100 rounded-md px-4 py-3">
            <label className="block text-sm font-medium text-gray-700">Amount:</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-blue-500 bg-white"
              required
            />
          </div>
          <div className="bg-gray-100 rounded-md px-4 py-3">
            <label className="block text-sm font-medium text-gray-700">Terms:</label>
            <input
              type="number"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-blue-500 bg-white"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-3 rounded-md w-full hover:bg-gradient-to-r hover:from-yellow-500 hover:to-orange-500 focus:outline-none focus:ring focus:ring-blue-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateLoan;
