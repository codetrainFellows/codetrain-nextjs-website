"use client";

import { Button, Typography } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";

const Scholarship = () => {
  return (
    <section className="py-20 px-8">
      <Typography variant="h3" className="text-pink text-center">
        Part-Scholarship
      </Typography>
      <Typography variant="paragraph" className="text-textColor text-center">
        Part-scholarships at Codetrain are given for three reasons
      </Typography>

      <ul className="max-w-6xl list-disc mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <li>
          <Typography variant="h6" className="text-textColor">
            To promote diversity and inclusion
          </Typography>
          <Typography variant="paragraph" className="text-textColor">
            By giving part-scholarships to underrepresented groups in tech, we
            get to include people who would have otherwise been excluded by no
            fault of theirs. We get to rope in more women, disabled
            people,low-income earners, refugees, and rural dwellers.
          </Typography>
        </li>
        <li>
          <Typography variant="h6" className="text-textColor">
            To encourage innovation and brilliance
          </Typography>
          <Typography variant="paragraph" className="text-textColor">
            If you have an extraordinary achievement or have proven yourself to
            be very good at something, we’re looking for you. Any kind of
            achievement took you a lot of grit and boldness. And we’d be happy
            to support your Codetrain journey.
          </Typography>
        </li>
        <li>
          <Typography variant="h6" className="text-textColor">
            To promote social impact
          </Typography>
          <Typography variant="paragraph" className="text-textColor">
            At Codetrain, we believe in making other people’s lives better. If
            you have done significant work in your community through service or
            leadership, you have a high chance of securing a part-scholarship.
            If you fit the bill for one or more of these categories, you’re
            likely to receive a part-scholarship.
          </Typography>
        </li>
      </ul>
      <div className="text-center mt-10">
        <Link
          href="https://codetrainafrica.heiapply.com/application"
          target="_blank"
        >
          <Button variant="filled" className="bg-pink text-white ">
            Enroll Now
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Scholarship;
