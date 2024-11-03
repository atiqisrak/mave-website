import React from "react";

function VisualEditing() {
  return (
    <section className="mt-48 max-w-full w-[1165px] max-md:mt-10">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[29%] max-md:ml-0 max-md:w-full">
          <div className="flex z-10 flex-col self-stretch my-auto -mr-14 w-full max-md:mt-10 max-md:max-w-full">
            <span className="self-start text-xl uppercase text-zinc-500">
              Visual editing cms with Nextjs
            </span>
            <h2 className="mt-8 text-4xl font-medium tracking-tighter text-black max-md:max-w-full">
              The only headless CMS with true
            </h2>
            <p className="mt-7 text-lg font-light text-black max-md:max-w-full">
              Turn your components into visual editing blocks. Make marketers
              autonomous. Keep the design system safe.
            </p>
            <div className="flex gap-4 self-start mt-7 text-lg font-semibold">
              <button className="px-6 py-3 text-white bg-violet-500 rounded-3xl max-md:px-5">
                Get Started
              </button>
              <button className="px-6 py-3 text-violet-500 bg-violet-100 rounded-3xl max-md:px-5">
                See a demo
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[18%] max-md:ml-0 max-md:w-full">
          <h3 className="mt-48 mr-0 text-4xl font-semibold tracking-tighter text-center max-md:mt-10">
            Visual Editing.
          </h3>
        </div>
        <div className="flex flex-col ml-5 w-[53%] max-md:ml-0 max-md:w-full">
          <div className="flex relative flex-col grow items-end px-20 pt-96 pb-16 rounded-none min-h-[480px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/45f6e71c3775447b816e828cd2b773fd/0a7ec1756b843e4170fc9d2126429312995888458232dbae9b9b0916d2284ee6?apiKey=45f6e71c3775447b816e828cd2b773fd&"
              alt=""
              className="object-cover absolute inset-0 size-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/45f6e71c3775447b816e828cd2b773fd/db0d6dceb148e213ba0b1293fe714d69bce23d0449d981170b39953ff1eb76b4?apiKey=45f6e71c3775447b816e828cd2b773fd&"
              alt="Visual editing interface"
              className="object-contain aspect-[1.38] w-[77px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisualEditing;
