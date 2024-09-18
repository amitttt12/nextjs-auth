"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function SignUpPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {
    console.log("Signup clicked");
  };

  return (
    <div className="flex flex-col items-center justify-center py-8 min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Signup</h1>
      {/* <hr className="w-1/2 border-gray-300 mb-6" /> */}

      <form className="w-full max-w-md bg-white p-6 shadow-lg rounded-lg">
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 font-semibold mb-1"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            value={user.username}
            onChange={(e) =>
              setUser((prevState) => ({
                ...prevState,
                username: e.target.value,
              }))
            }
            placeholder="Username"
            className="text-black w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out"
          />
        </div>

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
          onClick={onSignup}
          className="w-full p-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-200 ease-in-out"
        >
          Sign Up
        </button>
      </form>
      <Link
        className="text-blue-500 hover:text-blue-700 font-medium mt-4 block"
        href="/login"
      >
        Go to Login Page
      </Link>
    </div>
  );
}
