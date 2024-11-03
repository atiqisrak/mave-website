import React from "react";

function Hero() {
  return (
    <section className="flex relative flex-col items-center self-stretch px-20 pt-12 mt-14 w-full text-center text-black min-h-[1050px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/45f6e71c3775447b816e828cd2b773fd/d122ba18a3e8f126f269a03080eaa5966efc75f61105f0d3d64af2bbf7436e6a?apiKey=45f6e71c3775447b816e828cd2b773fd&"
        alt=""
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative z-10 flex-col items-center -mb-2 max-w-full w-[1080px]">
        <h1 className="ml-2.5 text-7xl font-medium tracking-tighter max-md:max-w-full max-md:text-4xl">
          Build faster <br /> Powered by AI
        </h1>
        <p className="mt-6 ml-3 text-3xl font-light max-md:max-w-full">
          Mave is an open-source visual editing and content platform for
          building <br /> websites and apps. Integrate with existing codebases.
          Performs incredibly fast.
        </p>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/45f6e71c3775447b816e828cd2b773fd/16ec70d52ba6ea25e5a3fa4e3faf31967e840e734c4781122824b0cb650efda4?apiKey=45f6e71c3775447b816e828cd2b773fd&"
          alt="Visual representation of Mave platform"
          className="object-contain self-stretch mt-24 w-full rounded-none aspect-[1.73] max-md:mt-10 max-md:max-w-full"
        />
      </div>
    </section>
  );
}

export default Hero;
