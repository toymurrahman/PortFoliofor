import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const experienceData = [
  {
    title: "01",
    descriptionLine1: "Years",
    descriptionLine2: "Experience",
  },
  {
    title: "100+",
    descriptionLine1: "Projects",
    descriptionLine2: "Completed",
  },
  {
    title: "20+",
    descriptionLine1: "Clients",
    descriptionLine2: "Served",
  },
];

const ExperienceShowcase = () => {
  return (
    <div className="h-full grid md:grid-cols-1 lg:grid-cols-3 gap-5 md:p-5 md:gap-16 w-full mx-auto place-items-center">
      {experienceData.map((item, index) => (
        <Card
          key={index}
          className="text-center w-full md:w-44 h-full rounded-md py-0 gradiants text-white"
        >
          <CardHeader>
            <CardTitle className="text-2xl  pt-5">{item.title}</CardTitle>
            <CardDescription className="uppercase">
              {item.descriptionLine1}
              <br />
              {item.descriptionLine2}
            </CardDescription>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ExperienceShowcase;
