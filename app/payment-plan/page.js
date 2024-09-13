"use client";

import { Button, Typography } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";

const PaymentPlan = () => {
  return (
    <section className="py-20 px-8">
      <Typography variant="h3" className="text-pink text-center">
        Flexible Payment Plans
      </Typography>
      <Typography
        variant="paragraph"
        className="text-textColor text-center max-w-4xl mx-auto mt-4"
      >
        In making our program more accessible and inclusive, we offer payment
        plans to accepted applicants who are not able to cover their tuition in
        one payment. With each plan, tuitions is paid in full before the end of
        the first year of the program. Accepted students get to start the
        program after they have paid 1/3 of their total fees. After this initial
        payment, you can subscribe to one of 3 payment plans.
      </Typography>

      <ul className="max-w-6xl list-disc mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <li>
          <Typography variant="h6" className="text-textColor">
            Annual plan
          </Typography>
          <Typography variant="paragraph" className="text-textColor">
            If you choose the annual plan, this is how your tuition will be
            broken up. You will make your initial deposit and then make one more
            payment to cover the rest of your tuition fee. The amount you pay is
            dependent on whether or not you have been awarded a scholarship.
          </Typography>
        </li>
        <li>
          <Typography variant="h6" className="text-textColor">
            Biannual plan
          </Typography>
          <Typography variant="paragraph" className="text-textColor">
            Your tuition fee will be broken up into 3 payments. After you pay
            your initial deposit, you will make two additional payments to cover
            the rest of your tuition.
          </Typography>
        </li>
        <li>
          <Typography variant="h6" className="text-textColor">
            Quarterly plan
          </Typography>
          <Typography variant="paragraph" className="text-textColor">
            You first make your initial deposit. After that, you make one
            payment each quarter. This payment is spread over the next 3 months.
            You are only required to make another payment when the next quarter
            is starting.
          </Typography>
        </li>
        <li>
          <Typography variant="h6" className="text-textColor">
            Monthly plan
          </Typography>
          <Typography variant="paragraph" className="text-textColor">
            This plan is the most flexible. After you make your initial deposit,
            you do not need to struggle to raise a lump sum. You simply make a
            payment each month to cover your tuition for the month. Again, the
            amount you pay per month depends on whether or not you have received
            scholarship.
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

export default PaymentPlan;
