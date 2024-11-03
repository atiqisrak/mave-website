import React from "react";

function MarketplaceSection() {
  return (
    <section className="flex z-10 flex-col items-center self-stretch pb-16 pl-20 mt-0 w-full rounded-3xl bg-slate-50 max-md:pl-5 max-md:max-w-full">
      <div className="self-end w-full max-w-[1500px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[34%] max-md:ml-0 max-md:w-full">
            <div className="flex z-10 flex-col items-start self-stretch my-auto mr-0 text-2xl font-medium text-zinc-950 max-md:mt-10 max-md:max-w-full">
              <span>Marketplace</span>
              <h2 className="mt-5 text-4xl font-semibold w-[460px] max-md:max-w-full">
                Beautifully-designed and hand-coded themes.
              </h2>
              <p className="self-stretch mt-8 text-2xl max-md:max-w-full">
                Say 'No!' to cookie-cutter, derivative, and low-quality websites
                with bloated code and generic features. Use our professional,
                predefined templates as a base and build a website that stands
                out from the crowd.
              </p>
              <a href="#" className="mt-8 tracking-tighter text-violet-500">
                Browse themes →
              </a>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[66%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/45f6e71c3775447b816e828cd2b773fd/82dac7c09d458a5cccc5b40f8e6747eae1787f68a80d4f88a0ce323218acab7c?apiKey=45f6e71c3775447b816e828cd2b773fd&"
              alt="Marketplace themes preview"
              className="object-contain grow w-full aspect-[1.37] max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MarketplaceSection;
