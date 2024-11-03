import React from "react";
import ScalingFeature from "./ScalingFeature";

const scalingFeatures = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/45f6e71c3775447b816e828cd2b773fd/508195f11835fa14e11b6c5cd352e339d8bc239eff3f2e8229d07363ca27bff3?apiKey=45f6e71c3775447b816e828cd2b773fd&",
    title: "Self-hosted CDN",
    description:
      "Accelerate your website's performance by distributing content across multiple servers worldwide, ensuring lightning-fast loading times for your visitors.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/45f6e71c3775447b816e828cd2b773fd/4f62cf22c01598561e0038943914dc7bd1c4e1a1f9362d824eeb4cac601e852a?apiKey=45f6e71c3775447b816e828cd2b773fd&",
    title: "Unlimited Cloud Storage",
    description:
      "Store and manage your website's data effortlessly with unlimited storage options from industry-leading cloud providers like Amazon Web Services (AWS), Google Cloud Platform (GCP), or Microsoft Azure.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/45f6e71c3775447b816e828cd2b773fd/082583af2592061b39fc7cb1ca20bbd1ce96b8a846015262cb78ead409c0f8bc?apiKey=45f6e71c3775447b816e828cd2b773fd&",
    title: "Global Content Distribution",
    description:
      "Reach a global audience effortlessly by distributing your content across a network of servers strategically located around the world, ensuring optimal performance and accessibility for users regardless of their location.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/45f6e71c3775447b816e828cd2b773fd/376b5ec726989e757172f661c24e4f2bc4231fa6f864063865cec78dfd58ee51?apiKey=45f6e71c3775447b816e828cd2b773fd&",
    title: "Auto-scaling Infrastructure",
    description:
      "Seamlessly handle fluctuating traffic demands with Mave CMS's auto-scaling infrastructure, automatically adjusting resources to accommodate sudden surges in visitors without downtime or performance issues.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/45f6e71c3775447b816e828cd2b773fd/bc9f156ba89087171d4b5111afc2a5357cf14d532c1822357232d95304dfbc03?apiKey=45f6e71c3775447b816e828cd2b773fd&",
    title: "Dynamic Content Caching",
    description:
      "Deliver dynamic content to your audience with ease while minimizing server load through advanced caching techniques, ensuring a smooth and responsive user experience even during traffic spikes.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/45f6e71c3775447b816e828cd2b773fd/37fac224e045e947dc485bfb4a26be5c3d898b3f5ca9b7828047f43ceff7e98e?apiKey=45f6e71c3775447b816e828cd2b773fd&",
    title: "SEO-Friendly Architecture",
    description:
      "Enhance your website's visibility and reach with Mave CMS's SEO-friendly architecture, designed to help you climb search engine rankings and attract more organic traffic.",
  },
];

function ScalingSection() {
  return (
    <section className="flex relative flex-col items-center self-stretch px-20 pt-20 pb-48 w-full min-h-[1791px] mt-[466px] rounded-[40px] max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/45f6e71c3775447b816e828cd2b773fd/a1ff5e80a0c1b496dc52d97c80b57e499dd86fe0bb9115464fe949c99ac41abe?apiKey=45f6e71c3775447b816e828cd2b773fd&"
        alt=""
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col mb-0 max-w-full w-[1081px] max-md:mb-2.5">
        <span className="self-center text-base font-semibold tracking-tight text-center text-white">
          SCALE UP
        </span>
        <h2 className="mt-11 mr-11 ml-11 text-7xl font-medium text-white max-md:mt-10 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
          Scale anytime Effortlessly
        </h2>
        <p className="mx-4 mt-4 text-2xl font-light text-center text-white max-md:mr-2.5 max-md:max-w-full">
          Manage enterprise-level growth with ease. Scale up and maintain
          control, even as your application grows and evolves.
        </p>
        <button className="flex gap-1 self-center px-12 py-5 mt-16 max-w-full text-xl font-semibold text-center text-white bg-white bg-opacity-10 rounded-[32px] w-[242px] max-md:px-5 max-md:mt-10">
          See Demos
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/45f6e71c3775447b816e828cd2b773fd/0c38dde5f2337614a80fc36b1b4c252bf3ca69012d5f389dc14241dd9aa311aa?apiKey=45f6e71c3775447b816e828cd2b773fd&"
            alt=""
            className="object-contain shrink-0 my-auto w-5 aspect-square"
          />
        </button>
        <div className="mt-20 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-wrap gap-5 justify-center">
            {scalingFeatures.map((feature, index) => (
              <ScalingFeature key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScalingSection;
