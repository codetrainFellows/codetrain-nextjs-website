import BgLogoLeft from "@/public/icons/BgLogoLeft";
import BgLogoRight from "@/public/icons/BgLogoRight";

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

const SuccessStory = () => {
  return (
    <section className="py-10 px-4 sm:py-20 sm:px-7 flex flex-col-reverse lg:gap-10 lg:flex-row items- justify-center gap-4 relative">
      <div className="md:max-h-[587px] hidden xl:inline">
        <Card className="max-w-lg rounded-none">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <Image
              src="/people/korkor.jpg"
              alt="korkor"
              width={540}
              height={276}
              className="overflow-hidden object-cover h-96"
            />
          </CardHeader>
          <CardBody>
            <p className="font-light text-textColor">
              Korkor Mensah’s journey into tech began with an unexpected
              challenge. When she couldn’t assist her kids with their coding
              bootcamp assignments despite her IT experience, the embarrassment
              motivated her to enroll in Codetrain herself.
            </p>
            <p className="font-light text-textColor mt-2">
              Balancing family obligations and a full-time job in a fast-paced
              environment was challenging, but Korkor’s dedication never
              wavered—she never missed a class or assignment. Her hard work paid
              off with a promotion and significant growth in her professional
              network and online visibility. Inspired by her progress, Korkor is
              now a passionate advocate for coding, encouraging her children to
              pursue it with the same enthusiasm.
            </p>
          </CardBody>
          <hr className="border-violet h-1" />
          <CardFooter>
            <Typography className="font-bold text-textColor">
              Korkor Mensah
            </Typography>
            <Typography className="font-normal text-textColor">
              Software Engineer
            </Typography>
          </CardFooter>
        </Card>
      </div>
      <div className="">
        <div className="">
          <h3 className="text-violet font-bold text-3xl md:text-5xl lg:max-w-xl">
            Success Stories from Codetrain Africa
          </h3>
          <p className="font-normal text-textColor xl:max-w-sm mt-4">
            Empowering African talent to take the lead in tech is at the heart
            of Codetrain’s mission. We believe that every African has the
            potential to lead, innovate, and drive change in the digital world,
            and our graduates are living proof of this vision.
          </p>
        </div>
        <div className="flex flex-col flex-wrap justify-center lg:justify-normal items-center mt-2 gap-4 sm:flex-row">
          <Card className="w-80 max-h-[567px] xl:hidden rounded-none">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <Image
                src="/people/korkor.jpg"
                alt="img"
                width={540}
                height={276}
                className="overflow-hidden relative -top-12  object-center"
              />
            </CardHeader>
            <CardBody>
              <p className="font-light text-textColor line-clamp-6">
                Korkor Mensah’s journey into tech began with an unexpected
                challenge. When she couldn’t assist her kids with their coding
                bootcamp assignments despite her IT experience, the
                embarrassment motivated her to enroll in Codetrain herself.
              </p>
            </CardBody>
            <hr className="border-violet h-1" />
            <CardFooter>
              <Typography className="font-bold text-textColor">
                Korkor Mensah
              </Typography>
              <Typography className="font-normal text-textColor">
                Software Engineer
              </Typography>
            </CardFooter>
          </Card>
          <Card className="w-80 max-w-80 max-h-[567px] rounded-none ">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <Image
                src="/people/Ofoe.jpg"
                alt="img"
                width={540}
                height={276}
                className="overflow-hidden object-cover"
              />
            </CardHeader>
            <CardBody>
              <p className="font-light text-textColor line-clamp-6">
                Two years after graduating from Codetrain, Ofoe’s career is
                thriving. He began with an internship at thinkSopht Labs and
                soon transitioned to a role at Turntabl, where he’s been
                enjoying a dynamic and fulfilling career. Codetrain’s focus on
                tackling new information has been invaluable in his current
                role, where he continues to learn and adapt in a culture of
                growth. Ofoe chose to code because he wanted a challenging and
                fulfilling career with strong job security. The flexibility of
                remote work and the need for critical thinking in tech have
                enhanced his work-life balance and decision-making skills.
                Transitioning from accounting, he now feels empowered and
                assertive, with a solution-oriented mindset and the ability to
                advocate for himself effectively.
              </p>
            </CardBody>
            <hr className="border-violet h-1" />
            <CardFooter>
              <Typography className="font-bold text-textColor">
                Ofoe Fiergbor
              </Typography>
              <Typography className="font-normal text-textColor">
                Software Engineer
              </Typography>
            </CardFooter>
          </Card>
          <Card className="w-80 max-h-[567px] rounded-none">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <Image
                src="/people/Gerald.jpg"
                alt="img"
                width={540}
                height={276}
                className="overflow-hidden object-cover"
              />
            </CardHeader>
            <CardBody>
              <p className="font-light text-textColor line-clamp-6">
                After graduating, Gerald was hired on the spot by Meqasa`s CEO
                during demo day. He now works at Hubtel, focusing on gaining
                expertise,solving problems, and building his career in software
                development.
              </p>
            </CardBody>
            <hr className="border-violet h-1" />
            <CardFooter>
              <Typography className="font-bold text-textColor">
                Gerald
              </Typography>
              <Typography className="font-normal text-textColor">
                Software Engineer
              </Typography>
            </CardFooter>
          </Card>
        </div>
        <Link href="/success-stories">
          <Button className="rounded-none text-white bg-violet mt-10">
            Discover More Success Stories
          </Button>
        </Link>
      </div>
      {/* svg bg logos */}
      <BgLogoRight className="fill-cyan-100 absolute top-10 lg:top-0 lg:right-0 -z-50 h-80 md:h-1/2 sm:inline" />
      <BgLogoLeft className="fill-cyan-400 absolute bottom-10 lg:bottom-0 lg:left-0 -z-50 h-80 lg:h-1/2 sm:inline" />
    </section>
  );
};
export default SuccessStory;
