import React from "react";

function TestimonialCard({ content, author, role, company, avatar }) {
  return (
    <div className="flex flex-col self-stretch px-9 py-11 mt-12 w-full bg-white shadow-sm rounded-[30px] text-zinc-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <p className="text-2xl font-medium max-md:max-w-full">{content}</p>
      <div className="flex gap-4 self-start mt-14 text-xl max-md:mt-10">
        <img
          loading="lazy"
          src={avatar}
          alt={`${author}'s avatar`}
          className="object-contain shrink-0 aspect-square rounded-[30px] w-[60px]"
        />
        <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit">
          <div className="self-start font-semibold">{author}</div>
          <div className="mt-1.5 font-medium">
            <span className="text-gray-500">{role}</span>
            {company && <span className="text-sky-500"> @{company}</span>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
