"use client";

import { createContext } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import CTLogo from "@/public/icons/CTLogo";
import BgLogoLeft from "@/public/icons/BgLogoLeft";
import BgLogoRight from "@/public/icons/BgLogoRight";
import ExperienceCard from "@/components/ExperienceCard";

const SuccessStories = () => {
  return (
    <section className="overflow-hidden">
      <div className="py-2 bg-violet text-xs md:text-base text-center text-white flex items-center justify-center">
        <p>Get to know more about Codetrain. Join our info session.🗣️ </p>
      </div>

      {/* Hero Section */}
      <section className="min-h-[calc(80vh-64px-40px)] lg:min-h-[calc(100vh-64px-40px)] lg:pl-0 grid grid-cols-2 place-items-center gap-4">
        <div className="text-textColor py-10 px-4 leading-8 md:max-w-xl col-span-2 lg:col-span-1">
          <h2 className="text-2xl md:text-5xl text-violet font-bold">
            From Zero to Hero: Transforming Lives Through Code
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
          className="h-[70vh] w-full object-cover max-h-80vh absolute opacity-20 right-0 lg:hidden"
        />
      </section>

      {/* Journey to Success */}
      <section className="mt-20 bg-ash">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 px-4 py-8 sm:px-10 sm:py-36 bg-contain bg-center bg-no-repeat relative overflow-hidden">
          <CTLogo
            className="absolute size-[1080px] md:size-[800px] -left-3 md:left-20 lg:left-1/4  object-cover text-[#e0e0e0] opacity-[0.5]"
            color="#c2c0c0"
          />
          <div className="relative z-10">
            <h1 className="font-bold max-w-lg text-violet text-2xl sm:text-4xl">
              Journey to Success: How Our Bootcamp Transformed My Career
            </h1>
            <p className="max-w-lg mt-4 text-textColor leading-6 text-base sm:text-lg">
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
          </div>

          <Card className="max-w-[540px] overflow-hidden rounded-none">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
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
            </CardHeader>
            <CardBody>
              <Typography
                variant="lead"
                className="mt-3 font-bold text-textColor"
              >
                Inspiring story of how Ama started her journey in tech and is
                now a software engineer
              </Typography>
            </CardBody>
            <hr className="border-violet h-1" />
            <CardFooter className="">
              <Typography className="font-normal text-textColor">
                Software Engineer
              </Typography>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Overcoming Challenges */}
      <section className="py-2 px-4 min-h-[70vh] bg-[url('https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover bg-no-repeat bg-center flex justify-start items-end">
        <div className="max-w-md bg-white px-8 py-5">
          <Typography variant="h4" className="text-violet">
            Overcoming Challenges: A Sickle Cell Warrior&apos;s Journey into
            Tech
          </Typography>
          <Typography variant="paragraph" className="text-textColor mt-2">
            Join us for a series of engaging and informative conferences
            designed to enhance your learning and networking opportunities:
          </Typography>
        </div>
      </section>
      <section className="px-4 bg-ash">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 py-10 bg-contain bg-center bg-no-repeat relative">
          <div className="max-w-[540px] relative z-10">
            <Image
              src="https://images.pexels.com/photos/11558845/pexels-photo-11558845.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
              alt="picture"
              className="!h-full rounded-none"
              width={540}
              height={540}
            />
          </div>
          <div className="relative z-10 text-textColor">
            <div className="max-w-lg">
              <Typography variant="lead" className="text-textColor text-lg">
                Project-based learning is our way. At code train, you learn by
                doing. From your first day to your last, you’re graded on actual
                work that is similar to what you’ll be doing on the job. If it
                has no application in the industry, we don’t bother with it.
              </Typography>
              <Typography
                variant="lead"
                className="text-textColor text-lg mt-5"
              >
                Project-based learning is our way. At code train, you learn by
                doing. From your first day to your last,
              </Typography>
              <Typography variant="lead" className="text- text-lg mt-5">
                you’re graded on actual work that is similar to what you’ll be
                doing on the job. If it has no application in the industry, we
                don’t bother with it.
              </Typography>
              <Typography variant="lead" className="text- text-lg mt-5">
                Project-based learning is our way. At code train, you learn by
                doing. From your first day to your last,
              </Typography>
              <Typography variant="lead" className="text- text-lg mt-5">
                you’re graded on actual work that is similar to what you’ll be
                doing on the job. If it has no application in the industry, we
                don’t bother with it.
              </Typography>
              <Typography variant="lead" className="text- text-lg mt-5">
                Project-based learning is our way. At code train, you learn by
                doing. From your first day to your last, you’re
              </Typography>
            </div>
          </div>
        </div>
      </section>

      {/* Catalysts of Success: Our Journey with Companies */}
      <section className="py-20 px-4 relative bg-ash">
        <div className="text-center relative z-10">
          <h3 className="text-2xl md:text-4xl text-violet font-semibold">
            Catalysts of Success: Our Journey with Companies
          </h3>
          <p className="max-w-4xl mt-7 mx-auto text-base text-textColor">
            Our campus is fully open to students, offering a wide range of
            services that are available free of charge. Enjoy access to
            state-of-the-art facilities, study areas, and various student
            support services designed to enhance your learning experience and
            success.
          </p>
        </div>
        <div className="flex flex-col gap-14 items-center mt-10 relative z-10">
          <ExperienceCard
            img="https://images.pexels.com/photos/27057568/pexels-photo-27057568/free-photo-of-a-group-of-seagulls-sitting-on-top-of-an-iceberg.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            title="Fueling Innovation: Success Stories with Our Investors"
            text="Project-based learning is our way. At code train, you learn by doing. From your first day to your last, you’re graded on actual work that is similar to what you’ll be doing on the job. If it has no application in the industry, we don’t bother with it."
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
        </div>
        {/* svg bg logos */}
        {/* <BgLogoLeft className="absolute size-72 md:size-2/4 fill-pink opacity-15 bottom-0 left-60" /> */}
        {/* <BgLogoRight className="absolute size-72 md:size-2/4 fill-pink opacity-15 top-4 left-60" /> */}
      </section>

      {/* Success Stories From Codetrain Africa */}
      <section className="py-20 px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start lg:justify-center gap-14">
          <div>
            <SuccessCard
              src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1200"
              role="Software Engineer at Microsoft"
              name="Lee"
              story="lorem dmcjk wdkwldewdm, emdnwl,dm dwjdnwdwd, dekdjdnfkejfnbsvc jndk"
            />
          </div>
          <div>
            <div className="mb-5">
              <h3 className="text-violet font-bold text-3xl md:text-5xl max-w-xl">
                Success Stories From Codetrain Africa
              </h3>
              <p className="text-textColor max-w-lg mt-4">
                Lorem ipsum{" "}
                <span className="font-bold">dolor sit amet consectetur.</span>{" "}
                Mauris pellentesque porta donec enim tellus nibh adipiscing
                arcu. Et mi pellentesque lorem tellus eget nulla. Vulputate
                iaculis magnis aenean integer.
              </p>
            </div>
            <SuccessCard
              src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1200"
              role="Software Engineer at Microsoft"
              name="Lee"
              story="lorem dmcjk wdkwldewdm, emdnwl,dm dwjdnwdwd, dekdjdnfkejfnbsvc jndk"
            />
          </div>
        </div>
        {/* Stories */}
        <div className="mt-5 grid gap-10 place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <SuccessCard
            src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1200"
            role="Software Engineer at Microsoft"
            name="Lee"
            story="lorem dmcjk wdkwldewdm, emdnwl,dm dwjdnwdwd, dekdjdnfkejfnbsvc jndk"
          />
          <SuccessCard
            src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1200"
            role="Software Engineer at Microsoft"
            name="Lee"
            story="lorem dmcjk wdkwldewdm, emdnwl,dm dwjdnwdwd, dekdjdnfkejfnbsvc jndk"
          />
          <SuccessCard
            src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1200"
            role="Software Engineer at Microsoft"
            name="Lee"
            story="lorem dmcjk wdkwldewdm, emdnwl,dm dwjdnwdwd, dekdjdnfkejfnbsvc jndk"
          />
          <SuccessCard
            src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1200"
            role="Software Engineer at Microsoft"
            name="Lee"
            story="lorem dmcjk wdkwldewdm, emdnwl,dm dwjdnwdwd, dekdjdnfkejfnbsvc jndk"
          />
          <SuccessCard
            src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1200"
            role="Software Engineer at Microsoft"
            name="Lee"
            story="lorem dmcjk wdkwldewdm, emdnwl,dm dwjdnwdwd, dekdjdnfkejfnbsvc jndk"
          />
          <SuccessCard
            src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1200"
            role="Software Engineer at Microsoft"
            name="Lee"
            story="lorem dmcjk wdkwldewdm, emdnwl,dm dwjdnwdwd, dekdjdnfkejfnbsvc jndk"
          />
          <SuccessCard
            src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1200"
            role="Software Engineer at Microsoft"
            name="Lee"
            story="lorem dmcjk wdkwldewdm, emdnwl,dm dwjdnwdwd, dekdjdnfkejfnbsvc jndk"
          />
          <SuccessCard
            src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1200"
            role="Software Engineer at Microsoft"
            name="Lee"
            story="lorem dmcjk wdkwldewdm, emdnwl,dm dwjdnwdwd, dekdjdnfkejfnbsvc jndk"
          />
          <SuccessCard
            src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1200"
            role="Software Engineer at Microsoft"
            name="Lee"
            story="lorem dmcjk wdkwldewdm, emdnwl,dm dwjdnwdwd, dekdjdnfkejfnbsvc jndk"
          />
          <SuccessCard
            src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1200"
            role="Software Engineer at Microsoft"
            name="Lee"
            story="lorem dmcjk wdkwldewdm, emdnwl,dm dwjdnwdwd, dekdjdnfkejfnbsvc jndk"
          />
          <SuccessCard
            src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1200"
            role="Software Engineer at Microsoft"
            name="Lee"
            story="lorem dmcjk wdkwldewdm, emdnwl,dm dwjdnwdwd, dekdjdnfkejfnbsvc jndk"
          />
          <SuccessCard
            src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1200"
            role="Software Engineer at Microsoft"
            name="Lee"
            story="lorem dmcjk wdkwldewdm, emdnwl,dm dwjdnwdwd, dekdjdnfkejfnbsvc jndk"
          />
        </div>
      </section>

      {/* New Beginnings: Men's Success Stories in Tech */}
      <section className="py-20 px-4 bg-ash relative">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="relative z-10">
            <Image
              src="https://images.pexels.com/photos/27553257/pexels-photo-27553257/free-photo-of-processed-with-vsco-with-m5-preset.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
              alt="picture"
              className="h-[534px] w-[413px] object-cover rounded-none"
              width={540}
              height={540}
            />
          </div>
          <div className="sm:max-w-sm relative z-10">
            <Typography variant="h4" className="text-violet md:text-4xl">
              New Beginnings: Men&apos;s Success Stories in Tech
            </Typography>
            <Typography variant="paragraph" className="text-textColor mt-2">
              Project-based learning is our way. At code train, you learn by
              doing. From your first day to your last, you’re graded on actual
              work that is similar to what you’ll be doing on the job. If it has
              no application in the industry, we don’t bother with it.
              Project-based learning is our way. At code train, you learn by
              doing. From your first day to your last, you’re graded on actual
              work that is similar to what you’ll be doing on the job. If it has
              no application in the industry, we don’t bother with it.
              Project-based learning is our way. At code train, you learn by
              doing. From your first day to your last, you’re graded on actual
              work that is similar to what
            </Typography>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 place-items-center mt-16 z-10 relative">
          <Image
            src="https://images.pexels.com/photos/27363340/pexels-photo-27363340/free-photo-of-burano.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            alt=""
            width={230}
            height={167}
            className="object-cover"
          />
          <Image
            src="https://images.pexels.com/photos/27363340/pexels-photo-27363340/free-photo-of-burano.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            alt=""
            width={230}
            height={167}
            className="object-cover"
          />
          <Image
            src="https://images.pexels.com/photos/27363340/pexels-photo-27363340/free-photo-of-burano.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            alt=""
            width={230}
            height={167}
            className=" object-cover"
          />
          <Image
            src="https://images.pexels.com/photos/27363340/pexels-photo-27363340/free-photo-of-burano.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            alt=""
            width={230}
            height={167}
            className=" object-cover"
          />
        </div>
        {/* Bg Logos */}
        <BgLogoLeft className="absolute size-72 fill-indigo opacity-15 bottom-0 left-0" />
        <BgLogoRight className="absolute size-72 fill-indigo opacity-15 top-0 left-0" />
      </section>

      {/* Changing Lives: Empowering Women In The Tech Space. */}
      <section className="py-2 px-4 min-h-[70vh] bg-[url('https://images.pexels.com/photos/11643548/pexels-photo-11643548.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load')] bg-cover bg-no-repeat bg-center flex justify-end items-end">
        <div className="max-w-md bg-white px-8 py-5">
          <Typography variant="h4" className="text-violet">
            Changing Lives: Empowering Women In The Tech Space.
          </Typography>
          <Typography variant="paragraph" className="text-textColor mt-2">
            Join us for a series of engaging and informative conferences
            designed to enhance your learning and networking opportunities:
          </Typography>
        </div>
      </section>
      <section className="py-20 px-4 text-textColor flex flex-col md:flex-row justify-center gap-10 relative">
        <div className="relative z-10">
          <Typography variant="paragraph" className="max-w-md text-textColor ">
            Project-based learning is our way. At code train, you learn by
            doing. From your first day to your last, you’re graded on actual
            work that is similar to what you’ll be doing on the job. If it has
            no application in the industry, we don’t bother with it.
          </Typography>

          <Typography
            variant="paragraph"
            className="max-w-lg text-textColor mt-3"
          >
            Project-based learning is our way. At code train, you learn by
            doing. From your first day to your last,
          </Typography>

          <Typography className="max-w-lg text-textColor mt-3">
            you’re graded on actual work that is similar to what you’ll be doing
            on the job. If it has no application in the industry, we don’t
            bother with it.
          </Typography>

          <Typography className="max-w-lg text-textColor mt-3">
            Project-based learning is our way. At code train, you learn by
            doing. From your first day to your last,
          </Typography>

          <Typography className="max-w-lg text-textColor mt-3">
            you’re graded on actual work that is similar to what you’ll be doing
            on the job. If it has no application in the industry, we don’t
            bother with it.
          </Typography>

          <Typography className="max-w-lg text-textColor mt-3">
            Project-based learning is our way. At code train, you learn by
            doing. From your first day to your last, you’re
          </Typography>
        </div>
        <div className="relative">
          <Image
            src="/images/Group 61.png"
            width={300}
            height={200}
            alt=""
            className="object-cover h-full w-full flex flex-1"
          />
          <BgLogoLeft className="absolute size-56 fill-yellow -bottom-10 -right-10" />
        </div>
        <BgLogoRight className="absolute fill-yellow opacity-[0.3] size-96 top-0 left-0" />
      </section>

      {/* Excellence Recognized: Discover Our Award-Winning Achievements */}
      <section className="py-20 px-4 bg-ash">
        <div className="text-center relative z-10">
          <h3 className="text-2xl md:text-4xl max-w-4xl mx-auto text-violet font-semibold">
            Excellence Recognized: Discover Our Award-Winning Achievements
          </h3>
          <p className="max-w-4xl mt-7 mx-auto text-base text-textColor">
            Lorem ipsum dolor sit amet consectetur. Felis eu euismod placerat
            libero lacus eu morbi. Quam ullamcorper adipiscing eget porttitor
            vitae eget aliquam imperdiet. Sagittis nunc vulputate magna eu sed
            et. Aenean commodo amet amet lacinia amet porttitor diam.
          </p>
        </div>
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
        </div>
      </section>

      {/* New Beginnings: Men's Success Stories in Tech */}
      <section className="py-20 px-4 relative">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="sm:max-w-md relative z-10">
            <Typography variant="h4" className="text-violet md:text-4xl">
              Breaking Barriers: A Middle-Aged Woman&apos;s Inspiring Journey
              into Tech
            </Typography>
            <Typography variant="paragraph" className="text-textColor mt-2">
              Project-based learning is our way. At code train, you learn by
              doing. From your first day to your last, you’re graded on actual
              work that is similar to what you’ll be doing on the job.
            </Typography>
            <Typography variant="paragraph" className="text-textColor mt-2">
              If it has no application in the industry, we don’t bother with it.
              Project-based learning is our way. At code train, you learn by
              doing. From your first day to your last,
            </Typography>
            <Typography variant="paragraph" className="text-textColor mt-2">
              you’re graded on actual work that is similar to what you’ll be
              doing on the job. If it has no application in the industry, we
              don’t bother with it.
            </Typography>
          </div>
          <div className="relative z-10">
            <Image
              src="https://images.pexels.com/photos/27553257/pexels-photo-27553257/free-photo-of-processed-with-vsco-with-m5-preset.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
              alt="picture"
              className="h-[534px] w-[413px] object-cover rounded-none"
              width={540}
              height={540}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 place-items-center place-content-center mt-16 z-10 relative">
          <Image
            src="https://images.pexels.com/photos/27363340/pexels-photo-27363340/free-photo-of-burano.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            alt=""
            width={230}
            height={167}
            className="object-cover"
          />
          <Image
            src="https://images.pexels.com/photos/27363340/pexels-photo-27363340/free-photo-of-burano.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            alt=""
            width={230}
            height={167}
            className="object-cover"
          />
          <Image
            src="https://images.pexels.com/photos/27363340/pexels-photo-27363340/free-photo-of-burano.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            alt=""
            width={230}
            height={167}
            className=" object-cover"
          />
          <Image
            src="https://images.pexels.com/photos/27363340/pexels-photo-27363340/free-photo-of-burano.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            alt=""
            width={230}
            height={167}
            className=" object-cover"
          />
        </div>
        {/* Bg Logos */}
        <BgLogoLeft className="absolute size-72 fill-indigo opacity-15 bottom-0 left-0" />
        <BgLogoRight className="absolute size-72 fill-indigo opacity-15 top-0 left-0" />
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
export default SuccessStories;

const SuccessCard = ({ src, name, story, role }) => {
  return (
    <Card className="max-w-[572px] max-h-[767px] rounded-none">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <Image
          src={src}
          alt={name}
          width={540}
          height={276}
          className="overflow-hidden object-cover w-full"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="paragraph" className=" text-textColor">
          {story}
        </Typography>
      </CardBody>
      <hr className="border-violet h-1" />
      <CardFooter>
        <Typography className="font-bold text-textColor">{name}</Typography>
        <Typography className="font-normal text-textColor">{role}</Typography>
      </CardFooter>
    </Card>
  );
};
