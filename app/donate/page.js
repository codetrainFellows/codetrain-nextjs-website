"use client";

import BgLogoLeft from "@/public/icons/BgLogoLeft";
import BgLogoRight from "@/public/icons/BgLogoRight";
import CTLogo from "@/public/icons/CTLogo";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  List,
  ListItem,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

const Donate = () => {
  return (
    <section className="overflow-hidden">
      <div className="py-2 bg-violet font-xs text-center text-white flex items-center justify-center">
        <Link
          href="https://codetrainafrica.heiapply.com/application"
          target="_blank"
          className="hover:underline"
        >
          <p>Get to know more about Codetrain. Join our info session.🗣️</p>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="min-h-[calc(100vh-64px-40px)] bg-ash grid grid-cols-2 place-items-center relative">
        <div className="hidden lg:inline">
          <Image
            src="/people/jessica.jpg"
            width={720}
            height={384}
            alt=""
            className="object-cover !h-[calc(100vh-64px-40px)]"
            quality={100}
          />
        </div>
        <div className="p-8 text-textColor md:leading-8 col-span-2 lg:col-span-1">
          <h2 className="text-4xl md:text-5xl text-violet font-bold max-w-lg">
            Codetrain Foundation
          </h2>
          <h3 className="text-4xl text-violet mt-5 font-bold">
            Support the Future of Tech Talent
          </h3>
          <p className="my-8 text-pink text-2xl md:text-4xl max-w-md">
            Over $104,000 Awarded In Scholarship
          </p>
          <p className="my-5">
            Support the training of African youth to become job-ready software
            developers and UX designers. Your donation equips the next
            generation with the skills needed to succeed and drive future
            innovations in the tech industry.
          </p>

          <div className="flex gap-x-4 mt-14 z-10">
            <Link href="#">
              <Button
                className="bg-yellow text-violet shadow-none font-bold px-5 sm:px-8 md:px-10 rounded-md hover:shadow-none"
                variant="filled"
              >
                Donate Now
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
                Request A Meeting
              </Button>
            </Link>
          </div>
        </div>
        <Image
          src="/people/jessica.jpg"
          alt=""
          width={720}
          height={384}
          className="h-full w-full object-cover absolute opacity-20 right-0  lg:hidden"
        />
      </section>

      {/* About Codetrain Foundation */}
      <section className="py-20 px-4 text-textColor flex flex-col md:flex-row justify-center items-center gap-10 relative">
        <div className="relative z-10">
          <Typography variant="h2" className="max-w-xs text-violet font-bold">
            About Codetrain Foundation
          </Typography>

          <Typography
            variant="paragraph"
            className="max-w-md text-textColor mt-5"
          >
            Codetrain Foundation transforms lives through tech education,
            offering high-quality coding training to bridge the skills gap,
            empower individuals, and create a pipeline of talented professionals
            driving industry innovation.
          </Typography>

          <Typography
            variant="h6"
            className="max-w-xs text-textColor font-bold mt-5"
          >
            Mission Statement:
          </Typography>
          <Typography variant="paragraph" className="max-w-lg text-textColor">
            Codetrain Foundation is dedicated to transforming lives through tech
            education by providing high-quality coding and tech training to
            aspiring professionals. Our mission is to bridge the skills gap,
            empower individuals, and foster innovation, creating a pipeline of
            talented tech professionals ready to drive the industry forward.
          </Typography>

          <Typography
            variant="h6"
            className="max-w-xs text-textColor font-bold mt-5"
          >
            Our Vision:
          </Typography>
          <Typography className="max-w-lg text-textColor">
            We envision a tech industry where diversity, inclusion, and
            innovation thrive. Through scholarships, mentorship, and community
            support, we’re dedicated to breaking down barriers and creating
            opportunities for all.
          </Typography>
        </div>
        <div className="relative">
          <div>
            <Image
              src="/people/grad-pic2.jpg"
              alt=""
              height={285}
              width={320}
              className="h-52 object-cover object-top"
            />
            <Image
              src="/people/donate.jpg"
              alt=""
              height={285}
              width={320}
              className="relative -top-14 -right-36 h-[216px] object-cover border-4 border-white"
            />
            <Image
              src="/people/donate1.jpg"
              alt=""
              height={285}
              width={320}
              className="relative bottom-28 border-4 h-[216px] object-cover border-white"
            />
          </div>
          <BgLogoLeft className="absolute size-56 fill-yellow -bottom-10 -right-10" />
        </div>
        <BgLogoRight className="absolute fill-yellow opacity-[0.3] size-96 top-0 left-0" />
      </section>

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
          tech skills.
        </Typography>

        <div className="flex flex-col items-center justify-center md:items-start md:flex-row gap-x-40 gap-y-10">
          <div className="max-w-72">
            <h4 className="text-lg md:text-xl text-violet font-extrabold mb-3">
              Job Placement
            </h4>
            <h1 className="text-pink text-7xl font-bold md:text-6xl">91%</h1>
            <p className="text-textColor mt-6">
              of our students get job within the first 9 months
            </p>
          </div>
          <div className="max-w-72 mt-5 md:mt-0">
            <h4 className="text-lg md:text-xl text-violet font-extrabold mb-3">
              Alumni
            </h4>
            <h1 className="text-pink text-6xl font-bold md:text-6xl">600</h1>
            <p className="text-textColor mt-6">alumni and counting</p>
          </div>
          <div className="max-w-72 mt-5 md:mt-0">
            <h4 className="text-lg md:text-xl text-violet font-extrabold mb-3">
              Ratings
            </h4>
            <h1 className="text-pink text-6xl font-bold md:text-6xl">8.3</h1>
            <p className="text-textColor mt-6">
              of our students get job within the first 9 months
            </p>
          </div>
        </div>
      </section>

      {/* How your donation Section*/}
      <section className="py-20 px-4 bg-ash">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 py-10 bg-contain bg-center bg-no-repeat relative">
          <div className="relative z-10 text-textColor">
            <div className="text-base">
              <div className="max-w-md">
                <Typography variant="h2" className="font-bold text-violet">
                  How Your Donation Helps
                </Typography>
                <Typography variant="paragraph" className="mt-5 font-medium">
                  Support the training of African youth to become job-ready
                  software developers and UX designers. Your contributions help
                  us:
                </Typography>
              </div>
            </div>

            <ul className="list-disc mt-10 space-y-4 max-w-lg">
              <li>
                <Typography variant="paragraph" className="font-medium">
                  Offer scholarships to women, neurodivergent individuals,
                  people with disabilities like sickle cell, and those from
                  low-income or rural communities
                </Typography>
              </li>
              <li>
                <Typography variant="paragraph" className="font-medium">
                  Expand our Diversity and Inclusion initiatives
                </Typography>
              </li>
              <li>
                <Typography variant="paragraph" className="font-medium">
                  Develop and deliver cutting-edge curricula
                </Typography>
              </li>
              <li>
                <Typography variant="paragraph" className="font-medium">
                  Support students through mentorship and career services
                </Typography>
              </li>
            </ul>
            <Typography variant="paragraph" className="font-medium">
              Every dollar you donate makes a direct impact on the lives of our
              students.
            </Typography>

            <div className="flex gap-x-4 mt-7">
              <Button
                className="bg-yellow text-violet shadow-none font-bold px-5 sm:px-8 md:px-10 rounded-md"
                variant="filled"
              >
                Donate Now
              </Button>
            </div>
          </div>
          <div className="max-w-[540px] relative z-10">
            <Image
              src="/people/exp7.jpg"
              alt="picture"
              className="w-[540px] h-[504px] object-cover rounded-none"
              width={540}
              height={540}
            />
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="mt-20 flex flex-col gap-6 md:flex-row">
        <div>
          <Image
            src="/people/part2.jpg"
            width={720}
            height={384}
            alt=""
            className="object-cover !h-[calc(100vh-64px-40px)] rounded-r-[33%]"
          />
        </div>
        <div className="relative">
          <div className="p-4 relative z-10">
            <Typography variant="h3" className="text-violet">
              Request a Meeting
            </Typography>
            <Typography
              variant="paragraph"
              className="text-textColor text-lg max-w-xl mt-4"
            >
              Interested in partnering with Codetrain? We’d love to hear from
              you! Fill out the form below, and our partnership team will get in
              touch with you to discuss how we can work together.
            </Typography>
            <form className="mt-8">
              <div className="w-full">
                <label className="text-violet text-lg">Full Name</label>
                <Input variant="outlined" />
              </div>
              <div className="w-full mt-6">
                <label className="text-violet text-lg">Organization Name</label>
                <Input variant="outlined" />
              </div>
              <div className="w-full mt-6">
                <label className="text-violet text-lg">Email Address</label>
                <Input variant="outlined" />
              </div>
              <div className="w-full mt-6">
                <label className="text-violet text-lg">Message</label>
                <Textarea
                  variant="outlined"
                  placeholder="Type your message here..."
                  className="placeholder-textColor"
                />
              </div>

              <Button
                fullWidth
                className="bg-yellow text-violet mt-6"
                type="submit"
              >
                Request A Meeting
              </Button>
            </form>
          </div>
          <CTLogo
            className="absolute h-full md:h-auto top-0 left-0 object-cover text-[#e0e0e0] opacity-15"
            color="#c2c0c0"
          />
        </div>
      </section>
    </section>
  );
};

export default Donate;
