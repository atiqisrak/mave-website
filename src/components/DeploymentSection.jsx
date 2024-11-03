import React from "react";

function DeploymentSection() {
  return (
    <section className="flex relative flex-col items-start px-20 pt-60 pb-20 mt-36 max-w-full text-7xl font-medium min-h-[601px] w-[1281px] max-md:px-5 max-md:pt-24 max-md:mt-10 max-md:text-4xl">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/45f6e71c3775447b816e828cd2b773fd/b8ef5e31f730e04c70f2703f53b6d98e70580af4fc28d8c5867920ca9edb64f5?apiKey=45f6e71c3775447b816e828cd2b773fd&"
        alt=""
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col items-start max-w-full w-[729px] max-md:text-4xl">
        <h2 className="text-zinc-950 max-md:text-4xl">Deploy</h2>
        <h3 className="ml-16 tracking-tighter text-center max-md:ml-2.5 max-md:text-4xl">
          anywhere
        </h3>
        <p className="self-stretch mt-8 text-2xl font-light text-zinc-950 max-md:max-w-full">
          Deploy to your choice of hosting infrastructure, so you can maintain
          control and easily scale your app.
        </p>
      </div>
    </section>
  );
}

export default DeploymentSection;
