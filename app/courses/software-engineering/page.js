"use client";

import { createContext, useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/solid";
import SuccessStory from "@/components/SuccessStory";
import BgLogoLeft from "@/public/icons/BgLogoLeft";
import BgLogoRight from "@/public/icons/BgLogoRight";
import CTLogo from "@/public/icons/CTLogo";

const Software = () => {
  const Context = createContext();
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const accept = [
    {
      title: "What you’ll need:",
      items: [
        {
          text: "Be computer literate,",
        },
        {
          text: "Be teachable,",
        },
        {
          text: "Be willing to put in the work",
        },
        {
          text: "Pass our intake assessment",
        },
      ],
    },
    {
      title: "What you don’t need:",
      items: [
        {
          text: "Computer science degree",
        },
        {
          text: "Experience in tech",
        },
        {
          text: "A degree",
        },
      ],
    },
  ];

  const applicationProcess = [
    {
      id: 1,
      title: "Fill The Form to Enroll",
      desc: "2-Year Program: Transforming Novices into Mid-Level Developers. Year 1: Intensive Software Development Training.",
    },
    {
      id: 2,
      title: "Complete Application Process",
      desc: "2-Year Program: Transforming Novices into Mid-Level Developers. Year 1: Intensive Software Development Training.",
    },
    {
      id: 3,
      title: "Pass Assessment Test",
      desc: "2-Year Program: Transforming Novices into Mid-Level Developers. Year 1: Intensive Software Development Training.",
    },
    {
      id: 4,
      title: "Start Your Codetrain Journey",
      desc: "2-Year Program: Transforming Novices into Mid-Level Developers. Year 1: Intensive Software Development Training.",
    },
  ];

  const whyCodetrain = [
    {
      title: "Career services",
      desc: "As part of your training, you are prepared for job opportunities. You get to experience mock interviews and practice technical tests that prepare you to ace the toughest recruitment processes. We do everything we can to ensure that you secure your first full-time role as soon as you’re ready.",
    },
    {
      title: "Community",
      desc: "Your teaching fellows are actively rooting for you. Whether you need answers, clarification or encouragement, you’ll find it with them. Our close-knit trainee communities ensure that throughout your years of training, you never feel helpless and alone. The peer-to-peer mentoring and support is unmatched.",
    },
    {
      title: "Hands-on learning",
      desc: "Project-based learning is our way. At code train, you learn by doing. From your first day to your last, you’re graded on actual work that is similar to what you’ll be doing on the job. If it has no application in the industry, we don’t bother with it.",
    },
    {
      title: "Flexible learning",
      desc: "Our program is designed for learners from anywhere in the world. In-person or virtual? It’s up to you to choose.",
    },
  ];

  const faq = [
    {
      question: "What is the purpose of the program?",
      answer:
        "The purpose of the program is to provide students with a comprehensive coding education, enabling them to gain the skills and knowledge necessary to succeed in the tech industry. The program aims to equip students with the necessary tools and knowledge to succeed in their chosen field, whether it's software development, data science, or cybersecurity.",
    },
    {
      question: "What is the duration of the program?",
      answer:
        "The duration of the program is 12 months, with a 6-month intensive coding bootcamp and 6 months of career guidance. The program is designed to provide students with a solid foundation in coding and career development skills, allowing them to take their coding skills to the next level.",
    },
    {
      question: "What is the cost of the program?",
      answer:
        "The cost of the program is $10,000 per student, including tuition, materials, and other expenses. The program is free for students who are eligible for financial assistance.",
    },
    {
      question: "What is the eligibility criteria for the program?",
      answer:
        "The eligibility criteria for the program is that the student must be a high school graduate or have completed a high school course. The program is open to students from all backgrounds and is designed to provide a comprehensive coding education.",
    },
  ];

  return (
    <section className="text-textColor overflow-hidden">
      <div className="py-2 bg-violet text-xs md:text-base text-center text-white flex items-center justify-center">
        <p>Get to know more about Codetrain. Join our info session.🗣️ </p>
      </div>

      {/* Hero Section */}
      <section className="min-h-[calc(100vh-64px-40px)] bg-ash grid grid-cols-2 place-items-center">
        <div className="p-8 text-textColor leading-8 col-span-2 lg:col-span-1">
          <h2 className="text-4xl text-violet font-bold max-w-lg ">
            Excel in Software Engineering with Our Premier Course
          </h2>
          <p className="my-8">
            Lorem ipsum{" "}
            <span className="font-bold">dolor sit amet consectetur.</span>{" "}
            Mauris pellentesque porta donec enim tellus nibh adipiscing arcu. Et
            mi pellentesque lorem tellus eget nulla. Vulputate iaculis magnis
            aenean integer. Ultrices id aliquet elementum id{" "}
            <span className="font-bold">elit quis lectus rutrum nec.</span>
          </p>
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
          <p className="mt-12">
            *Next class for software engineering starts in December
          </p>
        </div>
        <div className="hidden lg:inline">
          <Image
            src="https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=1200"
            width={720}
            height={384}
            alt=""
            className="object-cover !h-[calc(100vh-64px-40px)]"
          />
        </div>
        <Image
          src="https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt=""
          width={720}
          height={384}
          className="h-full w-full object-cover absolute opacity-20 right-0  lg:hidden"
        />
      </section>

      {/* Comprehensive Software Development Curriculum */}
      <section className="py-20 px-4">
        <div className="text-center relative z-10">
          <h3 className="text-3xl md:text-5xl text-violet font-bold">
            Comprehensive Software Development Curriculum
          </h3>
          <p className="text-textColor max-w-5xl mx-auto mt-10">
            Lorem ipsum dolor sit amet consectetur. Mauris pellentesque porta
            donec enim tellus nibh adipiscing arcu.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 py-10 bg-contain bg-center bg-no-repeat relative">
          {/* <CTLogo
            className="absolute max-w-xl lg:max-w-4xl object-cover text-[#e0e0e0]  lg:right-0"
            color="#c2c0c0"
          /> */}

          <div className="max-w-[540px] bg-white relative z-10 shadow-md">
            <Image
              src="https://images.pexels.com/photos/11558845/pexels-photo-11558845.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
              alt="picture"
              className="h-[350px] md:h-[540px] w-[540px] rounded-none"
              width={540}
              height={540}
            />
          </div>
          <div className="relative z-10 text-textColor">
            <p className="max-w-lg mt-4 leading-9 text-lg">
              Our software development curriculum is structured into six
              comprehensive modules designed to build your expertise
              step-by-step.
              <br className="mb-3" /> Begin with an introduction to programming
              using Python, JavaScript, or Java, then master web development
              fundamentals with HTML, CSS, and JavaScript. Advance to front-end
              development with frameworks like React, Vue, or Angular, and dive
              into back-end development using Node.js, Express, and databases.{" "}
              <br className="mb-3" /> Integrate your skills in full-stack
              development by building cohesive applications, and finish with
              DevOps and deployment, learning CI/CD principles and cloud
              services like AWS, GCP, or Azure. <br className="mb-3" /> Each
              module includes hands-on projects to ensure practical,
              industry-relevant experience.
            </p>
          </div>
        </div>
      </section>

      {/* Codetrain Fellows section */}
      <section className="py-20 px-4 bg-ash text-center">
        <Typography variant="h3" className="text-violet">
          Meet The Codetrain Teaching Fellows
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center place-content-center gap-10 mt-20 text-left">
          <Card className="max-h-[667px] rounded-none">
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
                className="overflow-hidden object-cover w-full"
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
          <Card className="max-h-[667px] rounded-none">
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
                className="overflow-hidden object-cover w-full"
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
          <Card className="max-h-[667px] rounded-none">
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
                className="overflow-hidden object-cover w-full"
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

      {/* What You Need To Get Accepted */}
      <section className="py-20 px-4 flex flex-col gap-20 md:flex-row justify-center">
        <div className="inline-flex flex-col justify-center gap-5">
          <Typography variant="h2" className="max-w-80 text-pink">
            What You Need To Get Accepted
          </Typography>
          <Typography variant="paragraph" className="text-textColor max-w-xs">
            Lorem ipsum{" "}
            <span className="font-bold">dolor sit amet consectetur.</span>{" "}
            Mauris pellentesque porta donec enim tellus nibh adipiscing arcu
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
          <h3 className="text-3xl md:text-5xl text-violet font-bold">
            How It Works
          </h3>
          <p className="text-textColor max-w-4xl mx-auto mt-10">
            Lorem ipsum dolor{" "}
            <span className="font-bold">sit amet consectetur.</span> Mauris
            pellentesque porta donec enim tellus nibh adipiscing arcu. Et mi
            pellentesque lorem tellus eget nulla. Vulputate iaculis magnis
            aenean integer. Ultrices id aliquet elementum id{" "}
            <span className="font-bold">elit quis lectus rutrum nec.</span>
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 z-10 relative">
          <div className="max-w-xs mx-auto">
            <Image
              src="https://images.pexels.com/photos/601170/pexels-photo-601170.jpeg?auto=compress&cs=tinysrgb&w=1200"
              width={180}
              height={180}
              alt=""
              className="object-cover mx-auto mb-5"
            />
            <Typography variant="h4" className="text-violet">
              Driving Innovation
            </Typography>
            <Typography variant="paragraph" className="mt-6">
              Inspiring creativity and innovation by encouraging students to
              think critically, solve complex problems, and push the boundaries
              of what`s possible in the digital world.
            </Typography>
          </div>
          <div className="max-w-xs mx-auto">
            <Image
              src="https://images.pexels.com/photos/601170/pexels-photo-601170.jpeg?auto=compress&cs=tinysrgb&w=1200"
              width={180}
              height={180}
              alt=""
              className="object-cover mx-auto mb-5"
            />
            <Typography variant="h4" className="text-violet">
              Driving Innovation
            </Typography>
            <Typography variant="paragraph" className="mt-6">
              Inspiring creativity and innovation by encouraging students to
              think critically, solve complex problems, and push the boundaries
              of what`s possible in the digital world.
            </Typography>
          </div>
          <div className="max-w-xs mx-auto">
            <Image
              src="https://images.pexels.com/photos/601170/pexels-photo-601170.jpeg?auto=compress&cs=tinysrgb&w=1200"
              width={180}
              height={180}
              alt=""
              className="object-cover mx-auto mb-5"
            />
            <Typography variant="h4" className="text-violet">
              Driving Innovation
            </Typography>
            <Typography variant="paragraph" className="mt-6">
              Inspiring creativity and innovation by encouraging students to
              think critically, solve complex problems, and push the boundaries
              of what`s possible in the digital world.
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
            Lorem ipsum dolor{" "}
            <span className="font-bold">sit amet consectetur.</span> Mauris
            pellentesque porta donec enim tellus nibh adipiscing arcu. Et mi
            pellentesque lorem tellus eget nulla. Vulputate iaculis magnis
            aenean integer. Ultrices id aliquet elementum id{" "}
            <span className="font-bold">elit quis lectus rutrum nec.</span>
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
      <section className="bg-gradient-to-l from-[#1B1049] to-[#4126AF] text-white text-center min-h-[80vh] py-20 relative">
        <h2 className="text-3xl font-bold">Why Codfetrain Africa</h2>
        <Typography
          variant="paragraph"
          className="max-w-5xl mx-auto mt-10 text-base"
        >
          Lorem ipsum{" "}
          <span className="font-bold">dolor sit amet consectetur.</span> Mauris
          pellentesque porta donec enim tellus nibh adipiscing arcu. Et mi
          pellentesque lorem tellus eget nulla. Vulputate iaculis magnis aenean
          integer. Ultrices id aliquet elementum id elit quis lectus rutrum
          nec..
        </Typography>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-20 justify-items-center">
          {whyCodetrain.map((el) => (
            <div
              className="max-w-80 md:odd:place-self-end md:even:place-self-start"
              key={el.title}
            >
              <Typography variant="h3" className="text-violet text-nowrap">
                {el.title}
              </Typography>
              <Typography variant="paragraph" className="mt-4 text-base">
                {el.desc}
              </Typography>
            </div>
          ))}
        </div>
        {/* Bg Logo */}
        <CTLogo
          className="absolute top-0 sm:top-20 size-[1080px] -left-[48rem] sm:-left-[20rem] md:size-[80%] object-cover opacity-[0.1]"
          color="#fcfffd"
        />
      </section>

      {/* Job Opportunitys Section*/}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="text-center relative z-10 max-w-4xl mx-auto">
          <h3 className="text-3xl mx-auto md:text-5xl text-violet font-bold">
            Explore Some Job Opportunities As A Software Engineer
          </h3>
          <p className="text-textColor mx-auto mt-10">
            Lorem ipsum dolor{" "}
            <span className="font-bold">sit amet consectetur.</span> Felis eu
            euismod placerat libero lacus eu morbi. Quam ullamcorper adipiscing
            eget porttitor vitae eget aliquam imperdiet. Sagittis nunc vulputate
            magna eu sed et. Aenean commodo amet amet lacinia amet porttitor
            diam.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 py-10 bg-contain bg-center bg-no-repeat relative">
          <div className="max-w-[540px] bg-white relative z-10 shadow-md">
            <Image
              src="https://images.pexels.com/photos/11558845/pexels-photo-11558845.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
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
                  In the completion of this course you’ll be able to become:
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
                  You could also venture into:
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
              <Button
                className="bg-violet shadow-none font-bold px-5 sm:px-8 md:px-10 rounded-md"
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
          </div>
        </div>
        {/* Bg logo */}
        <CTLogo
          className="absolute opacity-[0.5] h-full md:max-w-7xl top-0 md:-right-[650px]"
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
            Lorem ipsum dolor{" "}
            <span className="font-bold">sit amet consectetur.</span> Mauris
            pellentesque porta donec enim tellus nibh adipiscing arcu. Et mi
            pellentesque lorem tellus eget nulla.
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col gap-10 justify-center relative z-10">
          <div className="flex flex-col gap-20 md:flex-row justify-center items-center">
            <div className="text-start bg-white shadow-xl max-w-sm relative grid place-content-center pb-8">
              <h3 className="text-white font-bold text-2xl bg-indigo p-4">
                Year 1
              </h3>
              <p className="mt-4 text-textColor text-lg p-4">
                2-Year Program: Transforming Novices into Mid-Level Developers.
                Year 1: Intensive Software Development Training. Year 2: Career
                Services Including Interview Prep, Workshops, Challenges, and
                Internships.
              </p>
            </div>
            <div className="text-start bg-white shadow-xl max-w-sm relative grid place-content-center pb-8">
              <h3 className="text-white font-bold text-2xl bg-indigo p-4">
                Year 2
              </h3>
              <p className="mt-4 text-textColor text-lg p-4">
                2-Year Program: Transforming Novices into Mid-Level Developers.
                Year 1: Intensive Software Development Training. Year 2: Career
                Services Including Interview Prep, Workshops, Challenges, and
                Internships.
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
            Program Summary
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 py-10 bg-contain bg-center bg-no-repeat relative">
          <div className="max-w-[540px] bg-white relative z-10 shadow-md">
            <Image
              src="https://images.pexels.com/photos/11558845/pexels-photo-11558845.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
              alt="picture"
              className="!h-full md:h-[540px] w-[540px] rounded-none"
              width={540}
              height={540}
            />
          </div>
          <div className="relative z-10 text-textColor">
            <div className="text-base">
              <div className="max-w-md">
                <Typography className="font-bold  text-violet">
                  Course Lenght
                </Typography>
                <Typography>48 weeks + job search</Typography>
                <Typography className="font-bold text-violet">
                  Schedule:
                </Typography>
                <Typography variant="paragraph">
                  - Mon-Thurs, 6-9 p.m. EST (East Coast cohort) or Mon-Thurs,
                  7-10 p.m. PST(West Coast cohort) - Saturdays, 9 a.m. - 3:30
                  p.m. PST (all cohorts)
                </Typography>
              </div>
              <div className="max-w-md mt-3">
                <Typography className="font-bold mt-6 text-violet">
                  Tuition:
                </Typography>
                <Typography>
                  <span className="font-bold">UpFront Tuition:</span> Pay the
                  full tuition amount prior to starting the program. Total cost
                  under the Upfront Plan is $22,000.
                </Typography>
              </div>
              <div className="max-w-md mt-3">
                <Typography>
                  <span className="font-bold">Climb Credit:</span> Finance your
                  tuition as monthly installments. Total cost is our Upfront
                  Tuition price of $22,000, plus interest charged by Climb
                  Credit. As of March 2023, interest rates range from 8.6% to
                  20.09%. Get a personal quote, without impacting your credit
                  score. This plan is not available to residents of Maine or
                  Mississippi.
                </Typography>
              </div>
              <div className="max-w-md mt-3">
                <Typography>
                  <span className="font-bold">Deferred Tuition:</span> $0
                  deposit to start. Pay tuition only after you’ve gotten a job
                  and are earning $50,000 or more. Then, pay a flat monthly
                  tuition amount (determined by your annualized compensation)
                  until you reach a total of $36,000. Includes Placement
                  Protection.
                </Typography>
              </div>
            </div>

            <div className="flex gap-x-4 mt-7">
              <Button
                className="bg-violet shadow-none font-bold px-5 sm:px-8 md:px-10 rounded-md"
                variant="filled"
              >
                Get in touch with us
              </Button>
            </div>
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
    </section>
  );
};
export default Software;
