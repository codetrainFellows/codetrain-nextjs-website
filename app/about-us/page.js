"use client";
import { successStories, team, team1 } from "@/constants/constants";
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
            src="/people/hero-aboutus.jpg"
            width={720}
            height={384}
            alt=""
            className="object-cover !h-[calc(100vh-64px-40px)]"
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
          src="/people/hero-aboutus.jpg"
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
                  src="/people/richard.jpg"
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
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {successStories.map((story) => (
            <Card className="max-h-[667px] rounded-none" key={story.name}>
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
                <Typography className="font-bold text-textColor">
                  Lee
                </Typography>
                <hr className="border-violet h-1" />
                <Typography className="font-normal text-textColor">
                  Software Engineer
                </Typography>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="p-4 bg-ash text-center sm:px-14 sm:py-28">
        <h1 className="font-bold text-violet text-xl sm:text-3xl lg:text-5xl">
          Codetrain Development Statistics
        </h1>
        <p className="my-5 md:my-10 max-w-6xl mx-auto text-textColor">
          Lorem ipsum dolor sit amet consectetur. Mauris pellentesque porta
          donec enim tellus nibh adipiscing arcu. Et mi pellentesque lorem
          tellus eget nulla. Vulputate iaculis magnis aenean integer. Ultrices
          id aliquet elementum id elit quis lectus rutrum nec..
        </p>

        <div className="flex flex-col items-center justify-center md:items-start md:flex-row gap-x-10 ">
          <div className="lg:max-w-72">
            <h1 className="text-pink text-5xl font-bold md:text-8xl">89%</h1>
            <p className="text-textColor mt-6">
              <span className="font-bold">Job Placement:</span> of our students
              get job within the first 9 months
            </p>
          </div>
          <div className="lg:max-w-72 mt-5 md:mt-0">
            <h1 className="text-pink text-5xl font-bold md:text-8xl">600</h1>
            <p className="text-textColor mt-6">
              <span className="font-bold">Alumni:</span> alumni and counting
            </p>
          </div>
          <div className="lg:max-w-72 mt-5 md:mt-0">
            <h1 className="text-pink text-5xl font-bold md:text-8xl">8.3</h1>
            <p className="text-textColor mt-6">
              <span className="font-bold">Ratings:</span> of our students get
              job within the first 9 months
            </p>
          </div>
        </div>

        <hr className="border-violet opacity-5 h-1 my-16" />

        <div className="flex flex-col items-center justify-center md:items-start md:flex-row gap-x-10 ">
          <div className="max-w-72">
            <h1 className="text-pink text-5xl font-bold md:text-8xl">89%</h1>
            <p className="text-textColor mt-6">
              <span className="font-bold">Job Placement:</span> of our students
              get job within the first 9 months
            </p>
          </div>
          <div className="max-w-72 mt-5 md:mt-0">
            <h1 className="text-pink text-5xl font-bold md:text-8xl">600</h1>
            <p className="text-textColor mt-6">
              <span className="font-bold">Alumni:</span> alumni and counting
            </p>
          </div>
          <div className="max-w-72 mt-5 md:mt-0">
            <h1 className="text-pink text-5xl font-bold md:text-8xl">8.3</h1>
            <p className="text-textColor mt-6">
              <span className="font-bold">Ratings:</span> of our students get
              job within the first 9 months
            </p>
          </div>
        </div>

        <hr className="border-violet opacity-5 h-1 my-10 md:my-16" />

        <h1 className="font-bold text-violet text-nowrap text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Some Impacts On SDG
        </h1>

        <div className="mt-10 flex  justify-center gap-2 sm:gap-5">
          <Image src="/images/image 13.png" alt="" width={130} height={130} />
          <Image src="/images/image 12.png" alt="" width={130} height={130} />
          <Image src="/images/image 14.png" alt="" width={130} height={130} />
          <Image src="/images/image 11.png" alt="" width={130} height={130} />
        </div>
      </section>

      {/* Codetrain values Section */}
      <section className="bg-yellow bg-opacity-[0.6] text-textColor text-center min-h-[80vh] px-4 py-10 sm:py-20 relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-2xl sm:text-4xl font-bold text-violet">
            Codetrain Africa’s Values
          </h2>
          <Typography
            variant="paragraph"
            className="md:max-w-2xl mx-auto mt-10"
          >
            Lorem ipsum{" "}
            <span className="font-bold">dolor sit amet consectetur.</span>{" "}
            Mauris pellentesque porta donec enim tellus nibh adipiscing arcu. Et
            mi pellentesque lorem tellus eget nulla. Vulputate iaculis magnis
            aenean integer. Ultrices id aliquet elementum id elit quis lectus
            rutrum nec..
          </Typography>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-20 relative z-10">
          <div className="place-self-end">
            <Typography variant="h4" className="text-violet">
              Unlocking Potential
            </Typography>
            <Typography variant="paragraph" className="max-w-xs mx-auto mt-6">
              Empowering students with the skills, knowledge, and confidence to
              unlock their full potential in the tech industry, driving personal
              and professional growth.
            </Typography>
          </div>
          <div className="place-self-start">
            <Typography variant="h4" className="text-violet">
              Building Community
            </Typography>
            <Typography variant="paragraph" className="max-w-xs mx-auto mt-6">
              Fostering a supportive and inclusive community where students,
              instructors, and industry professionals come together to
              collaborate, learn, and grow together.
            </Typography>
          </div>
          <div className="place-self-end">
            <Typography variant="h4" className="text-violet">
              Driving Innovation
            </Typography>
            <Typography variant="paragraph" className="max-w-xs mx-auto mt-6">
              Inspiring creativity and innovation by encouraging students to
              think critically, solve complex problems, and push the boundaries
              of what`s possible in the digital world.
            </Typography>
          </div>
          <div className="place-self-start">
            <Typography variant="h4" className="text-violet">
              Creating Impact
            </Typography>
            <Typography variant="paragraph" className="max-w-xs mx-auto mt-6">
              Empowering graduates to make a positive impact in their
              communities and beyond, using their coding skills to tackle
              real-world challenges and drive meaningful change.
            </Typography>
          </div>
        </div>
        {/* Bg Logo */}
        <CTLogo
          className="absolute top-0 size-[1080px] md:size-full object-cover opacity-[0.5]"
          color="#f7faf8"
        />
      </section>

      {/* Excellence Recognized: Discover Our Award-Winning Achievements */}
      <section className="py-20 px-4 text-center text-textColor">
        <Typography
          variant="h3"
          className="text-3xl font-bold text-violet max-w-2xl mx-auto"
        >
          Excellence Recognized: Discover Our Award-Winning Achievements
        </Typography>
        <Typography variant="paragraph" className="max-w-5xl mx-auto mt-10">
          Lorem ipsum{" "}
          <span className="font-bold">dolor sit amet consectetur.</span> Mauris
          pellentesque porta donec enim tellus nibh adipiscing arcu. Et mi
          pellentesque lorem tellus eget nulla. Vulputate iaculis magnis aenean
          integer. Ultrices id aliquet elementum id elit quis lectus rutrum
          nec..
        </Typography>

        {/* Cards */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <Card className="sm:max-w-[430px] lg:max-w-[430px] max-h-[667px] rounded-none text-left">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <Image
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
                width={540}
                height={276}
                className="overflow-hidden object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" className="text-violet">
                Aenean commodo amet amet lacinia amet porttitor diam.
              </Typography>
              <Typography variant="paragraph" className="text-textColor mt-5">
                lorem mnwd msknjs n efmmef,rf fjnkefbnj nf ne nfne jefnefjhbj
                nebfn nefb jkef dfknkjf dwbjhejhd, nwbdkjwd ndbewkdm.{" "}
                <Link href="#" className="font-semibold">
                  Read more...
                </Link>
              </Typography>
            </CardBody>
          </Card>
          <Card className="sm:max-w-[430px] lg:max-w-[430px] max-h-[667px] rounded-none text-left">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <Image
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
                width={540}
                height={276}
                className="overflow-hidden object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" className="text-violet">
                Aenean commodo amet amet lacinia amet porttitor diam.
              </Typography>
              <Typography variant="paragraph" className="text-textColor mt-5">
                lorem mnwd msknjs n efmmef,rf fjnkefbnj nf ne nfne jefnefjhbj
                nebfn nefb jkef dfknkjf dwbjhejhd, nwbdkjwd ndbewkdm.{" "}
                <Link href="#" className="font-semibold">
                  Read more...
                </Link>
              </Typography>
            </CardBody>
          </Card>
        </div>

        <div className="text-left mt-10 md:mt-20 xl:mt-60 flex flex-col lg:flex-row justify-center divide-y lg:divide-y-0  lg:divide-x divide-yellow border border-yellow max-w-6xl mx-auto relative">
          <div className="p-5 lg:p-12">
            <Typography variant="h3" className="text-violet">
              Partner With Us
            </Typography>
            <Typography
              variant="paragraph"
              className="text-textColor lg:max-w-sm mt-5"
            >
              Lorem ipsum dolor sit amet consectetur. Felis eu euismod placerat
              libero lacus eu morbi. Quam ullamcorper adipiscing eget porttitor
              vitae eget aliquam imperdiet. Sagittis nunc vulputate magna eu sed
              et. Aenean commodo amet amet lacinia amet porttitor diam. Sagittis
              nunc ultricies felis at amet nibh euismod. Natoque donec elementum
              diam nascetur nibh volutpat volutpat pretium dui. Tincidunt magna
              auctor eget ut egestas lectus fermentum sodales. Congue feugiat
              tortor velit amet risus at eget at. Cras enim dolor pellentesque
              pulvinar.
            </Typography>
            <Button className="mt-16 bg-yellow rounded-none text-violet font-bold">
              Partner With Us
            </Button>
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
              Lorem ipsum dolor sit amet consectetur. Felis eu euismod placerat
              libero lacus eu morbi. Quam ullamcorper adipiscing eget porttitor
              vitae eget aliquam imperdiet. Sagittis nunc vulputate magna eu sed
              et. Aenean commodo amet amet lacinia amet porttitor diam. Sagittis
              nunc ultricies felis at amet nibh euismod. Natoque donec elementum
              diam nascetur nibh volutpat volutpat pretium dui. Tincidunt magna
              auctor eget ut egestas lectus fermentum sodales. Congue feugiat
              tortor velit amet risus at eget at. Cras enim dolor pellentesque
              pulvinar.
            </Typography>
            <Button className="mt-16 bg-yellow rounded-none text-violet font-bold">
              Donate Here
            </Button>
            <BgLogoLeft className="absolute fill-yellow -bottom-10 right-3 size-48 md:size-60" />
          </div>
        </div>
      </section>

      {/* Making Us Different Section */}
      <section className="py-20 px-4">
        <div className="text-center">
          <h3 className="text-2xl md:text-4xl text-violet font-semibold">
            What Makes Us Different
          </h3>
        </div>
        <div className="flex flex-col gap-14 items-center mt-10 relative">
          <ExperienceCard
            img="https://images.pexels.com/photos/27057568/pexels-photo-27057568/free-photo-of-a-group-of-seagulls-sitting-on-top-of-an-iceberg.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            title="Tailored Learning Paths"
            text="Our coding bootcamp offers personalized learning paths designed to cater to the diverse needs and aspirations of each student, ensuring that they receive the support and guidance needed to succeed in their journey towards becoming proficient developers or designers"
            className="lg:flex-row"
          />
          <ExperienceCard
            img="https://images.pexels.com/photos/27057568/pexels-photo-27057568/free-photo-of-a-group-of-seagulls-sitting-on-top-of-an-iceberg.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            title="Holistic Approach to Education"
            text="We prioritize not only technical proficiency but also soft skills development, career readiness, and personal growth. Our comprehensive approach ensures that graduates are not only adept coders but also effective communicators, problem-solvers, and leaders in their field."
            className="lg:flex-row-reverse"
          />
          <ExperienceCard
            img="https://images.pexels.com/photos/27057568/pexels-photo-27057568/free-photo-of-a-group-of-seagulls-sitting-on-top-of-an-iceberg.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            title="Mixers"
            text="We prioritize not only technical proficiency but also soft skills development, career readiness, and personal growth. Our comprehensive approach ensures that graduates are not only adept coders but also effective communicators, problem-solvers, and leaders in their field."
            className="lg:flex-row"
          />
          {/* svg bg logos */}
          <BgLogoLeft className="absolute fill-pink opacity-[0.1] top-44 lg:-top-10 md:top-0 right-0 lg:right-60 size-80 md:size-96 lg:size-[456px]" />
          <BgLogoRight className="absolute z-10 fill-pink bottom-[440px] lg:bottom-[12rem] left-0 md:left-44 lg:left-6 xl:left-52 size-40" />
        </div>
      </section>
    </section>
  );
};
export default AboutUs;

const ExperienceCard = ({ className, img, title, text }) => {
  return (
    <div
      className={`flex flex-col items-center gap-x-9 relative z-10 leading-7 ${className}`}
    >
      <div className="max-w-md">
        <Image
          src={img}
          alt={title}
          width={400}
          height={300}
          className="rounded-none"
        />
      </div>
      <div className="mt-10 lg:mt-0 max-w-md">
        <h3 className="text-violet text-3xl max-w-sm">{title}</h3>
        <p className="max-w-sm text-md text-textColor tracking-wide mt-6">
          {text}
        </p>
      </div>
    </div>
  );
};
