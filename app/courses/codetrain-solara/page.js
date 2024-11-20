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
              Unlock Your Child’s Potential with Solara: Africa’s Premier Online
              School for Future Innovators (Ages 8–14). An experience designed
              to transform 8 to 14 year old African kids into World class
              Innovators, Leaders and Entrepreneurs.
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
      <section className="py-10 px-4 md:px-12 md:max-w-7xl mx-auto">
        <h3 className="text-3xl md:text-4xl text-violet font-bold">
          What is Codetrain Solara
        </h3>
        <Typography variant="paragraph" className="text-textColor mt-4">
          At <span className="font-bold">Codetrain Africa</span>, we believe
          African children hold the key to shaping the future as global leaders,
          innovators, and dreamers. For over seven years, Codetrain has
          successfully trained over 700 software developers, with 89% of our
          graduates thriving in companies building Africa’s next big ideas or
          contributing to the global tech scene. Our journey with younger
          learners has been equally inspiring. When we introduced coding to
          kids, the results were phenomenal! Imagine children aged 10 to 14
          creating solutions like:
        </Typography>
        <ul className="mt-2 ml-6">
          <li className="list-disc mt-0.5">
            <Typography variant="paragraph" className="text-textColor">
              An NFC-powered mobile wallet,
            </Typography>
          </li>
          <li className="list-disc mt-0.5">
            <Typography variant="paragraph" className="text-textColor">
              Advising businesses on tech strategies,
            </Typography>
          </li>
          <li className="list-disc mt-0.5">
            <Typography variant="paragraph">
              A COVID-19 data tracker,
            </Typography>
          </li>
          <li className="list-disc mt-0.5">
            <Typography variant="paragraph">
              A communicable diseases tracker app,
            </Typography>
          </li>
          <li className="list-disc mt-0.5">
            <Typography variant="paragraph">Designing games,</Typography>
          </li>
          <li className="list-disc mt-0.5">
            <Typography variant="paragraph">
              And even serving as a mentor and keynote speaker for an Austrian
              Innovation Challenge organization!
            </Typography>
          </li>
        </ul>
        <Typography variant="paragraph" className="text-textColor mt-4">
          Now, we’re expanding this opportunity with Solara, an online school
          dedicated to equipping children with the skills to become future tech
          innovators. Through hands-on learning and real-world projects, we
          nurture creativity, problem-solving, and leadership. By enrolling your
          child in Solara, you’re not just investing in their education—you’re
          empowering them to shape the world. Together, let’s cultivate the next
          generation of African and global tech leaders.
        </Typography>

        <div className="mt-4">
          <Typography variant="paragraph" className="text-pink font-bold">
            Program Structure
          </Typography>
          <ul className="list-disc ml-5 mt-2">
            <li>Online Saturday classes (12noon-2pm GMT)</li>
            <li>In-person Summar Bootcamp</li>
            <li>Annual Innovation Conference</li>
          </ul>
        </div>
        <div className="mt-4">
          <Typography variant="paragraph" className="text-violet font-bold">
            Program Duration
          </Typography>
          <ul className="list-disc ml-5 mt-2">
            <li>3 - 5 years Annual Subscription</li>
          </ul>
        </div>
        <div className="mt-4">
          <Typography variant="paragraph" className="text-violet font-bold">
            Program Pricing
          </Typography>
          <ul className="list-disc ml-5 mt-2">
            <li>$650 or GHS 10,000 per year</li>
          </ul>
        </div>
        <div className="mt-4">
          <Typography variant="paragraph" className="text-violet font-bold">
            Part-Scholarships
          </Typography>
          <ul className="list-disc ml-5 mt-2">
            <li className="max-w-[600px]">
              Scholarships will be awarded to children who submit compelling
              applications and demonstrate eligibility based on financial need,
              gender inclusion, neurodivergence, or living with a disability.
            </li>
          </ul>
        </div>
      </section>

      {/* Jamain's success stories */}
      <section className="px-4 py-10 ">
        <div className="flex flex-col md:flex-row justify-center gap-10">
          <div>
            <Typography variant="h3" className="text-violet max-w-md">
              Inspiring Young Innovators: Jermaine’s Journey
            </Typography>
            <Typography
              variant="paragraph"
              className="text-textColor mt-4 max-w-xl"
            >
              At just 8 years old, Jermaine’s parents recognized his passion for
              technology and enrolled him at Codetrain. By the age of 11, during
              the height of the pandemic, Jermaine developed a COVID-19 app that
              provided vital statistics about the virus. Through Codetrain, he
              mastered essential skills in full-stack web development, including
              modern technologies such as JavaScript, React, Node.js, MongoDB,
              and Express. He also honed critical concepts like version control
              with Git, teamwork, collaboration, technical communication, public
              speaking, and innovation.
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
          className="text-textColor mt-10 md:px-10 md:max-w-7xl mx-auto"
        >
          By 12, Jermaine was invited to deliver an inspiring keynote speech at
          the Moonshot Pirates Bootcamp held at SOS Hermann Gmeiner College in
          Ghana. He went on to mentor Austrian teen entrepreneurs from the same
          program, sharing insights and guiding their innovative projects. At a
          young age, he has reached the proficiency level of a mid-level
          professional software developer. He is currently working on a project
          to empower small businesses in Africa through loyalty rewards and has
          also developed an app to connect startups with angel investors.
          Jermaine’s remarkable journey demonstrates the transformative impact
          of tech-focused education. By enrolling your child in Codetrain
          Solara, you’re providing them with the tools and opportunities to
          become future innovators and global leaders. Give your child the
          chance to unlock their potential and make a meaningful impact in the
          world.
        </Typography>
      </section>

      {/* Comprehensive Software Development Curriculum */}
      <section className="py-10 px-8">
        <div className="text-center relative z-10">
          <h3 className="text-3xl md:text-4xl text-violet font-bold text-balance">
            What Your Child Will Gain Through Codetrain Solara
          </h3>
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
            <ul className="list-disc space-y-2 max-w-lg">
              <li>
                <Typography variant="h6" className="text-lg">
                  Coding, App Development and AI:
                </Typography>
                <ul className="ml-3 space-y-1">
                  <li>
                    <Typography variant="paragraph">
                      Master the essentials of programming and app development
                      while diving into foundational AI concepts, equipping your
                      child to thrive in the future digital economy.
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography variant="h6" className="text-lg">
                  STEM (Science, Technology, Engineering and Math)
                </Typography>
                <ul className="ml-3 space-y-1">
                  <li>
                    <Typography variant="paragraph">
                      Build strong skills across these critical disciplines
                      through hands-on projects in coding, AI, and technology
                      innovation. Entrepreneurship and Innovation. Foster a
                      problem-solving mindset and learn how to design impactful
                      solutions to address real-world challenges.
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
                      Foster a problem-solving mindset and learn how to design
                      impactful solutions to address real-world challenges.
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
                      Develop leadership, communication, and interpersonal
                      skills by working in teams to solve complex challenges.
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
                      Understand global issues and learn how to leverage their
                      projects and skills to create positive, meaningful change.
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
                      Create a standout digital portfolio showcasing skills and
                      projects, opening doors to future academic or career
                      opportunities.
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
                      Learn under the guidance of experienced teaching fellows,
                      receive valuable feedback, and connect with global experts
                      to deepen specialized skills. Your child will gain a
                      well-rounded education rooted in innovation and
                      leadership, setting them on the path to becoming a future
                      tech pioneer.
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

      {/* Empowering Your Child for a Future as a Global Tech Leader */}
      <section className="py-10 px-4">
        <Typography variant="h3" className="text-center text-violet">
          Empowering Your Child for a Future as a Global Tech Leader
        </Typography>
        <div className="max-w-6xl mx-auto mt-10">
          <Typography variant="paragraph" className="text-textColor">
            At Codetrain Solara, we aim to cultivate the next generation of
            global leaders, innovators, and changemakers in the tech industry.
            By the end of the program, your child will have developed critical
            skills and a mindset that prepares them not just for today’s
            opportunities, but for shaping the future of technology.
          </Typography>
          <Typography variant="paragraph" className="text-textColor">
            Through project-based learning, your child will build a strong
            foundation in areas such as coding, app development, AI, and
            entrepreneurship, while honing vital skills like problem-solving,
            creative thinking, and leadership. These experiences will equip them
            with the tools to:
          </Typography>
          <ul className="list-disc mt-4 space-y-2 ml-3">
            <li>
              <Typography variant="paragraph" className="text-textColor">
                <span className="font-bold">
                  Lead in Technology & Innovation:
                </span>{" "}
                Your child will be prepared to drive major advancements in
                fields like artificial intelligence, app development, and
                software engineering, leading initiatives that change the world.
              </Typography>
            </li>
            <li>
              <Typography variant="paragraph" className="text-textColor">
                <span className="font-bold">Create and Shape Industries:</span>{" "}
                Equipped with entrepreneurial skills, they may launch their own
                tech startups or innovate within established companies, creating
                new solutions and products for global markets.
              </Typography>
            </li>
            <li>
              <Typography variant="paragraph" className="text-textColor">
                <span className="font-bold">Inspire and Mentor:</span> With
                leadership and communication skills, your child could mentor
                future generations, become an influencer in the tech space, or
                deliver keynote speeches at major global tech conferences.
              </Typography>
            </li>
            <li>
              <Typography variant="paragraph" className="text-textColor">
                <span className="font-bold">
                  Pursue Advanced Roles in Global Tech:
                </span>
                By the time they reach adulthood, your child could be an
                in-demand expert in their field, influencing tech policy,
                creating new technologies, or working with international teams
                to solve pressing global challenges.
              </Typography>
            </li>
          </ul>
          <Typography variant="paragraph" className="text-textColor mt-4">
            Codetrain Solara isn’t just about technical skills; it’s about
            positioning your child to be a visionary leader who can rise to the
            challenges of a rapidly changing world. By investing in their future
            today, you’re giving them the tools to become a driving force in the
            global tech ecosystem.
          </Typography>
        </div>
      </section>

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
        </div>
        {/* svg bg logos */}
        <BgLogoRight className="fill-cyan-50 absolute top-10 lg:top-0 lg:right-0 -z-50 h-80 md:h-1/2 sm:inline" />
        <BgLogoLeft className="fill-cyan-300 absolute bottom-10 lg:bottom-0 lg:left-0 -z-50 h-80 lg:h-1/2 sm:inline" />
      </section>

      {/* What You Need To Get Accepted */}
      <section className="py-20 px-4 pl-9 flex flex-col gap-10 lg:flex-row justify-center">
        <div className="inline-flex flex-col gap-5 max-w-lg">
          <Typography variant="h4" className="text-violet">
            What You Need to Get Accepted to Codetrain Solara
          </Typography>
          <Typography variant="paragraph" className="text-textColor">
            At Codetrain Solara, we believe in creating opportunities for every
            child to reach their full potential. Our application process is open
            year-round, ensuring flexibility for families and aspiring young
            innovators.
          </Typography>
          <Typography variant="paragraph" className="text-textColor">
            At Codetrain Solara, we Accept Inclusion, we encourage children from
            all backgrounds, and we’re happy to support them into the Program.
          </Typography>
        </div>
        <div className="flex flex-col w-3/5 text-textColor max-w-lg">
          <ul className="flex flex-col">
            <li className="mb-3">
              <Typography variant="h4" className="font-bold text-violet">
                Requirements for Admission:
              </Typography>
            </li>
            <ul className="list-disc">
              <li>
                <Typography variant="paragraph" className="text-textColor">
                  Basic Computer Literacy Skills
                </Typography>
              </li>
              <li>
                <Typography variant="paragraph" className="text-textColor">
                  Your child should have a foundational understanding of how to
                  use a computer.
                </Typography>
              </li>
              <li>
                <Typography variant="paragraph" className="text-textColor">
                  Pass Our Intake Puzzle
                </Typography>
              </li>
              <li>
                <Typography variant="paragraph" className="text-textColor">
                  This engaging activity is designed to spark creativity and
                  test problem-solving abilities in a fun way.
                </Typography>
              </li>
              <li>
                <Typography variant="paragraph" className="text-textColor">
                  Recommendation Letter
                </Typography>
              </li>
              <li>
                <Typography variant="paragraph" className="text-textColor">
                  A letter of support from a parent or guardian will help us
                  understand your child’s character and potential.
                </Typography>
              </li>
              <li>
                <Typography variant="paragraph" className="text-textColor">
                  Video Submission
                </Typography>
              </li>
              <li>
                <Typography variant="paragraph" className="text-textColor">
                  Submit a short video (MP4 format) where your child shares a
                  big dream they have and why it inspires them. We’re excited to
                  help your child take their first step toward becoming a future
                  innovator. Start their journey with Codetrain Solara today!
                </Typography>
              </li>
            </ul>
          </ul>
          <Typography variant="paragraph" className="text-textColor mt-4">
            We’re excited to help your child take their first step toward
            becoming a future innovator. Start their journey with Codetrain
            Solara today!
          </Typography>
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
                <ul className="list-disc leading-10 ml-8 max-w-4xl">
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
