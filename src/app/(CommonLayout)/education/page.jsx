import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
export const metadata = {
  title: "Education | Jannatul Ferdous",
};
const educationData = [
  {
    institute: "Daffodil International University",
    degree: "B.Sc. in Computer Science & Engineering",
    duration: "2019 - 2022",
    result: "CGPA: 3.47 / 4.00",
    location: "Dhaka, Bangladesh",
  },
  {
    institute: "Aftab Uddin School & College",
    degree: "Higher Secondary Certificate (HSC)",
    duration: "2016 - 2018",
    result: "GPA: 3.92 / 5.00",
    location: "Dhaka, Bangladesh",
  },
  {
    institute: "Pakshimul High School",
    degree: "Secondary School Certificate (SSC)",
    duration: "2014 - 2016",
    result: "GPA: 4.22 / 5.00",
    location: "Cumilla, Bangladesh",
  },
];

const EducationPage = () => {
  return (
    <div className="grid gap-6 max-w-3xl mx-auto p-4">
      {educationData.map((edu, index) => (
        <Card
          key={index}
          className="w-full shadow-md bg-gradient-to-r from-[#383737] to-[#0f0f0f] text-white"
        >
          <CardHeader>
            <CardTitle className="text-xl">{edu.institute}</CardTitle>
            <p className="text-sm text-gray-400">{edu.degree}</p>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">
                {edu.duration}
              </span>
              <Badge variant="outline" className="text-sm text-white">
                {edu.result}
              </Badge>
            </div>
            <p className="text-sm text-gray-400">{edu.location}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default EducationPage;
