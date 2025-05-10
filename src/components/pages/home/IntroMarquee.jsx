import { CardContent, CardDescription } from "@/components/ui/card";
import React from "react";
import Marquee from "react-fast-marquee";

const IntroMarquee = () => {
  return (
    <Marquee
      speed={60}
      gradient={false}
      className="font-light text-[#383737] gradiants h-full rounded-md"
    >
      <div className=" text-white h-full">
        <CardContent className="flex flex-col items-center justify-center h-full ">
          <div className="flex justify-center gap-5 items-center">
            <div>
              <CardDescription className="py-5">
                {" "}
                👋 Welcome to My Digital World • MERN Stack Developer • 🚀 Let's
                Build Something Amazing!{" "}
              </CardDescription>
            </div>
          </div>
        </CardContent>
      </div>
    </Marquee>
  );
};

export default IntroMarquee;
