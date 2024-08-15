"use client";
import { useState } from "react";
import Label from "../../components/Label";
import Link from "next/link";

const login = () => {
  const [errMsg, setErrMsg] = useState("");
  const handleSignIn = (e) => {
    e.preventDefault();
    };
  return (
    <div className="bg-gray-950 rounded-lg mt-16 mb-16" >
      <form onSubmit={handleSignIn}
        className="max-w-5xl mx-auto pt-10 px-10 lg:px-0 text-white"
      >
        <div className="border-b border-b-white/10 pb-5">
          <h2 className="text-lg font-semibold uppercase leading-7">
           Sign in
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-400">
          Please sign in to continue.
          </p>
        </div>
        <div className="border-b border-b-white/10 pb-5">
          <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <Label title="Email address" htmlFor="email" />
              <input
                type="email"
                name="email"
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 px-4 outline-none text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-skyText sm:text-sm sm:leading-6 mt-2"
              />
            </div>
            <div className="sm:col-span-3">
              <Label title="Password" htmlFor="password" />
              <input
                type="password"
                name="password"
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 px-4 outline-none text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-skyText sm:text-sm sm:leading-6 mt-2"
              />
            </div>
          </div>
        </div>
        {errMsg && (
          <p className="bg-white/90 text-red-600 text-center py-1 rounded-md tracking-wide font-semibold">
            {errMsg}
          </p>
        )}
        <button
          type="submit"
           className="mt-5 bg-indigo-700 w-full py-2 uppercase text-base font-bold tracking-wide text-gray-300 rounded-md hover:text-white hover:bg-indigo-600 duration-200"
        >
          Sign in
        </button>
      </form>
      <p className="text-sm leading-6 text-gray-400 text-center -mt-2 py-10">
        Does not have an Account{" "}
        <Link href={"/register"}>
          <button
            className="text-gray-200 font-semibold underline underline-offset-2 decoration-[1px] hover:text-white duration-200"
          >
            Register
          </button>
        </Link>
      </p>
    </div>
  );
};

export default login;
