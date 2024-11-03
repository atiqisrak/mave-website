import React from "react";

function CommunitySection() {
  return (
    <section className="mt-32 max-md:mt-10">
      <div className="px-6 py-2 mt-32 max-w-full text-2xl font-medium text-center whitespace-nowrap bg-white bg-opacity-10 rounded-[32px] text-zinc-950 w-[191px] max-md:px-5 max-md:mt-10">
        Community
      </div>
      <h2 className="mt-5 text-5xl font-bold text-center text-zinc-950 max-md:max-w-full max-md:text-4xl">
        Open-Source Community.
      </h2>
      <h3 className="text-5xl font-bold tracking-tighter text-center max-md:max-w-full max-md:text-4xl">
        Be a part of Mave family.
      </h3>
      <p className="mt-5 text-2xl text-center text-zinc-950 w-[952px] max-md:max-w-full">
        Mave is part of the open community; committed to being open-source and
        free to use. Become a backer or sponsor to help fund our app and
        community's growth.
      </p>
      <button className="px-7 py-3.5 mt-12 max-w-full text-2xl font-semibold tracking-tighter text-center text-white bg-violet-500 rounded-lg w-[329px] max-md:px-5 max-md:mt-10">
        Donate / Sponsor Mave
      </button>
    </section>
  );
}

export default CommunitySection;
