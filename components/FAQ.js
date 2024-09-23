import { faq } from "@/constants/constants";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/solid";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";

const FAQ = () => {
  // Accordion
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <section className="py-24 px-4 mt-20 text-center bg-ash">
      <h1 className="font-bold text-violet mx-auto text-2xl md:text-3xl lg:text-5xl">
        Frequently Asked Question About Codetrain
      </h1>
      <Typography
        variant="paragraph"
        className="my-10 max-w-3xl mx-auto text-textColor"
      >
        Have questions about our programs, fees, or anything else? Find answers
        here to help you make an informed decision.
      </Typography>

      <div>
        {faq.map((item, index) => (
          <Accordion
            key={index}
            open={open === index + 1}
            className="mb-2 bg-white border border-blue-gray-100 px-4 max-w-5xl mx-auto text-left"
            icon={
              open === index + 1 ? (
                <ArrowUpIcon
                  className="w-6 h-6 text-violet"
                  onClick={() => handleOpen(index)}
                />
              ) : (
                <ArrowDownIcon
                  className="w-6 h-6 text-violet"
                  onClick={() => handleOpen(index)}
                />
              )
            }
          >
            <AccordionHeader
              onClick={() => handleOpen(index + 1)}
              className={`border-b-0 transition-colors text-sm md:text-lg ${
                open === index + 1 ? "text-violet hover:!text-violet" : ""
              }`}
            >
              {item.question}
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal text-textColor">
              {item.answer}
              <ul className="list-disc p-3 pl-10">
                {item.options &&
                  item.options.map((el) => (
                    <li key={el.option} className="p-1">
                      {el.option}
                    </li>
                  ))}
              </ul>
            </AccordionBody>
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
