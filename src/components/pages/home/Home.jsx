import { GrDocumentUser } from "react-icons/gr";
import { BiFile } from "react-icons/bi";
import { GrHtml5 } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandTypescript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { RiFirebaseLine } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiAntdesign } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { FaUserGraduate } from "react-icons/fa6";
import { RiContactsBook3Line } from "react-icons/ri";
import ItemCard from "@/components/ui/BaseCard";
import IntroMarquee from "./IntroMarquee";
import ExperienceShowcase from "./ExperienceShowcase";
import HeroCard from "./HeroCard";
import Link from "next/link";

const Home = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-rows-auto gap-4 min-h-screen p-4 sm:p-6 md:p-8">
      {/* Hero Section */}
      <div className="md:col-span-2 md:row-span-4">
        <HeroCard />
      </div>

      {/* Intro Marquee */}
      <div className="sm:col-span-2 md:col-span-2 md:col-start-3">
        <IntroMarquee />
      </div>

      {/* Credentials */}
      <div className="md:row-span-3 md:col-start-3 md:row-start-2">
        <Link href="/about">
          <ItemCard
            icon={GrDocumentUser}
            title="Credentials"
            description="More about me"
          />
        </Link>
      </div>

      {/* Projects */}
      <div className="md:row-span-3 md:col-start-4 md:row-start-2">
        <Link href="/projects">
          <ItemCard icon={BiFile} title="Projects" description="Showcase" />
        </Link>
      </div>

      {/* Education */}
      <div className="sm:col-span-1 md:row-span-2 md:row-start-5">
        <Link href="/education">
          <ItemCard
            icon={FaUserGraduate}
            title="Education"
            description="Academic Qualification"
          />
        </Link>
      </div>

      {/* Contact Info */}
      <div className="sm:col-span-1 md:col-start-4 md:row-span-2 md:row-start-5">
        <Link href="/contact">
          <ItemCard
            icon={RiContactsBook3Line}
            title="Contact Info"
            description="Let's Connect"
          />
        </Link>
      </div>

      {/* Skills */}
      <div className="sm:col-span-2 md:col-span-2 md:col-start-2 md:row-span-2 md:row-start-5">
        <Link href="/skills">
          <ItemCard
            icon={[
              GrHtml5,
              IoLogoJavascript,
              TbBrandTypescript,
              FaReact,
              RiNextjsLine,
              RiTailwindCssFill,
              FaNodeJs,
              SiExpress,
              SiMongodb,
              RiFirebaseLine,
              SiRedux,
              SiMongoose,
              SiMui,
              SiAntdesign,
              SiPostman,
            ]}
            title="Skills"
            description="What I Use"
          />
        </Link>
      </div>

      {/* Experience Showcase */}
    <div className="bg-[#383737] rounded-md md:col-span-2 md:row-span-2 md:row-start-7">
        <ExperienceShowcase />
      </div>

      {/* Work Together CTA */}
      <div className="sm:col-span-2 md:col-span-2 md:col-start-3 md:row-span-2 md:row-start-7">
        <Link href="/contact">
          <ItemCard
            title="Let's Work Together"
            titleClassName="text-3xl sm:text-4xl md:text-5xl"
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;
