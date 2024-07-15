import React from "react";
import Hero from "../componets/Hero";
import HomeCard from "../componets/HomeCard";
import JobLists from "../componets/JobLists";
import ViewAllJobs from "../componets/ViewAllJobs";

export default function HomePage() {
  return (
    <>
      <Hero
        title="Become A React Dev"
        subtitle="Find the React job that fits your still set"
      />
      <HomeCard />
      <JobLists isHome="true" />
      <ViewAllJobs />
    </>
  );
}
