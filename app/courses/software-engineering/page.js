"use client";

import { createContext, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";

import SuccessStory from "@/components/SuccessStory";
import BgLogoLeft from "@/public/icons/BgLogoLeft";
import BgLogoRight from "@/public/icons/BgLogoRight";
import CTLogo from "@/public/icons/CTLogo";
import Link from "next/link";
import {
  whyCodetrain,
  applicationProcess,
  accept,
} from "@/constants/constants";
import ExcitedCareer from "@/components/ExcitedCareer";
import FAQ from "@/components/FAQ";

const Software = () => {
  const Context = createContext();
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <section className="text-textColor overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-64px)] bg-ash grid grid-cols-2 place-items-center">
        <div className="p-8 text-textColor leading-8 col-span-2 lg:col-span-1">
          <h2 className="text-4xl text-violet font-bold max-w-lg ">
            Grow your Software Engineering Skills with Us
          </h2>
          <p className="my-8">
            Our Software Engineering course is your gateway to excelling in the
            fast-paced tech world. Whether you&#39;re a beginner or looking to
            advance your skills, our program is tailored to make you a top-notch
            software engineer.
          </p>
          <div className="flex gap-x-4 mt-14 z-10">
            <Link
              href="https://codetrainafrica.heiapply.com/application"
              target="_blank"
            >
              <Button className="bg-yellow text-violet shadow-none font-bold px-5 sm:px-8 md:px-10 rounded-md">
                Enroll now
              </Button>
            </Link>
            <Link
              href="https://calendly.com/fosterfrimpong63/one-one-with-codetrain-admissions"
              target="_blank"
            >
              <Button
                className="text-violet bg-transparent shadow-none font-bold px-5 rounded-md border-violet sm:px-8 md:px-10"
                variant="outlined"
              >
                Let&#39;s Talk
              </Button>
            </Link>
          </div>
          <p className="mt-12">
            * Admission is in progress, join the October Cohort!
          </p>
        </div>
        <div className="hidden lg:inline">
          <Image
            src="/people/software.jpg"
            width={720}
            height={384}
            alt=""
            className="object-cover !h-[calc(100vh-64px)]"
          />
        </div>
        <Image
          src="/people/software.jpg"
          alt=""
          width={720}
          height={384}
          className="h-full w-full object-cover absolute opacity-20 right-0  lg:hidden"
        />
      </section>

      {/* Comprehensive Software Development Curriculum */}
      <section className="py-20 px-8">
        <div className="text-center relative z-10">
          <h3 className="text-3xl md:text-5xl text-violet font-bold">
            What You Will Learn
          </h3>
          <p className="text-textColor max-w-5xl mx-auto mt-10">
            Master the full scope of software development with our hands-on
            curriculum in just 2 years.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center gap-8 py-10 bg-contain bg-center bg-no-repeat relative">
          <div className="max-w-[540px] bg-white relative z-10 sh">
            <Image
              src="/people/success.jpg"
              alt="picture"
              className="rounded-none h-full object-cover"
              width={540}
              height={440}
              quality={100}
            />
          </div>
          <div className="relative z-10 text-textColor">
            <ul className="list-decimal space-y-2 max-w-lg">
              <li>
                <Typography variant="h6" className="text-lg">
                  Front-End Development
                </Typography>
                <ul className="list-disc ml-3 space-y-1">
                  <li>
                    <Typography variant="paragraph">
                      <span className="font-extrabold">HTML & CSS:</span> Master
                      web development basics.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="paragraph">
                      <span className="font-extrabold">JavaScript:</span> Create
                      interactive web applications.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="paragraph">
                      <span className="font-extrabold">React:</span> Build
                      modern, responsive user interfaces.
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography variant="h6" className="text-lg">
                  Back-End Development
                </Typography>
                <ul className="list-disc ml-3 space-y-1">
                  <li>
                    <Typography variant="paragraph">
                      <span className="font-extrabold">
                        Node.js & Express:{" "}
                      </span>{" "}
                      Develop robust and scalable server-side applications.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="paragraph">
                      <span className="font-extrabold">SQL & Databases: </span>
                      Master data management using relational databases.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="paragraph">
                      <span className="font-extrabold">APIs:</span> Design and
                      implement RESTful APIs to connect front-end and back-end
                      systems.
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography variant="h6" className="text-lg">
                  Full-Stack Development
                </Typography>
                <ul className="list-disc ml-3 space-y-1">
                  <li>
                    <Typography variant="paragraph">
                      <span className="font-extrabold">Integration:</span>{" "}
                      Combine front-end and back-end skills to create full web
                      applications.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="paragraph">
                      <span className="font-extrabold"> Deployment: </span>
                      Deploy applications to the cloud and optimize performance.
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography variant="h6" className="text-lg">
                  Software Engineering Fundamentals
                </Typography>
                <ul className="list-disc ml-3 space-y-1">
                  <li>
                    <Typography variant="paragraph">
                      <span className="font-extrabold">
                        Data Structures & Algorithms:
                      </span>{" "}
                      Grasp core concepts that will help you solve complex
                      coding challenges.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="paragraph">
                      <span className="font-extrabold">
                        Version Control with Git:
                      </span>
                      Collaborate with others and manage your code effectively.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="paragraph">
                      <span className="font-extrabold">Testing:</span>
                      Write and run tests to ensure your code is reliable and
                      bug-free.
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography variant="h6" className="text-lg">
                  Career Readiness
                </Typography>
                <ul className="list-disc ml-3 space-y-1">
                  <li>
                    <Typography variant="paragraph">
                      <span className="font-extrabold">
                        Technical Interview Preparation:
                      </span>{" "}
                      Sharpen your problem-solving skills to ace coding
                      interviews.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="paragraph">
                      <span className="font-extrabold">
                        Portfolio Development:
                      </span>
                      Build a strong portfolio of projects that demonstrate your
                      abilities to potential employers.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="paragraph">
                      <span className="font-extrabold">Soft Skills:</span>
                      Gain essential workplace skills like communication,
                      teamwork, and time management.
                    </Typography>
                  </li>
                </ul>
              </li>
            </ul>
            <Link href="https://codetrainafrica.heiapply.com/application">
              <Button className="mt-8 bg-yellow text-violet">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Codetrain Fellows section */}
      <section className="py-20 px-4 bg-ash text-center">
        <Typography variant="h3" className="text-violet">
          Meet The Codetrain Teaching Fellows
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-10 mt-20 text-left">
          <Card className=" max-w-md rounded-none md:justify-self-end">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <Image
                src="/people/ali.jpg"
                alt="img"
                width={540}
                height={276}
                className="overflow-hidden h-[351px] object-cover object-top w-full"
              />
            </CardHeader>
            <CardBody>
              <Typography className="text-textColor">
                “Hey there! I’m Ali, a Full Stack Developer and Teaching Fellow
                with a flair for turning code into magic. With 2 years of
                hands-on experience in React, ExpressJs, and MongoDB, I enjoy
                crafting dynamic applications and solving complex problems. My
                mission is to make learning fun and interactive, encouraging
                students to immerse themselves deep into projects and think
                critically. When I’m not coding, you’ll find me gaming, which
                not only keeps me entertained but also sharpens my tech skills
                and fuels my love for innovation. Let’s build something amazing
                together!”
              </Typography>
            </CardBody>
            <hr className="border-violet h-1" />
            <CardFooter>
              <Typography className="font-bold text-textColor">
                Abdul Basit Ali
              </Typography>
              <Typography className="font-normal text-textColor">
                Teaching Fellow
              </Typography>
            </CardFooter>
          </Card>
          <Card className="max-w-md rounded-none md:justify-self-start">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <Image
                src="/people/joshua.jpg"
                alt="img"
                width={540}
                height={276}
                className="overflow-hidden h-[351px] object-cover object-top w-full"
              />
            </CardHeader>
            <CardBody>
              <Typography className="text-textColor">
                With 2 years of experience under my belt and a certificate in
                software development, I’m all about creating a classroom vibe
                that’s interactive and student-centered. My mission? To spark
                curiosity and bring real-world scenarios into the mix, making
                learning not just meaningful but a whole lot of fun.
                Additionally, I’m the brain behind the Ezy Money app, so I bring
                plenty of practical experience to the table. When I’m not
                teaching, you’ll probably find me behind a camera lens or deep
                into code—my two other great loves!
              </Typography>
            </CardBody>
            <hr className="border-violet h-1" />
            <CardFooter>
              <Typography className="font-bold text-textColor">
                Joshua Doe
              </Typography>
              <Typography className="font-normal text-textColor">
                Teaching Fellow
              </Typography>
            </CardFooter>
          </Card>
          <Card className="max-w-md rounded-none md:justify-self-end">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <Image
                src="/people/william.jpg"
                alt="img"
                width={540}
                height={276}
                className="overflow-hidden h-[351px] object-cover object-top w-full"
              />
            </CardHeader>
            <CardBody>
              <Typography className="text-textColor">
                I’ve spent the last two years diving deep into software
                development and instruction, gaining practical expertise that I
                love to share.  I’m certified by Codetrain Africa, and my
                journey from a non-tech background to thriving in the tech world
                has been nothing short of exhilarating. My teaching philosophy?
                It’s all about hands-on learning and creative problem-solving—I
                love helping students to tackle real-world challenges head-on.
                When I’m not coding or teaching, you can find me buried in a
                good book or hitting the field for some sports action!
              </Typography>
            </CardBody>
            <hr className="border-violet h-1" />
            <CardFooter>
              <Typography className="font-bold text-textColor">
                William Brandt
              </Typography>
              <Typography className="font-normal text-textColor">
                Teaching Fellow
              </Typography>
            </CardFooter>
          </Card>
          <Card className="max-w-md rounded-none md:justify-self-start">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <Image
                src="/people/harrison.jpg"
                alt="img"
                width={540}
                height={276}
                className="overflow-hidden h-[351px] object-cover object-top w-full"
              />
            </CardHeader>
            <CardBody>
              <Typography className="text-textColor">
                “Hi, I`m Harrison, a Teaching Fellow at Codetrain with a focus
                on Software Development. With 2 years of experience to my name
                and a Codetrain certificate to back it up, I`ve created some
                pretty cool websites and am currently executing an exciting new
                project that’ll blow your minds. My teaching philosophy? Simple:
                Don`t stop till they get it. I’m all about making sure every
                student has that lightbulb moment. When I`m not coding or
                teaching, you’ll probably find me seriously playing video
                games.”
              </Typography>
            </CardBody>
            <hr className="border-violet h-1" />
            <CardFooter>
              <Typography className="font-bold text-textColor">
                Harrison Boateng
              </Typography>
              <Typography className="font-normal text-textColor">
                Teaching Fellow
              </Typography>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* What You Need To Get Accepted */}
      <section className="py-20 px-4 flex flex-col gap-20 md:flex-row justify-center">
        <div className="inline-flex flex-col justify-center gap-5">
          <Typography variant="h2" className="max-w-80 text-pink">
            What You Need To Get Accepted
          </Typography>
          <Typography variant="paragraph" className="text-textColor max-w-xs">
            Here&apos;s all you need to succeed and enjoy the full Codetrain
            experience 
          </Typography>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-4 lg:w-2/5 text-textColor">
          {accept.map(({ title, items }) => (
            <ul key={title} className="w-full">
              <li className="mb-3">
                <Typography variant="h4" className="font-bold text-violet">
                  {title}
                </Typography>
              </li>
              <ul className="list-disc">
                {items.map((item) => (
                  <li key={item.name} className="ml-3 sm:ml-6">
                    <Typography
                      variant="paragraph"
                      className="py-1.5 transition-colors"
                    >
                      {item.text}
                    </Typography>
                  </li>
                ))}
              </ul>
            </ul>
          ))}
        </div>
      </section>

      {/* How it works section */}
      <section className="py-20 px-4 bg-ash text-center relative">
        <div className="relative z-10">
          <h3 className="text-3xl md:text-4xl text-violet font-bold">
            How It Works
          </h3>
          <p className="text-textColor max-w-4xl mx-auto mt-5">
            Our flexible class schedules adapt to your lifestyle, ensuring you
            can balance learning with your personal commitments. Here are the
            available options:
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 z-10 relative">
          <div className="max-w-xs mx-auto">
            <Image
              src="/people/class.jpg"
              width={180}
              height={180}
              alt=""
              className="object-cover mx-auto mb-5"
            />
            <Typography variant="h4" className="text-violet">
              Weekday In-Person Class
            </Typography>
            <Typography variant="paragraph" className="mt-6">
              Attend live, in-person sessions during the week for hands-on
              learning and immediate feedback. Choose a schedule that fits your
              weekday availability.
            </Typography>
          </div>
          <div className="max-w-xs mx-auto">
            <Image
              src="/people/class3.jpg"
              width={180}
              height={180}
              alt=""
              className="object-cover mx-auto mb-5"
            />
            <Typography variant="h4" className="text-violet">
              Weekend Class
            </Typography>
            <Typography variant="paragraph" className="mt-6">
              Join live, in-person sessions on weekends for flexible learning
              that fits around your weekly commitments. Ideal for balancing
              study with your personal schedule.
            </Typography>
          </div>
          <div className="max-w-xs mx-auto">
            <Image
              src="https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1200"
              width={180}
              height={180}
              alt=""
              className="object-cover mx-auto mb-5"
            />
            <Typography variant="h4" className="text-violet">
              Virtual Class
            </Typography>
            <Typography variant="paragraph" className="mt-6">
              Participate in live sessions online, allowing you to learn from
              anywhere. Enjoy the flexibility to join classes and access
              materials at your convenience.
            </Typography>
          </div>
        </div>
        {/* Bg Logos */}
        <BgLogoLeft className="absolute fill-pink opacity-[0.1] top-0 right-0 size-96 lg:size-[532px]" />
        <BgLogoRight className="absolute fill-pink size-28 z-20 bottom-80 lg:top-56 sm:left-40 md:left-10 lg:left-10 xl:left-16" />
      </section>

      {/* Steps In The Application Process */}
      <section className="py-20 px-4 relative">
        <div className="relative z-10 text-center">
          <h3 className="text-3xl md:text-5xl text-violet font-bold">
            Steps In The Application Process
          </h3>
          <p className="text-textColor max-w-4xl mx-auto mt-10">
            Our application process is streamlined to ensure a smooth experience
            with clear instructions at every stage.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-24 gap-y-10 md:gap-y-28 place-items-center mt-10 justify-items-center relative z-10">
          {applicationProcess.map((process) => (
            <div
              className="max-w-md flex gap-4 md:odd:place-self-end md:even:place-self-start"
              key={process.id}
            >
              <div>
                <Typography variant="h4" className="text-pink text-8xl">
                  {process.id}
                </Typography>
              </div>
              <div>
                <Typography variant="h4" className="text-violet md:text-nowrap">
                  {process.title}
                </Typography>
                <Typography variant="paragraph" className="mt-1">
                  {process.desc}
                </Typography>
              </div>
            </div>
          ))}
        </div>
        {/* Bg Logo */}
        <CTLogo
          className="absolute top-0 size-[1080px] md:size-full object-cover opacity-[0.5]"
          color="#ebebeb"
        />
      </section>

      {/* Why codetrain africa */}
      {/* <section className="bg-gradient-to-l from-[#1B1049] to-[#4126AF] text-white text-center min-h-[80vh] py-20 relative">
        <h2 className="text-3xl font-bold">Why Codetrain Africa</h2>
        <Typography
          variant="paragraph"
          className="max-w-5xl mx-auto mt-10 text-base"
        >
          Every aspect of the Codetrain experience is designed to ensure your
          success. The training you receive is built on pillars that guarantee
          your professional growth.
        </Typography>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-20 justify-items-center">
          {whyCodetrain.map((el) => (
            <div
              className="max-w-80 md:odd:place-self-end md:even:place-self-start"
              key={el.title}
            >
              <Typography variant="h4" className="text-violet text-nowrap">
                {el.title}
              </Typography>
              <Typography variant="paragraph" className="mt-4 text-base">
                {el.desc}
              </Typography>
            </div>
          ))}
        </div>

        <CTLogo
          className="absolute top-0 sm:top-20 size-[1080px] -left-[48rem] sm:-left-[20rem] md:size-[80%] object-cover opacity-[0.1]"
          color="#fcfffd"
        />
      </section> */}

      {/* Job Opportunitys Section*/}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="text-center relative z-10 max-w-4xl mx-auto">
          <h3 className="text-3xl mx-auto md:text-5xl text-violet font-bold">
            Careers as a Software Engineer
          </h3>
          <p className="text-textColor mx-auto mt-10">
            From startups to tech giants, a wide range of career paths awaits
            you as a software engineer
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 py-10 bg-contain bg-center bg-no-repeat relative">
          <div className="max-w-[540px] bg-white relative z-10 shadow-md">
            <Image
              src="/people/Gerald.jpg"
              alt="picture"
              className="!h-full md:h-[540px] w-[540px] rounded-none"
              width={540}
              height={540}
            />
          </div>
          <div className="relative z-10 text-textColor">
            <div className="text-base">
              <div>
                <Typography variant="h5" className="font-bold mt-6 text-violet">
                  Coding Opportunities in Software Engineering
                </Typography>
                <ul className="list-disc leading-10 ml-8">
                  <li>Mobile App Developer</li>
                  <li>Frontend Developer</li>
                  <li>Backend Developer</li>
                  <li>Fullstack Developer</li>
                  <li>DevOps Engineer</li>
                  <li>Data Scientist</li>
                  <li>Automated Testing Engineer</li>
                </ul>
              </div>
              <div className="mt-10">
                <Typography variant="h5" className="font-bold mt-6 text-violet">
                  Non-Coding Opportunities in Software Engineering
                </Typography>
                <ul className="list-disc leading-10 text-lg ml-8">
                  <li>Product Manager</li>
                  <li>Bussiness Analyst</li>
                  <li>Sales Engineer</li>
                  <li>Developer Advocate</li>
                  <li>Technical Recruiter</li>
                  <li>Manual Tester - QA</li>
                  <li>UI/UX Designer</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-x-4 mt-7">
              <Link
                href="https://codetrainafrica.heiapply.com/application"
                target="_blank"
              >
                <Button
                  className="bg-violet shadow-none font-bold px-5 sm:px-8 md:px-10 rounded-md"
                  variant="filled"
                >
                  Enroll now
                </Button>
              </Link>
              <Link
                href="https://calendly.com/fosterfrimpong63/one-one-with-codetrain-admissions"
                target="_blank"
              >
                <Button
                  className="text-violet bg-transparent shadow-none font-bold px-5 rounded-md border-violet sm:px-8 md:px-10"
                  variant="outlined"
                >
                  Let’s Talk
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/* Bg logo */}
        <CTLogo
          className="absolute opacity-20 h-full md:max-w-7xl top-0 md:-right-[650px]"
          color="#c2c0c0"
        />
        <BgLogoLeft className="absolute hidden md:inline size-80 top-96 right-0" />
      </section>

      {/* What You’ll Learn At Codetrain Africa */}
      <section className="min-h-[calc(100vh-60px)] bg-ash text-center flex flex-col justify-center py-24 px-4 relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="font-bold text-indigo text-3xl lg:text-5xl">
            What You’ll Learn At Codetrain Africa
          </h1>
          <p className="my-10 max-w-3xl mx-auto">
            Prepare to gain hands-on experience in software development, from
            coding fundamentals to advanced techniques, preparing you for
            real-world tech challenges.
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col gap-10 justify-center relative z-10">
          <div className="flex flex-col gap-20 md:flex-row justify-center items-center">
            <div className="text-start bg-white shadow-xl max-w-sm relative grid place-content-center pb-8">
              <h3 className="text-white font-bold text-2xl bg-indigo p-4">
                Year 1
              </h3>
              <p className="mt-4 text-textColor text-lg p-4 pb-10">
                Learn to code from scratch and start building your portfolio,
                laying a strong foundation for your software engineering career.
              </p>
            </div>
            <div className="text-start bg-white shadow-xl max-w-sm relative grid place-content-center pb-8">
              <h3 className="text-white font-bold text-2xl bg-indigo p-4">
                Year 2
              </h3>
              <p className="mt-4 text-textColor text-lg p-4">
                The second year focuses on career services. Gain more hands-on
                experience with internships, mock interviews, and a major Demo
                Day to prepare for graduation and secure your first full-time
                role.
              </p>
            </div>
          </div>
        </div>

        {/* Bg icons */}
        <BgLogoLeft className="absolute size-[570px] fill-indigo opacity-[0.2] -top-24 sm:top-0 right-0 md:right-32" />
        <BgLogoLeft className="absolute size-80 fill-indigo -bottom-24 sm:bottom-0 left-0 md:left-32" />
      </section>

      {/* Success Stories */}
      <SuccessStory />

      {/* Program Summary Section*/}
      <section className="py-20 px-4 bg-ash">
        <div className="text-center relative z-10 max-w-4xl mx-auto">
          <h3 className="text-3xl mx-auto md:text-5xl text-violet font-bold">
            Zak&#39;s story
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 py-10 bg-contain bg-center bg-no-repeat relative">
          <div className="max-w-[540px] relative z-10">
            <Image
              src="/people/zak2.jpg"
              alt="picture"
              className="w-[540px] h-[540px] object-cover rounded-none"
              width={540}
              height={540}
            />
          </div>
          <div className="relative z-10 text-textColor">
            <div className="max-w-md">
              <Typography variant="paragraph" className="font-medium">
                Optimism, and Grit. While pursuing his Computer Engineering
                degree, he joined Codetrain as part of the first cohort, where
                he quickly gained valuable experience working on both local and
                international projects. His passion for tech and helping others
                led him to become a teaching fellow, where he mentored and
                trained fellow Codetrain students. Today, Zak works with a
                Berlin-based company, yet still offers mentorship to aspiring
                developers, continuing to inspire others with his dedication and
                leadership.
              </Typography>
            </div>

            <div className="flex gap-x-4 mt-7">
              <Link
                href="https://codetrainafrica.heiapply.com/application"
                target="_blank"
              >
                <Button
                  className="bg-violet shadow-none font-bold px-5 sm:px-8 md:px-10 rounded-md"
                  variant="filled"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 px-4 flex flex-col justify-center">
        <Typography variant="h4" className="text-violet text-center mb-5">
          Codetrain Student builds a Payments App - Watch Demo
        </Typography>
        <iframe
          // width="560"
          // height="315"
          className="mx-auto w-full h-[215px] md:w-[560px] md:h-[315px]"
          src="https://www.youtube.com/embed/ExT_IilhWaw?si=d9GbEhm4wESquUFf"
          title="ROBERT KEHINDE Demo Day presentation at the Codetrain Africa Tech Career Seminar 2023"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          // referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <Link
          href="https://codetrainafrica.heiapply.com/application"
          target="_blank"
          className="mx-auto mt-8"
        >
          <Button className="bg-yellow text-violet shadow-none font-bold px-5 sm:px-8 md:px-10 rounded-md">
            Enroll now
          </Button>
        </Link>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Excited to start your career Section */}
      <ExcitedCareer />
    </section>
  );
};
export default Software;
