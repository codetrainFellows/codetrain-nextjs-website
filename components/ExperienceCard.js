import Image from "next/image";

const ExperienceCard = ({ className, img, title, text, imgClass }) => {
  return (
    <div
      className={`flex flex-col items-center gap-x-9 relative z-10 ${className}`}
    >
      <div className="max-w-md">
        <Image
          src={img}
          alt={title}
          width={400}
          height={300}
          quality={100}
          className={`rounded-none shadow ${imgClass}`}
        />
      </div>
      <div className="mt-10 lg:mt-0 max-w-md">
        <h3 className="text-violet text-2xl md:text-3xl max-w-sm">{title}</h3>
        <p className="max-w-md text-base text-textColor tracking-wide mt-6">
          {text}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
