import React from "react";

function Collaboration() {
  return (
    <section className="flex flex-col items-center self-stretch px-20 pt-14 pb-52 mt-44 w-full bg-slate-950 rounded-[40px] max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col mb-0 max-w-full w-[1080px] max-md:mb-2.5">
        <span className="self-center text-base tracking-tight text-center text-white">
          COLLABORATION
        </span>
        <h2 className="z-10 self-center mt-5 text-9xl font-semibold tracking-tighter text-center max-md:max-w-full max-md:text-4xl">
          Bridge the gap
        </h2>
        <h3 className="self-center text-9xl font-medium tracking-tighter text-center text-white max-md:max-w-full max-md:text-4xl">
          between teams
        </h3>
        <div className="flex self-center mt-7 max-w-full text-5xl w-[864px]">
          <span className="z-10 self-start mr-0 font-semibold tracking-tighter">
            Mave
          </span>
          <p className="flex-auto font-light text-center text-white w-[825px] max-md:max-w-full">
            {" "}
            makes the development process more collaborative, so everyone can
            build better experiences together.
          </p>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/45f6e71c3775447b816e828cd2b773fd/dc0c5e2807c54efd5a571f7c36e7b2179ee52046757b532487c100ff8cd7ef59?apiKey=45f6e71c3775447b816e828cd2b773fd&"
          alt="Collaboration visualization"
          className="object-contain mt-16 w-full rounded-none aspect-[1.66] max-md:mt-10 max-md:max-w-full"
        />
      </div>
    </section>
  );
}

export default Collaboration;
