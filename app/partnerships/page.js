"use client";

import BgLogoLeft from "@/public/icons/BgLogoLeft";

import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

const Partnerships = () => {
  return (
    <>
      <div className="py-2 bg-violet text-xs md:text-base text-center text-white flex items-center justify-center">
        <Link
          href="https://tally.so/r/wodqVO"
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

          <Link href="https://tally.so/r/3jWVPa" target="_blank">
            <Button className="bg-yellow text-violet">
              Let&rsquo;s set up a call
            </Button>
          </Link>
        </div>
        <div className="hidden lg:inline">
          <Image
            src="/people/part.jpg"
            width={720}
            height={384}
            alt=""
            className="object-cover !h-[calc(100vh-64px-40px)]"
          />
        </div>
        <Image
          src="/people/part.jpg"
          alt=""
          width={720}
          height={384}
          className="h-[70vh] w-full object-cover max-h-80vh absolute opacity-20 right-0 lg:hidden"
        />
      </section>

      {/* Partnership Opportunities */}
      <section className="py-14 md:py-32 px-4 md:px-10 relative">
        <div className="relative z-10 grid grid-cols-12 gap-8 lg:gap-16">
          <div className="col-span-12 md:col-span-5">
            <Typography variant="h3" className="text-violet">
              Partnership Opportunities
            </Typography>
            <Typography
              variant="paragraph"
              className="text-lg mt-4 text-textColor md:max-w-lg"
            >
              Codetrain is always seeking to expand our network and collaborate
              with like-minded organizations. Whether you`re a tech company
              looking to hire our graduates, a non-profit sharing our mission of
              empowering individuals through tech education, or exploring other
              opportunities, we`d love to hear from you. Let`s work together to
              create a brighter future for the tech industry and the communities
              we serve.
            </Typography>
          </div>
          <div className="col-span-12 md:col-span-7 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <Typography variant="h5" className="text-violet">
                Finance Students/Offer Scholarships
              </Typography>
              <Typography
                variant="paragraph"
                className="text-lg text-textColor mt-3 md:max-w-lg"
              >
                Support the next generation of tech talent by offering
                scholarships to Codetrain students. Your contribution will
                provide access to high-quality education for individuals from
                underrepresented backgrounds, empowering them to build
                successful careers in tech. By financing their education, you
                invest in the future of innovation while making a lasting social
                impact.
              </Typography>
            </div>
            <div>
              <Typography variant="h5" className="text-violet">
                Create a Talent Pipeline
              </Typography>
              <Typography
                variant="paragraph"
                className="text-lg text-textColor mt-3 md:max-w-lg"
              >
                Partner with Codetrain to create a direct pipeline of skilled
                developers and designers ready to join your team. Our graduates
                are trained in cutting-edge technologies and prepared to meet
                the demands of today’s fast-paced tech industry. Build a
                sustainable talent pool tailored to your organization’s needs.
              </Typography>
            </div>
            <div>
              <Typography variant="h5" className="text-violet">
                Throw an Innovation Challenge
              </Typography>
              <Typography
                variant="paragraph"
                className="text-lg text-textColor mt-3 md:max-w-lg"
              >
                Engage our students by launching an innovation challenge. This
                collaboration allows you to tackle business problems with fresh,
                creative solutions while giving students real-world experience.
                It’s a dynamic way to foster innovation and test new ideas that
                could drive your business forward.
              </Typography>
            </div>
            <div>
              <Typography variant="h5" className="text-violet">
                Collaborate for Social Impact
              </Typography>
              <Typography
                variant="paragraph"
                className="text-lg text-textColor mt-3 md:max-w-lg"
              >
                Work with Codetrain to create meaningful social change by
                bridging the tech skills gap in Africa. Your partnership helps
                empower young people with the education and opportunities needed
                to thrive in the global tech industry. Together, we can make a
                lasting impact on both communities and the tech ecosystem.
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
      {/* <Carousel
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
      </Carousel> */}
      <div className="flex justify-center">
        <Link href="https://tally.so/r/3jWVPa" target="_blank">
          <Button className="bg-yellow text-violet">
            Let&rsquo;s set up a call
          </Button>
        </Link>
      </div>

      <hr className="my-20 border-textColor max-w-7xl mx-auto" />
    </>
  );
};

export default Partnerships;
