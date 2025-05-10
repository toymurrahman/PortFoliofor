import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const HeroCard = () => {
  return (
    <Card className="h-full rounded-md py-0 gradiants text-white">
      <div className="grid lg:grid-cols-2 h-full items-center">
        <div className="relative flex justify-center items-center h-full">
          <Image
            src="https://i.postimg.cc/BnZYDy8v/ul.png"
            alt="Profile"
            width={70}
            height={70}
            className="object-cover w-full p-10 rounded-tl-lg rounded-br-lg"
            style={{ borderRadius: "80px 0px 80px 0px" }}
            priority
          />
        </div>
        <div className="w-full mx-auto sm:px-4 pb-10 md:pb-0">
          <CardHeader>
            <CardDescription>MERN Stack Developer</CardDescription>
            <CardTitle className="text-3xl">Jannatul Ferdous</CardTitle>
            <CardDescription>
              Who loves turning ideas into interactive, user-friendly web
              experiences.
            </CardDescription>
          </CardHeader>
          {/* <LinkButton /> */}
        </div>
      </div>
    </Card>
  );
};

export default HeroCard;
