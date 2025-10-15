"use client";

import React, { useState } from "react";
import { countries } from "country-data-list";
import { CircleFlag } from "react-circle-flags";

interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  country: string;
  state: string;
  address: string;
  phone: string;
}

interface Country {
  name: string;
  alpha2: string;
}

const countryStates: Record<string, string[]> = {
  US: ["New York", "California", "Texas"],
  AU: ["Melbourne", "Sydney", "Brisbane"],
  PK: ["Karachi", "Lahore", "Islamabad"],
};

const CheckoutForm: React.FC = () => {
  const countriesList: Country[] = countries.all.map((c) => ({
    name: c.name,
    alpha2: c.alpha2.toLowerCase(),
  }));

  const [formData, setFormData] = useState<FormData>({
    email: "",
    firstName: "",
    lastName: "",
    country: "",
    state: "",
    address: "",
    phone: "",
  });

  const [availableStates, setAvailableStates] = useState<string[]>([]);
  const [selectedCode, setSelectedCode] = useState<string>("");

  // Handle text inputs
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle country selection
  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const code = e.target.value;
    const selected = countriesList.find((c) => c.alpha2 === code);
    const states = countryStates[code.toUpperCase()] || [];

    setAvailableStates(states);
    setSelectedCode(code);
    setFormData((prev) => ({
      ...prev,
      country: selected?.name || "",
      state: "",
    }));
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, state: e.target.value }));
  };

  return (
    <form className="flex-1 space-y-6 ">
      {/* Customer Info */}
      <section>
        <h2 className="text-[20px] font-semibold text-[#262626] mb-5">
          Customer Information
        </h2>

        <div className="space-y-4">
          {/* Email */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-[14px] text-[#555555] font-medium"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full rounded-[4px] border border-[#D9D9D9] p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* First & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="firstName"
                className="text-[14px] text-[#555555] font-medium"
              >
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full rounded-[4px] border border-[#D9D9D9] p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="lastName"
                className="text-[14px] text-[#555555] font-medium"
              >
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full rounded-[4px] border border-[#D9D9D9] p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Info */}
      <section>
        <h2 className="text-[20px] font-semibold text-[#262626] mb-5">
          Shipping Address
        </h2>

        <div className="space-y-4">
          {/* Country Dropdown */}
          <div className="flex flex-col gap-1 relative">
            <label
              htmlFor="country"
              className="text-[14px] text-[#555555] font-medium"
            >
              Country <span className="text-red-500">*</span>
            </label>
            <select
              id="country"
              name="country"
              required
              onChange={handleCountryChange}
              className="w-full rounded-[4px] border border-[#D9D9D9] p-2 pr-10 text-sm bg-white appearance-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select Country</option>
              {countriesList.slice(0, 150).map((country, index) => (
                <option
                  key={`${country.alpha2}-${index}`}
                  value={country.alpha2}
                >
                  {country.name}
                </option>
              ))}
            </select>

            {/* Flag */}
            {selectedCode && (
              <div className="absolute right-3 bottom-[10px] pointer-events-none">
                <CircleFlag countryCode={selectedCode} height={18} width={18} />
              </div>
            )}
          </div>

          {/* State Dropdown */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="state"
              className="text-[14px] text-[#555555] font-medium"
            >
              State / Province <span className="text-red-500">*</span>
            </label>
            <select
              id="state"
              name="state"
              required
              disabled={availableStates.length === 0}
              onChange={handleStateChange}
              value={formData.state}
              className="w-full rounded-[4px] border border-[#D9D9D9] p-2 text-sm bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">
                {availableStates.length
                  ? "Select State"
                  : "No states available"}
              </option>
              {availableStates.map((state, index) => (
                <option key={`${state}-${index}`} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          {/* Address */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="address"
              className="text-[14px] text-[#555555] font-medium"
            >
              Address <span className="text-red-500">*</span>
            </label>
            <input
              id="address"
              name="address"
              type="text"
              required
              value={formData.address}
              onChange={handleInputChange}
              className="w-full rounded-[4px] border border-[#D9D9D9] p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="phone"
              className="text-[14px] text-[#555555] font-medium"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full rounded-[4px] border border-[#D9D9D9] p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>
      </section>
    </form>
  );
};

export default CheckoutForm;
