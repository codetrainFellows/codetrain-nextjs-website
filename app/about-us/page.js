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

const AboutUs = () => {
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
      <section className="min-h-[calc(100vh-64px-40px)] grid grid-cols-2 place-items-center relative gap-5 pr-5">
        <div className="hidden lg:inline">
          <Image
            src="/people/group.jpg"
            width={720}
            height={384}
            alt=""
            className="object-cover !h-[calc(100vh)]"
            quality={100}
          />
        </div>
        <div className="pt-5 pl-5 md:pl-0 md:pt-0 text-textColor md:leading-8 col-span-2 lg:col-span-1">
          <h2 className="text-4xl text-violet font-bold max-w-lg">
            Our Story: The Journey Behind Codetrain Africa
          </h2>
          <Typography variant="paragraph" className="my-8">
            Codetrain is a Software Engineering and Design School focused on
            empowering ambitious Africans to take their place in the global tech
            scene. Richard Brandt’s journey began while advancing his tech
            career and exploring ecosystems across South America, the United
            States, and Europe. It was during these experiences that he realized
            the immense global demand for tech skills. At the same time, he saw
            Africa teeming with creative talent and untapped potential but
            lacking the opportunities to thrive.
          </Typography>
          <Typography variant="paragraph" className="my-5">
            Motivated by the desire to bridge this gap, Richard returned to
            Ghana and founded Codetrain with a clear vision: to provide
            world-class tech education to African youth, equipping them with the
            skills to succeed internationally. Codetrain’s hands-on,
            project-based learning model is designed to produce not only
            job-ready graduates but innovators capable of solving real-world
            challenges. As a result, our graduates are making significant
            contributions to global companies and innovative African companies
            working on the next big African ideas.
          </Typography>
          <Typography variant="paragraph" className="my-5">
            We are deeply committed to fostering inclusivity and creating
            opportunities for underrepresented groups in the tech space,
            particularly women, those from low-income backgrounds, and people
            with disabilities. With a proven track record of success and a
            scalable model, Codetrain stands out as a beacon of potential and
            innovation in Africa’s tech ecosystem, attracting attention from
            those who share a vision for a brighter, tech-driven future. By
            nurturing the continent’s brightest minds, Codetrain is not just
            shaping careers; it’s catalyzing a movement toward sustainable
            economic development and transformative change.
          </Typography>
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
        <div className="text-textColor leading-8 col-span-2 lg:col-span-1 relative ">
          <div className="z-10 relative">
            <h2 className="text-2xl md:text-4xl text-violet font-bold max-w-lg ">
              Our Impact
            </h2>
            <p className="my-5">
              Our impact is evident through our extensive alumni network, having
              successfully trained over 700 individuals. A recent report by 60
              Decibels revealed that 91% of alumni experienced an improved
              quality of life due to their time at Codetrain, citing enhanced
              skills, personal growth, and increased income as significant
              benefits. Furthermore, 89% of our graduates secured employment
              within 6 to 9 months after graduation, underscoring Codetrain’s
              effectiveness in facilitating job opportunities and ensuring that
              our students are well-equipped to succeed in a competitive job
              market. By continually adapting our programs to meet industry
              demands, we remain committed to shaping the future of tech talent
              in Africa.
            </p>
            <p className="my-5">
              By aligning our mission with the United Nations Sustainable
              Development Goals (SDGs), particularly Quality Education (SDG 4)
              and Decent Work and Economic Growth (SDG 8): we aim to create
              lasting change in our communities and beyond.
            </p>
            <div className="flex gap-4">
              <Image
                alt="SDGs4"
                src="/images/sdg4.png"
                width={60}
                height={60}
              />
              <Image
                alt="SDGs8"
                src="/images/sdg8.png"
                width={60}
                height={60}
              />
            </div>
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
            src="/people/Gerald.jpg"
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
            <Card className="md:w-[430px] max-h-[767px] rounded-none">
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
                  quality={100}
                  className="object-cover !h-[400px] !w-full"
                />
              </CardHeader>
              <CardBody>
                <Typography className="f text-textColor">
                  With over 15 years of experience in the tech industry, I
                  provide invaluable insights to empower aspiring talent. I am
                  thrilled to witness students, often starting with little or no
                  tech background, develop their skills and achieve remarkable
                  accomplishments over time. Mentoring and guiding them through
                  this journey is incredibly rewarding, especially as I see them
                  step into roles and excel in the tech industry, both locally
                  and internationally.
                </Typography>
              </CardBody>
              <hr className="border-violet h-1" />
              <CardFooter>
                <Typography variant="h5" className="text-textColor">
                  Richard Brandt
                </Typography>
                <Typography variant="paragraph" className="text-textColor">
                  Founder
                </Typography>
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
                  <Typography variant="h5" className="text-textColor">
                    {story.name}
                  </Typography>
                  <Typography variant="paragraph" className="text-textColor">
                    {story.role}
                  </Typography>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-20 place-content-center place-items-center mt-10">
          {team1.map((story) => (
            <Card
              className="md:max-w-96 rounded-none col-span-1 odd:justify-self-end even:justify-self-start"
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
                <Typography variant="h5" className="text-textColor">
                  {story.name}
                </Typography>
                <Typography variant="paragraph" className="text-textColor">
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
              invite organizations to collaborate with us in creating employment
              opportunities, funding, and student financing initiatives.
              Together, we can empower the next generation of software
              developers through training, mentorship, and innovation. Join us
              in our mission to drive digital transformation and forge impactful
              career pathways for aspiring talent. Your partnership can make a
              significant difference in unlocking opportunities and fostering a
              thriving tech ecosystem. Let’s work together to create lasting
              change!
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
              Support Codetrain in empowering the next generation of tech
              leaders! Your contributions, whether from organizations or
              individuals, can make a profound difference by financing the
              education of aspiring software developers. Together, we can
              provide top-notch training, resources, and opportunities that will
              shape a brighter digital future. Join us in this mission to
              transform lives and communities—donate today to help us nurture
              future talent!
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
