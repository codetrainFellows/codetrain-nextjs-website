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
import BgLogoLeft from "@/public/icons/BgLogoLeft";
import BgLogoRight from "@/public/icons/BgLogoRight";
import CTLogo from "@/public/icons/CTLogo";
import ExcitedCareer from "@/components/ExcitedCareer";
import Link from "next/link";

const CodeTrainExperience = () => {
  return (
    <>
      <div className="py-2 bg-violet text-xs md:text-base text-center text-white flex items-center justify-center">
        <Link
          href="https://tally.so/r/wodqVO"
          target="_blank"
          className="hover:underline"
        >
          <p>Get to know more about Codetrain. Join our info session.🗣️</p>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="min-h-[calc(80vh-64px-40px)] lg:min-h-[calc(100vh-64px-40px)] px-4 lg:pl-0 bg-ash grid grid-cols-2 place-items-center gap-4">
        <div className="hidden lg:inline">
          <Image
            src="/people/exp.jpg"
            width={720}
            height={384}
            alt=""
            className="object-cover !h-[calc(100vh+64px-40px)]"
          />
        </div>
        <div className="text-textColor leading-8 md:max-w-xl col-span-2 lg:col-span-1">
          <h2 className="text-5xl text-violet font-bold">
            Live the Codetrain Experience
          </h2>
          <Typography variant="paragraph" className="my-8 font-medium">
            Every day at Codetrain is an opportunity to learn, grow, and connect
            with like-minded individuals passionate about shaping the future of
            tech. Our students not only gain the technical skills needed to
            excel but also become a part of a vibrant community that supports
            innovation, collaboration, and continuous learning. Here, you`ll
            find the perfect environment to challenge yourself, build meaningful
            relationships, and take your first steps toward a successful tech
            career.
          </Typography>
        </div>
        <Image
          src="/people/exp.jpg"
          alt=""
          width={720}
          height={384}
          className="h-[70vh] w-full object-cover absolute opacity-20 right-0 lg:hidden"
        />
      </section>

      {/* Kick off Events */}
      <section className="py-20 px-4 lg:px-20 text-textColor relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center relative z-10">
          <div className="lg:max-w-xs col-span-2 lg:col-span-1">
            <Typography variant="h4" className="text-violet font-bold">
              The Kick-Off Event For New Students
            </Typography>
            <Typography variant="paragraph" className="my-8 text-base">
              Our Kick-Off event is the perfect blend of fun, information, and
              warm welcomes. Designed to make you feel right at home, this event
              introduces you to the Codetrain culture and community, sets the
              stage for your learning journey, and connects you with fellow
              students and mentors. It`s the start of an exciting adventure,
              where you’ll gain valuable insights, make new friends, and begin
              your path to success in tech.
            </Typography>
          </div>
          <div className="max-w-80 mt-4 md:mt-0 col-span-3 md:col-span-1">
            <Image
              src="/people/exp2.jpg"
              width={300}
              height={200}
              alt=""
              className="object-cover object-top !h-60 !w-80"
            />
            <Typography variant="h6" className="font-bold text-violet">
              Professional Photos
            </Typography>
            <Typography variant="paragraph">
              Have the beginning of your professional journey captured with a
              series of High-quality photos. These photos are more than just
              pictures; they mark your first step into the tech industry,
              showcasing your readiness to take on the challenges ahead.
            </Typography>
          </div>
          <div className="max-w-80 mt-4 md:mt-0 col-span-3 md:col-span-1">
            <Image
              src="/people/merch.jpg"
              width={300}
              height={200}
              alt="Merchandise"
              className="!h-60 !w-80 object-cover"
            />
            <Typography variant="h6" className="font-bold text-violet">
              Codetrain’s Merch
            </Typography>
            <Typography variant="paragraph">
              Get the coolest exclusive Codetrain Merch at your Kick-Off! These
              goodies not only celebrate your entry into the Codetrain community
              but also serve as a reminder of the exciting journey you`re about
              to embark on.
            </Typography>
          </div>
        </div>
        <hr className="my-8 border-ash" />
        <div className="mt-20 z-10">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 bg-contain bg-center bg-no-repeat relative">
            <Card className="rounded-none  sm:max-w-lg ">
              <CardBody className="p-0 h-full">
                <video
                  className="h-[600px] w-full object-cover"
                  controls
                  src="/video/kickoff.mp4"
                ></video>
              </CardBody>
            </Card>
            <div className="relative z-10">
              <h1 className="font-bold text-violet text-2xl md:text-4xl max-w-sm">
                Replay the Codetrain Kick-Off Moments
              </h1>
              <Typography
                variant="paragraph"
                className="max-w-lg mt-4 text-textColor text-lg"
              >
                Check out the highlights from our previous Kick-Off Event in
                this recap video!
              </Typography>
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
            className="max-w-lg mt-4 font-medium text-textColor "
          >
            Whether you have questions about your Codetrain experience, need
            help navigating your coursework, or seek advice on your career path,
            our dedicated staff is here to provide the guidance you need.
            Schedule a session to get tailored support and ensure you make the
            most of your time at Codetrain.
          </Typography>
          <Typography variant="h5" className="text-violet mt-4">
            Personal Coaching
          </Typography>
          <Typography
            variant="paragraph"
            className="max-w-lg font-medium text-textColor"
          >
            Our expert coaches provide tailored guidance to help you navigate
            your studies, overcome challenges, and achieve your career goals.
          </Typography>
          <Typography variant="h5" className="text-violet mt-4">
            Get Online Assistance
          </Typography>
          <Typography className="max-w-lg font-medium text-textColor">
            Get prompt, reliable support and stay on track with your Codetrain
            experience, all from the convenience of your own device.
          </Typography>
        </div>
        <div className="relative">
          <Image src="/people/exp5.jpg" alt="" height={285} width={320} />
          <Image
            src="/people/expe2.jpg"
            alt=""
            height={285}
            width={320}
            className="relative -top-14 -right-36 border-4 border-white"
          />
          <Image
            src="/people/exp4.jpg"
            alt=""
            height={285}
            width={320}
            className="relative bottom-28 border-4 border-white"
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
            Our Campus is Open and Ready for You
          </Typography>
          <Typography
            variant="paragraph"
            className="mt-4 text-textColor max-w-5xl mx-auto"
          >
            Our campus is fully open to students, offering a wide range of
            services to make sure you enjoy your Codetrain experience.
          </Typography>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 bg-center bg-no-repeat mt-5 relative">
          <div className="max-w-[540px] relative z-10 mt-5 lg:mt-0">
            <Image
              src="/people/gate.jpg"
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
                  Campus is Open as a Student Workspace
                </Typography>
                <Typography variant="paragraph">
                  Our campus is open and ready to serve as your dedicated
                  student workspace, providing a focused environment and all the
                  resources you need to excel in your studies.
                </Typography>
              </div>
              <div className="max-w-md mt-5 md:mt-0">
                <Typography variant="h5" className="font-bold  text-violet">
                  Unlimited Access to internet
                </Typography>
                <Typography variant="paragraph">
                  Enjoy unlimited internet access on campus, ensuring you stay
                  connected and productive throughout your time at Codetrain.
                </Typography>
              </div>
              <div className="max-w-md mt-5 md:mt-0">
                <Typography variant="h5" className="font-bold  text-violet">
                  Power Plant to Supply Electricity
                </Typography>
                <Typography variant="paragraph">
                  You`re ensured of constant electricity supply to keep our
                  campus fully powered and operational at all times.
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
              className="max-w-lg mt-4 text-textColor font-medium leading-8 text-lg"
            >
              Your journey at Codetrain leads to the exciting annual Demo Day
              and Career Fair, where you present your projects to industry
              leaders, potential employers, and the Codetrain community.
            </Typography>
            <Typography
              variant="paragraph"
              className="max-w-lg mt-4 text-textColor font-medium leading-8 text-lg"
            >
              Throughout your training, you’ll work on real-world projects from
              countries like Germany, Rwanda, Canada, and more, giving you
              international experience and a global perspective.
            </Typography>
            <Typography
              variant="paragraph"
              className="max-w-lg mt-4 text-textColor font-medium leading-8 text-lg"
            >
              This event is not just a showcase of your skills; it’s an
              opportunity to gain valuable feedback, explore job opportunities,
              and make meaningful connections.
            </Typography>
            <Typography
              variant="paragraph"
              className="max-w-lg mt-4 text-textColor font-medium leading-8 text-lg"
            >
              Many students have even been hired on the spot, thanks to the
              impressive work they`ve done on these global projects.
            </Typography>
            <Typography
              variant="paragraph"
              className="max-w-lg mt-4 text-textColor font-medium leading-8 text-lg"
            >
              The Career Fair connects you with top companies actively seeking
              tech talent like you, making it a launching pad for your career in
              tech.
            </Typography>
          </div>
          <div className="space-y-10 flex flex-col items-center w-full md:w-1/2">
            <Card className="rounded-none w-full sm:max-w-lg h-56 sm:h-80">
              <CardBody className="p-0 h-full">
                <Typography variant="h6" className="text-violet bg-ash">
                  2022 Demo day video
                </Typography>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/li9EbOpVS-8?si=zkgxI02uimoyQ_iD"
                  title="2022 Demo day video"
                  // frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  // referrerpolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </CardBody>
            </Card>
            <Card className="rounded-none w-full sm:max-w-lg h-56 sm:h-80">
              <CardBody className="p-0 h-full">
                <Typography variant="h6" className="text-violet bg-ash">
                  2023 Demo day video
                </Typography>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/uqozP61jgKQ?si=F9wkPcOIpAlsyG4j"
                  title="2023 Demo day video - tech career seminar"
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
      <section className="py-2 px-4 min-h-[70vh] bg-[url('/people/demo1.jpg')] bg-cover bg-no-repeat bg-center flex justify-end items-end">
        <div className="max-w-sm bg-white px-8 py-5">
          <Typography variant="h4" className="text-violet">
            Exciting Conferences Hosted by Our Bootcamp
          </Typography>
          <Typography variant="paragraph" className="text-textColor mt-2">
            Experience engaging conferences hosted by our bootcamp, where
            industry experts share insights, trends, and innovations. These
            events provide valuable learning opportunities and a platform to
            connect with professionals and peers in the tech community.
          </Typography>
        </div>
      </section>

      {/* Interview Section */}
      <section className="py-20 px-4 flex flex-col gap-10 md:flex-row justify-center">
        <div>
          <Image
            src="/people/demo2.jpg"
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
            We help you prepare for job interviews by offering personalized
            coaching, mock interviews, and valuable feedback. Our goal is to
            ensure you feel confident and ready to impress potential employers
            with your skills and experience.
          </Typography>
        </div>
      </section>

      {/* Mentors From The Industry Section */}
      {/* <section className="py-10 sm:py-20 px-4 bg-ash relative">
        <div className="text-center relative z-10">
          <h3 className="text-2xl md:text-5xl text-violet font-bold">
            Mentors From The Industry
          </h3>
          <p className="text-textColor max-w-3xl mx-auto mt-10">
            Benefit from guidance by mentors from the industry who bring
            real-world experience and expertise to your learning journey. Our
            mentors are here to provide valuable insights, support your growth,
            and help you navigate your career path in tech.
          </p>
        </div>
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-10 md:gap-0 mt-10">
          <Card className="w-72 max-h-[667px] rounded-none md:justify-self-end">
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
          <Card className="w-72 max-h-[667px] rounded-none justify-self-start">
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

        <BgLogoLeft className="absolute size-96 fill-lightBlue -bottom-16 right-0" />
        <BgLogoRight className="absolute size-[540px] fill-lightBlue opacity-[0.3] top-0" />
      </section> */}

      {/* Case Studies Section*/}
      {/* < className="py-10 sm:py-20 px-4 relative">
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
      {/* <CTLogo
        className="absolute top-40 opacity-35 right-0 max-w-xl lg:max-w-4xl"
        color="#c2c0c0"
      /> */}
      {/* </section> */}

      {/* Alumni Network Is Available To Help You */}
      <section className="py-20 px-4 mt-20 flex flex-col md:flex-row justify-center items-center gap-10 bg-ash relative">
        <div className="sm:max-w-sm relative z-10">
          <Typography variant="h4" className="text-violet md:text-4xl">
            Alumni Network Is Available To Help You
          </Typography>
          <Typography
            variant="paragraph"
            className="text-textColor font-medium mt-2"
          >
            Our robust alumni network is here to support you every step of the
            way. Connect with experienced Codetrain graduates for guidance,
            mentorship, and career advice as you navigate your journey and
            advance your tech career.
          </Typography>
        </div>
        <div className="w-full sm:w-1/2 relative z-10">
          <Image
            src="/people/exp6.jpg"
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

      {/* Excited to start your career Section */}
      <ExcitedCareer />
    </>
  );
};
export default CodeTrainExperience;

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
