import React from "react";

function HowItWorks() {
  return (
    <section className="mt-48 max-md:mt-10">
      <span className="mt-48 ml-5 text-base tracking-tight text-center text-violet-500 max-md:mt-10">
        HOW IT WORKS
      </span>
      <h2 className="mt-9 text-7xl font-medium tracking-tighter text-center text-black max-md:max-w-full max-md:text-4xl">
        Build experiences
      </h2>
      <div className="flex flex-wrap gap-10 ml-7 max-w-full w-[602px]">
        <span className="flex-auto text-7xl font-semibold tracking-tighter text-center max-md:max-w-full max-md:text-4xl">
          blazingly fast
        </span>
        <div className="flex flex-col items-start my-auto">
          <div className="flex shrink-0 h-2 rounded w-[59px]" />
          <div className="flex shrink-0 mt-2.5 ml-4 h-2 rounded w-[59px] max-md:ml-2.5" />
          <div className="flex shrink-0 mt-2.5 h-2 rounded w-[59px]" />
        </div>
      </div>
      <p className="mt-6 text-3xl font-light text-center text-black max-md:max-w-full">
        Get started with a growing library of ready-made components and popular
        data and <br /> app integrations. Build custom experiences with
        interactions and dynamic values.
      </p>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/45f6e71c3775447b816e828cd2b773fd/2ec3b104db6357997b4f3398c53bfb20b7ab0736208ae2f62cd9181be225424a?apiKey=45f6e71c3775447b816e828cd2b773fd&"
        alt="Visual representation of building experiences"
        className="object-contain mt-14 max-w-full aspect-[1.78] w-[1079px] max-md:mt-10"
      />
    </section>
  );
}

export default HowItWorks;
