import Link from "next/link";
import { Spotlight } from "./ui/spotlight-new";
import { Button } from "./ui/moving-border";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
const HeroSection = () => {
  const words = [
    {
      text: "Master",
    },
    {
      text: "the",
    },
    {
      text: "art",
    },
    {
      text: "of",
    },
    {
      text: "Music.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col item-center justify-center relative overflow-hidden mx-auto py-10 md-py-0">
      <Spotlight/>
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          <TypewriterEffectSmooth words={words} className="dark:text-white text-black flex justify-center"/>
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Dive into our Comprehensive Music Course and transform your musical
          journey today. Whether you're a beginner or an experienced musician,
          our course is designed to help you grow.
        </p>
        <div className="mt-4">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-neutral-800"
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
};

export default HeroSection;
