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
        <p className="text-xs sm:text-base">
          Get to know more about Codetrain. Join our info session.🗣️{" "}
        </p>
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
            Over $100,000 Awarded In Scholarship
          </p>
          <p className="my-5">
            Your donation helps empower the next generation of developers,
            innovators, and tech leaders.
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

      {/* Highlights Of The Students In The Codetrain Foundation */}
      <section className="py-20 px-4 bg-lightBlue lg:h-[487px] mb-[600px] relative">
        <div className="relative z-10">
          <Typography className="text-center text-white text-lg font-extrabold">
            Highlights Of The Students In The Codetrain Foundation
          </Typography>
          <Typography
            variant="h1"
            className="text-center text-white text-4xl mx-auto mt-4"
          >
            Impact Stories
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  place-items-center gap-10 mt-20 lg:translate-y-6 relative z-10">
          <Card className="sm:max-w-sm rounded-none shadow-lg">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <Image
                src="/people/donate2.jpg"
                alt="img"
                width={540}
                height={276}
                className="overflow-hidden h-80 object-top object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h6" className="font-bold text-textColor">
                Empowering Women in Tech
              </Typography>
              <Typography variant="paragraph" className="text-textColor mt-3">
                Sarah was one of the first recipients of our Women in Tech
                scholarship. She transitioned from a non-technical background
                into data science, where she’s now leading analytics teams and
                making data-driven decisions for a Fortune 500 company.
              </Typography>
              <Typography
                variant="paragraph"
                className="text-textColor font-bold mt-3"
              >
                &quot;The scholarship opened doors I never thought possible.
                It’s more than just financial aid—it’s a gateway to new
                opportunities.&quot; - Sarah Boadi.
              </Typography>
            </CardBody>
          </Card>
          <Card className="sm:max-w-sm rounded-none shadow-lg">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <Image
                src="/people/exp2.jpg"
                alt="img"
                width={540}
                height={276}
                className="overflow-hidden h-80 object-top object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h6" className="font-bold text-textColor">
                Overcoming Neurodivergent
              </Typography>
              <Typography variant="paragraph" className="text-textColor mt-3">
                James, diagnosed with autism, faced significant challenges in
                traditional education settings. Through our specialized
                Diversity and Inclusion Program, tailored for neurodivergent
                individuals, James received the support he needed to thrive.
                He’s now working as a software engineer, contributing his unique
                perspectives and skills to the industry.
              </Typography>
              <Typography
                variant="paragraph"
                className="text-textColor font-bold mt-3"
              >
                &quot;The program not only taught me to code but also gave me
                the confidence to enter the workforce and succeed in tech.&quot;
                - James
              </Typography>
            </CardBody>
          </Card>
          <Card className="sm:max-w-sm rounded-none shadow-lg">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <Image
                src="/people/donate3.jpg"
                alt="img"
                width={540}
                height={276}
                className="overflow-hidden h-80 object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h6" className="font-bold text-textColor">
                From Passion to Profession
              </Typography>
              <Typography variant="paragraph" className="text-textColor mt-3">
                Emma always had a passion for technology but lacked the
                resources to pursue formal education. Thanks to a scholarship
                from Code Train Foundation, she enrolled in our coding bootcamp.
                Today, Emma is a successful full-stack developer at a leading
                tech company, where she continues to grow and inspire others.
              </Typography>
              <Typography
                variant="paragraph"
                className="text-textColor font-bold mt-3"
              >
                &quot;Code Train changed my life. The support I received made it
                possible for me to follow my passion and build a career I’m
                proud of. &quot; - Emma Ansah
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div className="flex justify-center">
          <CTLogo
            className="absolute size-[980px] mx-auto -top-14 object-cover opacity-30"
            color="#ffffff"
          />
        </div>
      </section>

      {/* Why Partner With Codetrain */}
      <section className="py-14 md:py-32 px-4 md:px-20 relative">
        <div className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-16 mt-10">
            <div>
              <Typography
                variant="h2"
                className="text-pink text-3xl md:text-5xl font-bold"
              >
                Why Partner With Codetrain
              </Typography>
              <Typography
                variant="paragraph"
                className="text-lg text-textColor mt-3"
              >
                We are proud to have awarded over $5000 worth scholarships to
                deserving individuals, helping them gain the skills and
                confidence needed to succeed in tech. These scholarships are
                made possible by the generosity of donors like you.
              </Typography>
            </div>
            <div>
              <Typography variant="h5" className="text-pink font-bold">
                Women in Tech Scholarship
              </Typography>
              <Typography
                variant="paragraph"
                className="text-lg text-textColor mt-3"
              >
                The Women in Tech Scholarship is dedicated to supporting and
                empowering women who aspire to build careers in the tech
                industry. <br /> As a part of our commitment to promoting
                diversity and inclusion, this scholarship is designed to help
                bridge the gender gap in technology by providing financial
                assistance, mentorship, and resources to women who demonstrate a
                passion for tech and a desire to make a difference in the field
              </Typography>
            </div>
            <div>
              <Typography variant="h5" className="text-pink font-bold">
                Diversity and Inclusion Scholarship
              </Typography>
              <Typography
                variant="paragraph"
                className="text-lg text-textColor mt-3"
              >
                The Inclusion and Diversity Scholarship aims to create a more
                equitable and diverse technology landscape by supporting
                individuals from underrepresented communities in their journey
                into tech. This scholarship is part of our broader commitment to
                fostering a tech industry that reflects the richness of our
                society, bringing together varied perspectives, ideas, and
                innovations.
              </Typography>
            </div>
          </div>
        </div>
        <BgLogoRight
          className="absolute fill-yellow opacity-20 size-52 md:size-[550px] top-0 lg:-top-24
        left-0"
        />
      </section>

      {/* Program Summary Section*/}
      <section className="py-20 px-4 bg-ash">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 py-10 bg-contain bg-center bg-no-repeat relative">
          <div className="relative z-10 text-textColor">
            <div className="text-base">
              <div className="max-w-md">
                <Typography
                  variant="h2"
                  className="font-bold text-violet max-w-sm"
                >
                  How Your Donation Helps
                </Typography>
                <Typography variant="paragraph" className="mt-5">
                  Every dollar you donate makes a direct impact on the lives of
                  our students. Your contributions help us:
                </Typography>
              </div>
            </div>

            <ul className="list-disc mt-10 space-y-4">
              <li>
                <Typography variant="paragraph">
                  Provide scholarships to those who need them most.
                </Typography>
              </li>
              <li>
                <Typography variant="paragraph">
                  Expand our Diversity and Inclusion initiatives.
                </Typography>
              </li>
              <li>
                <Typography variant="paragraph">
                  Develop and deliver cutting-edge curricula.
                </Typography>
              </li>
              <li>
                <Typography variant="paragraph">
                  Support students through mentorship and career services.
                </Typography>
              </li>
            </ul>

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
              Get Involved
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
