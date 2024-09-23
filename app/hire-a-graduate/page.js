"use client";

import ExcitedCareer from "@/components/ExcitedCareer";
import ExperienceCard from "@/components/ExperienceCard";
import { sponsorImages } from "@/constants/constants";
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
import Link from "next/link";

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
        <Typography
          variant="h3"
          className="text-center text-violet text-2xl md:text-4xl"
        >
          What Our Students Offer
        </Typography>
        <Typography
          variant="paragraph"
          className="text-center text-textColor max-w-6xl mx-auto mt-4"
        >
          Codetrain students bring a unique blend of technical skills,
          creativity, and determination to the tech industry. Equipped with
          hands-on coding experience and real-world problem-solving abilities,
          they are ready to drive innovation and contribute meaningfully to any
          tech team. Their passion for technology and continuous learning
          ensures they deliver impactful solutions and excel in diverse tech
          roles.
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
                Mastering multiple programming languages is crucial for a
                successful tech career, and our curriculum is designed to build
                that expertise. Students gain hands-on experience with a variety
                of languages, from popular choices like Python and JavaScript to
                more specialized ones. This diverse skill set equips them to
                tackle real-world challenges and adapt to the ever-evolving tech
                landscape.
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
                Our Web Development Expertise equips students with the skills to
                build dynamic, responsive websites from scratch. Through
                hands-on training in modern technologies and best practices,
                learners gain practical experience in front-end and back-end
                development, preparing them for real-world challenges and
                opportunities in the tech industry.
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
                Full-stack development at Codetrain offers a comprehensive
                learning experience, covering both front-end and back-end
                technologies. Students gain expertise in creating dynamic web
                applications from scratch, mastering skills in programming
                languages, databases, and server management. This holistic
                approach equips learners with the versatility needed to tackle
                complex projects and excel in diverse tech roles.
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
                Our mobile app development program equips students with the
                skills needed to design and build innovative applications.
                Through hands-on projects and expert guidance, learners gain
                practical experience in creating user-friendly mobile solutions.
                This comprehensive training prepares graduates to excel in the
                dynamic field of mobile technology, ready to tackle real-world
                challenges and drive digital transformation.
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
      <section className="py-20 px-4 bg-lightBlue lg:h-[487px] mb-[600px] relative">
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

        <div className="grid grid-cols-1  place-items-center gap-10 mt-20 lg:translate-y-6 relative z-10">
          <Card className="sm:max-w-sm rounded-none shadow-lg">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <Image
                src="/people/tony.jpg"
                alt="img"
                width={540}
                height={276}
                className="overflow-hidden object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography className="text-textColor">
                After dropping out of university, Anthony decided to join
                Codetrain, seeking practical experience and leadership skills.
                After working as a teaching fellow, he secured a role with
                Infinitas Media in Berlin. He continues to mentor Codetrain
                students and gives talks whenever he’s in Ghana.
              </Typography>
            </CardBody>
            <hr className="border-violet h-1" />
            <CardFooter>
              <Typography className="font-bold text-textColor">Tony</Typography>
              {/* <Typography className="font-normal text-textColor">
                Software Engineer
              </Typography> */}
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

      {/* Companies That Hired our Grads */}
      <section className="text-center py-12 px-10 shadow-md border-t border-t-black">
        <h1 className="text-xl md:text-2xl text-violet font-semibold">
          Companies That Hired our Graduates
        </h1>
        <div className="grid place-items-center grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-12">
          {sponsorImages.map((sponsor) =>
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
      <ExcitedCareer />
    </section>
  );
};

export default HireAGraduate;
