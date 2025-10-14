"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire authentication
    console.log("submit", { email, password });
  };

  return (
    <div className="w-full flex flex-col pb-[90px]">
      <div className="max-w-[1240px] mx-auto px-5 w-full overflow-hidden">
        {/* Top Section */}
        <div className="flex items-center justify-between pt-[18px] pb-[7px]">
          <Link href="/">
            <div className="inline-flex items-center gap-[15px] font-poppins text-black text-[21.39px] font-semibold">
              <div className="rounded-full border-[2px] border-[#C1C1C1] p-[16.28px]">
                <Image
                  src="/images/auth/angle-small-left.svg"
                  alt="Back"
                  width={30}
                  height={30}
                />
              </div>
              <span>Back</span>
            </div>
          </Link>
          <Link href="/">
            <Image
              src="/images/auth/share-icon.svg"
              alt="share"
              width={30}
              height={30}
            />
          </Link>
        </div>

        {/* Form Section*/}
        <div className="flex flex-col lg:flex-row gap-9">
          {/* Left illustration */}
          <div className=" relative w-full flex flex-col justify-center pt-[14.5px]">
            <h1 className="text-[59.88px] leading-[91.69px] font-extrabold text-black ">
              Welcome Back
            </h1>

            <p className="text-[29.94px] leading-none tracking-[-2%] text-[#00000099]">
              Login in to your account
            </p>

            <div className="w-full relative">
              <Image
                src="/images/auth/characrter-poster.png"
                alt="Login illustration"
                width={728}
                height={728}
                className="object-contain "
              />
            </div>

            <div className="text-[24.82px] leading-none tracking-[-2%] text-[#00000099] text-center ">
              <span>First time here? </span>
              <Link href="/signup">
                <span className="underline font-medium text-black ml-1">
                  Signup
                </span>
              </Link>
            </div>
          </div>

          {/* Right form */}
          <div className=" w-full max-w-[507px] flex flex-col items-center justify-start">
            <div className="w-full">
              <form onSubmit={handleSubmit} className="space-y-[29.7px]">
                <div>
                  <label
                    htmlFor="email"
                    className="text-[23.79px] font-extrabold text-black leading-none"
                  >
                    Email
                  </label>
                  <div className="mt-[11px]">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-[14.87px] bg-[#0000000D] px-[32.7px] pt-[22.3px] pb-[27.5px] text-[23.79px] text-[#00000099] tracking-[-2%] leading-none placeholder-gray-400 focus:outline-none focus:ring-1 focus:black"
                      placeholder="Enter your email address"
                      aria-label="Email address"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="text-[23.79px] font-extrabold text-black leading-none"
                  >
                    Password
                  </label>
                  <div className="mt-[11px] relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full rounded-[14.87px] bg-[#0000000D] px-[32.7px] pt-[22.3px] pb-[27.5px] text-[23.79px] text-[#00000099] tracking-[-2%] leading-none placeholder-gray-400 focus:outline-none focus:ring-1 focus:black"
                      placeholder="Enter your password"
                      aria-label="Password"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword((s) => !s)}
                      className="absolute right-[22px] top-1/2 -translate-y-1/2 "
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      <Image
                        src={
                          showPassword
                            ? "/images/auth/eye-off.svg"
                            : "/images/auth/eye-off.svg"
                        }
                        alt="toggle"
                        width={35}
                        height={35}
                      />
                    </button>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex justify-center items-center h-[86px]  w-full rounded-[14.87px] bg-black text-white pt-[26.76px] leading-none pb-[30.47px] text-[23.79px] tracking-[-2%] font-medium hover:opacity-95"
                  >
                    Login
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex-grow h-px bg-gray-200" />
                  <div className="text-sm text-gray-400">Or</div>
                  <div className="flex-grow h-px bg-gray-200" />
                </div>

                <div className="space-y-[29.7px]">
                  <button
                    type="button"
                    className="flex justify-center items-center gap-[22px] h-[86px] w-full rounded-[14.87px] border-[1.49px] border-[#0000004D] text-black pt-[26.76px] leading-none pb-[30.47px] text-[23.79px] tracking-[-2%] font-medium hover:opacity-95"
                  >
                    <Image
                      src="/images/auth/google-icon.svg"
                      alt="Google"
                      width={35}
                      height={35}
                    />
                    <span>Login with Google</span>
                  </button>

                  <button
                    type="button"
                    className="flex justify-center items-center gap-[22px] h-[86px] w-full rounded-[14.87px] bg-[#1877F2] text-white pt-[26.76px] leading-none pb-[30.47px] text-[23.79px] tracking-[-2%] font-medium hover:opacity-95"
                  >
                    <Image
                      src="/images/auth/facebook-icon.svg"
                      alt="Facebook"
                      width={35}
                      height={35}
                    />
                    <span>Login with Facebook</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
