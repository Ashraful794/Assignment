import React from "react";
import TickLogo from "./CompanyLogos/TickLogo";

function Service({ services, subService2 }) {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Work with tools you already use
            </h2>
            <p className="mb-8 font-light lg:text-xl">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions. Accelerate critical development work,
              eliminate toil, and deploy changes with ease.
            </p>
            <ul
              role="list"
              className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
            >
              {services.map((service) => {
                return (
                  <li className="flex space-x-3">
                    <TickLogo />
                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                      {service}
                    </span>
                  </li>
                );
              })}
            </ul>

            <p className="mb-8 font-light lg:text-xl">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions.
            </p>
          </div>
          <img
            className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
            src="src/feature/feature-1.png"
            alt="dashboard feature image"
          />
        </div>

        {/* Sub Service 2 */}
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <img
            className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
            src="src/feature/feature-2.png"
            alt="feature image 2"
          />
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              We invest in the world’s potential
            </h2>
            <p className="mb-8 font-light lg:text-xl">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions. Accelerate critical development work,
              eliminate toil, and deploy changes with ease.
            </p>

            <ul
              role="list"
              className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
            >
              {subService2.map((subservice) => {
                return (
                  <li className="flex space-x-3">
                    <TickLogo />
                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                      {subservice}
                    </span>
                  </li>
                );
              })}
            </ul>
            <p className="font-light lg:text-xl">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
