"use client";
import {
  advisoryTeam,
  successStories,
  team,
  team1,
} from "@/constants/constants";
import BgLogoLeft from "@/public/icons/BgLogoLeft";
import BgLogoRight from "@/public/icons/BgLogoRight";
import CTLogo from "@/public/icons/CTLogo";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { createContext } from "react";

const AboutUs = () => {
  const Context = createContext();

  return (
    <section className="overflow-hidden">
      <div className="py-2 bg-violet font-xs text-center text-white flex items-center justify-center">
        <p className="text-xs sm:text-base">
          Get to know more about Codetrain. Join our info session.🗣️{" "}
        </p>
      </div>

      {/* Hero Section */}
      <section className="min-h-[calc(100vh-64px-40px)] grid grid-cols-2 place-items-center relative">
        <div className="hidden lg:inline">
          <Image
            src="/people/group.jpg"
            width={720}
            height={384}
            alt=""
            className="object-cover !h-[calc(100vh-64px-40px)]"
            quality={100}
          />
        </div>
        <div className="p-8 text-textColor md:leading-8 col-span-2 lg:col-span-1">
          <h2 className="text-4xl text-violet font-bold max-w-lg">
            Our Story: The Journey Behind Codetrain Africa
          </h2>
          <p className="my-8">
            Codetrain was founded on the belief that achieving personal dreams
            can lead to transformative community impact. Our journey began with
            a vision to become a leading global software training brand,
            dedicated to empowering individuals and fostering positive change.
            We recognized that by nurturing tech talent, we could enable people
            to contribute meaningfully to their communities and beyond.
          </p>
          <p className="my-5">
            Our mission is to elevate individuals through digital education,
            equipping them with the skills needed to become proficient software
            developers and influential global leaders. At Codetrain, we are
            committed to setting our students on a path to success, helping them
            create significant impacts in their communities and drive innovation
            in the tech world.
          </p>
        </div>
        <Image
          src="/people/group.jpg"
          alt=""
          width={720}
          height={384}
          className="h-full w-full object-cover absolute opacity-20 right-0  lg:hidden"
        />
      </section>

      {/* Our Mission: ( Driving purpose and passion ) section */}
      <section className="grid grid-cols-2 place-items-center px-2 py-10 md:p-20 bg-ash overflow-hidden">
        <div className="text-textColor leading-8 col-span-2 lg:col-span-1 relative">
          <div className="z-10">
            <h2 className="text-2xl md:text-4xl text-violet font-bold max-w-lg ">
              Our Mission: Driving Purpose and Passion
            </h2>
            <p className="my-5">
              At Codetrain, our mission is to empower ambitious youth to make
              their mark on the global tech stage. We are dedicated to nurturing
              their skills and passion for technology, providing the tools and
              knowledge needed to excel. By fostering a dynamic learning
              environment, we aim to help our students harness their potential,
              drive innovation, and contribute significantly to the tech
              industry on a global scale.
            </p>
          </div>
          <BgLogoRight className="absolute -top-32 -left-40 size-96 xl:size-[412px] xl:-left-20 xl:-top-44 fill-yellow opacity-[0.3]" />
        </div>
        <div className="flex gap-4 col-span-2 lg:col-span-1 relative">
          <Image
            src="/people/succes5.jpg"
            width={1000}
            height={200}
            alt=""
            className="object-cover !h-[400px] !w-40 mt-7"
          />
          <Image
            src="/people/gerald.jpg"
            width={1000}
            height={200}
            alt=""
            className="object-cover !h-[400px] !w-40"
          />
          <BgLogoLeft className="absolute -bottom-32 -right-40 size-96 fill-yellow" />
        </div>
      </section>

      {/* Codetrain Team */}
      <section className="py-20 px-4 relative">
        <h2 className="text-xl md:text-3xl font-bold text-textColor text-center relative z-10">
          Meet The Codetrain Team
        </h2>
        <div className="flex flex-wrap justify-center lg:flex-nowrap gap-8 items-center relative z-10">
          <div className="mt-10">
            <Card className="md:w-[430px] max-h-[667px] rounded-none">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <Image
                  src="/people/richar2.jpg"
                  alt=""
                  width={540}
                  height={276}
                  className="overflow-hidden object-cover"
                />
              </CardHeader>
              <CardBody>
                <p className="font-bold text-textColor">
                  Welcome to Codetrain! We believe in the power of technology to
                  change lives and build bright futures. Our mission is to
                  transform ambitious individuals into tech leaders who not only
                  excel in their careers but also make a positive impact on
                  their communities. We’re all about learning, growing, and
                  having a bit of fun along the way. Whether you`re just
                  starting out or looking to level up your skills, we’re here to
                  support you every step of the way.
                </p>
              </CardBody>
              <hr className="border-violet h-1" />
              <CardFooter>
                <p className="font-extrabold text-textColor">Richard Brandt</p>
                <p className="font-normal text-textColor">CEO</p>
              </CardFooter>
            </Card>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 place-content-center place-items-center mt-10">
            {team.map((story) => (
              <Card
                className="md:max-w-96 rounded-none col-span-1"
                key={story.name}
              >
                <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className="m-0 rounded-none"
                >
                  <Image
                    src={story.src}
                    alt="img"
                    width={540}
                    height={276}
                    className="overflow-hidden object-top object-cover h-80"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="paragraph" className="text-textColor">
                    {story.story}
                  </Typography>
                </CardBody>
                <hr className="border-violet h-1" />
                <CardFooter>
                  <Typography className="font-bold text-textColor">
                    {story.name}
                  </Typography>
                  <Typography className="font-normal text-textColor">
                    {story.role}
                  </Typography>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 place-content-center place-items-center mt-10">
          {team1.map((story) => (
            <Card
              className="md:max-w-96 rounded-none col-span-1"
              key={story.name}
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <Image
                  src={story.src}
                  alt="img"
                  width={540}
                  height={276}
                  className="overflow-hidden object-top object-cover h-80"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="paragraph" className="text-textColor">
                  {story.story}
                </Typography>
              </CardBody>
              <hr className="border-violet h-1" />
              <CardFooter>
                <Typography className="font-bold text-textColor">
                  {story.name}
                </Typography>
                <Typography className="font-normal text-textColor">
                  {story.role}
                </Typography>
              </CardFooter>
            </Card>
          ))}
        </div>
        {/* Bg logos */}
        <BgLogoLeft className="absolute top-32 right-0 fill-yellow md:size-2/4" />
        <BgLogoRight className="absolute top-32 left-0 fill-yellow md:size-2/4" />
      </section>

      <hr className="my-4 border-ash max-w-7xl mx-auto" />

      {/* The Advisory Team Section */}
      <section className="py-20 px-8">
        <h2 className="text-3xl font-bold text-textColor text-center">
          The Advisory Board
        </h2>
        <div className="mt-10 grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {advisoryTeam.map((story) => (
            <Card className="rounded-none max-w-56" key={story.name}>
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <Image
                  src={story.src}
                  alt="img"
                  width={540}
                  height={276}
                  className="overflow-hidden object-cover object-top h-48"
                />
              </CardHeader>
              <CardFooter>
                <Typography className="font-bold text-textColor">
                  {story.name}
                </Typography>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Excellence Recognized: Discover Our Award-Winning Achievements */}
      <section className="pb-20 px-4 text-center text-textColor">
        <div className="text-left mt-10 md:mt-20 flex flex-col lg:flex-row justify-center divide-y lg:divide-y-0  lg:divide-x divide-yellow border border-yellow max-w-6xl mx-auto relative">
          <div className="p-5 lg:p-12">
            <Typography variant="h3" className="text-violet">
              Partner With Us
            </Typography>
            <Typography
              variant="paragraph"
              className="text-textColor lg:max-w-sm mt-5"
            >
              Partner with Codetrain to shape the future of tech in Africa. We
              offer opportunities for collaboration in training, mentorship, and
              innovation, aimed at empowering the next generation of software
              developers. Join us in our mission to drive digital transformation
              and create impactful career pathways.
            </Typography>
            <Link href="/partnerships">
              <Button className="mt-16 bg-yellow rounded-none text-violet font-bold">
                Partner With Us
              </Button>
            </Link>
            <BgLogoRight className="absolute -z-10 fill-yellow opacity-[0.4] -top-10 left-3 size-48 md:size-60" />
          </div>
          <div className="p-5 lg:p-12">
            <Typography variant="h3" className="text-violet">
              Support Us
            </Typography>
            <Typography
              variant="paragraph"
              className="text-textColor lg:max-w-sm mt-5"
            >
              Support Codetrain to help us empower the next generation of tech
              leaders. Your contributions enable us to provide top-notch
              training, resources, and opportunities for aspiring software
              developers across Africa. Join us in shaping a brighter digital
              future!
            </Typography>
            <Link href="/donate">
              <Button className="mt-24 bg-yellow rounded-none text-violet font-bold">
                Donate Here
              </Button>
            </Link>
            <BgLogoLeft className="absolute fill-yellow -bottom-10 right-3 size-48 md:size-60" />
          </div>
        </div>
      </section>
    </section>
  );
};
export default AboutUs;
