"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function LoginPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {
    console.log("Signup clicked");
  };

  return (
    <div className="flex flex-col items-center justify-center py-8 min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Login </h1>
      {/* <hr className="w-1/2 border-gray-300 mb-6" /> */}

      <form className="w-full max-w-md bg-white p-6 shadow-lg rounded-lg">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-semibold mb-1"
          >
            Email
          </label>
          <input
            id="email"
            type="text"
            value={user.email}
            onChange={(e) =>
              setUser((prevState) => ({
                ...prevState,
                email: e.target.value,
              }))
            }
            placeholder="Email"
            className=" text-black w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 font-semibold mb-1"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={user.password}
            onChange={(e) =>
              setUser((prevState) => ({
                ...prevState,
                password: e.target.value,
              }))
            }
            placeholder="Password"
            className=" text-black w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out"
          />
        </div>

        <button
          onClick={onLogin}
          className="w-full p-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-200 ease-in-out"
        >
          Login
        </button>
      </form>
      <Link
        className="text-blue-500 hover:text-blue-700 font-medium mt-4 block"
        href="/signup"
      >
        Go to Signup Page
      </Link>
    </div>
  );
}
