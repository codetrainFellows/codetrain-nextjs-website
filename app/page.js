"use client";

import React, { useState } from "react";

// Components
import { Typography, Button } from "@material-tailwind/react";

// Icons
import { ComputerDesktopIcon, PencilIcon } from "@heroicons/react/24/solid";

import CTLogo from "@/public/icons/CTLogo";
import Image from "next/image";
import SuccessStory from "@/components/SuccessStory";
import { inMedia, sponsorImages } from "@/constants/constants";
import BgLogoLeft from "@/public/icons/BgLogoLeft";
import BgLogoRight from "@/public/icons/BgLogoRight";
import Link from "next/link";
import ExcitedCareer from "@/components/ExcitedCareer";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main className="overflow-hidden scroll-smooth">
      <div className="py-2 bg-violet text-center text-white sm:hidden">
        <Link
          href="https://codetrainafrica.heiapply.com/application"
          target="_blank"
          className="hover:underline"
        >
          <p className="text-xs">
            Curious about the Codetrain Experience? Join our upcoming Info
            Session! Register Now
          </p>
        </Link>
      </div>
      {/* Hero Section */}
      <section className="bg-ash lg:bg-inherit flex justify-start items-center md:justify-around relative px-4 pt-20 pb-6 lg:pb-2 lg:pt-0 md:px-10">
        <div className="text-violet z-10">
          <h1 className="font-bold text-3xl md:text-3xl xl:text-5xl max-w-80 md:max-w-xl xl:max-w-3xl">
            Start your career in <br /> Software Engineering <br />
            <span className="font-light"> or UX/UI Design.</span>
          </h1>
          <div className="md:ml-10 text-textColor">
            <ul className="list-disc pl-4 md:pl-0 mt-10 leading-normal font-extrabold text-sm md:text-xl md:max-w-xl">
              <li>Learn in-demand tech skills that companies are hiring for</li>
              <li className="mt-2">
                Get practical experience by working on projects and building a
                portfolio
              </li>
              <li className="mt-2">Get connected to jobs and start earning</li>
            </ul>

            <div className="flex gap-x-4 mt-14 z-10">
              <Button
                className="bg-yellow text-violet shadow-none font-bold px-5 sm:px-8 md:px-10 rounded-md hover:shadow-none"
                variant="filled"
              >
                <Link href="#courses">Enroll now</Link>
              </Button>
              <Link
                href="https://calendly.com/fosterfrimpong63/one-one-with-codetrain-admissions"
                target="_blank"
              >
                <Button
                  className="text-violet bg-transparent shadow-none font-bold px-5 rounded-md border-violet sm:px-8 md:px-10"
                  variant="outlined"
                >
                  Let’s talk
                </Button>
              </Link>
            </div>
            <p className="mt-8 text-xs font-extrabold  md:text-base text-textColor">
              * Admission is in progress, join the October Cohort!
            </p>
          </div>
        </div>
        <div className="relative hidden lg:inline h-[700px]">
          <Image
            src="/people/home.png"
            alt="hero"
            height={400}
            width={300}
            className="h-[900px] w-fit relative object-contain -top-52"
            quality={100}
          />
        </div>
        <Image
          src="/people/home.png"
          alt="ladies"
          height={400}
          width={300}
          quality={100}
          className="h-[1067px] w-auto -top-64 sm:-top-20 md:-top-40 sm:h-[567px] object-contain absolute opacity-20 right-0 md:h-[700px] lg:hidden"
        />
        {/* bg logos */}
        <BgLogoRight className="fill-[#8c87a1] opacity-[0.2] size-60 sm:size-80 lg:size-6/12 absolute left-0 -top-11 lg:left-2/4 lg:-top-1 lg:-z-10" />
        <BgLogoLeft className="fill-[#8c87a1] opacity-[0.2] size-40 sm:size-80 absolute left-0 top-36 sm:top-56 lg:top-1/2 lg:left-3/4 lg:-z-10" />
      </section>

      <div className="py-2 bg-violet text-center text-white hidden sm:block">
        <Link
          href="https://codetrainafrica.heiapply.com/application"
          target="_blank"
          className="hover:underline"
        >
          <p className="text-xs sm:text-sm">
            Curious about the Codetrain Experience? Join our upcoming Info
            Session! Register Now
          </p>
        </Link>
      </div>

      {/* Stats Section */}
      <section className="px-4 py-10 sm:px-14 sm:py-20 text-center">
        <h1 className="font-bold text-violet text-xl text-nowrap sm:text-3xl lg:text-5xl">
          Our Impact
        </h1>
        <Typography
          variant="paragraph"
          className="my-5 text-lg sm:my-10 max-w-5xl mx-auto text-textColor"
        >
          Over the last 7 years, Codetrain Africa has trained hundreds of
          software developers from diverse diverse backgrounds with little or no
          tech skills
        </Typography>

        <div className="flex flex-col items-center justify-center md:items-start md:flex-row gap-x-10 ">
          <div className="max-w-72">
            <h4 className="text-lg md:text-xl text-violet font-extrabold mb-3">
              Job Placement
            </h4>
            <h1 className="text-pink text-7xl font-bold md:text-9xl">89%</h1>
            <p className="text-textColor mt-6">
              of our students get job within the first 9 months
            </p>
          </div>
          <div className="max-w-72 mt-5 md:mt-0">
            <h4 className="text-lg md:text-xl text-violet font-extrabold mb-3">
              Alumni
            </h4>
            <h1 className="text-pink text-6xl font-bold md:text-9xl">600</h1>
            <p className="text-textColor mt-6">alumni and counting</p>
          </div>
          <div className="max-w-72 mt-5 md:mt-0">
            <h4 className="text-lg md:text-xl text-violet font-extrabold mb-3">
              Ratings
            </h4>
            <h1 className="text-pink text-6xl font-bold md:text-9xl">8.3</h1>
            <p className="text-textColor mt-6">
              of our students get job within the first 9 months
            </p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section
        id="courses"
        className="bg-lightBlue min-h-[calc(100vh-60px)] text-center flex flex-col justify-center py-24 px-4 relative"
      >
        <div className="relative z-10">
          <h1 className="font-bold text-violet text-3xl lg:text-5xl">
            Our Courses
          </h1>
          <Typography
            variant="paragraph"
            className="my-10 max-w-6xl mx-auto text-lg text-violet"
          >
            Explore our courses: Software Engineering and UI/UX Design
          </Typography>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row justify-center items-center z-10">
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
            <Typography
              variant="paragraph"
              className="mt-4 text-textColor text-base md:text-lg"
            >
              This is a 2-year program designed to take you from beginner to
              mid-level software developer. In the first year, you&lsquo;ll
              receive comprehensive training in software development. The second
              year focuses on launching your career with tailored career
              services, including interview preparation, technical workshops, an
              innovation challenge, and internships. Get ready to build your
              skills and kick-start your career with us!
            </Typography>
            <div className="space-x-4 flex">
              <Link
                href="https://codetrainafrica.heiapply.com/application"
                target="_blank"
              >
                <Button className="rounded-md font-bold bg-yellow text-violet shadow-none mt-6 px-8">
                  Enroll now
                </Button>
              </Link>
              <Link href="/courses/software-engineering">
                <Button className="rounded-md font-bold bg-violet text-nowrap text-white shadow-none mt-6 px-8">
                  Course Details
                </Button>
              </Link>
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
            <Typography
              variant="paragraph"
              className="mt-4 text-textColor text-base md:text-lg"
            >
              This is a 1-year program designed to transform you into a skilled
              professional ready to tackle product requirements, craft
              innovative design concepts, and bring them to life through
              stunning websites and mobile apps. Throughout the course,
              you&lsquo;ll collaborate with software teams and gain hands-on
              experience through internship opportunities.
            </Typography>
            <div className="space-x-4 flex">
              <Link href="https://codetrainafrica.heiapply.com/application">
                <Button className="rounded-md font-bold bg-yellow text-violet shadow-none mt-6 px-8">
                  Enroll now
                </Button>
              </Link>
              <Link href="/courses/ui-ux-design">
                <Button className="rounded-md font-bold bg-violet text-white shadow-none mt-6 px-8">
                  Course Details
                </Button>
              </Link>
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
            className="absolute size-[1080px] md:size-[800px] -left-3 md:left-20 lg:left-1/4  object-cover text-[#e0e0e0] opacity-30"
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
              Just 5 years after joining Codetrain as a fellow, Awal made an
              impressive leap into the international tech scene. He transitioned
              to a remote role with Big Viking Games, a Canadian gaming company,
              where he has risen to the position of Senior Developer in less
              than a year.
            </p>
            <p className="max-w-lg mt-4 text-textColor leading-6 text-base sm:text-lg">
              Now, Awal works from his home in Ghana or any location he chooses,
              demonstrating the global reach and flexibility of a career in
              tech.
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
                Inspiring Journey: From Codetrain Fellow to Senior Software
                Engineer
              </p>
              <hr className="border-violet h-1 my-6" />
              <p>Software Engineer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <SuccessStory />

      {/* Experience Section */}
      <section className="py-20 px-4 bg-ash relative">
        <div className="text-center z-10">
          <h3 className="text-2xl md:text-4xl text-violet font-semibold">
            The Codetrain Experience
          </h3>
          <Typography
            variant="paragraph"
            className="max-w-4xl mt-7 mx-auto font-medium text-textColor"
          >
            Codetrain offers an amazing internationally recognized education
            experience, blending global standards with strong support for
            underrepresented groups, ensuring an inclusive and empowering
            learning environments for all students.
          </Typography>
        </div>
        <div className="flex flex-col gap-14 items-center mt-10 z-10">
          <ExperienceCard
            // img="/people/expe1.jpg"
            video="https://www.youtube.com/embed/uK37JIvdr2A?si=IPqMeg5lXCuIBeR8"
            title="Safeguarding"
            text="We prioritize safeguarding by maintaining a safe, harassment-free environment. Our strict policies protect students from cyberbullying and misconduct, ensuring inclusivity and equal opportunity for all, with focus on supporting underrepresented groups."
            className="lg:flex-row"
          />
          <ExperienceCard
            img="/people/exp7.jpg"
            title="Supporting women & Disabled"
            text="We champion women neurodivergent individuals, and those with sickle cell, offering both part and full scholarships. Our commitment to diversity and inclusion ensures these underrepresented groups have access to top-notch software engineering education and opportunities to thrive in tech."
            className="lg:flex-row-reverse"
          />
          <ExperienceCard
            img="/people/expe2.jpg"
            title="Global Experience"
            text="We offer students a global experience by integrating international industry standards into our curriculum, connecting them with global opportunities to work on international projects, ensuring they are well-prepared for a competitive, global job market."
            className="lg:flex-row"
          />
        </div>
        {/* svg bg logos */}
        <BgLogoLeft className="fill-[#ff006e] opacity-10 absolute size-96 sm:size-[446px] top-0 right-0 lg:-top-0 lg:right-56 sm:inline" />
        <BgLogoLeft className="fill-[#ff006e] opacity-10 absolute size-96 sm:size-[446px] bottom-[669px] left-5 lg:bottom-56 lg:left-56 sm:inline" />
        <BgLogoRight className="fill-[#ff006e] opacity-10 absolute size-96 sm:size-[446px] bottom-20 right-0 lg:bottom-[369px] lg:right-40 sm:inline" />
      </section>

      {/* Conference Section */}
      <section className="mt-20 py-2 px-4 min-h-[70vh] bg-[url('/people/group.jpg')] bg-cover bg-no-repeat bg-center flex justify-end items-end">
        <div className="max-w-sm bg-white px-8 py-5">
          <Typography variant="h4" className="text-violet">
            Experience The Codetrain Demo-day
          </Typography>
        </div>
      </section>

      <section className="px-4 py-20 flex flex-col gap-10 lg:flex-row items-center justify-center">
        <div>
          <Typography
            variant="paragraph"
            className="text-textColor max-w-md mb-5"
          >
            Your journey culminates in an exciting Demo Day and Career Fair.
            This event is your chance to present your projects to industry
            leaders, potential employers, and the Codetrain community.
            It&lsquo;s an opportunity to showcase your skills, gain valuable
            feedback, and explore job opportunities. Our Career Fair connects
            you with top companies looking for tech talent like you.
          </Typography>

          <div>
            <iframe
              // width="560"
              // height="315"
              className="w-full h-52 sm:h-72 md:max-w-[540px] md:h-[376px]"
              src="https://www.youtube.com/embed/uqozP61jgKQ?si=G4gwbtAlaS9H-Tsj"
              title="CODETRAIN TECH CAREER SEMINAR, 2023"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // referrerpolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div>
          <Image src="/people/group1.jpg" alt="" height={285} width={320} />
          <Image
            src="/people/group2.jpg"
            alt=""
            height={285}
            width={320}
            className="relative -top-14 -right-36 border-4 border-white"
          />
          <Image
            src="/people/group3.jpg"
            alt=""
            height={285}
            width={320}
            className="relative bottom-28 border-4 border-white"
          />
        </div>
      </section>

      {/* Our Partners and Supporters */}
      <section className="text-center py-12 px-10 shadow-md border-t border-t-black">
        <h1 className="text-xl md:text-2xl text-violet font-semibold">
          Our Partners and Supporters
        </h1>
        <div className="grid place-items-center grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-12">
          {sponsorImages.slice(0, 12).map((sponsor) => (
            <div key={sponsor.name}>
              <Image
                src={sponsor.src}
                alt={sponsor.name}
                width={174}
                height={100}
                quality={100}
                className={`${
                  sponsor.name === "Kaatch" ||
                  sponsor.name === "BlackInTech" ||
                  sponsor.name === "Infinitas"
                    ? "h-28 object-cover"
                    : ""
                }`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies Section*/}
      {/* <section className="py-10 md:py-20 px-2 sm:px-4">
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
      </section> */}

      {/* Ground Up Section */}
      <section className="bg-ash relative mt-20">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-8 px-4 py-14  sm:py-20 bg-contain bg-center bg-no-repeat relative">
          <div className="relative">
            <div className="max-w-[540px] bg-white relative z-10">
              <iframe
                // width="560"
                // height="315"
                className="w-full h-52 sm:h-72 md:max-w-[540px] md:h-[376px]"
                src="https://www.youtube.com/embed/biQP0dUS7zM?si=cae8Kv3qRXRw3tys"
                title="  In this video, Robert, Confidence, and other alumni share
                  their transformative Codetrain experiences."
                // frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                // referrerpolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <div className="text-textColor p-4">
                <p className="font-semibold text-xl">
                  In this video, Robert, Confidence, and other alumni share
                  their transformative Codetrain experiences.
                </p>
              </div>
            </div>
            <BgLogoRight className="fill-pink absolute size-40 sm:size-48 -top-20 sm:-top-24 left-0 z-30 sm:inline" />
          </div>

          <div className="relative z-30">
            <h1 className="font-bold text-violet text-2xl sm:text-4xl lg:text-5xl">
              From The Ground Up
            </h1>
            <p className="max-w-lg mt-4 text-textColor leading-8 text-lg">
              At Codetrain, we welcome students from all walks of life. You
              don’t need any prior experience in technology to begin your
              journey with us. Whether you’re completely new to coding or
              looking to switch careers, we believe that a willingness to learn
              is the most important requirement. Our dedicated team is here to
              support you every step of the way, providing hands-on training,
              mentorship, and real-world projects that will equip you with the
              skills you need to succeed. In this video, Robert, Confidence, and
              other alumni share their transformative Codetrain experiences.
            </p>
            <Link
              href="https://codetrainafrica.heiapply.com/application"
              target="_blank"
            >
              <Button className="bg-yellow text-violet  mt-8 shadow-none font-bold px-5 sm:px-8 md:px-10 rounded-md">
                Enroll now
              </Button>
            </Link>
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
          <p className="my-10 max-w-4xl mx-auto text-textColor">
            Investing in your future is an important decision. At Codetrain
            Africa, we offer flexible payment plans to make your learning
            journey as smooth as possible.
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col gap-10 justify-center z-10">
          <div className="flex flex-col gap-20 md:flex-row justify-center items-center">
            <div className="text-start bg-white shadow-xl max-w-sm relative grid place-content-center pb-8">
              <h3 className="text-violet font-bold text-2xl bg-yellow p-4">
                Software Engineer
              </h3>
              <p className="mt-4 text-textColor text-lg p-4">
                Our two-year education-to-employment package is priced at{" "}
                <span className="font-[900]"> GHC 38,500</span> for Africans
                living in Africa and <span className="font-[900]">$3,000</span>{" "}
                for other applicants. <br /> We offer flexible payment options
                and partial scholarships to promote diversity and inclusion.
              </p>
            </div>
            <div className="text-start bg-white shadow-xl max-w-sm relative grid place-content-center pb-8">
              <h3 className="text-violet font-bold text-2xl bg-yellow p-4">
                UX/UI Design
              </h3>
              <p className="mt-4 text-textColor text-lg p-4">
                The cost for our one-year education-to-employment package is{" "}
                <span className="font-[900]">GHC 19,000</span> for Africans
                living in Africa and <span className="font-[900]">$1,900</span>{" "}
                for other applicants. <br /> We offer flexible payment options
                and partial scholarships to support diversity and inclusion.
              </p>
            </div>
          </div>
          <div className="flex gap-x-4 z-10">
            <Link href="/payment-plan">
              <Button
                className="bg-violet shadow-lg text-white font-bold px-2 sm:px-8 md:px-10 rounded-md"
                variant="filled"
              >
                Ask for Payment Plan
              </Button>
            </Link>
            <Link href="/scholarship">
              <Button
                className="text-white bg-transparent shadow-none font-bold px-2 rounded-md bg-violet sm:px-8 md:px-10"
                variant="outlined"
              >
                Get A Part-Scholarship
              </Button>
            </Link>
          </div>
        </div>

        {/* Bg icons */}
        <BgLogoLeft className="absolute fill-yellow opacity-[0.3] size-96 sm:size-[540px] md:size-[669px] -top-16 md:-top-10 p-0 right-0" />
        <BgLogoRight className="absolute fill-yellow size-96 sm:size-[540px] md:size-[669px] -bottom-16 md:-bottom-32 p-0 left-0" />
      </section>

      {/* Exciting Stories Section */}
      {/* <section className="min-h-[calc(100vh-60px)] bg-ash text-center flex flex-col justify-center py-14 sm:py-24 px-4 relative">
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

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 place-items-center place-content-center gap-10 mt-10 sm:mt-20 text-left">
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
      </section> */}

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
            <Typography variant="h4">admissions@codetrainafrica.com</Typography>
          </div>
          <div className="h-[422px]">
            <Image
              src="/people/campus2.jpg"
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
              src="/people/gate.jpg"
              width={720}
              height={384}
              alt=""
              className="object-cover !h-[422px] w-full"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Excited to start your career Section */}
      <ExcitedCareer />

      {/* Codetrain in media section */}
      <section className="text-center py-12 px-10">
        <h1 className="text-xl text-violet font-semibold">
          Codetrain Africa in Media
        </h1>
        <div className="grid place-items-center place-content-center grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 mt-12">
          {inMedia.map((media) =>
            media.link ? (
              <Link href={media.link} key={media.name} target="_blank">
                <Image
                  src={media.src}
                  alt={media.name}
                  width={100}
                  height={60}
                />
              </Link>
            ) : (
              <Image
                key={media.name}
                src={media.src}
                alt={media.name}
                width={100}
                height={60}
              />
            )
          )}
        </div>
      </section>
      <hr className="my-8 border-textColor max-w-7xl mx-auto" />
    </main>
  );
}

const ExperienceCard = ({ className, img, title, text, video }) => {
  return (
    <div
      className={`flex flex-col items-center gap-x-9 relative z-10 ${className}`}
    >
      <div className="max-w-md">
        {img ? (
          <Image
            src={img}
            alt={title}
            width={400}
            height={300}
            className="rounded-none shadow"
          />
        ) : (
          <iframe
            width="400"
            height="300"
            src={video && video}
            title="YouTube video player"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <div className="mt-10 lg:mt-0 max-w-md">
        <h3 className="text-violet font-bold text-2xl max-w-sm">{title}</h3>
        <Typography
          variant="paragraph"
          className="max-w-md text-textColor mt-6 font-medium"
        >
          {text}
        </Typography>
      </div>
    </div>
  );
};
