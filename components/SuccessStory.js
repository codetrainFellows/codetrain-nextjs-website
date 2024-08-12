import { successStories } from "@/constants/constants";
import BgLogoLeft from "@/public/icons/BgLogoLeft";
import BgLogoRight from "@/public/icons/BgLogoRight";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
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

const SuccessStory = () => {
  return (
    <section className="py-10 px-4 sm:py-20 sm:px-7 flex flex-col-reverse lg:gap-10 lg:flex-row items-center justify-center gap-4 relative">
      <div className="md:max-h-[587px] hidden xl:inline">
        <Carousel
          className="rounded-none w-fit md:max-w-[540px] shadow-lg"
          autoplay={true}
          autoplayDelay={5000}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 left-6 -translate-y-2/4 bg-violet hover:bg-violet-800 active:bg-violet-800 rounded-full"
            >
              <ArrowLeftIcon className="size-6 text-white" />
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handleNext}
              className="!absolute top-2/4 !right-4 -translate-y-2/4 bg-violet hover:bg-violet-800 active:bg-violet-800 rounded-full"
            >
              <ArrowRightIcon className="size-6 text-white" />
            </IconButton>
          )}
        >
          {successStories.map((story) => (
            <Card
              className="w-full max-h-[667px] rounded-none"
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
                  alt={story.name}
                  width={540}
                  height={276}
                  className="overflow-hidden object-cover"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="paragraph" className=" text-textColor">
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
        </Carousel>
      </div>
      <div className="">
        <div className="">
          <h3 className="text-violet font-bold text-3xl md:text-5xl max-w-xl">
            Success Stories From Codetrain Africa
          </h3>
          <p className="text-textColor max-w-sm mt-4">
            Lorem ipsum{" "}
            <span className="font-bold">dolor sit amet consectetur.</span>{" "}
            Mauris pellentesque porta donec enim tellus nibh adipiscing arcu. Et
            mi pellentesque lorem tellus eget nulla. Vulputate iaculis magnis
            aenean integer.
          </p>
        </div>
        <div className="flex flex-col items-center mt-2 gap-4 sm:flex-row">
          <Card className="w-80 max-w-80 max-h-[667px] rounded-none ">
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
              <Typography className="font-normal text-textColor">
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
          <Card className="w-80 max-h-[667px] rounded-none">
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
              <Typography className="font-normal text-textColor">
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
        <Button className="rounded-none text-white bg-violet mt-10">
          Discover More Success Stories
        </Button>
      </div>
      {/* svg bg logos */}
      <BgLogoRight className="fill-cyan-100 absolute top-10 lg:top-0 lg:right-0 -z-50 h-80 md:h-1/2 sm:inline" />
      <BgLogoLeft className="fill-cyan-400 absolute bottom-10 lg:bottom-0 lg:left-0 -z-50 h-80 lg:h-1/2 sm:inline" />
    </section>
  );
};
export default SuccessStory;
