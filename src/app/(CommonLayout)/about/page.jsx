import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaWpexplorer } from "react-icons/fa";

import { CgGames } from "react-icons/cg";
import { GrTechnology } from "react-icons/gr";
import { FaCoffee } from "react-icons/fa";
import Link from "next/link";

export const metadata = {
  title: "About | Toymur Rahman",
};

const AboutPage = () => {
  const interests = [
    { icon: <FaWpexplorer size={24} />, label: "Explore gadgets" },
    { icon: <CgGames size={24} />, label: "Video Games" },
    { icon: <GrTechnology size={24} />, label: "learning Tech" },
    { icon: <FaCoffee size={24} />, label: "Coffee" },
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white px-4 py-10 sm:px-6 md:px-10 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Profile Card */}
        <Card className="text-center gradiants self-start">
          <CardHeader className="flex flex-col items-center">
            <img
              src="https://i.ibb.co/Fk3DQNWg/formal.png"
              alt="Profile"
              width="120"
              height="120"
              className="object-cover rounded-full border-4 border-gray-700"
            />

            <CardTitle className="text-white mt-4 text-2xl sm:text-3xl">
              Toymur Rahman
            </CardTitle>
            <CardDescription className=" sm:text-base text-gray-400">
              MERN Stack Developer
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex justify-center flex-wrap gap-4 text-white">
              <a href="https://github.com/toymurrahman" target="_blank">
                <FaGithub className="bg-[#383737] p-2 text-4xl rounded-full hover:bg-gray-600 transition" />
              </a>
              <a href="https://www.linkedin.com/in/toymur-rahman-tonmoy/" target="_blank">
                <FaLinkedin className="bg-[#383737] p-2 text-4xl rounded-full hover:bg-gray-600 transition" />
              </a>
              <a href="https://x.com/ToymurRahman10" target="_blank">
                <FaTwitter className="bg-[#383737] p-2 text-4xl rounded-full hover:bg-gray-600 transition" />
              </a>
              <a href="https://www.facebook.com/toymur.rahmantonmoy" target="_blank">
                <FaFacebook className="bg-[#383737] p-2 text-4xl rounded-full hover:bg-gray-600 transition" />
              </a>
            </div>
            <Link href="/contact">
              <Button className="w-full">Get In Touch</Button>
            </Link>
          </CardContent>
        </Card>

        {/* Info Sections */}
        <div className="md:col-span-2 space-y-10">
          {/* About */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">About Me</h2>
            <p className="text-lg text-gray-200 mb-2">So, who am I?</p>
            <p className="text-base text-gray-400 leading-relaxed">
              I'm Toymur Rahman, from Dhaka. I hold a BSc in Computer Science
              Engineering from Institute of Science Trade and Technology (CGPA 3.19).
              Passionate about coding, problem-solving, and contributing to
              open-source.
            </p>
            <div className="flex  text-gray-400 gap-6 pt-5 ">
              <div className="font-medium  space-y-1">
                <p>Name:</p>
                <p>Age:</p>
                <p>Present Address:</p>
                <p>Email:</p>
                <p>Phone:</p>
              </div>
              <div className="space-y-1">
                <p>Toymur Rahman</p>
                <p>24</p>
                <p>Dhaka, Bangladesh</p>
                <p>rahmantoymur2@gmail.com</p>
                <p>(+88) 01623385441</p>
              </div>
            </div>
          </section>

          

          {/* Interests */}
          <section className="py-6">
            <h2 className="text-2xl font-semibold mb-6 text-center md:text-left">
              My Interests
            </h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              {interests.map((item, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col items-center text-white"
                >
                  <div className="w-20 h-20 flex items-center justify-center border-2 border-[#383737] rounded-full group-hover:bg-[#383737] transition-colors">
                    {item.icon}
                  </div>
                  <p className="mt-2 text-base opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
