import React from "react";
import FooterColumn from "./FooterColumn";
import SocialLink from "./SocialLink";

const footerColumns = [
  {
    title: "Product",
    links: ["Overview", "Key Features", "Pricing", "Sign Up/Request Demo"],
  },
  {
    title: "Partnerships",
    links: ["Partner Program", "Find a Partner"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Blog", "Support", "Community"],
  },
  {
    title: "Connect with Us",
    socialLinks: [
      {
        name: "Facebook",
        icon: "https://cdn.builder.io/api/v1/image/assets/45f6e71c3775447b816e828cd2b773fd/3a1988f7739080ad17e15b893a54c0bb91083248b5d8a60fed70f2e272260435?apiKey=45f6e71c3775447b816e828cd2b773fd&",
      },
      {
        name: "X",
        icon: "https://cdn.builder.io/api/v1/image/assets/45f6e71c3775447b816e828cd2b773fd/fc718e7c778d4e1464747548e97c6950fb8aabbcfd283114a8271a0dba43dedc?apiKey=45f6e71c3775447b816e828cd2b773fd&",
      },
      {
        name: "Instagram",
        icon: "https://cdn.builder.io/api/v1/image/assets/45f6e71c3775447b816e828cd2b773fd/ae232da8e776c6b1c7ab6a1aaa05b1f1a8f587aef2b290e006c3e27d3ca780e4?apiKey=45f6e71c3775447b816e828cd2b773fd&",
      },
      {
        name: "Reddit",
        icon: "https://cdn.builder.io/api/v1/image/assets/45f6e71c3775447b816e828cd2b773fd/842d1d13ff63e6f4ba93f1e6e2b1b2f1ad43e06691e180e3b47b4975df12d5e7?apiKey=45f6e71c3775447b816e828cd2b773fd&",
      },
      {
        name: "LinkedIn",
        icon: "https://cdn.builder.io/api/v1/image/assets/45f6e71c3775447b816e828cd2b773fd/8fe9e781a114219dd52c1a71c0899385c9f768edfa3a3090288f4ed7d5f968e3?apiKey=45f6e71c3775447b816e828cd2b773fd&",
      },
      {
        name: "Youtube",
        icon: "https://cdn.builder.io/api/v1/image/assets/45f6e71c3775447b816e828cd2b773fd/d70e452d97f4b325e6ccf89f6284bae03de827b0d8b29aac0efd54e2ea50ecc8?apiKey=45f6e71c3775447b816e828cd2b773fd&",
      },
      {
        name: "Medium",
        icon: "https://cdn.builder.io/api/v1/image/assets/45f6e71c3775447b816e828cd2b773fd/9da6895e2499c7c5a28817d8bb25711945666922034e2334e70fc6a07d2b06cb?apiKey=45f6e71c3775447b816e828cd2b773fd&",
      },
      {
        name: "Whatsapp",
        icon: "https://cdn.builder.io/api/v1/image/assets/45f6e71c3775447b816e828cd2b773fd/ab7ebdd1b3ae3cea8d1c5fd1406a2677d40ec21cb339acc9070c9d717a56a5c3?apiKey=45f6e71c3775447b816e828cd2b773fd&",
      },
    ],
  },
  {
    title: "Comparison",
    links: [
      "Headless CMS",
      "Feature Comparison",
      "Pricing Comparison",
      "Strapi vs Mave",
      "Storybloks vs Mave",
      "Sanity vs Mave",
      "Wordpress vs Mave",
    ],
  },
  {
    title: "Company",
    links: [
      "About Us",
      "Careers",
      "Contact Us",
      "Privacy Policy",
      "Terms of Service",
    ],
  },
  {
    title: "Frameworks",
    links: [
      "React",
      "Next.js",
      "Gatsby",
      "Angular",
      "Svelte",
      "Remix",
      "Nuxt",
      "Hydrogen",
    ],
  },
];

function Footer() {
  return (
    <footer className="flex flex-col items-center self-stretch px-20 pt-14 pb-52 mt-44 w-full bg-slate-950 rounded-[40px] max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col mb-0 max-w-full w-[1080px] max-md:mb-2.5">
        <div className="flex flex-wrap justify-between max-md:flex-col">
          {footerColumns.map((column, index) => (
            <FooterColumn key={index} {...column} />
          ))}
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/45f6e71c3775447b816e828cd2b773fd/1541ee33bedc9d6fd480ee6c2314f9e41ad1c4fb6a239d485feaadf83c9ec573?apiKey=45f6e71c3775447b816e828cd2b773fd&"
          alt="Mave logo"
          className="object-contain mt-44 max-w-full aspect-[3.65] w-[252px] max-md:mt-10"
        />
        <p className="mt-8 text-2xl text-white max-md:max-w-full">
          Visually build and optimize digital experiences on <br /> any tech
          stack. No coding required, and <br /> developer approved.
        </p>
        <div className="flex gap-5 justify-between mt-16 max-w-full text-2xl font-semibold tracking-tighter text-center text-white w-[449px] max-md:mt-10">
          <button className="flex gap-7 px-7 py-3.5 rounded-xl max-md:px-5">
            <span>Get Started</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/45f6e71c3775447b816e828cd2b773fd/70862cfb74ff184c2554b8a1044aa9dbf35d1f337c835c5445c03f6dbcf04cda?apiKey=45f6e71c3775447b816e828cd2b773fd&"
              alt=""
              className="object-contain shrink-0 self-start mt-2 aspect-[0.55] w-[11px]"
            />
          </button>
          <button className="flex gap-5 my-auto">
            <span>Log in</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/45f6e71c3775447b816e828cd2b773fd/70862cfb74ff184c2554b8a1044aa9dbf35d1f337c835c5445c03f6dbcf04cda?apiKey=45f6e71c3775447b816e828cd2b773fd&"
              alt=""
              className="object-contain shrink-0 self-start mt-2 aspect-[0.55] w-[11px]"
            />
          </button>
        </div>
        <hr className="mt-16 max-w-full h-0.5 bg-neutral-400 w-[1080px] max-md:mt-10" />
        <div className="flex flex-wrap gap-10 mt-7 max-w-full text-2xl text-white w-[953px]">
          <span>© 2024 Mave Inc.</span>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            SaaS Terms
          </a>
          <a href="#" className="hover:underline">
            Security
          </a>
          <a href="#" className="hover:underline">
            Security & Compliance
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
