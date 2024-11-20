"use client";

import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Accordion,
  AccordionBody,
  AccordionHeader,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";

import BgLogoLeft from "@/public/icons/BgLogoLeft";
import BgLogoRight from "@/public/icons/BgLogoRight";
import CTLogo from "@/public/icons/CTLogo";
import Link from "next/link";
import {
  applicationProcessSolara,
  faqSolara,
  solaraFellows,
} from "@/constants/constants";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/solid";

const CodetrainSolara = () => {
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <section className="text-textColor">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-64px)] bg-ash bg-[url('/people/monjola.jpg')] bg-opacity-30 lg:bg-none bg-cover bg-center bg-no-repeat">
        <div className=" bg-ash bg-opacity-80 grid grid-cols-2 place-items-center min-h-[calc(100vh-64px)]">
          <div className="p-8 text-textColor leading-8 col-span-2 lg:col-span-1">
            <h2 className="text-4xl md:text-5xl text-violet font-bold max-w-md">
              Empowering Young Innovators
            </h2>
            <Typography variant="paragraph" className="my-8">
              An experience designed to transform 8 to 14 year old African kids
              into World class Innovators, Leaders and Entrepreneurs.
            </Typography>
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
            <Typography variant="paragraph" className="mt-12">
              * Admission is in progress
            </Typography>
          </div>
          <div className="hidden lg:inline">
            <Image
              src="/people/monjola.jpg"
              width={720}
              height={384}
              alt="kid"
              className="object-cover !h-[calc(100vh+64px)]"
            />
          </div>
        </div>
      </section>

      {/* What is Codetrain Solara */}
      <section className="py-10 px-4 md:px-12 md:max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-4xl text-violet font-bold">
          What is Codetrain Solara
        </h3>
        <Typography variant="paragraph" className="text-textColor mt-4">
          At Codetrain Africa, we believe that African children possess
          incredible potential to become global leaders, innovators, and
          dreamers. That&rsquo;s why we launched Solara—to provide them with the
          experiences and skills they need to thrive.
        </Typography>
        <Typography variant="paragraph" className="text-textColor mt-4">
          Over the past seven years, Codetrain Africa has successfully trained
          over 700 software developers, with an impressive 89% of our graduates
          securing jobs within just 6-9 months at companies in Ghana, Nigeria,
          Mali, Liberia, Gambia, the USA, the UK, Germany, and the Netherlands.
        </Typography>
        <Typography variant="paragraph" className="text-textColor mt-4">
          But we didn’t stop there. We recognized the immense talent in younger
          minds and began teaching kids how to code, build websites, create
          games, and develop web and mobile applications. The results have been
          phenomenal—our students have created remarkable solutions, including
          an app to combat COVID-19 and another to fight malaria in Ghana.
        </Typography>
        <Typography variant="paragraph" className="text-textColor mt-4">
          Solara aims to extend these opportunities to even more talented
          children, equipping them with the skills to become future tech
          innovators. By enrolling your child in our program, you’re not just
          investing in their education; you’re empowering them to make a real
          impact in the world. Join us in nurturing the next generation of tech
          leaders!
        </Typography>
      </section>

      {/* Jamain's success stories */}
      <section className="px-4 py-10 ">
        <div className="flex flex-col md:flex-row justify-center gap-10">
          <div>
            <Typography variant="h3" className="text-violet max-w-md">
              Jermaine’s Success Story as a 12 Year Old
            </Typography>
            <Typography
              variant="paragraph"
              className="text-textColor mt-4 max-w-md"
            >
              At just 8 years old, Jermaine`s parents recognized his passion for
              technology and enrolled him at Codetrain Solara. By age 11, he
              graduated, showcasing remarkable dedication and talent. During the
              pandemic, he developed a COVID-19 app that provided vital
              statistics about the virus. Through Codetrain Solara, Jermaine
              gained essential skills in web development, front-end design,
              databases, SQL, AI tools, React, JavaScript, and Node.js.
            </Typography>
          </div>
          <div className="w-full md:w-2/5">
            <iframe
              // width="560"
              // height="315"
              className="w-full h-52 sm:h-72 md:!max-w-[540px] md:h-[376px]"
              src="https://www.youtube.com/embed/OZ95UDVpc2s?si=4_9A7nQEiSq5ncMu"
              title="Jermaine's success story"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <Typography
          variant="paragraph"
          className="text-textColor mt-10 px-4 md:px-10 md:max-w-6xl mx-auto"
        >
          At just 12, Jermaine delivered an inspiring keynote speech at the
          Moonshot Pirates. Bootcamp at SOS Hermann Gmeiner College in Ghana and
          mentored young entrepreneurs from the same program in Austria. He is
          currently working on a project to empower small businesses in Africa
          through loyalty rewards and has developed an app to connect startups
          with angel investors. Jermaine`s journey illustrates the immense
          potential your child could unlock through programs like Codetrain
          Solara. By enrolling your child in a tech-focused education, you can
          set them on a path to success and equip them with the skills to make a
          meaningful impact. Give your child the opportunity to become a future
          innovator! give me a summarized title, for this statement.
        </Typography>
      </section>

      {/* Comprehensive Software Development Curriculum */}
      <section className="py-20 px-8">
        <div className="text-center relative z-10">
          <h3 className="text-3xl md:text-5xl text-violet font-bold">
            What You Will Learn
          </h3>
          <Typography
            variant="paragraph"
            className="text-textColor max-w-5xl mx-auto mt-10"
          >
            Codetrain solara, birthed from Codetrain africa, is an online school
            for kids who are dreamers, who are kind, daring and creative
          </Typography>
        </div>
        <div className="flex flex-col lg:flex-row justify-center gap-8 py-10 bg-contain bg-center bg-no-repeat relative">
          <div className="max-w-[540px] bg-white relative z-10 sh">
            <Image
              src="/people/jeremy.jpg"
              alt="picture"
              className="rounded-non h-full object-cover"
              width={540}
              height={440}
              quality={100}
            />
          </div>
          <div className="relative z-10 text-textColor">
            <ul className="list-decimal space-y-2 max-w-lg">
              <li>
                <Typography variant="h6" className="text-lg">
                  Coding, App Development and AI:
                </Typography>
                <ul className="ml-3 space-y-1">
                  <li>
                    <Typography variant="paragraph">
                      <span className="font-extrabold">
                        Learn the essentials
                      </span>{" "}
                      of programming and app development and explore AI concepts
                      to prepare for the future digital Economy
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography variant="h6" className="text-lg">
                  STEM (Science, Technology, Engineering and Math
                </Typography>
                <ul className="ml-3 space-y-1">
                  <li>
                    <Typography variant="paragraph">
                      <span className="font-extrabold">
                        Develop foundational skills
                      </span>{" "}
                      across these key areas, working Hands-on with projects
                      that span AI, coding
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography variant="h6" className="font-extrabold text-lg">
                  Entrepreneurship and Innovation:
                </Typography>
                <ul className="ml-3 space-y-1">
                  <li>
                    <Typography variant="paragraph">
                      <span className="font-extrabold">
                        Cultivate a problem solving mindset
                      </span>{" "}
                      and gain insights into creating impactful solutions for
                      real-world challenges
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography variant="h6" className="text-lg">
                  Collaborative and Critical thinking
                </Typography>
                <ul className="ml-3 space-y-1">
                  <li>
                    <Typography variant="paragraph">
                      <span className="font-extrabold">Engage in teamwork</span>{" "}
                      to solve complex challenges, developing leadership,
                      communication and interpersonal skills along the way.
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography variant="h6" className="text-lg">
                  Global Awareness:
                </Typography>
                <ul className="ml-3 space-y-1">
                  <li>
                    <Typography variant="paragraph">
                      <span className="font-extrabold">
                        {" "}
                        Gain an understanding of global issues
                      </span>{" "}
                      and explore how your skills and projects can make a
                      positive impact.
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography variant="h6" className="text-lg">
                  Portfolio building
                </Typography>
                <ul className="ml-3 space-y-1">
                  <li>
                    <Typography variant="paragraph">
                      <span className="font-extrabold">
                        {" "}
                        Create a digital portfolio
                      </span>{" "}
                      showcasing their projects and skills, setting the
                      foundation for future academic or career opportunities.
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography variant="h6" className="text-lg">
                  Mentorship-Driven Learning
                </Typography>
                <ul className="ml-3 space-y-1">
                  <li>
                    <Typography variant="paragraph">
                      <span className="font-extrabold"> Receive guidance</span>{" "}
                      from teaching fellows, gain feedback on their work, and
                      connect with global experts for specialized experts.
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

      {/* What You Need To Get Accepted */}
      <section className="py-20 px-4 pl-9 flex flex-col gap-20 lg:flex-row justify-center">
        <div className="inline-flex flex-col justify-center gap-5">
          <Typography variant="h2" className="max-w-80 text-pink">
            What You Need To Get Accepted
          </Typography>
          <Typography variant="paragraph" className="text-textColor max-w-xs">
            Hello, Thank you for your Interest in Codetrain Solara. We believe
            making opportunities accessible, so we welcome applications twice
            annually.
          </Typography>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly gap-4 lg:w-3/5 text-textColor">
          <Typography
            variant="paragraph"
            className="text-textColor max-w-xs flex items-end"
          >
            At Codetrain Solara, we Accept Inclusion, we encourage children from
            all backgrounds, and we’re happy to support them into the Program.
          </Typography>
          <ul className="w-full flex flex-col justify-end">
            <li className="mb-3">
              <Typography variant="h4" className="font-bold text-violet">
                Requirements
              </Typography>
            </li>
            <ul className="list-disc">
              <li>
                <Typography variant="paragraph" className="text-textColor">
                  Basic Computer Literacy
                </Typography>
              </li>
              <li>
                <Typography variant="paragraph" className="text-textColor">
                  Pass our intake puzzle
                </Typography>
              </li>
              <li>
                <Typography variant="paragraph" className="text-textColor">
                  Recommendation Letter from a parent/ Guardian.
                </Typography>
              </li>
              <li>
                <Typography variant="paragraph" className="text-textColor">
                  Submit a Video(Mp4), on a big dream you have.
                </Typography>
              </li>
            </ul>
          </ul>
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
            <Typography variant="h4" className="text-violet">
              Saturday Online Class
            </Typography>
            <Typography variant="paragraph" className="mt-6">
              Classes are held online once a week on Saturdays for 2-3 hours,
              focusing on discussions, collaborative work, and project
              presentations on specific themes or challenges. Using tools like
              Zoom, Google Classroom for delivering and accessing resources and
              managing projects.
            </Typography>
          </div>
          <div className="max-w-xs mx-auto">
            <Typography variant="h4" className="text-violet">
              Personal Teacher Guidance
            </Typography>
            <Typography variant="paragraph" className="mt-6">
              Teachers serve as guides, helping the students navigate
              challenges, and enable them collaborate with their peers and find
              innovative solutions.
            </Typography>
          </div>
          <div className="max-w-xs mx-auto">
            <Typography variant="h4" className="text-violet">
              Summer Boot camp/Conference
            </Typography>
            <Typography variant="paragraph" className="mt-6">
              Every summer, students participate in a boot camp and innovation
              challenge to further develop their skills through intensive,
              hands-on projects. The Solara Conference provides a platform for
              students to present their projects to a broader audience, network
              with peers, and learn from industry experts.
            </Typography>
          </div>
        </div>
        {/* Bg Logos */}
        <BgLogoLeft className="absolute fill-pink opacity-10 top-0 right-0 size-96 lg:size-[532px]" />
        <BgLogoRight className="absolute fill-pink size-28 opacity-15 bottom-80 lg:top-28 sm:left-40 md:left-10 lg:left-10 xl:left-16" />
      </section>

      {/* Codetrain Solara Fellows section */}
      <section className="py-20 px-4 bg-ash text-center">
        <Typography variant="h3" className="text-violet">
          Meet The Teaching Fellows
        </Typography>

        <div className="grid grid-cols-1 place-items-center gap-10 mt-20 text-left">
          {solaraFellows.map((fellow) => (
            <Card
              className="w-full max-w-[48rem] rounded-none flex-col md:flex-row"
              key={fellow.name}
            >
              <CardHeader
                shadow={false}
                floated={false}
                className="m-0 h-96 md:h-auto md:w-2/5 shrink-0 rounded-none md:rounded-r-none"
              >
                <Image
                  src={fellow.src}
                  alt="card-image"
                  className="h-full w-full object-top object-cover rounded-none"
                  height={100}
                  width={100}
                  quality={100}
                />
              </CardHeader>
              <CardBody className="flex flex-col justify-center items-start">
                <Typography className="mb-8 text-textColor">
                  {fellow.text}
                </Typography>
                <hr className="border-violet h-1" />
                <Typography variant="h5" className="text-textColor">
                  {fellow.name}
                </Typography>
                <Typography variant="paragraph" className="text-textColor">
                  Teaching Fellow
                </Typography>
              </CardBody>
            </Card>
          ))}
        </div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-20 gap-y-10 md:gap-y-20 place-items-center mt-10 justify-items-center relative z-10">
          {applicationProcessSolara.map((process) => (
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

      {/* Future At Solara Section*/}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="text-center relative z-10 max-w-4xl mx-auto">
          <h3 className="text-3xl mx-auto md:text-5xl text-violet font-bold">
            Future Career at Solara
          </h3>
          <p className="mx-auto text-textColor mt-4">
            At Codetrain Solara, children aged 7 to 14 will gain skills through
            project-based learning, preparing them for the following potential
            career paths:
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center gap-8 py-10 bg-contain bg-center bg-no-repeat relative">
          <div className="max-w-[540px] h-full bg-white relative z-10 shadow-md">
            <Image
              src="/people/solara.jpg"
              alt="picture"
              className="h-[540px] w-[540px] object-cover rounded-none"
              width={540}
              height={540}
              quality={100}
            />
          </div>
          <div className="relative z-10 text-textColor">
            <div className="text-base">
              <div>
                <ul className="list-disc leading-10 ml-8  max-w-4xl">
                  <li>
                    <span className="font-bold">Robotics Engineer</span> – With
                    foundational STEM knowledge and hands-on robotics projects.
                  </li>
                  <li>
                    <span className="font-bold">Software Developer</span> –
                    Through coding, app development, and AI-focused courses.
                  </li>
                  <li>
                    <span className="font-bold">Environmental Scientist</span> –
                    Working on tech-driven environmental solutions and
                    sustainability.
                  </li>
                  <li>
                    <span className="font-bold">Entrepreneur</span> – By
                    building business plans for startups aimed at societal
                    impact.
                  </li>
                  <li>
                    <span className="font-bold">Data Analyst </span>– With an
                    emphasis on analytical thinking and technology application.
                  </li>
                  <li>
                    <span className="font-bold">Healthcare Innovator</span> –
                    Creating healthcare solutions for underserved areas.
                  </li>
                  <li>
                    <span className="font-bold">Social Entrepreneur </span>–
                    Leveraging technology to address community issues.
                  </li>
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
          className="absolute opacity-20 h-full md:max-w-7xl top-0 md:-right-[450px]"
          color="#c2c0c0"
        />
        <BgLogoLeft className="absolute hidden opacity-5 md:inline size-80 top-96 right-0" />
      </section>

      {/* Programme Structure */}
      {/* <section className="min-h-[calc(100vh-60px)] bg-ash text-center flex flex-col justify-center py-24 px-4 relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="font-bold text-indigo text-3xl lg:text-5xl">
            Programme Structure
          </h1>
          <Typography variant="paragraph" className="my-10 max-w-3xl mx-auto">
            Solara immerses young learners in software development and soft
            skills, through real-world projects, building a strong portfolio and
            fostering essential skills. They will also benefit from mentorship
            and career guidance, setting them on a path to success in tech.
          </Typography>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col gap-10 justify-center relative z-10">
          <div className="flex flex-col gap-20 md:flex-row justify-center items-center">
            <div className="text-start bg-white shadow-xl max-w-sm relative grid place-content-center pb-8">
              <h3 className="text-white font-bold text-2xl bg-indigo p-4">
                Year 1
              </h3>
              <Typography
                variant="paragraph"
                className="mt-4 text-textColor text-lg p-4 pb-10"
              >
                Learn to code from scratch and start building your portfolio,
                laying a strong foundation for your software engineering career,
                summer bootcamp / Conference.
              </Typography>
            </div>
            <div className="text-start bg-white shadow-xl max-w-sm relative grid place-content-center pb-8">
              <h3 className="text-white font-bold text-2xl bg-indigo p-4">
                Year 2
              </h3>
              <Typography
                variant="paragraph"
                className="mt-4 text-textColor text-lg p-4 pb-10"
              >
                The second year focuses on career services. Gain more hands-on
                experience with internships, mock interviews, to prepare for
                graduation and secure your first full-time role.
              </Typography>
            </div>
          </div>
        </div>

        <BgLogoLeft className="absolute size-[570px] fill-indigo opacity-[0.2] -top-24 sm:top-0 right-0 md:right-32" />
        <BgLogoLeft className="absolute size-80 fill-indigo -bottom-24 sm:bottom-0 left-0 md:left-32" />
      </section> */}

      {/* Success Stories */}
      <section className="py-10 px-4 sm:py-20 sm:px-7 flex flex-col-reverse lg:gap-10 lg:flex-row justify-center gap-4 relative">
        <div className="md:max-h-[587px] hidden lg:inline">
          <Card className="max-w-lg rounded-none">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <Image
                src="/people/gerald.webp"
                alt="korkor"
                width={540}
                height={276}
                className="overflow-hidden object-cover h-96"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="paragraph" className=" text-textColor">
                Most 12 year old love to play computer games, but one day,
                Gerard, a high school student in Ghana decided to delete all the
                games on his computer to build his own games. After his parents
                enrolled him at Codetrain solara, a special school in Ghana that
                trains app developers, who are innovators, big dreamers and
                entrepreneurial minded children, he discovered that with coding
                skills, he could realise his dream of building his own mobile
                games.
              </Typography>
            </CardBody>
            <hr className="border-violet h-1" />
            <CardFooter>
              <Typography variant="h6" className="text-textColor">
                Gerald
              </Typography>
              <Typography
                variant="paragraph"
                className="font-normal text-textColor"
              >
                Software Engineer
              </Typography>
            </CardFooter>
          </Card>
        </div>
        <div className="">
          <div className=" mt-5">
            <h3 className="text-violet font-bold text-3xl md:text-5xl max-w-xl">
              Success Stories From Codetrain Solara
            </h3>
            <Typography
              variant="paragraph"
              className="text-textColor max-w-xl mt-4"
            >
              Our mission at Codetrain Solara is to empower Africa’s next
              generation of innovators, leaders, and entrepreneurs by providing
              an accessible, world-class education that blends technology,
              creativity, and social responsibility. Through hands-on,
              project-based learning, we aim to nurture curious minds, foster
              critical thinking, and inspire a global mindset among young
              learners, enabling them to address real-world challenges and drive
              meaningful change within their communities and beyond.
            </Typography>
          </div>
          <div className="flex flex-col items-center mt-2 gap-4">
            <Card className="w-96 md:w-[530px] max-h-[767px] rounded-none">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <Image
                  src="/people/jeremy.jpg"
                  alt="img"
                  width={540}
                  height={276}
                  className="overflow-hidden object-cover"
                />
              </CardHeader>
              <CardBody>
                <Typography
                  variant="paragraph"
                  className="text-textColor line-clamp-6"
                >
                  At just 8 years old, Jermaine`s parents recognized his passion
                  for technology and enrolled him at Codetrain Solara. By age
                  11, he graduated, showcasing remarkable dedication and talent.
                  During the pandemic, he developed a COVID-19 app that provided
                  vital statistics about the virus. Through Codetrain Solara,
                  Jermaine gained essential skills in web development, front-end
                  design, databases, SQL, AI tools, React, JavaScript, and
                  Node.js.
                </Typography>
              </CardBody>
              <hr className="border-violet h-1" />
              <CardFooter>
                <Typography variant="h6" className="font-bold text-textColor">
                  Jermaine
                </Typography>
                <Typography
                  variant="paragraph"
                  className="font-normal text-textColor"
                >
                  Software Engineer
                </Typography>
              </CardFooter>
            </Card>
            <Card className="w-96 md:w-[530px] max-h-[767px] rounded-none lg:hidden">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <Image
                  src="/people/gerald.webp"
                  alt="korkor"
                  width={540}
                  height={276}
                  className="overflow-hidden object-cover h-96"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="paragraph" className=" text-textColor">
                  Most 12 year old love to play computer games, but one day,
                  Gerard, a high school student in Ghana decided to delete all
                  the games on his computer to build his own games. After his
                  parents enrolled him at Codetrain solara, a special school in
                  Ghana that trains app developers, who are innovators, big
                  dreamers and entrepreneurial minded children, he discovered
                  that with coding skills, he could realise his dream of
                  building his own mobile games.
                </Typography>
              </CardBody>
              <hr className="border-violet h-1" />
              <CardFooter>
                <Typography variant="h6" className="text-textColor">
                  Gerald
                </Typography>
                <Typography
                  variant="paragraph"
                  className="font-normal text-textColor"
                >
                  Software Engineer
                </Typography>
              </CardFooter>
            </Card>
          </div>
          <Link href="/success-stories">
            <Button className="rounded-none text-white bg-violet mt-10">
              Discover More Success Stories
            </Button>
          </Link>
        </div>
        {/* svg bg logos */}
        <BgLogoRight className="fill-cyan-50 absolute top-10 lg:top-0 lg:right-0 -z-50 h-80 md:h-1/2 sm:inline" />
        <BgLogoLeft className="fill-cyan-300 absolute bottom-10 lg:bottom-0 lg:left-0 -z-50 h-80 lg:h-1/2 sm:inline" />
      </section>

      {/* Program Summary Section*/}
      <section className="py-20 px-4">
        <div className="text-center relative z-10 max-w-4xl mx-auto">
          <h3 className="text-3xl mx-auto md:text-5xl text-violet font-bold">
            Program Summary
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row justify-center gap-8 py-10 bg-contain bg-center bg-no-repeat relative">
          <div className="max-w-[540px] relative z-10">
            <Image
              src="/people/group6.svg"
              alt="picture"
              className="h-[440px] rounded-none object-cover"
              width={540}
              height={540}
            />
          </div>
          <div className="relative z-10 text-textColor">
            <div className="text-base">
              <div className="max-w-md">
                <Typography variant="paragraph" className="font-bold">
                  Course Length
                </Typography>
                <Typography variant="paragraph">1 year</Typography>
                <Typography className="font-bold mt-4">Schedule:</Typography>
                <Typography variant="paragraph">Once a week</Typography>
              </div>
              <div className="max-w-md mt-3">
                <Typography>
                  <span className="font-bold">Tuition:</span> Pay the full
                  tuition amount prior to starting the program. Total cost is
                  $650.
                </Typography>
              </div>
              <div className="max-w-md mt-3">
                <Typography>
                  <span className="font-bold">Subscription Plan:</span> The
                  tuition can be renewed yearly
                </Typography>
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
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 mt-20 text-center bg-ash">
        <h1 className="font-bold text-violet mx-auto text-2xl md:text-3xl lg:text-5xl">
          Frequently Asked Question About Codetrain
        </h1>
        <Typography
          variant="paragraph"
          className="my-10 max-w-3xl mx-auto text-textColor"
        >
          Have questions about our programs, fees, or anything else? Find
          answers here to help you make an informed decision.
        </Typography>

        <div>
          {faqSolara.map((item, index) => (
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
                <ul className="list-decimal p-3 pl-10">
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

      {/* Excited to start your career Section */}
      <section className="bg-violet py-24 px-4 relative overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center relative z-30">
          <div>
            <Typography
              variant="h2"
              className="text-lightBlue font-bold max-w-md"
            >
              Empowering Tomorrow’s Innovators
            </Typography>
            <Typography
              variant="paragraph"
              className="text-white max-w-xl mt-5"
            >
              Unleash your potential and build the skills to lead in tomorrow`s
              tech world!
            </Typography>
          </div>
          <div className="mt-10 md:mt-0">
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
    </section>
  );
};
export default CodetrainSolara;
