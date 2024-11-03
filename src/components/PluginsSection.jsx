import React from "react";

function PluginsSection() {
  return (
    <section className="mt-48 max-md:mt-10">
      <h2 className="text-2xl font-medium text-center text-zinc-950">
        Plugins
      </h2>
      <h3 className="mt-6 text-4xl font-bold text-center text-zinc-950 max-md:max-w-full">
        Expand your site with your favorite tools and apps.
      </h3>
      <p className="mt-10 text-2xl text-center text-zinc-950 w-[762px] max-md:max-w-full">
        From analytics to searches, comments to image <br /> decoding, Mave
        includes plugins to connect your site with <br /> great features from a
        range of providers.
      </p>
      <div className="flex relative flex-col px-16 pt-14 pb-96 max-w-full text-2xl font-medium tracking-tighter text-center text-violet-500 rounded-none min-h-[555px] w-[1076px] max-md:px-5 max-md:pb-28">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/45f6e71c3775447b816e828cd2b773fd/0f9c55606e22be4a9d7f08129081dccf8f1a9857dc7b288a7fe4c17bc562f797?apiKey=45f6e71c3775447b816e828cd2b773fd&"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <a href="#" className="z-10 relative">
          Explore plugins →
        </a>
      </div>
    </section>
  );
}

export default PluginsSection;
