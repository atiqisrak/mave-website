import React from "react";

function Testimonial() {
  return (
    <section className="mt-48 text-2xl text-center text-black max-md:mt-10">
      <h2>Loved by teams around the world</h2>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/45f6e71c3775447b816e828cd2b773fd/e3063cb35f3a7079df4b6a9666e5c1a9bf04ee714d89f606271085a873368ab3?apiKey=45f6e71c3775447b816e828cd2b773fd&"
        alt="Logos of companies using Mave"
        className="object-contain mt-6 max-w-full aspect-[4.31] w-[921px]"
      />
    </section>
  );
}

export default Testimonial;
