"use client";

import { Button, Typography } from "@material-tailwind/react";
import Link from "next/link";

const ISA = () => {
  return (
    <section className="py-10 md:py-20 px-4 max-w-4xl mx-auto">
      <Typography variant="h3" className="text-center text-pink">
        Codetrain Africa <span className="uppercase">study now pay</span> later
        program
      </Typography>
      <Typography variant="paragraph" className="text-textColor mt-5">
        Codetrain is excited to announce its partnership with Chancen
        International, introducing an innovative financial model for students.
        This model empowers individuals without immediate financial resources to
        pursue their studies now and pay later.
      </Typography>
      <div className="mt-10">
        <Typography variant="h5" className="text-violet">
          About Chancen International
        </Typography>
        <Typography variant="paragraph" className="text-textColor mt-2">
          CHANCEN International is a not-for-profit organization that provides
          an ethical, fair, and responsible financing model for young people in
          Ghana and in Africa to access quality tertiary education. This model
          of financing is called an Income Share Agreement (ISA).
        </Typography>
      </div>
      <div className="mt-10">
        <Typography variant="h5" className="text-violet">
          What is Income Share Agreement?
        </Typography>
        <Typography variant="paragraph" className="text-textColor mt-2">
          An Income Share Agreement (ISA) is a fair and ethical way for you to
          finance your education without creating any burdensome debt. You get
          the freedom to focus on your studies without any pressure and enter
          the world of work focusing things that really matter.
        </Typography>
      </div>
      <div className="mt-10">
        <Typography variant="h5" className="text-violet">
          Benefits of Income share Agreement (ISA)
        </Typography>
        <ul className="list-disc mt-2 ml-5 md:ml-10">
          <li>
            <Typography variant="paragraph" className="text-textColor mt-2">
              You study now and pay later.
            </Typography>
          </li>
          <li>
            <Typography variant="paragraph" className="text-textColor mt-2">
              You start paying when you start making an income.
            </Typography>
          </li>
          <li>
            <Typography variant="paragraph" className="text-textColor mt-2">
              You only pay a certain percentage of your net income during
              repayment.
            </Typography>
          </li>
          <li>
            <Typography variant="paragraph" className="text-textColor mt-2">
              Your repayment is capped so that you are not saddled with debt.
            </Typography>
          </li>
          <li>
            <Typography variant="paragraph" className="text-textColor mt-2">
              Your repayments go towards the fund for the next generation.
            </Typography>
          </li>
        </ul>
      </div>
      <div className="mt-10">
        <Typography variant="h5" className="text-violet">
          Requirements for applicants
        </Typography>
        <ul className="list-disc mt-2 ml-5 md:ml-10">
          <li>
            <Typography variant="paragraph" className="text-textColor mt-2">
              Ghana Card
            </Typography>
          </li>
          <li>
            <Typography variant="paragraph" className="text-textColor mt-2">
              Recent Passport Photos (no more than 6 months).
            </Typography>
          </li>
          <li>
            <Typography variant="paragraph" className="text-textColor mt-2">
              Age between 18-35.
            </Typography>
          </li>
          <li>
            <Typography variant="paragraph" className="text-textColor mt-2">
              Evidence of loans from Credit Bureau/SSNIT. Must be in good
              standing.
            </Typography>
          </li>
          <li>
            <Typography variant="paragraph" className="text-textColor mt-2">
              Must not be enrolled in a National Service program for the
              duration of the Course.
            </Typography>
          </li>
          <li>
            <Typography variant="paragraph" className="text-textColor mt-2">
              You must have 2 guardians (1 Family member, 1 Relative/friend).
            </Typography>
          </li>
          <li>
            <Typography variant="paragraph" className="text-textColor mt-2">
              Proof of address.
            </Typography>
          </li>
        </ul>
        <Typography variant="paragraph" className="text-textColor mt-8">
          Application ends on the 21st of October 2024. Class starts October
          26th.
        </Typography>
      </div>

      <Typography variant="h4" className="text-violet mt-8">
        Contact.
      </Typography>
      <Typography variant="paragraph" className="text-textColor mt-2">
        For any enquiry/information
      </Typography>
      <Typography variant="paragraph" className="text-textColor mt-2">
        Call 0545792397
      </Typography>
      <div>
        <Link
          href="https://codetrainafrica.heiapply.com/application"
          target="_blank"
        >
          <Button className="rounded-md font-bold bg-pink text-white shadow-none mt-6 px-8 capitalize text-base">
            Apply to study now, pay later
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ISA;
