"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CheckCircle2,
  ShieldCheck,
  Truck,
  BadgeCheck,
  Headphones,
  Lock,
  Info,
} from "lucide-react";

export type ProductTabsProps = {
  description: string;
  features: string[];
  shipping: { label: string; detail: string }[];
};

export function ProductTabs({
  description,
  features,
  shipping,
}: ProductTabsProps) {
  const featureIcons = [ShieldCheck, Truck, BadgeCheck, Headphones, Lock];

  return (
    <section className="mt-14 mb-[21px]">
      <Tabs
        defaultValue="description"
        className="w-full border border-[#E4E7E9] rounded-none"
      >
        {/* Tabs Header */}
        <div className="flex justify-center border-b border-[#E4E7E9]">
          <TabsList className="flex flex-wrap justify-center bg-transparent gap-8 ">
            {[
              { value: "description", label: "DESCRIPTION" },
              { value: "additional", label: "ADDITIONAL INFORMATION" },
              { value: "specs", label: "SPECIFICATION" },
              { value: "review", label: "REVIEW" },
            ].map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="
                py-[16px]
                  relative 
                  text-[12px] leading-[18px] font-medium  
                  text-[#7D8E96]  uppercase 
                  data-[state=active]:shadow-none
                  data-[state=active]:text-[#191C1F]
                  data-[state=active]:font-bold
                  data-[state=active]:bg-transparent
                  data-[state=active]:after:absolute
                  data-[state=active]:after:bottom-0
                  data-[state=active]:after:left-0
                  data-[state=active]:after:right-0
                  data-[state=active]:after:h-[2px]
                  data-[state=active]:after:bg-[#FCBD01]
                  transition-all
                "
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {/* Description Tab */}
        <TabsContent value="description" className="mt-0  flex justify-center">
          <div className="flex flex-col gap-8 justify-between md:flex-row p-[36px] ">
            {/* Left: Description */}
            <div className="w-full md:max-w-[560px]">
              <h3 className="mb-[10px] text-[14px] leading-[18px] font-semibold text-[#191C1F] ">
                Description
              </h3>
              <p className="text-[12px] leading-[18px] text-[#5F6C72] font-medium uppercase">
                {description}
              </p>
            </div>

            {/* Middle: Features */}
            <div className="w-full md:max-w-[254px]">
              <h3 className="mb-[14px] text-[14px] leading-[18px] font-semibold text-[#191C1F] ">
                Feature
              </h3>
              <ul className="space-y-3">
                {features.slice(0, 5).map((feat, i) => {
                  const Icon = featureIcons[i] ?? CheckCircle2;
                  return (
                    <li key={i} className="flex items-start gap-3">
                      <Icon className="h-5 w-5 text-green-500 shrink-0" />
                      <span className="text-[12px] leading-[18px] text-[#191C1F] font-public-sans">
                        {feat}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Right: Shipping Info */}
            <div className="w-full md:max-w-[247px] md:border-l md:border-gray-200 md:pl-[21px]">
              <h3 className="mb-[18px] text-[14px] leading-[18px] font-semibold text-[#191C1F] ">
                Shipping Information
              </h3>
              <div className="space-y-3">
                {shipping.map((row, idx) => (
                  <div
                    key={idx}
                    className="text-[12px] leading-[18px] font-semibold text-[#191C1F]"
                  >
                    {row.label}:{" "}
                    <span className="text-[#5F6C72] font-normal">
                      {row.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Additional Info */}
        <TabsContent value="additional" className="flex justify-center">
          <div className=" flex items-start gap-3 text-sm text-gray-600 p-[36px] max-w-4xl">
            <Info className="h-5 w-5 text-yellow-500" />
            <p>
              Additional information will appear here. Add materials,
              dimensions, model numbers, or care guides.
            </p>
          </div>
        </TabsContent>

        {/* Specification */}
        <TabsContent value="specs" className="flex justify-center">
          <div className="p-[36px] max-w-4xl">
            <ul className="grid gap-2 text-sm text-gray-700 md:grid-cols-2">
              <li>Chip: Apple M1</li>
              <li>Display: Liquid Retina XDR</li>
              <li>Memory: Up to 16GB unified</li>
              <li>Storage: Up to 1TB SSD</li>
            </ul>
          </div>
        </TabsContent>

        {/* Review */}
        <TabsContent value="review" className="flex justify-center">
          <div className="max-w-3xl p-[36px]">
            <p className="text-sm text-gray-500">
              Reviews are not available yet. Be the first to review this
              product.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
