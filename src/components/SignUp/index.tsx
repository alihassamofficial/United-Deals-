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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName || !email || !password) {
      toast.error("All fields are required!");
      return;
    }

    setLoading(true);
    const [firstName, ...lastNameArr] = fullName.trim().split(" ");
    const lastName = lastNameArr.join(" ");

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
    <div className="w-full flex flex-col pb-20 min-h-screen bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 w-full">
        {/* Top Section */}
        <div className="flex items-center justify-between pt-6 pb-4">
          <Link
            href="/"
            className="flex items-center gap-3 text-lg font-semibold text-black"
          >
            <div className="rounded-full border-2 border-[#C1C1C1] p-3">
              <Image
                src="/images/auth/angle-small-left.svg"
                alt="Back"
                width={24}
                height={24}
              />
            </div>
            <span>Back</span>
          </Link>
          <Link href="/">
            <Image
              src="/images/auth/share-icon.svg"
              alt="share"
              width={28}
              height={28}
            />
          </Link>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center justify-between">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-[59px] font-extrabold text-black leading-tight">
              Create an account
            </h1>
            <p className="text-lg sm:text-2xl text-[#00000099] mt-2 mb-6">
              Let’s create your account
            </p>

            <div className="w-full max-w-[400px] sm:max-w-[500px] relative mx-auto lg:mx-0">
              <Image
                src="/images/auth/characrter-poster.png"
                alt="Login illustration"
                width={728}
                height={728}
                className="object-contain w-full h-auto"
              />
            </div>

            <p className="text-base sm:text-lg text-[#00000099] mt-6">
              Already a member?
              <Link
                href="/login"
                className="underline font-medium text-black ml-1"
              >
                Login
              </Link>
            </p>
          </div>

          {/* Right Section (Form) */}
          <div className="w-full max-w-[507px] bg-white rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullname"
                  className="text-xl font-bold text-black"
                >
                  Full Name
                </label>
                <input
                  id="fullname"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full mt-3 rounded-xl bg-[#0000000D] px-6 py-4 text-lg text-[#00000099] focus:outline-none"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="text-xl font-bold text-black">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mt-3 rounded-xl bg-[#0000000D] px-6 py-4 text-lg text-[#00000099] focus:outline-none"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="text-xl font-bold text-black"
                >
                  Password
                </label>
                <div className="mt-3 relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-xl bg-[#0000000D] px-6 pr-14 py-4 text-lg text-[#00000099] focus:outline-none"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    <Image
                      src="/images/auth/eye-off.svg"
                      alt="toggle password"
                      width={28}
                      height={28}
                    />
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="flex justify-center items-center h-[60px] sm:h-[70px] w-full rounded-xl bg-black text-white text-lg sm:text-xl font-medium hover:opacity-95 transition"
              >
                {loading ? "Creating Account..." : "Sign Up"}
              </button>

              {/* Divider */}
              <div className="flex items-center gap-3">
                <div className="flex-grow h-px bg-gray-200" />
                <div className="text-sm text-gray-400">Or</div>
                <div className="flex-grow h-px bg-gray-200" />
              </div>

              {/* Social buttons */}
              <div className="space-y-5">
                <button
                  type="button"
                  className="flex justify-center items-center gap-4 h-[70px] sm:h-[86px] w-full rounded-[12px] border border-[#0000004D] text-black text-[18px] sm:text-[24px] font-medium hover:bg-gray-50"
                >
                  <Image
                    src="/images/auth/google-icon.svg"
                    alt="Google"
                    width={28}
                    height={28}
                  />
                  <span>Signup with Google</span>
                </button>

                <button
                  type="button"
                  className="flex justify-center items-center gap-4 h-[70px] sm:h-[86px] w-full rounded-[12px] bg-[#1877F2] text-white text-[18px] sm:text-[24px] font-medium hover:opacity-95"
                >
                  <Image
                    src="/images/auth/facebook-icon.svg"
                    alt="Facebook"
                    width={28}
                    height={28}
                  />
                  <span>Signup with Facebook</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withGuest(SignUp);
