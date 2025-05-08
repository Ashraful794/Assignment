import React from "react";

function CompanyLogo({ svg }) {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
        <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          {svg.map((logo) => {
            return (
              <a href="#" class="flex items-center lg:justify-center">
                {logo}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CompanyLogo;
