"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import { createContext } from "react";
import ExperienceCard from "@/components/ExperienceCard";
import BgLogoLeft from "@/public/icons/BgLogoLeft";
import BgLogoRight from "@/public/icons/BgLogoRight";
import CTLogo from "@/public/icons/CTLogo";

const CodeTrainExperience = () => {
  const Context = createContext();
  return (
    <section className="overflow-hidden">
      <div className="py-2 bg-violet text-xs md:text-base text-center text-white flex items-center justify-center">
        <p>Get to know more about Codetrain. Join our info session.🗣️ </p>
      </div>

      {/* Hero Section */}
      <section className="min-h-[calc(80vh-64px-40px)] lg:min-h-[calc(100vh-64px-40px)] px-4 py-10 lg:pl-0 bg-ash grid grid-cols-2 place-items-center gap-4">
        <div className="hidden lg:inline">
          <Image
            src="https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=1200"
            width={720}
            height={384}
            alt=""
            className="object-cover !h-[calc(100vh-64px-40px)]"
          />
        </div>
        <div className="text-textColor leading-8 md:max-w-xl col-span-2 lg:col-span-1">
          <h2 className="text-5xl text-violet font-bold">
            Experience The Life Of A Codetrain Student
          </h2>
          <Typography variant="paragraph" className="my-8">
            Lorem ipsum{" "}
            <span className="font-bold">dolor sit amet consectetur.</span>{" "}
            Mauris pellentesque porta donec enim tellus nibh adipiscing arcu. Et
            mi pellentesque lorem tellus eget nulla. Vulputate iaculis magnis
            aenean integer. Ultrices id aliquet elementum id{" "}
            <span className="font-bold">elit quis lectus rutrum nec.</span>
          </Typography>
        </div>
        <Image
          src="https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt=""
          width={720}
          height={384}
          className="h-[70vh] w-full object-cover max-h-80vh absolute opacity-20 right-0 lg:hidden"
        />
      </section>

      {/* Kick off Events */}
      <section className="py-20 px-4 lg:px-20 text-textColor relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center relative z-10">
          <div className="lg:max-w-xs col-span-2 lg:col-span-1">
            <Typography variant="h4" className="text-violet font-bold">
              The Kick-Off Event For New Students
            </Typography>
            <Typography variant="lead" className="my-8 text-base">
              Begin with an introduction to programming using Python,
              JavaScript, or Java, then master web development fundamentals with
              HTML, CSS, and JavaScript. Advance to front-end development with
              frameworks like React, Vue, or Angular, and dive into back-end
              development using Node.js, Express, and databases.
            </Typography>
          </div>
          <div className="max-w-80 mt-4 md:mt-0 col-span-3 md:col-span-1">
            <Image
              src="https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=1200"
              width={300}
              height={200}
              alt=""
              className="object-cover !h-48 !w-80"
            />
            <Typography variant="h6" className="font-bold text-violet">
              Professional Photos
            </Typography>
            <Typography variant="paragraph">
              Begin with an introduction to programming using Python,
              JavaScript, or Java, then master web developmen.
            </Typography>
          </div>
          <div className="max-w-80 mt-4 md:mt-0 col-span-3 md:col-span-1">
            <Image
              src="https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=1200"
              width={300}
              height={200}
              alt=""
              className="object-cover !h-48 !w-80"
            />
            <Typography variant="h6" className="font-bold text-violet">
              Professional Photos
            </Typography>
            <Typography variant="paragraph">
              Begin with an introduction to programming using Python,
              JavaScript, or Java, then master web developmen.
            </Typography>
          </div>
        </div>
        <hr className="my-8 border-ash" />
        <div className="mt-20 z-10">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 bg-contain bg-center bg-no-repeat relative">
            <Card className="rounded-none w-full sm:max-w-lg h-56 sm:h-80">
              <CardBody className="p-0 h-full">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/SmAZJcErw7w?si=Rnyh2RAAkl1W1Ech"
                  title="YouTube video player"
                  // frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  // referrerpolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </CardBody>
            </Card>
            <div className="relative z-10">
              <h1 className="font-bold text-violet text-2xl md:text-4xl max-w-sm">
                Watch the Kick-Off Event
              </h1>
              <p className="max-w-lg mt-4 text-textColor leading-8 text-lg">
                Begin with an introduction to programming using Python,
                JavaScript, or Java, then master web development fundamentals
                with HTML, CSS, and JavaScript.
              </p>
            </div>
          </div>
        </div>
        {/* Bg logo */}
        <CTLogo
          className="absolute opacity-[0.3] h-full md:max-w-7xl top-0 md:-right-[650px]"
          color="#c2c0c0"
        />
        <BgLogoLeft className="absolute hidden md:inline size-44 top-96 right-0" />
      </section>

      {/* One on One Section */}
      <section className="py-20 px-4 bg-ash text-textColor flex flex-col md:flex-row justify-center gap-10 relative">
        <div className="relative z-10">
          <Typography
            variant="h1"
            className="font-bold text-violet md:max-w-sm text-4xl"
          >
            Get One-on-One Assistance
          </Typography>
          <Typography
            variant="paragraph"
            className="max-w-lg mt-4 text-textColor "
          >
            Project-based learning is our way. At code train, you learn by
            doing. From your first day to your last, you’re graded on actual
            work that is similar to what you’ll be doing on the job. If it has
            no application in the industry, we don’t bother with it.
          </Typography>
          <Typography variant="h5" className="text-violet mt-4">
            Personal Coaching
          </Typography>
          <Typography variant="paragraph" className="max-w-lg text-textColor">
            Begin with an introduction to programming using Python, JavaScript,
            or Java, then master web development.
          </Typography>
          <Typography variant="h5" className="text-violet mt-4">
            Get Online Assistance
          </Typography>
          <Typography className="max-w-lg text-textColor">
            Begin with an introduction to programming using Python, JavaScript,
            or Java, then master web development.
          </Typography>
        </div>
        <div className="relative">
          <Image
            src="/images/Group 61.png"
            width={300}
            height={200}
            alt=""
            className="object-cover md:!h-80 w-full flex flex-1"
          />
          <BgLogoLeft className="absolute size-56 fill-yellow -bottom-10 -right-10" />
        </div>
        <BgLogoRight className="absolute fill-yellow opacity-[0.3] size-96 top-0 left-0" />
      </section>

      {/* Our Campus is Open and Ready for You! */}
      <section className="py-20 px-4">
        <div className="text-center relative z-10">
          <Typography
            variant="h3"
            className="text-3xl md:text-5xl text-violet font-bold"
          >
            Our Campus is Open and Ready for You!
          </Typography>
          <Typography
            variant="paragraph"
            className="mt-4 text-textColor max-w-5xl mx-auto"
          >
            Our campus is fully open to students, offering a wide range of
            services that are available free of charge. Enjoy access to
            state-of-the-art facilities, study areas, and various student
            support services designed to enhance your learning experience and
            success.
          </Typography>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-centers bg-center bg-no-repeat mt-5 relative">
          <div className="max-w-[540px] relative z-10 mt-5 lg:mt-0">
            <Image
              src="https://images.pexels.com/photos/11558845/pexels-photo-11558845.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
              alt="picture"
              className="md:h-[540px] w-[540px] object-contain rounded-none"
              width={540}
              height={540}
            />
          </div>
          <div className="relative z-10 text-textColor mt-5">
            <div className="">
              <div className="md:max-w-md">
                <Typography
                  variant="h5"
                  className="font-bold text-violet md:text-nowrap"
                >
                  Campus Is Open As Students Workspace
                </Typography>
                <Typography variant="paragraph">
                  Begin with an introduction to programming using Python,
                  JavaScript, or Java, then master web development.
                </Typography>
              </div>
              <div className="max-w-md mt-5 md:mt-0">
                <Typography variant="h5" className="font-bold  text-violet">
                  Unlimited Access To Internet
                </Typography>
                <Typography variant="paragraph">
                  Begin with an introduction to programming using Python,
                  JavaScript, or Java, then master web developmen.
                </Typography>
              </div>
              <div className="max-w-md mt-5 md:mt-0">
                <Typography variant="h5" className="font-bold  text-violet">
                  Power Plant To Supply Electricity
                </Typography>
                <Typography variant="paragraph">
                  Begin with an introduction to programming using Python,
                  JavaScript, or Java, then master web developmen.
                </Typography>
              </div>
              <div className="max-w-md mt-5 md:mt-0">
                <Typography variant="h5" className="font-bold  text-violet">
                  Everything To Provide A Condusive Enviroment
                </Typography>
                <Typography variant="paragraph">
                  Begin with an introduction to programming using Python,
                  JavaScript, or Java, then master web development.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo-Day Section*/}
      <section className="py-20 px-4 bg-ash relative">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 bg-contain bg-center bg-no-repeat relative z-10">
          <div className="relative z-10">
            <Typography
              variant="h3"
              className="font-bold text-violet md:text-4xl max-w-sm text-nowrap"
            >
              Codetrain Demo-Day
            </Typography>
            <Typography
              variant="paragraph"
              className="max-w-lg mt-4 text-textColor leading-8 text-lg"
            >
              We prioritize not only technical proficiency but also soft skills
              development, career readiness, and personal growth.
            </Typography>
            <Typography
              variant="paragraph"
              className="max-w-lg mt-4 text-textColor leading-8 text-lg"
            >
              Our comprehensive approach ensures that graduates are not only
              adept coders but also effective communicators, problem-solvers,
              and leaders in their field.
            </Typography>
            <Typography
              variant="paragraph"
              className="max-w-lg mt-4 text-textColor leading-8 text-lg"
            >
              We prioritize not only technical proficiency but also soft skills
              development, career readiness, and personal growth. Our
              comprehensive approach ensures that graduates are
            </Typography>
            <Typography
              variant="paragraph"
              className="max-w-lg mt-4 text-textColor leading-8 text-lg"
            >
              not only adept coders but also effective communicators,
              problem-solvers, and leaders in their field
            </Typography>
            <Typography
              variant="paragraph"
              className="max-w-lg mt-4 text-textColor leading-8 text-lg"
            >
              We prioritize not only technical proficiency but also soft skills
              development, career readiness, and personal growth.
            </Typography>
          </div>
          <div className="space-y-10 flex flex-col items-center w-full md:w-1/2">
            <Card className="rounded-none w-full sm:max-w-lg h-56 sm:h-80">
              <CardBody className="p-0 h-full">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/SmAZJcErw7w?si=Rnyh2RAAkl1W1Ech"
                  title="YouTube video player"
                  // frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  // referrerpolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </CardBody>
            </Card>
            <Card className="rounded-none w-full sm:max-w-lg h-56 sm:h-80">
              <CardBody className="p-0 h-full">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/SmAZJcErw7w?si=Rnyh2RAAkl1W1Ech"
                  title="YouTube video player"
                  // frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  // referrerpolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </CardBody>
            </Card>
          </div>
        </div>
        {/* Bg logo */}
        <CTLogo
          className="absolute opacity-[0.3] h-full top-0 left-56"
          color="#c2c0c0"
        />
      </section>

      {/* Conference Section */}
      <section className="py-2 px-4 min-h-[70vh] bg-[url('https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover bg-no-repeat bg-center flex justify-end items-end">
        <div className="max-w-sm bg-white px-8 py-5">
          <Typography variant="h4" className="text-violet">
            Exciting Conferences Hosted by Our Bootcamp
          </Typography>
          <Typography variant="paragraph" className="text-textColor mt-2">
            Join us for a series of engaging and informative conferences
            designed to enhance your learning and networking opportunities:
          </Typography>
        </div>
      </section>

      {/* Interview Section */}
      <section className="py-20 px-4 flex flex-col gap-10 md:flex-row justify-center">
        <div>
          <Image
            src="https://images.pexels.com/photos/11558845/pexels-photo-11558845.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            alt="picture"
            className="h-[350px] sm:w-[540px] object-cover rounded-none"
            width={540}
            height={540}
          />
        </div>
        <div className="md:max-w-sm py-5">
          <Typography variant="h4" className="text-violet text-4xl">
            We Help You Prepare For Job Interviews
          </Typography>
          <Typography variant="paragraph" className="text-textColor mt-2">
            Project-based learning is our way. At code train, you learn by
            doing. From your first day to your last, you’re graded on actual
            work that is similar to what you’ll be doing on the job. If it has
            no application in the industry, we don’t bother with it.
          </Typography>
        </div>
      </section>

      {/* Mentors From The Industry Section */}
      <section className="py-10 sm:py-20 px-4 bg-ash relative">
        <div className="text-center relative z-10">
          <h3 className="text-2xl md:text-5xl text-violet font-bold">
            Mentors From The Industry
          </h3>
          <p className="text-textColor max-w-3xl mx-auto mt-10">
            Project-based learning is our way. At code train, you learn by
            doing. From your first day to your last, you’re graded on actual
            work that is similar to what you’ll be doing on the job. If it has
            no application in the industry, we don’t bother with it.
          </p>
        </div>
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-10 md:gap-0 mt-10">
          <Card className="w-72 max-h-[667px] rounded-none">
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
            <CardFooter>
              <Typography className="font-bold text-textColor">Lee</Typography>
              <hr className="border-violet h-1" />
              <Typography className="font-normal text-textColor">
                Software Engineer
              </Typography>
            </CardFooter>
          </Card>
          <Card className="w-72 max-h-[667px] rounded-none">
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
            <CardFooter>
              <Typography className="font-bold text-textColor">Lee</Typography>
              <hr className="border-violet h-1" />
              <Typography className="font-normal text-textColor">
                Software Engineer
              </Typography>
            </CardFooter>
          </Card>
          <Card className="w-72 max-h-[667px] rounded-none">
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
            <CardFooter>
              <Typography className="font-bold text-textColor">Lee</Typography>
              <hr className="border-violet h-1" />
              <Typography className="font-normal text-textColor">
                Software Engineer
              </Typography>
            </CardFooter>
          </Card>
        </div>
        {/* Bg Logos */}
        <BgLogoLeft className="absolute size-96 fill-lightBlue -bottom-16 right-0" />
        <BgLogoRight className="absolute size-[540px] fill-lightBlue opacity-[0.3] top-0" />
      </section>

      {/* Case Studies Section*/}
      <section className="py-10 sm:py-20 px-4 relative">
        <div className="text-center relative z-10">
          <h3 className="text-2xl md:text-5xl text-violet font-bold">
            Some Codetrain Case Studies
          </h3>
          <p className="text-textColor max-w-5xl mx-auto mt-10">
            Lorem ipsum dolor sit amet consectetur. Felis eu euismod placerat
            libero lacus eu morbi. Quam ullamcorper adipiscing eget porttitor
            vitae eget aliquam imperdiet. Sagittis nunc vulputate magna eu sed
            et. Aenean commodo amet amet lacinia amet porttitor diam.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 py-10 bg-contain bg-center bg-no-repeat">
          <div className="max-w-[540px] bg-white relative z-10 shadow-md">
            <Image
              src="https://images.pexels.com/photos/11558845/pexels-photo-11558845.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
              alt="picture"
              className="h-[350px] md:h-[540px] w-[540px] object-cover rounded-none"
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
            <ul className="list-disc leading-10 text-lg ml-4">
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
        {/* Bg Logo */}
        <CTLogo
          className="absolute top-40 opacity-35 right-0 max-w-xl lg:max-w-4xl"
          color="#c2c0c0"
        />
      </section>

      {/* Alumni Network Is Available To Help You */}
      <section className="py-20 px-4 flex flex-col md:flex-row justify-center items-center gap-10 bg-ash  relative">
        <div className="sm:max-w-sm relative z-10">
          <Typography variant="h4" className="text-violet md:text-4xl">
            Alumni Network Is Available To Help You
          </Typography>
          <Typography variant="paragraph" className="text-textColor mt-2">
            Project-based learning is our way. At code train, you learn by
            doing. From your first day to your last, you’re graded on actual
            work that is similar to what you’ll be doing on the job. If it has
            no application in the industry, we don’t bother with it.
          </Typography>
        </div>
        <div className="w-full sm:w-1/2 relative z-10">
          <Image
            src="https://images.pexels.com/photos/11558845/pexels-photo-11558845.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            alt="picture"
            className="h-[350px] w-full md:max-w-lg object-cover rounded-none"
            width={540}
            height={540}
          />
        </div>
        {/* Bg Logos */}
        <BgLogoLeft className="absolute size-72 fill-indigo opacity-15 bottom-0 left-0" />
        <BgLogoRight className="absolute size-72 fill-indigo opacity-15 top-0 left-0" />
      </section>

      {/* Codetrain Journey Section */}
      <section className="py-20 px-4 relative">
        <div className="text-center relative z-10">
          <h3 className="text-2xl md:text-4xl text-violet font-semibold">
            Codetrain Journey
          </h3>
          <p className="max-w-4xl mt-7 mx-auto text-base text-textColor">
            Unlike traditional education models, our curriculum is constantly
            updated to reflect the latest trends and demands of the tech
            industry.
          </p>
        </div>
        <div className="flex flex-col gap-14 items-center mt-10 relative z-10">
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
        <BgLogoLeft className="absolute size-72 md:size-2/4 fill-pink opacity-15 bottom-0 left-60" />
        <BgLogoRight className="absolute size-72 md:size-2/4 fill-pink opacity-15 top-96 left-60" />
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
export default CodeTrainExperience;
