import React from "react";

const benefits = [
  {
    title: "non-developers",
    description:
      "Empower marketing, content, design, and product teams to build and publish. Developers can register custom components as building blocks that other team members can use.",
  },
  {
    title: "Collaborate",
    description:
      "Go from silos and endless backlogs to streamlined workflows between development and business teams. Let everyone focus on what they do best with branching and multiplayer mode.",
  },
];

function CollaborationBenefits() {
  return (
    <div className="flex flex-col pl-20 mt-48 w-full max-md:pl-5 max-md:mt-10 max-md:max-w-full">
      {benefits.map((benefit, index) => (
        <div key={index} className="max-w-full w-[906px]">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
              <h3 className="mt-10 text-5xl font-medium tracking-tighter text-center max-md:mt-10 max-md:text-4xl">
                {benefit.title}
              </h3>
            </div>
            <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
              <p className="text-lg font-light text-white max-md:mt-10 max-md:max-w-full">
                {benefit.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CollaborationBenefits;
