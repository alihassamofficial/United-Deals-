"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import withGuest from "../guards/WithGuest";
import { toast } from "sonner";
import { useCurrentUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";

const Login: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { loginUser } = useCurrentUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const result = await loginUser(email, password);
    if (result.success) {
      toast.success(result.message || "Login successful!");
      setTimeout(() => router.push("/"), 1200);
    } else {
      toast.error(result.message || "Invalid credentials!");
    }
    setLoading(false);
  };

  return (
    <div className="w-full flex flex-col pb-[60px] sm:pb-[90px]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-5 w-full overflow-hidden">
        {/* Top Section */}
        <div className="flex items-center justify-between pt-4 pb-2">
          <Link href="/">
            <div className="inline-flex items-center gap-3 text-black text-[18px] sm:text-[21px] font-semibold">
              <div className="rounded-full border-[2px] border-[#C1C1C1] p-[10px] sm:p-[16px]">
                <Image
                  src="/images/auth/angle-small-left.svg"
                  alt="Back"
                  width={24}
                  height={24}
                />
              </div>
              <span>Back</span>
            </div>
          </Link>

          <Link href="/">
            <Image
              src="/images/auth/share-icon.svg"
              alt="share"
              width={26}
              height={26}
            />
          </Link>
        </div>

        {/* Form Section */}
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-9 mt-6 sm:mt-0">
          {/* Left illustration */}
          <div className="relative w-full flex flex-col justify-center text-center lg:text-left">
            <h1 className="text-[34px] sm:text-[48px] lg:text-[60px] leading-tight font-extrabold text-black">
              Welcome Back
            </h1>
            <p className="text-[18px] sm:text-[24px] lg:text-[30px] text-[#00000099] mb-4">
              Login to your account
            </p>

            <div className="w-full flex justify-center lg:justify-start">
              <Image
                src="/images/auth/characrter-poster.png"
                alt="Login illustration"
                width={600}
                height={600}
                className="object-contain w-[80%] sm:w-[70%] lg:w-[100%]"
              />
            </div>

            <div className="text-[16px] sm:text-[20px] lg:text-[24px] text-[#00000099] mt-4">
              <span>First time here?</span>
              <Link href="/signup">
                <span className="underline font-medium text-black ml-1">
                  Signup
                </span>
              </Link>
            </div>
          </div>

          {/* Right form */}
          <div className="w-full max-w-[507px] flex flex-col items-center justify-start">
            <div className="w-full">
              <form
                onSubmit={handleSubmit}
                className="space-y-6 sm:space-y-[30px]"
              >
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="text-[18px] sm:text-[24px] font-extrabold text-black"
                  >
                    Email
                  </label>
                  <div className="mt-3">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-[12px] bg-[#0000000D] px-5 py-4 text-[18px] sm:text-[20px] text-[#00000099] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="text-[18px] sm:text-[24px] font-extrabold text-black"
                  >
                    Password
                  </label>
                  <div className="mt-3 relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full rounded-[12px] bg-[#0000000D] px-5 pr-[60px] py-4 text-[18px] sm:text-[20px] text-[#00000099] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((s) => !s)}
                      className="absolute right-[18px] top-1/2 -translate-y-1/2"
                    >
                      <Image
                        src="/images/auth/eye-off.svg"
                        alt="toggle"
                        width={28}
                        height={28}
                      />
                    </button>
                  </div>
                </div>

                {/* Login Button */}
                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex justify-center items-center w-full h-[70px] sm:h-[86px] rounded-[12px] bg-black text-white text-[18px] sm:text-[24px] font-medium hover:opacity-95 disabled:opacity-70"
                  >
                    {loading ? "Logging in..." : "Login"}
                  </button>
                </div>

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
                    <span>Login with Google</span>
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

export default withGuest(Login);
