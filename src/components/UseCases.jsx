import React from "react";

const useCases = [
  "Internal tools",
  "Customer portals",
  "SaaS apps",
  "Storefronts",
  "Websites",
  "Content management",
];

function UseCases() {
  return (
    <div className="flex gap-8 px-2.5 py-1 mt-6 max-w-full text-base text-center text-neutral-400 w-[841px]">
      {useCases.map((useCase, index) => (
        <div key={index} className="grow shrink basis-0">
          {useCase}
        </div>
      ))}
    </div>
  );
}

export default UseCases;
