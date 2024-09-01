"use client";

import { sponsorImages } from "@/constants/constants";
import BgLogoLeft from "@/public/icons/BgLogoLeft";
import BgLogoRight from "@/public/icons/BgLogoRight";
import CTLogo from "@/public/icons/CTLogo";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Carousel,
  IconButton,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import React, { createContext } from "react";

const Partnerships = () => {
  const Context = createContext();

  return (
    <section className="overflow-hidden">
      <div className="py-2 bg-violet text-xs md:text-base text-center text-white flex items-center justify-center">
        <p>Get to know more about Codetrain. Join our info session.🗣️ </p>
      </div>

      {/* Hero Section */}
      <section className="min-h-[calc(80vh-64px-40px)] lg:min-h-[calc(100vh-64px-40px)] bg-ash lg:pl-0 grid grid-cols-2 place-items-center gap-4">
        <div className="text-textColo py-10 px-4 leading-8 md:max-w-xl col-span-2 lg:col-span-1">
          <h2 className="text-2xl md:text-5xl text-violet font-bold">
            Join Us In Shaping The Future Of Tech
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

      {/* Why Partner With Codetrain */}
      <section className="py-14 md:py-32 px-4 md:px-20 relative">
        <div className="relative z-10">
          <Typography
            variant="h2"
            className="text-pink text-3xl md:text-5xl font-bold"
          >
            Why Partner With Codetrain
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-16 mt-10">
            <div>
              <Typography variant="h5" className="text-violet">
                Collaborative Innovation
              </Typography>
              <Typography
                variant="paragraph"
                className="text-lg text-textColor mt-3 "
              >
                Work with us to develop cutting-edge solutions and products. By
                collaborating with our team, you can leverage fresh perspectives
                and innovative ideas that drive your business forward
              </Typography>
            </div>
            <div>
              <Typography variant="h5" className="text-violet">
                Access to Top Talent
              </Typography>
              <Typography
                variant="paragraph"
                className="text-lg text-textColor mt-3"
              >
                Partnering with Codetrain gives you direct access to a pool of
                highly trained and motivated software developers. Our graduates
                are skilled in the latest technologies and are ready to bring
                value to your organization from day one
              </Typography>
            </div>
            <div>
              <Typography variant="h5" className="text-violet">
                Social Impact
              </Typography>
              <Typography
                variant="paragraph"
                className="text-lg text-textColor mt-3"
              >
                Join us in making a meaningful impact on the lives of young
                people in Africa. By partnering with Codetrain, you support
                initiatives that create opportunities and bridge the skills gap
                in the tech industry
              </Typography>
            </div>
          </div>
        </div>
        <BgLogoRight
          className="absolute fill-yellow opacity-20 size-52 md:size-[550px] top-0 lg:-top-24
        left-0"
        />
      </section>

      {/* Partnership Opportunities */}
      <section className="bg-ash py-14 md:py-32 px-4 md:px-10 relative">
        <div className="relative z-10 grid grid-cols-12 gap-8 lg:gap-16">
          <div className="col-span-12 md:col-span-5">
            <Typography variant="h3" className="text-violet">
              Partnership Opportunities
            </Typography>
            <Typography
              variant="paragraph"
              className="text-lg mt-4 text-textColor md:max-w-lg"
            >
              Lorem ipsum dolor sit amet consectetur. Mauris pellentesque porta
              donec enim tellus nibh adipiscing arcu. Et mi pellentesque lorem
              tellus eget nulla. Vulputate iaculis magnis aenean integer.
              Ultrices id aliquet elementum id elit quis lectus rutrum nec..
            </Typography>
          </div>
          <div className="col-span-12 md:col-span-7 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <Typography variant="h5" className="text-violet">
                Hiring Opportunities
              </Typography>
              <Typography
                variant="paragraph"
                className="text-lg text-textColor mt-3 md:max-w-lg"
              >
                Looking for talented developers to join your team? As a hiring
                partner, you will have the first pick of our top graduates. We
                can also tailor training programs to meet your specific hiring
                needs.
              </Typography>
            </div>
            <div>
              <Typography variant="h5" className="text-violet">
                Corporate Training
              </Typography>
              <Typography
                variant="paragraph"
                className="text-lg text-textColor mt-3 md:max-w-lg"
              >
                Invest in your existing team by providing them with advanced
                training from Codetrain. Our custom corporate training programs
                are designed to upskill your workforce and keep them ahead of
                industry trends
              </Typography>
            </div>
            <div>
              <Typography variant="h5" className="text-violet">
                Sponsorships And Scholoraships
              </Typography>
              <Typography
                variant="paragraph"
                className="text-lg text-textColor mt-3 md:max-w-lg"
              >
                Our coding bootcamp offers personalized learning paths designed
                to cater to the diverse needs and aspirations of each student,
                ensuring that they receive the support and guidance needed to
                succeed in their journey towards becoming proficient developers
                or designers
              </Typography>
            </div>
            <div>
              <Typography variant="h5" className="text-violet">
                Collaborative Projects
              </Typography>
              <Typography
                variant="paragraph"
                className="text-lg text-textColor mt-3 md:max-w-lg"
              >
                Engage with our students on real-world projects. This provides
                them with valuable hands-on experience while you benefit from
                innovative solutions tailored to your business challenges
              </Typography>
            </div>
          </div>
        </div>
        <BgLogoLeft
          className="absolute fill-indigo opacity-10 size-52 md:size-[650px] top-0 lg:-top-24
        right-0"
        />
        <BgLogoLeft className="absolute fill-indigo opacity-10 md:opacity-100 size-80 bottom-0 left-0" />
      </section>

      {/* Reviews */}
      <Carousel
        className="py-10 md:py-20 bg-lightBlue"
        navigation={false}
        loop={true}
        autoplay={true}
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-4 -translate-y-2/4 bg-white rounded-full hover:bg-blue-gray-100"
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
            className="!absolute top-2/4 !right-4 -translate-y-2/4 bg-white rounded-full hover:bg-blue-gray-100"
          >
            <ChevronRightIcon className="h-6 w-6 text-black" />
          </IconButton>
        )}
      >
        <div className="text-center">
          <Typography variant="lead" className="max-w-6xl mx-auto">
            “Lorem ipsum dolor sit amet consectetur. Mauris pellentesque porta
            donec enim tellus nibh adipiscing arcu. Et mi pellentesque lorem
            tellus eget nulla. Vulputate iaculis magnis aenean integer.”
          </Typography>
          <Typography variant="h6">Ama Boadi</Typography>
          <Typography variant="paragraph">Human Resources Manager,</Typography>
        </div>
        <div className="text-center">
          <Typography variant="lead" className="max-w-6xl mx-auto">
            “Lorem ipsum dolor sit amet consectetur. Mauris pellentesque porta
            donec enim tellus nibh adipiscing arcu. Et mi pellentesque lorem
            tellus eget nulla. Vulputate iaculis magnis aenean integer.”
          </Typography>
          <Typography variant="h6">Ama Boadi</Typography>
          <Typography variant="paragraph">Human Resources Manager,</Typography>
        </div>
        <div className="text-center">
          <Typography variant="lead" className="max-w-6xl mx-auto">
            “Lorem ipsum dolor sit amet consectetur. Mauris pellentesque porta
            donec enim tellus nibh adipiscing arcu. Et mi pellentesque lorem
            tellus eget nulla. Vulputate iaculis magnis aenean integer.”
          </Typography>
          <Typography variant="h6">Ama Boadi</Typography>
          <Typography variant="paragraph">Human Resources Manager,</Typography>
        </div>
        <div className="text-center">
          <Typography variant="lead" className="max-w-6xl mx-auto">
            “Lorem ipsum dolor sit amet consectetur. Mauris pellentesque porta
            donec enim tellus nibh adipiscing arcu. Et mi pellentesque lorem
            tellus eget nulla. Vulputate iaculis magnis aenean integer.”
          </Typography>
          <Typography variant="h6">Ama Boadi</Typography>
          <Typography variant="paragraph">Human Resources Manager,</Typography>
        </div>
      </Carousel>

      {/* Kind Of Partnerships */}
      <section className="py-20 px-4 relative">
        <div className="relative z-10">
          <Typography variant="h2" className="text-violet text-center">
            Kind Of Partnerships
          </Typography>
          <Typography
            variant="paragraph"
            className="text-lg max-w-4xl text-center mx-auto mt-3 text-textColor"
          >
            At Codetrain, we are seeking partnerships that align with our core
            values and mission. We are interested in collaborating with
            organizations that:
          </Typography>

          <div className="grid place-items-center gap-8 md:grid-cols-2 mt-10">
            <div className="max-w-96 md:ml-auto border border-textColor py-14 px-9">
              <Typography variant="h5" className="text-2xl">
                Financing
              </Typography>
              <Typography className="text-lg text-textColor">
                Partners who can help us secure funding for expanding our reach
                and impact are crucial. This includes sponsorship for new
                training centers, scholarship programs, and community outreach
                initiatives aimed at underserved populations
              </Typography>
            </div>
            <div className="max-w-96 md:mr-auto border border-textColor py-14 px-9">
              <Typography variant="h5" className="text-2xl">
                Collaboration
              </Typography>
              <Typography className="text-lg text-textColor">
                We are looking for partners who can collaborate with us on
                curriculum development, research projects, and innovative
                educational methodologies. By working together, we can create a
                more effective and relevant learning experience for our students
              </Typography>
            </div>
            <div className="max-w-96 h-full md:ml-auto border border-textColor py-14 px-9">
              <Typography variant="h5" className="text-2xl">
                Talent Pipeline
              </Typography>
              <Typography className="text-lg text-textColor">
                Organizations interested in building a steady pipeline of tech
                talent are ideal partners. By partnering with Codetrain, you can
                gain early access to our top graduates, participate in
                internship programs, and help shape the skills and knowledge
                base of future tech professionals.
              </Typography>
            </div>
            <div className="max-w-96 md:h-[370px] md:mr-auto border border-textColor py-14 px-9">
              <Typography variant="h5" className="text-2xl">
                Funds For Expansion
              </Typography>
              <Typography className="text-lg text-textColor">
                We seek partners who can provide financial support to help us
                expand our programs, enhance our infrastructure, and reach more
                students. Your investment will directly impact the quality and
                reach of our education initiatives.
              </Typography>
            </div>
          </div>
        </div>
        <BgLogoRight className="absolute size-80 fill-ash -top-12 left-0 opacity-80" />
        <BgLogoLeft className="absolute size-56 fill-ash top-56 left-0 opacity-80" />
        <BgLogoRight className="absolute size-80 fill-ash bottom-32 right-0 opacity-80" />
        <BgLogoLeft className="absolute size-56 fill-ash -bottom-6 right-0 opacity-80" />
      </section>

      {/* Our Partners and Sponsors */}
      <section className="text-center py-12 px-10 shadow-md bg-ash">
        <h1 className="text-xl text-violet font-semibold">
          Our Partners and Supporters
        </h1>
        <div className="grid place-items-center grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-12">
          {sponsorImages.map((sponsor) => (
            <div key={sponsor.name}>
              <Image
                src={sponsor.src}
                alt={sponsor.name}
                width={174}
                height={100}
                className="mix-blend-multiply"
              />
            </div>
          ))}
        </div>
        <div className="grid place-items-center grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-12">
          {sponsorImages.map((sponsor) => (
            <div key={sponsor.name}>
              <Image
                src={sponsor.src}
                alt={sponsor.name}
                width={174}
                height={100}
                className="mix-blend-multiply"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Get Involved */}
      <section className="mt-20 flex flex-col gap-6 md:flex-row">
        <div>
          <Image
            src="https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=1200"
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
                Submit
              </Button>
            </form>
          </div>
          <CTLogo
            className="absolute h-full md:h-auto top-0 left-0 object-cover text-[#e0e0e0] opacity-15"
            color="#c2c0c0"
          />
        </div>
      </section>
      <hr className="my-20 border-textColor max-w-7xl mx-auto" />
    </section>
  );
};

export default Partnerships;
