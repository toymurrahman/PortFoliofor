import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaPencilAlt, FaPlane, FaMusic, FaCoffee } from "react-icons/fa";
import Link from "next/link";

export const metadata = {
  title: "About | Jannatul Ferdous",
};

const AboutPage = () => {
  const interests = [
    { icon: <FaPencilAlt size={24} />, label: "Drawing" },
    { icon: <FaPlane size={24} />, label: "Travel" },
    { icon: <FaMusic size={24} />, label: "Music" },
    { icon: <FaCoffee size={24} />, label: "Coffee" },
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white px-4 py-10 sm:px-6 md:px-10 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Profile Card */}
        <Card className="text-center gradiants self-start">
          <CardHeader className="flex flex-col items-center">
            <img
              src="https://i.postimg.cc/BnZYDy8v/ul.png"
              alt="Profile"
              width="120"
              height="120"
              className="object-cover rounded-full border-4 border-gray-700"
            />

            <CardTitle className="text-white mt-4 text-2xl sm:text-3xl">
              Jannatul Ferdous
            </CardTitle>
            <CardDescription className=" sm:text-base text-gray-400">
              MERN Stack Developer
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex justify-center flex-wrap gap-4 text-white">
              <a href="https://github.com/jannat710" target="_blank">
                <FaGithub className="bg-[#383737] p-2 text-4xl rounded-full hover:bg-gray-600 transition" />
              </a>
              <a href="https://www.linkedin.com/in/jannatul38/" target="_blank">
                <FaLinkedin className="bg-[#383737] p-2 text-4xl rounded-full hover:bg-gray-600 transition" />
              </a>
              <a href="https://x.com/jannatul_zz" target="_blank">
                <FaTwitter className="bg-[#383737] p-2 text-4xl rounded-full hover:bg-gray-600 transition" />
              </a>
              <a href="https://www.facebook.com/jannatulfee" target="_blank">
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
              I'm Jannatul Ferdous, from Dhaka. I hold a BSc in Computer Science
              Engineering from Daffodil International University (CGPA 3.47).
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
                <p>Jannatul Ferdous</p>
                <p>24</p>
                <p>Dhaka, Bangladesh</p>
                <p>jannatul0040@gmail.com</p>
                <p>(+88) 01766401933</p>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">Experience</h2>
            <div>
              <h3 className="text-lg font-medium">
                MERN Stack Developer{" "}
                <span className="text-gray-400 font-normal">| Antopolis</span>
              </h3>
              <p className="text-sm text-gray-400">Apr 2024 - Jul 2024</p>
              <p className="mt-2 text-gray-400">
                Built full-stack web applications using MongoDB, Express, React,
                NextJS, and Node.js. Integrated REST APIs and worked in teams to
                build scalable, responsive platforms.
              </p>
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
