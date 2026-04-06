import { type FC } from "react";
import Hero from "./sections/hero";
import Customers from "./sections/customers";
import ModernProductTeams from "./sections/modern-product-teams";
import LongTermPlanning from "./sections/long-term-planning";
import IssueTracking from "./sections/issue-tracking";
import Collaborate from "./sections/collaborate";
import Foundation from "./sections/foundation";
import PreFooter from "./sections/prefooter";
import AmbientLighting from "@/components/ambient-lighting";

const Home: FC = () => {
  return (
    <main className=" min-h-screen pt-[calc(var(--header-top)+var(--header-height))]">
      <AmbientLighting />
      <Hero />
      <Customers />
      <ModernProductTeams />
      <LongTermPlanning />
      {/* <IssueTracking /> */}
      <Collaborate />
      {/* <Foundation /> */}
      <PreFooter />
      
      {/* Powered By Section */}
      <section className="flex flex-col items-center justify-center pt-16 pb-32 w-full">
        <p className="text-white text-sm md:text-base font-medium tracking-[0.2em] opacity-60 mb-6 uppercase">
          Powered By
        </p>
        <img 
          src="/piazza-logo-bg.png" 
          alt="Powered by Piazza" 
          className="w-auto h-16 md:h-24 lg:h-32 object-contain opacity-90"
        />
      </section>
    </main>
  );
};

export default Home;
