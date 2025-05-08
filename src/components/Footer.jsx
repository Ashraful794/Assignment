import React from "react";
import Facebooklogo from "./CompanyLogos/Facebooklogo";
import Instragram from "./CompanyLogos/Instragram";
import Twitter from "./CompanyLogos/Twitter";
import Github from "./CompanyLogos/Github";
import Ball from "./CompanyLogos/Ball";

function Footer() {
  const socialIcons = [
    <Facebooklogo />,
    <Instragram />,
    <Twitter />,
    <Github />,
    <Ball />,
  ];

  const footerSections = [
    {
      title: "Company",
      links: ["About", "Careers", "Brand Center", "Blog"],
    },
    {
      title: "Help center",
      links: ["Discord Server", "Twitter", "Facebook", "Contact Us"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Licensing", "Terms"],
    },
    {
      title: "Company",
      links: ["About", "Careers", "Brand Center", "Blog"],
    },
    {
      title: "Download",
      links: ["iOS", "Android", "Windows", "MacOS"],
    },
  ];

  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {section.title}
              </h3>
              <ul className="text-gray-500 dark:text-gray-400">
                {section.links.map((link, i) => (
                  <li key={i} className="mb-4">
                    <a href="#" className="hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>{" "}
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        {/* Sub Footer 2 */}
        <div className="text-center">
          <a
            href="#"
            className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              src="src/assets/logo.svg"
              className="h-6 mr-3 sm:h-9"
              alt="Learn with Sumit Logo"
            />
            Learn with Sumit{" "}
          </a>
          <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
            © 2024-2025 Learn with Sumit. All Rights Reserved. Built with{" "}
            <a
              href="#"
              target="_blank"
              className="text-purple-600 hover:underline dark:text-purple-500"
            >
              Flowbite
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-purple-600 hover:underline dark:text-purple-500"
            >
              Tailwind CSS
            </a>
            .
          </span>
          <ul className="flex justify-center mt-5 space-x-5">
            {socialIcons.map((icon) => {
              return (
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                  >
                    {icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
