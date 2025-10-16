"use client";

import React, {
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from "react";
import { countries } from "country-data-list";
import { CircleFlag } from "react-circle-flags";
import { useCheckout } from "@/context/CheckoutContext";
import { toast } from "sonner";

interface Country {
  name: string;
  alpha2: string;
}

const countryStates: Record<string, string[]> = {
  US: ["New York", "California", "Texas"],
  AU: ["Melbourne", "Sydney", "Brisbane"],
  PK: ["Karachi", "Lahore", "Islamabad"],
};

const CheckoutForm = forwardRef((_, ref) => {
  const { customerInfo, updateCustomerInfo } = useCheckout();

  const countriesList: Country[] = countries.all.map((c) => ({
    name: c.name,
    alpha2: c.alpha2.toLowerCase(),
  }));

  const [availableStates, setAvailableStates] = useState<string[]>([]);
  const [selectedCode, setSelectedCode] = useState<string>("");

  useEffect(() => {
    const existingCountry = countriesList.find(
      (c) => c.name === customerInfo.country
    );
    if (existingCountry) {
      setSelectedCode(existingCountry.alpha2);
      const states = countryStates[existingCountry.alpha2.toUpperCase()] || [];
      setAvailableStates(states);
    }
  }, []);

  // ✅ Validation function
  const validateForm = () => {
    const requiredFields = [
      "email",
      "firstName",
      "lastName",
      "country",
      "address",
      "phone",
    ];

    for (const field of requiredFields) {
      if (!customerInfo[field as keyof typeof customerInfo]) {
        toast.error(`Please fill in your ${field}`);
        return false;
      }
    }
    return true;
  };

  // expose to parent
  useImperativeHandle(ref, () => ({
    validateForm,
  }));

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    updateCustomerInfo({ [name]: value });
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const code = e.target.value;
    const selected = countriesList.find((c) => c.alpha2 === code);
    const states = countryStates[code.toUpperCase()] || [];

    setAvailableStates(states);
    setSelectedCode(code);

    updateCustomerInfo({
      country: selected?.name || "",
      state: "",
    });
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateCustomerInfo({ state: e.target.value });
  };

  return (
    <form className="flex-1 space-y-6">
      {/* Customer Info */}
      <section>
        <h2 className="text-[20px] font-semibold text-[#262626] mb-5">
          Customer Information
        </h2>

        <div className="space-y-4">
          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-[14px] text-[#555555] font-medium">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              type="email"
              required
              value={customerInfo.email}
              onChange={handleInputChange}
              className="w-full rounded-[4px] border border-[#D9D9D9] p-2 text-sm"
            />
          </div>

          {/* First & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-[14px] text-[#555555] font-medium">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                name="firstName"
                type="text"
                required
                value={customerInfo.firstName}
                onChange={handleInputChange}
                className="w-full rounded-[4px] border border-[#D9D9D9] p-2 text-sm"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[14px] text-[#555555] font-medium">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                name="lastName"
                type="text"
                required
                value={customerInfo.lastName}
                onChange={handleInputChange}
                className="w-full rounded-[4px] border border-[#D9D9D9] p-2 text-sm"
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
            <label className="text-[14px] text-[#555555] font-medium">
              Country <span className="text-red-500">*</span>
            </label>
            <select
              name="country"
              onChange={handleCountryChange}
              className="w-full rounded-[4px] border border-[#D9D9D9] p-2 pr-10 text-sm bg-white"
            >
              <option value="">Select Country</option>
              {countriesList.slice(0, 150).map((country, index) => (
                <option key={index} value={country.alpha2}>
                  {country.name}
                </option>
              ))}
            </select>

            {selectedCode && (
              <div className="absolute right-3 bottom-[10px] pointer-events-none">
                <CircleFlag countryCode={selectedCode} height={18} width={18} />
              </div>
            )}
          </div>

          {/* State Dropdown */}
          <div className="flex flex-col gap-1">
            <label className="text-[14px] text-[#555555] font-medium">
              State / Province <span className="text-red-500">*</span>
            </label>
            <select
              name="state"
              disabled={availableStates.length === 0}
              onChange={handleStateChange}
              value={customerInfo.state}
              className="w-full rounded-[4px] border border-[#D9D9D9] p-2 text-sm bg-white"
            >
              <option value="">
                {availableStates.length
                  ? "Select State"
                  : "No states available"}
              </option>
              {availableStates.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          {/* Address */}
          <div className="flex flex-col gap-1">
            <label className="text-[14px] text-[#555555] font-medium">
              Address <span className="text-red-500">*</span>
            </label>
            <input
              name="address"
              type="text"
              required
              value={customerInfo.address}
              onChange={handleInputChange}
              className="w-full rounded-[4px] border border-[#D9D9D9] p-2 text-sm"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-1">
            <label className="text-[14px] text-[#555555] font-medium">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              name="phone"
              type="tel"
              required
              value={customerInfo.phone}
              onChange={handleInputChange}
              className="w-full rounded-[4px] border border-[#D9D9D9] p-2 text-sm"
            />
          </div>
        </div>
      </section>
    </form>
  );
});

CheckoutForm.displayName = "CheckoutForm";
export default CheckoutForm;
