"use client";
import {InfiniteMovingCards}from "./ui/infinite-moving-cards";
import  Testimonial  from "@/data/testimonials.json";
const MusicSchoolTestimonials = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear Our Harmony: Voices of success</h2>
      <div className="flex justify-center w-full">
        <div className="w-full max-w-6xl">
        <InfiniteMovingCards
        items={Testimonial}
        direction="right"
        speed="slow"
      />
        </div>
      </div>
    </div>
  )
}

export default MusicSchoolTestimonials
