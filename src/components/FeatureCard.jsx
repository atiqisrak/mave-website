import React from "react";

function FeatureCard({
  title,
  description,
  bgColor,
  textColor,
  image,
  hasLearnMore,
}) {
  return (
    <div className={`flex flex-col w-full ${bgColor} rounded-2xl`}>
      {image && (
        <img
          loading="lazy"
          src={image}
          alt=""
          className="object-contain w-full aspect-[0.99] max-md:max-w-full"
        />
      )}
      <div className="flex flex-col px-16 pt-16 pb-28 max-md:px-5 max-md:pb-24 max-md:max-w-full">
        <h3 className={`self-start text-4xl font-semibold ${textColor}`}>
          {title}
        </h3>
        <p className="mt-5 mb-0 text-xl text-gray-500 max-md:mb-2.5">
          {description}
        </p>
        {hasLearnMore && (
          <a
            href="#"
            className="mt-5 font-medium text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Learn more
            <span className="sr-only"> about {title}</span>
          </a>
        )}
      </div>
    </div>
  );
}

export default FeatureCard;
