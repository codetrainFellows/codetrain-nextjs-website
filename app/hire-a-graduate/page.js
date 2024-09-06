"use client";

import ExperienceCard from "@/components/ExperienceCard";
import { inMedia } from "@/constants/constants";
import BgLogoLeft from "@/public/icons/BgLogoLeft";
import BgLogoRight from "@/public/icons/BgLogoRight";
import CTLogo from "@/public/icons/CTLogo";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Carousel,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";

const HireAGraduate = () => {
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
  ];
  return (
    <section className="overflow-hidden">
      <div className="py-2 bg-violet text-xs md:text-base text-center text-white flex items-center justify-center">
        <p>Get to know more about Codetrain. Join our info session.🗣️ </p>
      </div>

      {/* Hero Section */}
      <section className="min-h-[calc(80vh-64px-40px)] lg:min-h-[calc(100vh-64px-40px)] bg-ash lg:pl-0 grid grid-cols-2 place-items-center gap-4">
        <div className="text-textColo py-10 px-4 leading-8 md:max-w-xl col-span-2 lg:col-span-1">
          <h2 className="text-2xl md:text-5xl text-violet font-bold">
            Hire a Grad: Unlock the Potential of Tomorrow&rsquo;s Tech Leaders
            Today!
          </h2>
          <Typography
            variant="paragraph"
            className="my-8 text-lg text-textColor"
          >
            At Codetrain, we believe in the transformative power of technology
            education. Our mission is to equip the next generation of software
            developers with the skills they need to excel in the rapidly
            evolving tech landscape. To achieve this, we are looking to build
            strategic partnerships with organizations that share our vision for
            a more inclusive and innovative tech industry.
          </Typography>

          <Button className="bg-yellow text-violet">Get In Touch</Button>
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

      {/* What Our Students Offer */}
      <section className="py-20 px-4">
        <Typography variant="h3" className="text-center text-violet">
          What Our Students Offer
        </Typography>
        <Typography
          variant="paragraph"
          className="text-center text-textColor max-w-6xl mx-auto mt-4"
        >
          Lorem ipsum dolor sit amet consectetur. Mauris pellentesque porta
          donec enim tellus nibh adipiscing arcu. Et mi pellentesque lorem
          tellus eget nulla. Vulputate iaculis magnis aenean integer. Ultrices
          id aliquet elementum id elit quis lectus rutrum nec..
        </Typography>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
            <div className="max-w-xs">
              <Typography variant="h5" className="text-violet">
                Proficiency in Programming Languages
              </Typography>
              <Typography
                variant="paragraph"
                className="text-lg text-textColor mt-3"
              >
                Strong analytical and problem-solving skills, honed through
                hands-on coding challenges, projects, and real-world
                problem-solving scenarios encountered during the bootcamp.
              </Typography>
            </div>
            <div className="max-w-xs">
              <Typography variant="h5" className="text-violet">
                Web Development Expertise
              </Typography>
              <Typography
                variant="paragraph"
                className="text-lg text-textColor mt-3"
              >
                Effective communication, teamwork, time management, and
                adaptability skills, essential for thriving in dynamic tech
                environments and collaborating with diverse teams and
                stakeholders.
              </Typography>
            </div>
            <div className="max-w-xs">
              <Typography variant="h5" className="text-violet">
                Full-stack Development
              </Typography>
              <Typography
                variant="paragraph"
                className="text-lg text-textColor mt-3"
              >
                Experience working in Agile environments, with knowledge of
                Agile frameworks such as Scrum or Kanban, enabling graduates to
                collaborate effectively in fast-paced development teams.
              </Typography>
            </div>
            <div className="max-w-xs">
              <Typography variant="h5" className="text-violet">
                Mobile App Development
              </Typography>
              <Typography
                variant="paragraph"
                className="text-lg text-textColor mt-3"
              >
                Experience in developing mobile applications for iOS and Android
                platforms using frameworks such as React Native, Flutter, or
                native development tools like Swift and Kotlin.
              </Typography>
            </div>
          </div>
          <div className="mt-10 md:mt-0 relative z-10">
            <Image
              alt="computer"
              src="/images/computer.png"
              width={450}
              height={384}
              className="!max-w-full"
            />
            <BgLogoLeft className="absolute size-56 md:size-96 -bottom-20 md:-bottom-52 right-0 z-10 fill-yellow" />
          </div>
          <BgLogoRight className="absolute size-96 md:size-[430px] lg:size-[600px] -top-80 md:-top-56 lg:-top-80 left-0 fill-yellow opacity-10" />
        </div>
      </section>

      {/* Highlights Of The Students */}
      <section className="py-20 px-4 bg-lightBlue lg:h-[487px] mb-96 relative">
        <div className="relative z-10">
          <Typography className="text-center text-white text-lg font-extrabold">
            Highlights Of The Students
          </Typography>
          <Typography
            variant="h1"
            className="text-center text-white text-4xl mx-auto mt-4"
          >
            Spotlight Of Some Of Our Notable Students
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10 mt-20 lg:translate-y-6 relative z-10">
          <Card className="sm:max-w-sm rounded-none shadow-lg">
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
          <Card className="sm:max-w-sm rounded-none shadow-lg">
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
          <Card className="sm:max-w-sm rounded-none shadow-lg">
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
        <div className="flex justify-center">
          <CTLogo
            className="absolute size-[980px] mx-auto -top-14 object-cover opacity-30"
            color="#ffffff"
          />
        </div>
      </section>

      {/* Our Partners And Suporters */}
      <section className="border border-textColor py-16 shadow-lg">
        <Typography variant="h3" className="text-violet text-center">
          Our Partners And Suporter&apos;s
        </Typography>

        <div className="grid place-items-center place-content-center grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 mt-12">
          {inMedia.map((sponsor) => (
            <div key={sponsor.name}>
              <Image
                src={sponsor.src}
                alt={sponsor.name}
                width={100}
                height={60}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Join Our Career Fairs, And Mixers To Meet And Interact With Our Talented Graduates. */}
      <section className="py-20 px-4 bg-ash relative mt-20">
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
          <div className="sm:max-w-md relative z-10">
            <Typography variant="h4" className="text-violet md:text-4xl">
              Join Our Career Fairs, And Mixers To Meet And Interact With Our
              Talented Graduates.
            </Typography>
            <Typography variant="paragraph" className="text-textColor mt-2">
              Our career fairs and mixers provide an excellent platform to meet
              and interact with our talented graduates. These events allow you
              to connect with emerging tech professionals and see their skills
              in action.
            </Typography>
            <Typography variant="paragraph" className="text-textColor mt-2">
              Discover how our graduates are shaping the future of technology.
              Engage with them to explore potential opportunities and see
              firsthand the impact of their expertise on the industry.
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
        <BgLogoLeft className="absolute size-96 md:size-[789px] fill-indigo opacity-15 -top-32 right-0" />
        <BgLogoLeft className="absolute size-96 fill-indigo bottom-0 right-0" />
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 relative">
        <div className="text-center z-10">
          <h3 className="text-2xl md:text-4xl text-violet font-semibold">
            Why Hire From Codetrain
          </h3>
          <p className="max-w-5xl mt-7 mx-auto text-xl text-textColor">
            Hiring from Codetrain means bringing on board top-tier tech talent
            equipped with practical skills and industry-ready experience. Our
            rigorous training programs ensure that graduates are proficient in
            coding and problem-solving, ready to make immediate contributions
            and drive innovation in your organization.
          </p>
        </div>
        <div className="flex flex-col gap-14 items-center mt-10 z-10">
          <ExperienceCard
            img="https://images.pexels.com/photos/27057568/pexels-photo-27057568/free-photo-of-a-group-of-seagulls-sitting-on-top-of-an-iceberg.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            title="Problem-solving Abilities"
            text="Our coding bootcamp offers personalized learning paths designed to cater to the diverse needs and aspirations of each student, ensuring that they receive the support and guidance needed to succeed in their journey towards becoming proficient developers or designers"
            className="lg:flex-row"
          />
          <ExperienceCard
            img="https://images.pexels.com/photos/27057568/pexels-photo-27057568/free-photo-of-a-group-of-seagulls-sitting-on-top-of-an-iceberg.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            title="Soft Skills"
            text="Soft skills are crucial for navigating the tech industry and succeeding in a professional environment. We focus on developing these essential abilities, such as communication, problem-solving, and teamwork, to complement technical skills. By honing these soft skills, our students are better prepared to thrive in diverse work settings, collaborate effectively with peers, and adapt to evolving challenges in their careers."
            className="lg:flex-row-reverse"
          />
          <ExperienceCard
            img="https://images.pexels.com/photos/27057568/pexels-photo-27057568/free-photo-of-a-group-of-seagulls-sitting-on-top-of-an-iceberg.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            title="Agile Methodologies"
            text="Agile methodologies are central to our approach, emphasizing flexibility, collaboration, and continuous improvement. By adopting Agile principles, our students learn to adapt quickly to changing requirements and deliver high-quality results efficiently. This hands-on approach equips them with the skills to excel in dynamic tech environments, ensuring they are well-prepared for the demands of modern software development."
            className="lg:flex-row"
          />
          <ExperienceCard
            img="https://images.pexels.com/photos/27057568/pexels-photo-27057568/free-photo-of-a-group-of-seagulls-sitting-on-top-of-an-iceberg.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            title="Exceptional Teamwork Skills"
            text="Our emphasis on exceptional teamwork skills equips students to thrive in collaborative environments. By working on diverse projects and engaging in group activities, students learn to communicate effectively, share responsibilities, and leverage each other's strengths. This hands-on approach fosters a culture of cooperation and mutual support, preparing them to excel in dynamic tech teams and contribute meaningfully to their future workplaces."
            className="lg:flex-row-reverse"
          />
        </div>
        {/* svg bg logos */}
        <BgLogoLeft className="fill-[#ff006e] opacity-10 absolute size-96 sm:size-[546px] top-0 right-0 lg:top-56 lg:right-56 sm:inline" />
        <BgLogoLeft className="fill-[#ff006e] opacity-10 absolute size-96 sm:size-[546px] bottom-[669px] left-5 lg:bottom-56 lg:left-56 sm:inline" />
      </section>

      {/* Reviews */}
      <Carousel
        className="py-10 md:py-20 bg-[#7A3CE373] text-white"
        navigation={false}
        loop={true}
        autoplay={true}
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-4 -translate-y-2/4 md:bg-white rounded-full hover:bg-blue-gray-100"
          >
            <ChevronLeftIcon className="h-6 w-6 text-black" />
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 !right-4 -translate-y-2/4 md:bg-white rounded-full hover:bg-blue-gray-100"
          >
            <ChevronRightIcon className="h-6 w-6 text-black" />
          </IconButton>
        )}
      >
        <div className="text-center px-10">
          <Typography variant="lead" className="max-w-6xl mx-auto">
            “Lorem ipsum dolor sit amet consectetur. Mauris pellentesque porta
            donec enim tellus nibh adipiscing arcu. Et mi pellentesque lorem
            tellus eget nulla. Vulputate iaculis magnis aenean integer.”
          </Typography>
          <Typography variant="h6">Ama Boadi</Typography>
          <Typography variant="paragraph">Human Resources Manager,</Typography>
        </div>
        <div className="text-center px-10">
          <Typography variant="lead" className="max-w-6xl mx-auto">
            “Lorem ipsum dolor sit amet consectetur. Mauris pellentesque porta
            donec enim tellus nibh adipiscing arcu. Et mi pellentesque lorem
            tellus eget nulla. Vulputate iaculis magnis aenean integer.”
          </Typography>
          <Typography variant="h6">Ama Boadi</Typography>
          <Typography variant="paragraph">Human Resources Manager,</Typography>
        </div>
        <div className="text-center px-10">
          <Typography variant="lead" className="max-w-6xl mx-auto">
            “Lorem ipsum dolor sit amet consectetur. Mauris pellentesque porta
            donec enim tellus nibh adipiscing arcu. Et mi pellentesque lorem
            tellus eget nulla. Vulputate iaculis magnis aenean integer.”
          </Typography>
          <Typography variant="h6">Ama Boadi</Typography>
          <Typography variant="paragraph">Human Resources Manager,</Typography>
        </div>
        <div className="text-center px-10">
          <Typography variant="lead" className="max-w-6xl mx-auto">
            “Lorem ipsum dolor sit amet consectetur. Mauris pellentesque porta
            donec enim tellus nibh adipiscing arcu. Et mi pellentesque lorem
            tellus eget nulla. Vulputate iaculis magnis aenean integer.”
          </Typography>
          <Typography variant="h6">Ama Boadi</Typography>
          <Typography variant="paragraph">Human Resources Manager,</Typography>
        </div>
      </Carousel>

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

export default HireAGraduate;
