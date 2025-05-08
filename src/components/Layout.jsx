import React from "react";
import HeroSection from "./HeroSection.Jsx";
import Header from "./Header";
import CompanyLogo from "./CompanyLogo";
import Service from "./Service";
import Testimonial from "./Testimonial";
import Pricing from "./Pricing";
import Faq from "./Faq";
import Trial from "./Trial";
import Footer from "./Footer";
import Seervice2 from "./Seervice2";

function Layout() {
  const info = [
    {
      header: "Starter",
      shortDesc: "Best option for personal use & for your next project.",
      price: 29,
      features: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 1 developer",
        "Premium support: 6 months",
        "Free updates: 6 months",
      ],
    },
    {
      header: "Company",
      shortDesc: "Relevant for multiple users, extended & premium support.",
      price: 99,
      features: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 10 developer",
        "Premium support: 24 months",
        "Free updates: 24 months",
      ],
    },
    {
      header: "Enterpise",
      shortDesc:
        "Best for large scale uses and extended redistribution rights.",
      price: 499,
      features: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 100+ developer",
        "Premium support: 36 months",
        "Free updates: 36 months",
      ],
    },
  ];

  const services = [
    "Continuous integration and deployment",
    "Development workflow",
    "Knowledge management",
  ];
  const subService2 = [
    "Dynamic reports and dashboards",
    "Templates for everyone",
    "Development workflow",
    "Limitless business automation",
    "Knowledge management",
  ];
  return (
    <div>
      <Header />
      <HeroSection />
      <CompanyLogo />
      <Service services={services} subService2={subService2} />
      <Seervice2 />
      <Testimonial />
      <Pricing info={info} />
      <Faq />
      <Trial />
      <Footer />
    </div>
  );
}

export default Layout;
