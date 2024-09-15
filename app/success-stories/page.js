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
import ExcitedCareer from "@/components/ExcitedCareer";
import Link from "next/link";

const SuccessStories = () => {
  return (
    <section className="overflow-hidden">
      <div className="py-2 bg-violet text-xs md:text-base text-center text-white flex items-center justify-center">
        <p>Get to know more about Codetrain. Join our info session.🗣️</p>
      </div>

      {/* Hero Section */}
      <section className="min-h-[calc(80vh-64px-40px)] lg:min-h-[calc(100vh-64px-40px)] lg:pl-0 grid grid-cols-2 place-items-center gap-4">
        <div className="text-textColor py-10 px-4 leading-8 md:max-w-xl col-span-2 lg:col-span-1">
          <h2 className="text-3xl md:text-5xl text-violet font-bold">
            From Zero to Hero: Transforming Lives Through Code
          </h2>
          <Typography variant="paragraph" className="my-8">
            At Codetrain, we take pride in turning aspiring individuals into
            tech industry heroes. Our program is designed to guide you from
            complete beginner to proficient coder, equipping you with the skills
            and confidence to thrive in the tech world. Through immersive
            learning, real-world projects, and unwavering support, students
            embark on a transformative journey that not only enhances their
            technical abilities but also opens doors to new career
            opportunities.
          </Typography>
        </div>
        <div className="hidden lg:inline">
          <Image
            src="/people/success.jpg"
            width={720}
            height={384}
            alt="student"
            className="object-cover object-top !h-[calc(100vh-64px-40px)]"
          />
        </div>
        <Image
          src="/people/success.jpg"
          alt="student"
          width={720}
          height={384}
          className="h-[87vh] w-full object-cover object-top absolute opacity-20 right-0 lg:hidden"
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
            <h1 className="font-bold sm:max-w-lg text-violet text-2xl sm:text-4xl">
              Catherine`s Journey to Success: How Codetrain Transformed Her
              Career
            </h1>
            <Typography
              variant="paragraph"
              className="max-w-lg mt-4 text-textColor leading-6 text-base sm:text-lg"
            >
              After spending four years as a finance executive, Catherine
              realized that her passion extended beyond numbers and
              spreadsheets. In 2021, she decided to challenge herself by
              venturing into the tech world, starting with YouTube tutorials on
              coding. However, she soon recognized the value of a structured
              learning path and a supportive community, which led her to
              Codetrain. The transition wasn’t easy—balancing family, work, and
              coding required late nights and lunch break assignments—but her
              determination kept her going. Now proficient in frontend
              development and working on projects like an insurance app,
              Catherine feels fully prepared to launch her tech career. The
              journey not only sharpened her technical skills but also
              transformed her mindset, fostering collaboration, continuous
              learning, and a deep appreciation for the power of community at
              Codetrain.
            </Typography>
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
                // width="560"
                // height="315"
                src="https://www.youtube.com/embed/7s1iDmA5Vs8?si=1Jx1VN3SKPj2kxm_"
                title="Catherine`s Journey to Success"
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
                Catherine`s Journey to Success: How Codetrain Transformed Her
                Career
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
      <section className="py-2 px-4 min-h-[70vh] bg-[url('/people/challenges.jpg')] bg-cover bg-no-repeat bg-center flex justify-start items-end">
        <div className="max-w-md bg-white px-4 py-5">
          <Typography variant="h4" className="text-violet">
            Overcoming Challenges: A Sickle Cell Warrior&apos;s Journey into
            Tech
          </Typography>
          <Typography variant="paragraph" className="text-textColor mt-2">
            We’re committed to supporting every student’s journey, including
            those facing the unique challenges of living with sickle cell. Our
            students who are sickle cell warriors have found a nurturing and
            flexible environment that adapts to their health needs, offering
            them the space to thrive. With a supportive community of teaching
            fellows and peers, personalized learning plans, and the ability to
            pace their studies, these students have been able to overcome
            obstacles, build their tech skills, and work on meaningful
            projects—all while managing their health with the care and attention
            they deserve.
          </Typography>
        </div>
      </section>
      <section className="px-4 bg-ash">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 py-10 bg-contain bg-center bg-no-repeat relative">
          <div className="max-w-[540px] relative z-10">
            <Image
              src="/people/group6.svg"
              alt="picture"
              className="!h-full rounded-none shadow-md"
              width={540}
              height={540}
            />
          </div>
          <div className="relative z-10 text-textColor">
            <div className="max-w-lg">
              <Typography
                variant="paragraph"
                className="text-textColor text-lg"
              >
                Project-based learning is our way. At code train, you learn by
                doing. From your first day to your last, you’re graded on actual
                work that is similar to what you’ll be doing on the job. If it
                has no application in the industry, we don’t bother with it.
              </Typography>
              <Typography
                variant="paragraph"
                className="text-textColor text-lg mt-5"
              >
                Project-based learning is our way. At code train, you learn by
                doing. From your first day to your last,
              </Typography>
              <Typography variant="paragraph" className="text- text-lg mt-5">
                you’re graded on actual work that is similar to what you’ll be
                doing on the job. If it has no application in the industry, we
                don’t bother with it.
              </Typography>
              <Typography variant="paragraph" className="text- text-lg mt-5">
                Project-based learning is our way. At code train, you learn by
                doing. From your first day to your last,
              </Typography>
              <Typography variant="paragraph" className="text- text-lg mt-5">
                you’re graded on actual work that is similar to what you’ll be
                doing on the job. If it has no application in the industry, we
                don’t bother with it.
              </Typography>
              <Typography variant="paragraph" className="text- text-lg mt-5">
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
          <Typography
            variant="paragraph"
            className="max-w-4xl mt-7 mx-auto text-base text-textColor"
          >
            Partnering with top companies, we connect students to real-world
            projects and internships, giving them practical experience and
            companies access to skilled, job-ready talent. This collaboration
            fuels student success and drives industry innovation.
          </Typography>
        </div>
        <div className="flex flex-col gap-14 items-center mt-10 relative z-10">
          <ExperienceCard
            img="/people/succ.jpg"
            title="Fueling Innovation: Success Stories with Our Investors"
            text="Our investors play a vital role in driving innovation at Codetrain. Through their support, we’ve been able to create a dynamic learning environment that empowers students to build cutting-edge tech solutions. Thanks to their investment, many of our graduates have successfully launched tech careers, while contributing to impactful projects that shape the future of technology in Africa."
            className="lg:flex-row-reverse"
          />
          <ExperienceCard
            img="/people/exp6.jpg"
            title="Powering Progress: Success Stories with Partners"
            text="Our partnerships with industry leaders have empowered students to turn their training into real-world impact. Through collaborations with companies across sectors, many of our graduates have secured internships and full-time roles, gaining hands-on experience while contributing to innovative tech solutions. These success stories showcase how our strong industry connections help students launch fulfilling careers and drive progress in the tech world."
            className="lg:flex-row"
          />
          <ExperienceCard
            img="/people/grad-pic.jpg"
            title="Bridging Talent and Opportunity: Success Stories with Hiring Companies"
            text="Codetrain’s strong partnerships with hiring companies have successfully bridged the gap between talent and opportunity. Our students, equipped with cutting-edge skills and real-world experience, have secured positions at top tech firms and innovative startups. These success stories not only showcase the effectiveness of our training but also highlight the seamless integration of our graduates into roles where they drive meaningful impact and growth."
            className="lg:flex-row-reverse"
          />
          <ExperienceCard
            img="/people/expe2.jpg"
            title="Empowering Dreams: Success Stories with Our Financing Partners"
            text="Through our partnerships with financing organizations, we’ve seen countless students achieve their tech dreams. These collaborations have enabled students to access crucial funding and resources, allowing them to focus on their studies and excel in their careers. Thanks to the support of our financing partners, many have transformed their ambitions into successful tech careers, proving that with the right support, dreams are within reach."
            className="lg:flex-row"
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
              src="/people/Ofoe.jpg"
              // role="Software Engineer at Microsoft"
              name="Ofoe"
              story="Two years after Codetrain, Ofoe’s career is thriving. Starting with an internship at thinkSopht Labs, he now excels at Turntabl. Codetrain’s focus on continuous learning has been crucial, enhancing his work-life balance and decision-making skills."
              className="md:justify-self-end"
            />
          </div>
          <div>
            <div className="mb-5">
              <h3 className="text-violet font-bold text-3xl md:text-5xl max-w-xl">
                Success Stories From Codetrain Africa
              </h3>
              <Typography
                variant="paragraph"
                className="text-textColor max-w-lg mt-4"
              >
                Codetrain Africa students are achieving their tech dreams,
                overcoming challenges, and securing impactful roles. Their
                success underscores the power of determination and community
                support.
              </Typography>
            </div>
            <SuccessCard
              src="/people/korkor.jpg"
              // role="Software Engineer at Microsoft"
              name="Korkor"
              story="Facing a challenge in helping her kids with coding, Korkor enrolled in Codetrain. Despite balancing family and work, her dedication led to a promotion and boosted her professional network. She now passionately advocates for coding, inspiring her children to pursue it."
              imgClass="object-"
            />
          </div>
        </div>
        {/* Stories */}
        <div className="mt-5 grid gap-10 place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <SuccessCard
            src="/people/tony.jpg"
            // role="Software Engineer at Microsoft"
            name="Anthony"
            story="After dropping out of university, Anthony decided to join Codetrain, seeking practical experience and leadership skills. After working as a teaching fellow, he secured a role with Infinitas Media in Berlin. He continues to mentor Codetrain students and gives talks whenever he’s in Ghana."
            className="md:justify-self-end"
          />

          <SuccessCard
            src="/people/oscarlyn.jpg"
            // role="Software Engineer at Microsoft"
            name="Oscarlyn Naa Dedei"
            story="She was last year’s top student. A medical doctor with a passion for tech, she impressed several companies at our demo day. She showcased her app, a comprehensive rabbit farming management system, which captured significant interest from potential employers. She currently mentors other young ladies at Codetrain."
            className="md:justify-self-start"
          />
          <SuccessCard
            src="/people/jeremy.jpg"
            // role="Software Engineer at Microsoft"
            name="Jermain Antwi"
            story="After completing Codetrain at just 12, he embarked on his second tech startup, focused on revolutionizing loyalty programs for small shops. He interned at Cedi Rates and now advises two companies. Additionally, he serves as a mentor at Moonshot Pirates in Austria, guiding young innovators and sharing his expertise."
            className="md:justify-self-end"
          />
          <SuccessCard
            src="/people/awal.jpg"
            // role="Software Engineer at Microsoft"
            name="Calvin Tettey"
            story="Mubarak is Codetrain's fastest learning student. He's now a mobile & web developer who works at Codetrain to train upcoming developers. "
            className="md:justify-self-start"
          />
          {/* <SuccessCard
            src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1200"
            // role="Software Engineer at Microsoft"
            name="Calvin Tettey"
            story="After completing Codetrain with a specialization in UX Design, he now works with a leading global company, applying his skills on an international scale. Committed to giving back, he actively trains the next generation of UX designers at Codetrain, sharing his expertise and experience. We also have a great photo of him showcasing his professional journey."
            className="md:justify-self-end"
          /> */}
        </div>
      </section>

      {/* New Beginnings: Men's Success Stories in Tech */}
      <section className="py-20 px-4 bg-ash relative">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="relative z-10">
            <Image
              src="/people/5.jpg"
              alt="picture"
              className="h-[534px] w-[413px] object-cover rounded-none"
              width={540}
              height={540}
            />
          </div>
          <div className="sm:max-w-md relative z-10">
            <Typography variant="h4" className="text-violet md:text-4xl">
              Trailblazers: Pioneering Achievements in Tech
            </Typography>
            <Typography variant="paragraph" className="text-textColor mt-2">
              Our trailblazers have not only mastered the latest technologies
              but have also made groundbreaking contributions that are shaping
              the future. From developing innovative solutions to leading
              impactful tech startups, these pioneers are setting new standards
              and inspiring others with their vision and creativity.
            </Typography>
            <Typography variant="paragraph" className="text-textColor mt-2">
              Their achievements go beyond personal success, driving change and
              advancing technology in meaningful ways. By pushing the boundaries
              of what’s possible, these tech leaders are transforming industries
              and creating opportunities for others. Their stories reflect the
              spirit of innovation and resilience that Codetrain nurtures,
              showcasing the incredible potential of our community.
            </Typography>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 place-items-center mt-16 z-10 relative">
          <Image
            src="/people/1.jpg"
            alt=""
            width={230}
            height={167}
            className="object-cover object-top h-[153px]"
          />
          <Image
            src="/people/2.jpg"
            alt=""
            width={230}
            height={167}
            className="object-cover object-top h-[153px]"
          />
          <Image
            src="/people/3.jpg"
            alt=""
            width={230}
            height={167}
            className="object-cover object-top h-[153px]"
          />
          <Image
            src="/people/4.jpg"
            alt=""
            width={230}
            height={167}
            className=" object-cover object-top h-[153px]"
          />
        </div>
        {/* Bg Logos */}
        <BgLogoLeft className="absolute size-72 fill-indigo opacity-15 bottom-0 left-0" />
        <BgLogoRight className="absolute size-72 fill-indigo opacity-15 top-0 left-0" />
      </section>

      {/* Changing Lives: Empowering Women In The Tech Space. */}
      <section className="py-2 px-4 min-h-[70vh] bg-[url('/people/success2.jpg')] bg-cover bg-no-repeat bg-center flex justify-end items-end">
        <div className="max-w-md bg-white px-8 py-5">
          <Typography variant="h4" className="text-violet">
            Changing Lives: Empowering Women In The Tech Space.
          </Typography>
          <Typography variant="paragraph" className="text-textColor mt-2">
            Empowering women in tech is at the heart of what we do. Our programs
            provide the support, skills, and community needed for women to excel
            in the tech industry, driving significant career advancements and
            inspiring others to break barriers and shape the future of
            technology.
          </Typography>
        </div>
      </section>
      <section className="py-20 px-4 text-textColor flex flex-col md:flex-row justify-center items-center gap-10 relative">
        <div className="relative z-10">
          <Typography variant="paragraph" className="max-w-md text-textColor ">
            Empowering women in tech has been a cornerstone of our mission at
            Codetrain. Through our programs, women have broken barriers,
            transitioned into tech careers, and achieved significant milestones.
          </Typography>

          <Typography
            variant="paragraph"
            className="max-w-lg text-textColor mt-3"
          >
            Their stories of overcoming obstacles and embracing new
            opportunities highlight the impact of tailored support and education
            in creating a more inclusive tech industry.
          </Typography>

          <Typography className="max-w-lg text-textColor mt-3">
            These success stories not only celebrate individual achievements but
            also inspire a broader movement towards gender equality in tech.
          </Typography>

          <Typography className="max-w-lg text-textColor mt-3">
            By providing the tools, community, and encouragement needed, we’re
            helping women transform their careers, contribute to innovative
            projects, and pave the way for future generations of female tech
            leaders.
          </Typography>
        </div>
        <div className="relative">
          <div>
            <Image
              src="/people/succes5.jpg"
              alt=""
              height={285}
              width={320}
              className="h-52 object-cover object-top"
            />
            <Image
              src="/people/succes4.jpg"
              alt=""
              height={285}
              width={320}
              className="relative -top-14 -right-36 border-4 border-white"
            />
            <Image
              src="/people/Lovelace.jpg"
              alt=""
              height={285}
              width={320}
              className="relative bottom-28 border-4 object-cover border-white"
            />
          </div>
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
          <Typography
            variant="paragraph"
            className="max-w-4xl mt-7 mx-auto text-base text-textColor"
          >
            Our commitment to excellence in tech education has been recognized
            through numerous awards, celebrating our innovative approach and
            impactful results. These accolades reflect our dedication to
            empowering students and shaping the future of technology.
          </Typography>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center place-content-center gap-10 mt-10 sm:mt-20 text-left">
          <Link
            href="https://codetrain.medium.com/codetrain-ceo-wins-ict-entrepreneur-of-the-year-award-at-the-yeis2019-awards-77e4dae8b980"
            target="_blank"
          >
            <Card className="sm:w-[440px] min-h-[667px] rounded-none">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <Image
                  src="/people/richard award 2.jpg"
                  alt="img"
                  width={540}
                  height={276}
                  className="overflow-hidden object-cover"
                />
              </CardHeader>
              <CardBody>
                <Typography className="font-bold text-textColor">
                  Codetrain CEO wins ICT Entrepreneur of the Year Award at the
                  YEIS2019 Awards
                </Typography>
                <Typography className="text-textColor mt-5">
                  The Young Entrepreneurs International Award celebrates global
                  entrepreneurs who excel in their fields and support emerging
                  young talent. This year’s summit in Accra honored over 150
                  young entrepreneurs, with 25 outstanding individuals receiving
                  accolades for their achievements.
                </Typography>
                <Typography className="text-textColor mt-2">
                  Richard Brandt, CEO of Codetrain, was recognized as ICT
                  Entrepreneur of the Year. In his acceptance speech, Richard
                  urged African entrepreneurs to focus on creating substantial
                  wealth and job opportunities through technology. As a recent
                  addition to the top 50 Young CEOs in Ghana, Richard’s
                  leadership at Codetrain is shaping the future of tech by
                  developing skilled professionals and fostering growth in the
                  industry.
                </Typography>
              </CardBody>
            </Card>
          </Link>
          <Link
            href="https://codetrain.medium.com/codetrain-mentees-win-best-female-group-in-tech-award-b06683256548"
            target="_blank"
          >
            <Card className="sm:w-[440px] min-h-[667px] rounded-none">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <Image
                  src="/people/female mentee.webp"
                  alt="img"
                  width={540}
                  height={276}
                  className="overflow-hidden object-cover h-[354px]"
                />
              </CardHeader>
              <CardBody>
                <Typography className="font-bold text-textColor">
                  Codetrain Mentees Win Ghana’s Best Female Group in Tech Award
                </Typography>
                <Typography className="text-textColor mt-5">
                  Codetrain mentees from Ghana Lebanon Islamic School (GLIS) won
                  the Best Female Group in Tech award at the Techbooth
                  Challenge. After learning web development at Codetrain, the
                  group, Girl Power, created a website to provide adolescent
                  girls with access to advice on female hygiene and sex
                  education. They also developed a menstrual care package to
                  fund their tech initiatives.
                </Typography>
                <Typography className="text-textColor mt-2">
                  The prize presentation, held at the Stanbic Bank Incubator,
                  included a citation and 1000 cedis in cash. Codetrain CEO,
                  Richard Brandt, presented the award. This achievement
                  highlights Codetrain`s mission to empower young Africans by
                  turning them into skilled software developers and connecting
                  them to career opportunities.
                </Typography>
              </CardBody>
            </Card>
          </Link>
        </div>
      </section>

      {/* New Beginnings: Women's Success Stories in Tech */}
      <section className="py-20 px-4 relative">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="sm:max-w-md relative z-10">
            <Typography variant="h4" className="text-violet md:text-4xl">
              Breaking Barriers: A Middle-Aged Woman&apos;s Inspiring Journey
            </Typography>
            <Typography variant="paragraph" className="text-textColor mt-2">
              Korkor Mensah’s journey into tech began with an unexpected
              challenge. When she couldn’t assist her kids with their coding
              bootcamp assignments despite her IT experience, the embarrassment
              motivated her to enroll in Codetrain herself.
            </Typography>
            <Typography variant="paragraph" className="text-textColor mt-2">
              Balancing family obligations and a full-time job in a fast-paced
              environment was challenging, but Korkor’s dedication never
              wavered—she never missed a class or assignment. Her hard work paid
              off with a promotion and significant growth in her professional
              network and online visibility. Inspired by her progress, Korkor is
              now a
            </Typography>
            <Typography variant="paragraph" className="text-textColor mt-2">
              passionate advocate for coding, encouraging her children to pursue
              it with the same enthusiasm.
            </Typography>
          </div>
          <div className="relative z-10">
            <Image
              src="/people/korkor.jpg"
              alt="lady"
              className="h-[534px] w-[413px] object-cover rounded-none"
              width={540}
              height={540}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 place-items-center place-content-center mt-16 z-10 relative">
          <Image
            src="/people/abigail.jpg"
            alt=""
            width={230}
            height={167}
            className="h-52 object-cover object-top"
          />
          <Image
            src="/people/lina.jpg"
            alt=""
            width={230}
            height={167}
            className="h-52 object-cover object-top"
          />
          <Image
            src="/people/jessica.jpg"
            alt=""
            width={230}
            height={167}
            className="h-52 object-cover object-top"
          />
          <Image
            src="/people/margret.jpg"
            alt=""
            width={230}
            height={167}
            className="h-52 object-cover object-top"
          />
        </div>
        {/* Bg Logos */}
        <BgLogoLeft className="absolute size-72 fill-indigo opacity-15 bottom-0 left-0" />
        <BgLogoRight className="absolute size-72 fill-indigo opacity-15 top-0 left-0" />
      </section>

      {/* Excited to start your career Section */}
      <ExcitedCareer />
    </section>
  );
};
export default SuccessStories;

const SuccessCard = ({ src, name, story, role, className, imgClass }) => {
  return (
    <Card className={`max-w-[572px] max-h-[767px] rounded-none ${className}`}>
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
          className={`overflow-hidden object-cover w-full h-[400px] ${
            imgClass ? imgClass : "object-top"
          }`}
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
