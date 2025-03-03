"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import musicSchoolContent from "@/data/musicSchoolContent.json";

const WhyChooseUs = () => {
  return (
    <div>
      <StickyScroll content={musicSchoolContent} />
    </div>
  );
};

export default WhyChooseUs;
