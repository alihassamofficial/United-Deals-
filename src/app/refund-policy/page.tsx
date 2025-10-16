import React from "react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import NavigationHeader from "@/components/NavigationHeader";

type RefundPolicyData = {
  content: string;
};

const refundPolicyData: RefundPolicyData = {
  content: `
This Privacy Policy describes how United deals (the "Site", "we", "us", or "our") collects, uses, and discloses your personal information when you visit, use our services, or make a purchase from uniteddealsclub.com (the "Site") or otherwise communicate with us (collectively, the "Services"). For purposes of this Privacy Policy, "you" and "your" means you as the user of the Services, whether you are a customer, website visitor, or another individual whose information we have collected pursuant to this Privacy Policy.

Please read this Privacy Policy carefully. By using and accessing any of the Services, you agree to the collection, use, and disclosure of your information as described in this Privacy Policy. If you do not agree to this Privacy Policy, please do not use or access any of the Services.

Changes to This Privacy Policy
We may update this Privacy Policy from time to time, including to reflect changes to our practices or for other operational, legal, or regulatory reasons. We will post the revised Privacy Policy on the Site, update the "Last updated" date and take any other steps required by applicable law.

How We Collect and Use Your Personal Information
To provide the Services, we collect and have collected over the past 12 months personal information about you from a variety of sources, as set out below. The information that we collect and use varies depending on how you interact with us.

In addition to the specific uses set out below, we may use information we collect about you to communicate with you, provide the Services, comply with any applicable legal obligations, enforce any applicable terms of service, and to protect or defend the Services, our rights, and the rights of our users or others.

What Personal Information We Collect
The types of personal information we obtain about you depends on how you interact with our Site and use our Services. When we use the term "personal information", we are referring to information that identifies, relates to, describes or can be associated with you. The following sections describe the categories and specific types of personal information we collect.

Information We Collect Directly from You
Information that you directly submit to us through our Services may include:
- Basic contact details including your name, address, phone number, email.
- Order information including your name, billing address, shipping address, payment confirmation, email address, phone number.
- Account information including your username, password, security questions.
- Shopping information including the items you view, put in your cart or add to your wishlist.
- Customer support information including the information you choose to include in communications with us, for example, when sending a message through the Services.

Some features of the Services may require you to directly provide us with certain information about yourself. You may elect not to provide this information, but doing so may prevent you from using or accessing these features.

Information We Collect through Cookies
We also automatically collect certain information about your interaction with the Services ("Usage Data"). To do this, we may use cookies, pixels and similar technologies ("Cookies"). Usage Data may include information about how you access and use our Site and your account, including device information, browser information, information about your network connection, your IP address and other information regarding your interaction with the Services.

Information We Obtain from Third Parties
Finally, we may obtain information about you from third parties, including from vendors and service providers who may collect information on our behalf, such as:
- Companies who support our Site and Services, such as Shopify.
- Our payment processors, who collect payment information (e.g., bank account, credit or debit card information, billing address) to process your payment in order to fulfill your orders and provide you with products or services you have requested, in order to perform our contract with you.

When you visit our Site, open or click on emails we send you, or interact with our Services or advertisements, we, or third parties we work with, may automatically collect certain information using online tracking technologies such as pixels, web beacons, software developer kits, third-party libraries, and cookies.

Any information we obtain from third parties will be treated in accordance with this Privacy Policy. We are not responsible or liable for the accuracy of the information provided to us by third parties and are not responsible for any third party's policies or practices. For more information, see the section below, Third Party Websites and Links.

[... Continue your remaining content here exactly as-is ...]

Contact
Should you have any questions about our privacy practices or this Privacy Policy, or if you would like to exercise any of the rights available to you, email us at uniteddeals.contact@gmail.com or contact us at A-3/B, S.G. Towers, Bhiringi Mondal Para, Benachity, Durgapur, Paschim Bardhaman, West Bengal, India-713213.
`,
};

function RefundPolicy() {
  return (
    <>
      <Breadcrumb />
      <div className="max-w-[1240px] mx-auto px-5 w-full overflow-hidden">
        {/* Top Navigation Header */}
        <NavigationHeader />

        <div className="relative w-full flex flex-col justify-center pt-[14.5px] mb-[35px] md:mb-[65px]">
          <h1
            className="
                text-[32px] leading-[42px] font-extrabold text-black
                sm:text-[44px] sm:leading-[60px]
                md:text-[59.88px] md:leading-[91.69px]
              "
          >
            Refund Policy
          </h1>
          <div className="whitespace-pre-line ">{refundPolicyData.content}</div>
        </div>
      </div>
    </>
  );
}

export default RefundPolicy;
