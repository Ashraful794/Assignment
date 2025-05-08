import React from "react";
import Airbnb from "./CompanyLogos/Airbnb";
import Google from "./CompanyLogos/Google";
import Microsoft from "./CompanyLogos/Microsoft";
import Spotify from "./CompanyLogos/Spotify";
import Mailchimp from "./CompanyLogos/Mailchimp";
import Mashable from "./CompanyLogos/Mashable";

function CompanyLogo() {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
        <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          <Airbnb />
          <Google />
          <Microsoft />
          <Spotify />
          <Mailchimp />
          <Mashable />
        </div>
      </div>
    </section>
  );
}

export default CompanyLogo;
