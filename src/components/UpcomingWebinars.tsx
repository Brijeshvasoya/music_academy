"use client";
import { useState, useEffect } from "react";
import { Button } from "./ui/moving-border";
import { HoverEffect } from "./ui/card-hover-effect";
import upcomingWeebinar from "../data/upcoming_webinar.json";

interface Webinar {
  title: string;
  description: string;
  slug: string;
  isFeatured: boolean;
}

const UpcomingWebinars = () => {
  const [webinar, setWebinar] = useState<Webinar[]>([]);
  const [viewAll, setViewAll] = useState(false);
  useEffect(() => {
    setWebinar(upcomingWeebinar.filter((item) => item.isFeatured));
  },[]);

  const viewAllWebinar=()=>{
    setWebinar(upcomingWeebinar);
    setViewAll(true);
  }

  const viewFeaturedWebinar=()=>{
    setWebinar(upcomingWeebinar.filter((item) => item.isFeatured));
    setViewAll(false);
  }
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect
            items={webinar.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: "#",
            }))}
          />
        </div>
        <div className="mt-10 text-center">
          {!viewAll ? (
            <Button onClick={viewAllWebinar} className="px-4 py-2 rounded border border-neutral-600 text-white bg-gray-900">
              View All
            </Button>
          ) : (
            <Button onClick={viewFeaturedWebinar} className="px-4 py-2 rounded border border-neutral-600 text-white bg-gray-900">
              Featured
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpcomingWebinars;
