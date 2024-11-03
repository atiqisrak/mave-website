import React from "react";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    content:
      "I had the opportunity to test out an early version of Mave and it's awesome! Excited for the future of this design tool",
    author: "Cole Bemis",
    role: "Design Systems Engineer",
    company: "GitHub",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/45f6e71c3775447b816e828cd2b773fd/02b08c3eedd41cbeb945e465cc6fd14e608efa4d50c34580c070d85c71d82aa6?apiKey=45f6e71c3775447b816e828cd2b773fd&",
  },
  {
    content:
      "It's already been a huge increase in efficiency for me, personally. I'm really looking forward to a huge drop in scope for our tests that require new components (most of them).",
    author: "James Armenta",
    role: "Senior Software Engineer",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/45f6e71c3775447b816e828cd2b773fd/6f98390081a23a6af472bf4df4c1b4fdc7591531031259422c182aedf1dc3cc8?apiKey=45f6e71c3775447b816e828cd2b773fd&",
  },
  // Add more testimonials as needed
];

function TestimonialSection() {
  return (
    <section className="flex flex-col px-20 pb-24 mt-36 max-w-full w-[1280px] max-md:px-5 max-md:mt-10">
      <div className="flex z-10 flex-col self-end max-w-full w-[1052px]">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
              <div className="flex z-10 flex-col grow items-start mt-48 mr-0 max-md:mt-10 max-md:max-w-full">
                <span className="px-9 py-2 text-2xl font-medium text-center bg-white bg-opacity-10 rounded-[32px] text-zinc-950 max-md:px-5">
                  THE COMMUNITY LOVE
                </span>
                <h2 className="mt-32 text-7xl font-bold max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                  Community
                </h2>
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard key={index} {...testimonial} />
                ))}
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/45f6e71c3775447b816e828cd2b773fd/5e8c62becc184791aa948d072fd70eaa9db552da709597c734e318c375629ecb?apiKey=45f6e71c3775447b816e828cd2b773fd&"
                alt="Community illustration"
                className="object-contain w-full aspect-[0.73] max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
