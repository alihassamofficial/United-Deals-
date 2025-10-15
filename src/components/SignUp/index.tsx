"use client";

import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useCurrentUser } from "@/context/UserContext";
import withGuest from "../guards/WithGuest";

const SignUp: React.FC = () => {
  const router = useRouter();
  const { registerUser } = useCurrentUser();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // 🧩 Handle registration
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    const [firstName, ...lastNameArr] = fullName.trim().split(" ");
    const lastName = lastNameArr.join(" ");

    // ✅ register user
    const result = await registerUser({
      firstName,
      lastName,
      email,
      password,
    });

    if (result.success) {
      toast.success(result.message || "Registration successful!");
      setTimeout(() => router.push("/"), 1200);
    } else {
      toast.error(result.message || "Something went wrong!");
    }

    setLoading(false);
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
          <div className="relative w-full flex flex-col justify-center pt-[14.5px]">
            <h1 className="text-[59.88px] leading-[91.69px] font-extrabold text-black ">
              Create an account
            </h1>
            <p className="text-[29.94px] leading-none tracking-[-2%] text-[#00000099]">
              Let’s create your account
            </p>

            <div className="w-full relative">
              <Image
                src="/images/auth/characrter-poster.png"
                alt="Login illustration"
                width={728}
                height={728}
                className="object-contain"
              />
            </div>

            <div className="text-[24.82px] leading-none tracking-[-2%] text-[#00000099] text-center ">
              <span>Already a member? </span>
              <Link href="/login">
                <span className="underline font-medium text-black ml-1">
                  Login
                </span>
              </Link>
            </div>
          </div>

          {/* Right form */}
          <div className="w-full max-w-[507px] flex flex-col items-center justify-start">
            <div className="w-full">
              <form onSubmit={handleSubmit} className="space-y-[29.7px]">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullname"
                    className="text-[23.79px] font-extrabold text-black leading-none"
                  >
                    Full Name
                  </label>
                  <div className="mt-[11px]">
                    <input
                      id="fullname"
                      name="fullname"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full rounded-[14.87px] bg-[#0000000D] px-[32.7px] pt-[22.3px] pb-[27.5px] text-[23.79px] text-[#00000099] focus:outline-none"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                {/* Email */}
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
                      className="w-full rounded-[14.87px] bg-[#0000000D] px-[32.7px] pt-[22.3px] pb-[27.5px] text-[23.79px] text-[#00000099] focus:outline-none"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                {/* Password */}
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
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full rounded-[14.87px] bg-[#0000000D] px-[32.7px] pr-[70px] pt-[22.3px] pb-[27.5px] text-[23.79px] text-[#00000099] focus:outline-none"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((s) => !s)}
                      className="absolute right-[22px] top-1/2 -translate-y-1/2"
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

                {/* Submit */}
                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex justify-center items-center h-[86px] w-full rounded-[14.87px] bg-black text-white text-[23.79px] font-medium hover:opacity-95 cursor-pointer"
                  >
                    {loading ? "Creating Account..." : "Sign Up"}
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

export default withGuest(SignUp);
