"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
const LoginForm = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      setMessage(`Login successful! Welcome, ${data.username}`);
      router.push("/dashboard");
    } else {
      setMessage(`Error: ${data.message}`);
    }
  };

  return (
    <section>
      <div className="flex items-start sm:mx-12 sm:max-w-sm mt-10">
        {/* Logo */}
        <Image
          src="/ipsum.png"
          alt="Logo"
          width={40}
          height={40}
          className="mr-2"
        />
        <a
          href="#"
          className="mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold"
        >
          Logo Ipsum
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center px-0 py-32 lg:px-12">
        {/* Left Section (Image + Text) */}
        <div className="sm:mx-12 sm:w-full sm:max-w-3xl items-center flex flex-col justify-center text-center">
          <Image
            src="/login.png"
            alt="Your Company"
            width={800}
            height={800}
            className="mx-auto object-contain w-auto"
          />
          <h1 className="mt-10 text-end text-2xl font-bold text-black md:">
            Services
          </h1>
          <p
            className="text-sm md:text-base text-gray-500 mt-4"
            style={{ maxWidth: "25rem" }}
          >
            An expert team helps you to analyze your political power. An expert
            team.
          </p>
        </div>

        {/* Right Section (Login Form) */}
        <div className="sm:mx-12 w-full p-2 md:p-2 sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-8">
            <h2 className="md:text-start text-center md:text-3xl text-xl font-bold leading-9 tracking-tight text-gray-900 mb-2 sm:mt-2 mt-2">
              Welcome to Logo Ipsum
            </h2>
            <p className="text-center md:text-start  text-sm text-gray-500 mb-2 md:mb-4">
              Don't have an account?{" "}
              <a
                href="#"
                className="font-semibold leading-6 text-blue-600 hover:text-indigo-500"
              >
                Sign Up
              </a>
            </p>

            {/* Username Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Username<span className="text-blue-500 ">*</span>
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Password<span className="text-blue-500">*</span>
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                />
              </div>

              <div className="flex items-center mt-4">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label
                  htmlFor="remember"
                  className="ms-2 text-sm  text-gray-900 font-semibold dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log in
              </button>
            </div>
          </form>
          {message && <p>{message}</p>}
        </div>
      </div>

      <div className="sm:mx-12 sm:w-full sm:max-w-sm items-center">
        <p className="mt-1 text-gray-500 text-center">
          ©2020 All Rights Reserved. PT Indonesia Indicator
        </p>
      </div>
      {message && <p>{message}</p>}
    </section>
  );
};

export default LoginForm;
