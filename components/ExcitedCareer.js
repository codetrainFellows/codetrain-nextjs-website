import BgLogoLeft from "@/public/icons/BgLogoLeft";
import BgLogoRight from "@/public/icons/BgLogoRight";
import { Button, Typography } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";

const ExcitedCareer = () => {
  return (
    <section className="bg-violet py-24 px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center relative z-30">
        <div>
          <Typography variant="h2" className="text-lightBlue max-w-md">
            Are you excited to start your career?
          </Typography>
          <Typography variant="paragraph" className="text-white max-w-xl mt-5">
            Your journey to a fulfilling tech career starts here. Let&lsquo;s
            get you started.
          </Typography>
        </div>
        <div>
          <Link
            href="https://codetrainafrica.heiapply.com/application"
            target="_blank"
          >
            <Button variant="filled" className="bg-lightBlue">
              Enroll Now
            </Button>
          </Link>
        </div>
      </div>
      <BgLogoLeft className="absolute fill-yellow opacity-[0.5] size-80 md:size-[443px] -top-14 md:-top-7 p-0 left-0" />
      <BgLogoRight className="absolute fill-yellow size-52 md:size-80 -bottom-10 md:bottom-0 right-0" />
    </section>
  );
};

export default ExcitedCareer;
