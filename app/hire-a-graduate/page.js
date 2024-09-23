"use client";

import ExcitedCareer from "@/components/ExcitedCareer";
import ExperienceCard from "@/components/ExperienceCard";
import { hireOurStudents } from "@/constants/constants";
import BgLogoLeft from "@/public/icons/BgLogoLeft";
import BgLogoRight from "@/public/icons/BgLogoRight";
import CTLogo from "@/public/icons/CTLogo";

import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

const HireAGraduate = () => {
  const applicationProcess = [
    {
      id: 1,
      title: "Fill the form to hire a grad",
    },
    {
      id: 2,
      title: "Codetrain Career Services will reach out to set up a call",
    },
    {
      id: 3,
      title: "Get resumes of ideal candidate and start interviewing",
    },
  ];
  return (
    <section className="overflow-hidden">
      <div className="py-2 bg-violet text-xs md:text-base text-center text-white flex items-center justify-center">
        <Link
          href="https://codetrainafrica.heiapply.com/application"
          target="_blank"
          className="hover:underline"
        >
          <p>Get to know more about Codetrain. Join our info session.🗣️</p>
        </Link>
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
            By hiring a Codetrain graduate, you`re investing in a highly
            skilled, tech-savvy professional who has been rigorously trained in
            the latest technologies and development practices. Our graduates are
            equipped with hands-on experience and a strong problem-solving
            mindset, ready to tackle real-world challenges and drive innovation
            in your organization. Embrace the opportunity to bring fresh
            perspectives and top-tier talent to your team—unlock the potential
            of tomorrow`s tech leaders today.
          </Typography>

          <Button className="bg-yellow text-violet">Hire A Grad</Button>
        </div>
        <div className="hidden lg:inline">
          <Image
            src="/people/hero-grad.jpg"
            width={720}
            height={384}
            alt=""
            className="object-cover !h-[calc(100vh-64px-40px)]"
          />
        </div>
        <Image
          src="/people/hero-grad.jpg"
          alt=""
          width={720}
          height={384}
          className="h-[84vh] w-full object-cover absolute opacity-20 right-0 lg:hidden"
        />
      </section>

      {/* What Our Students Offer */}
      <section className="py-20 px-4">
        <Typography variant="h3" className="text-center text-violet">
          Our Curriculum
        </Typography>
        <Typography
          variant="paragraph"
          className="text-center text-textColor max-w-6xl mx-auto mt-4"
        >
          Full-stack Developer and then UX/UI Designer
        </Typography>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
            <div className="max-w-lg">
              <Typography variant="h5" className="text-violet">
                Full-stack Developer
              </Typography>
              <Typography
                variant="paragraph"
                className="text-lg text-textColor mt-3"
              >
                At Codetrain, we train students in{" "}
                <span className="font-bold">
                  MERN stack full-stack development
                </span>
                , offering a comprehensive learning experience in both front-end
                and back-end technologies. Students master key skills in
                <span className="font-bold">
                  {" "}
                  MongoDB, Express, React, and Node.js,
                </span>{" "}
                enabling them to build dynamic web applications from scratch.
                This in-depth training equips them with the versatility and
                expertise needed to handle complex projects and excel in a wide
                range of tech roles, making them valuable assets to any team.
              </Typography>
            </div>
            <div className="max-w-lg">
              <Typography variant="h5" className="text-violet">
                UX/UI Designer
              </Typography>
              <Typography
                variant="paragraph"
                className="text-lg text-textColor mt-3"
              >
                At Codetrain, our{" "}
                <span className="font-bold">UX/UI design</span> program offers a
                complete learning experience, focusing on user-centered design
                principles and modern design tools. Students gain proficiency in
                <span className="font-bold">
                  {" "}
                  design thinking, wireframing, prototyping, and usability
                  testing,
                </span>{" "}
                mastering tools like{" "}
                <span className="font-bold">Figma, Adobe XD, and Sketch</span>.
                This hands-on approach equips them to create intuitive, visually
                appealing digital products. With a strong foundation in both
                user experience and interface design, our graduates are prepared
                to deliver seamless user journeys and meet the demands of
                various tech roles
              </Typography>
            </div>
          </div>
        </div>
      </section>

      {/* Companies That Hired our Grads */}
      <section className="text-center py-12 px-10 shadow-md border-t border-t-black">
        <h1 className="text-xl md:text-2xl text-violet font-semibold">
          Companies That Hired our Graduates
        </h1>
        <div className="grid place-items-center grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-8 mt-12">
          {hireOurStudents.map((sponsor) =>
            sponsor.link ? (
              <Link
                href={sponsor.link && sponsor.link}
                key={sponsor.name}
                target="_blank"
              >
                <Image
                  src={sponsor.src}
                  alt={sponsor.name}
                  width={174}
                  height={100}
                  quality={100}
                  className={`${
                    sponsor.name === "Kaatch" ||
                    sponsor.name === "BlackInTech" ||
                    sponsor.name === "Infinitas"
                      ? "h-28 object-cover"
                      : ""
                  }`}
                />
              </Link>
            ) : (
              <Image
                key={sponsor.name}
                src={sponsor.src}
                alt={sponsor.name}
                width={174}
                height={100}
                quality={100}
                // className={`${
                //   sponsor.name === "Kaatch" ||
                //   sponsor.name === "BlackInTech" ||
                //   sponsor.name === "Infinitas"
                //     ? "h-28 object-cover"
                //     : ""
                // }`}
              />
            )
          )}
        </div>
      </section>

      {/* Join Our Career Fairs, And Mixers To Meet And Interact With Our Talented Graduates. */}
      <section className="py-20 px-4 bg-ash relative mt-20">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="relative z-10">
            <Image
              src="/people/grad-pic.jpg"
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
            <Typography
              variant="paragraph"
              className="text-textColor mt-2 font-medium"
            >
              Our career fairs and mixers provide an excellent platform to meet
              and interact with our talented graduates. These events allow you
              to connect with emerging tech professionals and see their skills
              in action.
            </Typography>
            <Typography
              variant="paragraph"
              className="text-textColor mt-2 font-medium"
            >
              Discover how our graduates are shaping the future of technology.
              Engage with them to explore potential opportunities and see
              firsthand the impact of their expertise on the industry.
            </Typography>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 place-items-center mt-16 z-10 relative">
          <Image
            src="/people/Lovelace.jpg"
            alt=""
            width={230}
            height={167}
            className="object-cover h-[230px] w-auto"
          />
          <Image
            src="/people/group1.jpg"
            alt=""
            width={230}
            height={167}
            className="object-cover h-[230px] w-auto"
          />
          <Image
            src="/people/group2.jpg"
            alt=""
            width={230}
            height={167}
            className=" object-cover h-[230px] w-auto"
          />
          <Image
            src="/people/group4.jpg"
            alt=""
            width={230}
            height={167}
            className=" object-cover h-[230px] w-auto"
          />
        </div>
        {/* Bg Logos */}
        <BgLogoLeft className="absolute size-96 md:size-[789px] fill-indigo opacity-15 -top-32 right-0" />
        <BgLogoLeft className="absolute size-96 fill-indigo bottom-0 right-0" />
      </section>

      {/*  Why Hire From Codetrain */}
      <section className="py-20 px-4 relative">
        <div className="text-center z-10">
          <h3 className="text-2xl md:text-4xl text-violet font-semibold">
            Why Hire From Codetrain
          </h3>
          <Typography
            variant="paragraph"
            className="max-w-5xl mt-7 mx-auto text-lg text-textColor"
          >
            Hiring from Codetrain means bringing on board top-tier tech talent
            equipped with practical skills and industry-ready experience. Our
            rigorous training programs ensure that graduates are proficient in
            coding and problem-solving, ready to make immediate contributions
            and drive innovation in your organization.
          </Typography>
        </div>
        <div className="flex flex-col gap-14 items-center mt-10 z-10">
          <ExperienceCard
            img="/people/grad-pic1.jpg"
            title="Problem-solving Abilities"
            text="Our coding bootcamp offers personalized learning paths designed to cater to the diverse needs and aspirations of each student, ensuring that they receive the support and guidance needed to succeed in their journey towards becoming proficient developers or designers"
            className="lg:flex-row"
          />
          <ExperienceCard
            img="/people/succes5.jpg"
            title="Soft Skills"
            text="Developing problem-solving abilities is central to our training approach, equipping students with the skills to tackle complex challenges in tech. Our hands-on curriculum and real-world projects encourage creative thinking and adaptive solutions, ensuring that graduates are not only proficient in coding but also adept at addressing diverse technical issues. This focus on problem-solving prepares our students to excel in dynamic tech environments and make meaningful contributions to their future employers."
            className="lg:flex-row-reverse"
            imgClass="h-[267px] object-cover object-top"
          />
          <ExperienceCard
            img="/people/grad-pic2.jpg"
            title="Agile Methodologies"
            text="Agile methodologies are central to our approach, emphasizing flexibility, collaboration, and continuous improvement. By adopting Agile principles, our students learn to adapt quickly to changing requirements and deliver high-quality results efficiently. This hands-on approach equips them with the skills to excel in dynamic tech environments, ensuring they are well-prepared for the demands of modern software development."
            className="lg:flex-row"
          />
          <ExperienceCard
            img="/people/grad-pic3.jpg"
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
      {/* <Carousel
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
      </Carousel> */}

      {/* Steps In The Application Process */}
      <section className="py-20 px-4 relative">
        <div className="relative z-10 text-center">
          <h3 className="text-3xl md:text-5xl text-violet font-bold">
            Steps In The Application Process
          </h3>
          <Typography
            variant="paragraph"
            className="text-textColor max-w-4xl mx-auto mt-10"
          >
            Don`t miss out on top-tier talent. All you have to do to hire a
            Codetrain grad is to fill the form below, and we’ll reach out to you
            with the ideal candidates.
          </Typography>
        </div>
        <div className="grid grid-cols-1 md:justify-items-center gap-10 lg:gap-x-24 md:gap-y-20 mt-10 relative z-10">
          {applicationProcess.map((process) => (
            <div className="max-w-lg flex items-center gap-4" key={process.id}>
              <div>
                <Typography variant="h4" className="text-pink text-8xl">
                  {process.id}
                </Typography>
              </div>
              <div>
                <Typography variant="h5" className="text-violet max-w-sm">
                  {process.title}
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
      <ExcitedCareer />
    </section>
  );
};

export default HireAGraduate;
