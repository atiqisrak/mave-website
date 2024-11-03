import React from "react";

function ScalingFeature({ icon, title, description }) {
  return (
    <div className="flex flex-col px-11 py-10 w-full max-w-[530px] border-2 border-solid border-neutral-700 rounded-[30px] max-md:px-5 max-md:mt-9 max-md:max-w-full">
      <div className="flex gap-3.5 self-start text-4xl font-medium text-white">
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain w-14 aspect-square"
        />
        <h3 className="self-end mt-20 tracking-tighter text-center max-md:mt-10">
          {title}
        </h3>
      </div>
      <p className="mt-5 text-lg text-white max-md:max-w-full">{description}</p>
    </div>
  );
}

export default ScalingFeature;
