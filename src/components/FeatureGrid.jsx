import React from "react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "Developers",
    description:
      "Leverage React and TypeScript with any CSS framework, external data integration, easy to learn, great docs.",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
    image:
      "https://cdn.builder.io/api/v1/image/assets/45f6e71c3775447b816e828cd2b773fd/3d04bd20b4b9fed3846be965cac36a24c33177460d81d8d959af05f7573ffd5d?apiKey=45f6e71c3775447b816e828cd2b773fd&",
  },
  {
    title: "Creators",
    description:
      "Ignite your creativity & bring your next idea or project faster and more effortlessly to life.",
    bgColor: "bg-rose-50",
    textColor: "text-pink-700",
    hasLearnMore: true,
  },
  {
    title: "Marketers",
    description:
      "The best Visual Editor on the market with DAM, Advanced SEO, Scheduled publishing, Multilanguage and more.",
    bgColor: "bg-pink-100",
    textColor: "text-fuchsia-700",
    hasLearnMore: true,
  },
];

function FeatureGrid() {
  return (
    <div className="mt-52 max-w-full w-[1078px] max-md:mt-10">
      <div className="flex gap-5 max-md:flex-col">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
}

export default FeatureGrid;
