"use client";

import React, { useState } from "react";

// Components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

// Icons
import {
  ComputerDesktopIcon,
  PencilIcon,
  ArrowDownIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/solid";

import CTLogo from "@/public/icons/CTLogo";
import Image from "next/image";
import SuccessStory from "@/components/SuccessStory";
import { faq, inMedia, sponsorImages } from "@/constants/constants";
import BgLogoLeft from "@/public/icons/BgLogoLeft";
import BgLogoRight from "@/public/icons/BgLogoRight";

export default function Home() {
  // Accordion
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <main className="overflow-hidden">
      <div className="py-2 bg-violet text-center text-white sm:hidden">
        <p className="text-xs">
          Curious about the Codetrain Experience? Join our upcoming Info
          Session! Register now!
        </p>
      </div>
      {/* Hero Section */}
      <section className="bg-ash lg:bg-inherit flex justify-start items-center md:justify-around relative px-4 pt-20 pb-6 lg:pb-2 lg:pt-0  md:px-10">
        <div className="text-violet z-10">
          <h1 className="font-bold text-3xl md:text-3xl xl:text-5xl max-w-80 md:max-w-xl xl:max-w-3xl">
            Start your career in <br /> Software Engineering <br />
            <span className="font-light"> or UX/UI design.</span>
          </h1>
          <div className="md:ml-10 text-textColor">
            <ul className="list-disc pl-4 md:pl-0 mt-10 leading-normal text-sm md:text-lg md:max-w-xl">
              <li>Learn in-demand tech skills that companies are hiring for</li>
              <li className="mt-4">
                Get practical experience by working on projects and building a
                portfolio
              </li>
              <li className="mt-4">Get connected to jobs and start earning</li>
            </ul>

            <div className="flex gap-x-4 mt-14 z-10">
              <Button
                className="bg-yellow text-violet shadow-none font-bold px-5 sm:px-8 md:px-10 rounded-md"
                variant="filled"
              >
                Enroll now
              </Button>
              <Button
                className="text-violet bg-transparent shadow-none font-bold px-5 rounded-md border-violet sm:px-8 md:px-10"
                variant="outlined"
              >
                Talk to admission
              </Button>
            </div>
            <p className="mt-8 text-xs md:text-base text-textColor">
              * Admission is in progress, join the October Cohort!
            </p>
          </div>
        </div>
        <div className="relative hidden lg:inline">
          <Image
            src="/images/ladys.png"
            alt=""
            height={400}
            width={300}
            className="h-[700px] w-fit object-contain"
          />
        </div>
        <Image
          src="/images/ladys.png"
          alt="ladies"
          height={400}
          width={300}
          className="h-[467px] sm:h-[567px] w-fit object-contain absolute opacity-10 right-0 sm:bottom-1 md:h-[700px] lg:hidden"
        />
        {/* bg logos */}
        <BgLogoRight className="fill-[#8c87a1] opacity-[0.2] size-60 sm:size-80 lg:size-6/12 absolute left-0 -top-11 lg:left-2/4 lg:-top-1 lg:-z-10" />
        <BgLogoLeft className="fill-[#8c87a1] opacity-[0.2] size-40 sm:size-80 absolute left-0 top-36 sm:top-56 lg:top-1/2 lg:left-3/4 lg:-z-10" />
      </section>

      <div className="py-2 bg-violet text-center text-white hidden sm:block">
        <p className="text-xs sm:text-sm">
          Curious about the Codetrain Experience? Join our upcoming Info
          Session! Register now!
        </p>
      </div>

      {/* Stats Section */}
      <section className="px-4 py-10 sm:px-14 sm:py-20 text-center">
        <h1 className="font-bold text-violet text-xl text-nowrap sm:text-3xl lg:text-5xl">
          Our Impact
        </h1>
        <p className="my-5 text-lg sm:my-10 max-w-5xl mx-auto text-textColor">
          Over the last 7 years, Codetrain Africa has trained hundreds of
          software developers from diverse diverse backgrounds with little or no
          tech skills
        </p>

        <div className="flex flex-col items-center justify-center md:items-start md:flex-row gap-x-10 ">
          <div className="max-w-72">
            <h1 className="text-pink text-7xl font-bold md:text-9xl">89%</h1>
            <p className="text-textColor mt-6">
              <span className="font-bold">Job Placement:</span> of our students
              get job within the first 9 months
            </p>
          </div>
          <div className="max-w-72 mt-5 md:mt-0">
            <h1 className="text-pink text-6xl font-bold md:text-9xl">600</h1>
            <p className="text-textColor mt-6">
              <span className="font-bold">Alumni:</span> alumni and counting
            </p>
          </div>
          <div className="max-w-72 mt-5 md:mt-0">
            <h1 className="text-pink text-6xl font-bold md:text-9xl">8.3</h1>
            <p className="text-textColor mt-6">
              <span className="font-bold">Ratings:</span> of our students get
              job within the first 9 months
            </p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="bg-lightBlue min-h-[calc(100vh-60px)] text-center flex flex-col justify-center py-24 px-4 relative">
        <div className="relative z-10">
          <h1 className="font-bold text-violet text-3xl lg:text-5xl">
            Our Courses
          </h1>
          <p className="my-10 max-w-6xl mx-auto text-lg text-violet">
            We offer two courses, Software Engineering and UI/UX Design
          </p>
        </div>

        <div className="flex flex-col gap-10 md:flex-row justify-center items-center z-10">
          <div className="text-start bg-white max-w-lg relative grid place-content-center px-6 py-14 h-[450px]">
            <div className="w-12 absolute -top-6 left-8 text-violet ">
              {" "}
              {React.createElement(ComputerDesktopIcon, {
                strokeWidth: 2,
                className: "h-12 w-12",
              })}
            </div>
            <h3 className="text-violet font-bold text-2xl">
              Software Engineer
            </h3>
            <p className="mt-4 text-textColor text-base md:text-lg">
              This is a 2 year program. By the end, you will go from novice to a
              mid-level software developer. The first year has a focus on
              training in software development. While the second year narrows
              down on career services that are aimed at help- ing you launch
              your career in the best way. It consists of interview prep,
              technical interview workshops, an innovation challenge, and
              internships.
            </p>
            <div className="">
              <Button className="rounded-md font-bold bg-yellow text-violet shadow-none mt-6 px-8">
                Enroll now
              </Button>
            </div>
          </div>
          <div className="text-start bg-white max-w-lg relative grid place-content-center px-6 py-14 h-[450px]">
            <div className="w-12 absolute -top-6 left-8 text-violet ">
              {" "}
              {React.createElement(PencilIcon, {
                strokeWidth: 2,
                className: "h-12 w-12",
              })}
            </div>
            <h3 className="text-violet font-bold text-2xl">UI/UX Designer</h3>
            <p className="mt-4 text-textColor text-base md:text-lg">
              This is a 1 year program. By the end, you will be transformed into
              a a professional capable of evaluating product requirements,
              illustrate design ideas, and and then use your newly acquired
              skills to bring it to life in the form of websites and mobile
              apps. The course includes collaboration with software teams and
              internship opportunities
            </p>
            <div className="">
              <Button className="rounded-md font-bold bg-yellow text-violet shadow-none mt-6 px-8">
                Enroll now
              </Button>
            </div>
          </div>
        </div>

        {/* Bg icons */}
        <BgLogoLeft className="fill-yellow absolute -bottom-12 lg:bottom-0 -right-0 size-72 sm:size-96 md:size-2/4" />
        <BgLogoRight className="fill-yellow absolute -top-12 lg:top-0 left-0 size-72 sm:size-96 md:size-2/4" />
      </section>

      {/* Earn Back Your Tuition Section */}
      <section className="mt-20 bg-ash">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 px-4 py-8 sm:px-10 sm:py-24 bg-contain bg-center bg-no-repeat relative overflow-hidden">
          <CTLogo
            className="absolute size-[1080px] md:size-[800px] -left-3 md:left-20 lg:left-1/4  object-cover text-[#e0e0e0] opacity-[0.5]"
            color="#c2c0c0"
          />
          <div className="relative z-10">
            <h1 className="font-bold text-violet text-2xl sm:text-4xl">
              EARN BACK YOUR TUITION
            </h1>
            <p className="max-w-lg mt-4 text-textColor leading-6 text-base sm:text-lg">
              The high demand for professionals in technology makes it one of
              the best-paying industries globally.
            </p>
            <p className="max-w-lg mt-4 text-textColor leading-6 text-base sm:text-lg">
              After just 5 years as a fellow at codetrain, Awal transitioned
              into working remotely for a Canadian gaming company. Less than 1
              year after he joined Big Viking games, Awal is now a senior
              developer. He works right here from his home in Ghana or anywhere
              else he finds himself.
            </p>
          </div>

          <div className="max-w-[540px] bg-white relative z-10">
            <iframe
              className="w-full h-52 sm:h-72 md:max-w-[540px] md:h-[376px]"
              // width="540"
              // height="376"
              src="https://www.youtube.com/embed/-YUY-MFGdQw?si=WHj55QBrwtf4kJMl"
              title="YouTube video player"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // referrerpolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <div className="text-textColor p-4">
              <p className="font-semibold text-base md:text-xl">
                Inspiring story of how Awal started her journey in tech and is
                now a software engineer
              </p>
              <hr className="border-violet h-1 my-6" />
              <p>Software Engineer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners and Sponsors */}
      <section className="text-center py-12 px-10 shadow-md">
        <h1 className="text-xl text-violet font-semibold">
          Our Partners and Supporters
        </h1>
        <div className="grid place-items-center grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-12">
          {sponsorImages.map((sponsor) => (
            <div key={sponsor.name}>
              <Image
                src={sponsor.src}
                alt={sponsor.name}
                width={174}
                height={100}
              />
            </div>
          ))}
        </div>
        <div className="grid place-items-center grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-12">
          {sponsorImages.map((sponsor) => (
            <div key={sponsor.name}>
              <Image
                src={sponsor.src}
                alt={sponsor.name}
                width={174}
                height={100}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <SuccessStory />

      {/* Experience Section */}
      <section className="py-20 px-4 bg-ash relative">
        <div className="text-center z-10">
          <h3 className="text-2xl md:text-4xl text-violet font-semibold">
            Codetrain Experience
          </h3>
          <p className="max-w-4xl mt-7 mx-auto text-xl text-textColor">
            Unlike traditional education models, our curriculum is constantly
            updated to reflect the latest trends and demands of the tech
            industry.
          </p>
        </div>
        <div className="flex flex-col gap-14 items-center mt-10 z-10">
          <ExperienceCard
            img="https://images.pexels.com/photos/27057568/pexels-photo-27057568/free-photo-of-a-group-of-seagulls-sitting-on-top-of-an-iceberg.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            title="Kick-off Event"
            text="Our coding bootcamp offers personalized learning paths designed to cater to the diverse needs and aspirations of each student, ensuring that they receive the support and guidance needed to succeed in their journey towards becoming proficient developers or designers"
            className="lg:flex-row"
          />
          <ExperienceCard
            img="https://images.pexels.com/photos/27057568/pexels-photo-27057568/free-photo-of-a-group-of-seagulls-sitting-on-top-of-an-iceberg.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            title="In-Person Class On Weekdays/Weekends"
            text="Unlike traditional education models, our curriculum is constantly updated to reflect the latest trends and demands of the tech industry. By staying ahead of the curve, we equip our students with the relevant skills and knowledge needed to thrive in today's competitive job market"
            className="lg:flex-row-reverse"
          />
          <ExperienceCard
            img="https://images.pexels.com/photos/27057568/pexels-photo-27057568/free-photo-of-a-group-of-seagulls-sitting-on-top-of-an-iceberg.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            title="Online Class"
            text="We prioritize not only technical proficiency but also soft skills development, career readiness, and personal growth. Our comprehensive approach ensures that graduates are not only adept coders but also effective communicators, problem-solvers, and leaders in their field."
            className="lg:flex-row"
          />
          <ExperienceCard
            img="https://images.pexels.com/photos/27057568/pexels-photo-27057568/free-photo-of-a-group-of-seagulls-sitting-on-top-of-an-iceberg.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            title="Mixers"
            text="We prioritize not only technical proficiency but also soft skills development, career readiness, and personal growth. Our comprehensive approach ensures that graduates are not only adept coders but also effective communicators, problem-solvers, and leaders in their field."
            className="lg:flex-row-reverse"
          />
          <ExperienceCard
            img="https://images.pexels.com/photos/27057568/pexels-photo-27057568/free-photo-of-a-group-of-seagulls-sitting-on-top-of-an-iceberg.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            title="One-on-One Teaching Assistance"
            text="We prioritize not only technical proficiency but also soft skills development, career readiness, and personal growth. Our comprehensive approach ensures that graduates are not only adept coders but also effective communicators, problem-solvers, and leaders in their field."
            className="lg:flex-row"
          />
          <ExperienceCard
            img="https://images.pexels.com/photos/27057568/pexels-photo-27057568/free-photo-of-a-group-of-seagulls-sitting-on-top-of-an-iceberg.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            title="Group Projects"
            text="We prioritize not only technical proficiency but also soft skills development, career readiness, and personal growth. Our comprehensive approach ensures that graduates are not only adept coders but also effective communicators, problem-solvers, and leaders in their field."
            className="lg:flex-row-reverse"
          />
          <ExperienceCard
            img="https://images.pexels.com/photos/27057568/pexels-photo-27057568/free-photo-of-a-group-of-seagulls-sitting-on-top-of-an-iceberg.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            title="Demo-Day"
            text="We prioritize not only technical proficiency but also soft skills development, career readiness, and personal growth. Our comprehensive approach ensures that graduates are not only adept coders but also effective communicators, problem-solvers, and leaders in their field."
            className="lg:flex-row"
          />
        </div>
        {/* svg bg logos */}
        <BgLogoLeft className="fill-[#ff006e] opacity-[0.2] absolute size-96 sm:size-[546px] top-0 right-0 lg:top-56 lg:right-56 sm:inline" />
        <BgLogoLeft className="fill-[#ff006e] opacity-[0.2] absolute size-96 sm:size-[546px] bottom-[669px] left-5 lg:bottom-56 lg:left-56 sm:inline" />
        <BgLogoRight className="fill-[#ff006e] opacity-[0.2] absolute size-96 sm:size-[546px] bottom-20 right-0 lg:bottom-[669px] lg:right-40 sm:inline" />
      </section>

      {/* Case Studies Section*/}
      <section className="py-10 md:py-20 px-2 sm:px-4">
        <div className="text-center relative z-10">
          <h3 className="text-2xl text-nowrap md:text-5xl text-violet font-bold">
            Some Codetrain Case Studies
          </h3>
          <p className="text-textColor max-w-5xl mx-auto mt-10">
            Lorem ipsum dolor sit amet consectetur. Felis eu euismod placerat
            libero lacus eu morbi. Quam ullamcorper adipiscing eget porttitor
            vitae eget aliquam imperdiet. Sagittis nunc vulputate magna eu sed
            et. Aenean commodo amet amet lacinia amet porttitor diam.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 px-2 sm-10 py-10 bg-contain bg-center bg-no-repeat relative">
          <CTLogo
            className="absolute size-[2080px] md:size-[1024px] -left-20 md:left-12 object-cover text-[#e0e0e0] opacity-[0.5]"
            color="#c2c0c0"
          />

          <div className="max-w-[540px] bg-white relative z-10 shadow-md">
            <Image
              src="https://images.pexels.com/photos/11558845/pexels-photo-11558845.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
              alt="picture"
              className="h-[350px] md:h-[540px] w-[540px] rounded-none"
              width={540}
              height={540}
            />
            <div className="text-textColor p-4">
              <p className="font-semibold text-xl">
                Inspiring story of how Ama started her journey in tech and is
                now a software engineer
              </p>
            </div>
          </div>
          <div className="relative z-10 text-textColor">
            <p className="max-w-lg mt-4 leading-8 text-lg">
              <span className="font-bold">Background:</span> Our bootcamp
              partnered with the Ashesi Venture Incubator to help young
              entrepreneurs develop their tech solutions.
            </p>
            <p className="max-w-lg mt-4 leading-8 text-lg">
              <span className="font-bold">Challenge:</span> Entrepreneurs needed
              technical expertise to turn their innovative ideas into viable
              products but lacked the coding skills to do so.
            </p>
            <p className="max-w-lg mt-4 leading-8 text-lg">
              <span className="font-bold">Solution: </span>CodeTrain students
              collaborated with these entrepreneurs, providing technical
              guidance and developing prototypes using the latest technologies.
            </p>
            <p className="max-w-lg mt-4 leading-8 text-lg">
              <span className="font-bold">Outcome: </span>
              Several startups successfully launched their products, received
              funding, and grew their businesses, thanks to the tech support
              from CodeTrain students.
            </p>
            <p className="font-bold mt-6">Key Takeaways:</p>
            <ul className="list-disc leading-10 text-lg pl-3 sm:pl-0">
              <li>
                Partnerships with incubators create real-world project
                opportunities
              </li>
              <li>
                Students gain practical experience while contributing to
                entrepreneurial success
              </li>
              <li>
                Collaborative projects foster innovation and community impact
              </li>
            </ul>
            <Button className="rounded-none text-white bg-violet mt-6">
              Discover More Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Ground Up Section */}
      <section className="bg-ash relative">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-8 px-4 py-14  sm:py-20 bg-contain bg-center bg-no-repeat relative">
          <div className="relative">
            <div className="max-w-[540px] bg-white relative z-10">
              <iframe
                className="w-full h-52 sm:h-72 md:max-w-[540px] md:h-[376px]"
                // width="540"
                // height="376"
                src="https://www.youtube.com/embed/SmAZJcErw7w?si=Rnyh2RAAkl1W1Ech"
                title="YouTube video player"
                // frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                // referrerpolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <div className="text-textColor p-4">
                <p className="font-semibold text-xl">
                  Inspiring story of how Ama started her journey in tech and is
                  now a software engineer
                </p>
                <hr className="border-violet h-1 my-6" />
                <p>Software Engineer</p>
              </div>
            </div>
            <Button className="rounded-none sm:hidden z-10 relative text-white bg-violet mt-6">
              Discover More Case Studies
            </Button>
            <BgLogoRight className="fill-pink absolute size-40 sm:size-48 -top-20 sm:-top-24 left-0 z-30 sm:inline" />
          </div>

          <div className="relative z-30">
            <h1 className="font-bold text-violet text-2xl sm:text-4xl lg:text-5xl">
              From The Ground Up
            </h1>
            <p className="max-w-lg mt-4 text-textColor leading-8 text-lg">
              Lorem ipsum dolor sit amet consectetur. Felis eu euismod placerat
              libero lacus eu morbi. Quam ullamcorper adipiscing eget porttitor
              vitae eget aliquam imperdiet. Sagittis nunc vulputate magna eu sed
              et. Aenean commodo amet amet lacinia amet porttitor diam. Sagittis
              nunc ultricies felis at amet nibh euismod. Natoque donec elementum
              diam nascetur nibh volutpat volutpat pretium dui. Tincidunt magna
              auctor eget ut egestas lectus fermentum sodales. Congue feugiat
              tortor velit amet risus at eget at. Cras enim dolor pellentesque
              pulvinar.
            </p>
            <Button className="rounded-none hidden md:flex text-white bg-violet mt-6">
              Discover More Case Studies
            </Button>
          </div>
        </div>
        {/* Bg logos */}
        <BgLogoLeft className="fill-pink opacity-[0.3] absolute size-96 sm:size-[546px] -bottom-10 sm:-bottom-24 lg:bottom-1/3 right-0 sm:inline" />
      </section>

      {/* Our Fees Section */}
      <section className="min-h-[calc(100vh-60px)] text-center flex flex-col justify-center py-10 md:py-20 px-4 relative">
        <div className="z-10">
          <h1 className="font-bold text-violet text-3xl lg:text-5xl">
            Our Fees
          </h1>
          <p className="my-10 max-w-6xl mx-auto text-textColor">
            Lorem ipsum dolor sit amet consectetur. Mauris pellentesque porta
            donec enim tellus nibh adipiscing arcu. Et mi pellentesque lorem
            tellus eget nulla.
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col gap-10 justify-center z-10">
          <div className="flex flex-col gap-20 md:flex-row justify-center items-center">
            <div className="text-start bg-white shadow-xl max-w-sm relative grid place-content-center pb-8">
              <h3 className="text-violet font-bold text-2xl bg-yellow p-4">
                Software Engineer
              </h3>
              <p className="mt-4 text-textColor text-lg p-4">
                Our two year education to employment package costs GH₵38,500 for
                Africans living in Africa and $3000 for other applicants. <br />{" "}
                We are able to offer flexible payment options and part
                scholarships for diversity and inclusion.
              </p>
              <div className="px-4">
                <Button className="rounded-sm font-bold bg-violet text-white mt-6 px-8">
                  View our course Details
                </Button>
              </div>
            </div>
            <div className="text-start bg-white shadow-xl max-w-sm relative grid place-content-center pb-8">
              <h3 className="text-violet font-bold text-2xl bg-yellow p-4">
                UX/UI Design
              </h3>
              <p className="mt-4 text-textColor text-lg p-4">
                Our one year education to employment package costs GH₵19,000 for
                Africans living in Africa and $1900 for other applicants. <br />{" "}
                We are able to offer flexible payment options and part
                scholarships to promote diversity and inclusion.
              </p>
              <div className="px-4">
                <Button className="rounded-sm font-bold bg-violet text-white mt-6 px-8">
                  View our course Details
                </Button>
              </div>
            </div>
          </div>
          <div className="flex gap-x-4 z-10">
            <Button
              className="bg-yellow text-violet shadow-none font-bold px-2 sm:px-8 md:px-10 rounded-md"
              variant="filled"
            >
              Ask for Payment Plan
            </Button>
            <Button
              className="text-violet bg-transparent shadow-none font-bold px-2 rounded-md border-violet sm:px-8 md:px-10"
              variant="outlined"
            >
              Get A Part-Scholarship
            </Button>
          </div>
        </div>

        {/* Bg icons */}
        <BgLogoLeft className="absolute fill-yellow opacity-[0.3] size-96 sm:size-[540px] md:size-[669px] -top-16 md:-top-10 p-0 right-0" />
        <BgLogoRight className="absolute fill-yellow size-96 sm:size-[540px] md:size-[669px] -bottom-16 md:-bottom-32 p-0 left-0" />
      </section>

      {/* Exciting Stories Section */}
      <section className="min-h-[calc(100vh-60px)] bg-ash text-center flex flex-col justify-center py-14 sm:py-24 px-4 relative">
        <h1 className="font-bold text-violet text-3xl max-w-3xl mx-auto lg:text-5xl">
          Some Exciting Stories About Codetrain
        </h1>
        <p className="my-10 max-w-3xl mx-auto text-textColor">
          Lorem ipsum{" "}
          <span className="font-bold">dolor sit amet consectetur.</span> Mauris
          pellentesque porta donec enim tellus nibh adipiscing arcu. Et mi
          pellentesque lorem tellus eget nulla. Vulputate iaculis magnis aenean
          integer. Ultrices id aliquet elementum id elit quis lectus rutrum
          nec..
        </p>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center place-content-center gap-10 mt-10 sm:mt-20 text-left">
          <Card className="sm:w-[440px] max-h-[667px] rounded-none">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <Image
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="img"
                width={540}
                height={276}
                className="overflow-hidden object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography className="font-bold text-textColor">
                lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quod. lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam, quod.
              </Typography>
            </CardBody>
            <hr className="border-violet h-1" />
            <CardFooter>
              <Typography className="font-bold text-textColor">Lee</Typography>
              <Typography className="font-normal text-textColor">
                Software Engineer
              </Typography>
            </CardFooter>
          </Card>
          <Card className="sm:w-[440px] max-h-[667px] rounded-none">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <Image
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="img"
                width={540}
                height={276}
                className="overflow-hidden object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography className="font-bold text-textColor">
                lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quod. lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam, quod.
              </Typography>
            </CardBody>
            <hr className="border-violet h-1" />
            <CardFooter>
              <Typography className="font-bold text-textColor">Lee</Typography>
              <Typography className="font-normal text-textColor">
                Software Engineer
              </Typography>
            </CardFooter>
          </Card>
          <Card className="sm:w-[440px] max-h-[667px] rounded-none">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <Image
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="img"
                width={540}
                height={276}
                className="overflow-hidden object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography className="font-bold text-textColor">
                lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quod. lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam, quod.
              </Typography>
            </CardBody>
            <hr className="border-violet h-1" />
            <CardFooter>
              <Typography className="font-bold text-textColor">Lee</Typography>
              <Typography className="font-normal text-textColor">
                Software Engineer
              </Typography>
            </CardFooter>
          </Card>
          <Card className="sm:w-[440px] max-h-[667px] rounded-none">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <Image
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="img"
                width={540}
                height={276}
                className="overflow-hidden object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography className="font-bold text-textColor">
                lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quod. lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam, quod.
              </Typography>
            </CardBody>
            <hr className="border-violet h-1" />
            <CardFooter>
              <Typography className="font-bold text-textColor">Lee</Typography>
              <Typography className="font-normal text-textColor">
                Software Engineer
              </Typography>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Discover Our Campus Section */}
      <section>
        <div className="px-4 py-10 text-center">
          <h1 className="font-bold text-violet text-xl text-nowrap sm:text-3xl lg:text-5xl">
            Discover Our Campus
          </h1>
          <p className="my-5 sm:my-10 max-w-5xl mx-auto text-textColor">
            We offer in-person training at our East Legon campus and also
            provide options for virtual training to students wherever they are.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-pink h-[422px] p-3 sm:p-10 flex flex-col justify-evenly items-start text-white">
            <Typography variant="h4">Talk To Us</Typography>
            <Typography variant="h4">+233 545 792 397</Typography>
            <Typography variant="h4">Email Us</Typography>
            <Typography variant="h4">admissions@codetraingh.com</Typography>
          </div>
          <div className="h-[422px]">
            <Image
              src="https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt=""
              width={720}
              height={384}
              className="object-cover !h-[422px] w-full"
            />
          </div>
          <div className="h-[422px text-center flex flex-col justify-evenly items-center">
            <Typography variant="h4" className="text-violet">
              East Legon 16a Parsnip street
            </Typography>
            <Typography variant="paragraph" className="text-textColor">
              Near the A&C Mall
            </Typography>
            <div className="w-[95%] h-[300px] overflow-hidden my-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.474142057257!2d-0.15511199381799048!3d5.644322737402287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b269a8fbdd1%3A0x1bb79c84b5c0e1f2!2sCodetrain!5e0!3m2!1sen!2sgh!4v1721408509162!5m2!1sen!2sgh"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                // referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="h-[422px]">
            <Image
              src="https://images.pexels.com/photos/5905441/pexels-photo-5905441.jpeg?auto=compress&cs=tinysrgb&w=1200"
              width={720}
              height={384}
              alt=""
              className="object-cover !h-[422px] w-full"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 text-center bg-ash">
        <h1 className="font-bold text-violet mx-auto text-2xl md:text-3xl lg:text-5xl">
          Feqeuently Asked Question About Codetrain
        </h1>
        <p className="my-10 max-w-3xl mx-auto text-textColor">
          Lorem ipsum{" "}
          <span className="font-bold">dolor sit amet consectetur.</span> Mauris
          pellentesque porta donec enim tellus nibh adipiscing arcu. Et mi
          pellentesque lorem tellus eget nulla. Vulputate iaculis magnis aenean
          integer. Ultrices id aliquet elementum id elit quis lectus rutrum
          nec..
        </p>

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
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </section>

      {/* Excited to start your career Section */}
      <section className="bg-violet py-24 px-4 relative overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center relative z-30">
          <div>
            <Typography variant="h2" className="text-lightBlue max-w-md">
              Are you excited to start your career?
            </Typography>
            <Typography
              variant="paragraph"
              className="text-white max-w-xl mt-5"
            >
              Lorem ipsum dolor sit amet consectetur. Eu lorem non amet id
              dictum condimentum sagittis.
            </Typography>
          </div>
          <div>
            <Button variant="filled" className="bg-lightBlue">
              Enroll Now
            </Button>
          </div>
        </div>
        <BgLogoLeft className="absolute fill-yellow opacity-[0.5] size-80 md:size-[443px] -top-14 md:-top-7 p-0 left-0" />
        <BgLogoRight className="absolute fill-yellow size-52 md:size-80 -bottom-10 md:bottom-0 right-0" />
      </section>

      {/* Codetrain in media section */}
      <section className="text-center py-12 px-10">
        <h1 className="text-xl text-violet font-semibold">
          Codetrain Africa in Media
        </h1>
        <div className="grid place-items-center place-content-center grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 mt-12">
          {inMedia.map((sponsor) => (
            <div key={sponsor.name}>
              <Image
                src={sponsor.src}
                alt={sponsor.name}
                width={100}
                height={60}
              />
            </div>
          ))}
        </div>
      </section>
      <hr className="my-8 border-textColor max-w-7xl mx-auto" />
    </main>
  );
}

const ExperienceCard = ({ className, img, title, text }) => {
  return (
    <div
      className={`flex flex-col items-center gap-x-9 relative z-10 ${className}`}
    >
      <div className="max-w-md">
        <Image
          src={img}
          alt={title}
          width={400}
          height={300}
          className="rounded-none"
        />
      </div>
      <div className="mt-10 lg:mt-0 max-w-md">
        <h3 className="text-violet text-2xl max-w-sm">{title}</h3>
        <p className="max-w-md text-xl text-textColor tracking-wide mt-6">
          {text}
        </p>
      </div>
    </div>
  );
};
