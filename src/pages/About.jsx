import React from "react";
import Abouthero from "../components/Abouthero";
import Affiliations from "../components/Affiliations";
import Journey from "../components/Journey";
import ManagementTeam from "../components/ManagementTeam";
import Parallax from "../components/Parallax";
import Reveal from "../components/Reveal";
import TrainingGrounds from "../components/TrainingGrounds";

export default function About() {
  return (
    <>
      <Parallax offset={["0%", "-20%"]}>
        <Abouthero />
      </Parallax>
      <Reveal delay={0.2}>
        <Affiliations />
      </Reveal>
      <Reveal delay={0.3}>
        <Journey />
      </Reveal>
      <Reveal delay={0.3}>
        <TrainingGrounds />
      </Reveal>
      <Reveal delay={0.4}>
        <ManagementTeam />
      </Reveal>
    </>
  );
}