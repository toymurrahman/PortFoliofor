import { Card, CardContent, CardDescription } from "@/components/ui/card";
import LinkButton from "./LinkButton";
import Marquee from "react-fast-marquee";

const ItemCard = ({ icon, title, description, titleClassName = "text-xl" }) => {
  const renderIcons = () => {
    if (!icon) return null;
    if (Array.isArray(icon) && icon.length > 1) {
      return (
        <Marquee gradient={false} speed={40} pauseOnHover className="w-full">
          <div className="flex gap-6">
            {icon.map((IconComponent, index) => (
              <IconComponent key={index} className="text-5xl mx-4" />
            ))}
          </div>
        </Marquee>
      );
    }

    // ✅ Single icon: show normally
    const SingleIcon = icon;
    return <SingleIcon className="text-6xl w-full mx-auto" />;
  };

  return (
    <div className="h-full">
      <Card className="gradiants rounded-md text-white h-full">
        <CardContent className="flex flex-col justify-center h-full space-y-5">
          {renderIcons()}
          <div className="flex justify-between items-center gap-5">
            <div>
              {description && (
                <CardDescription className="uppercase mb-1">
                  {description}
                </CardDescription>
              )}
              <h1 className={`${titleClassName} font-medium`}>{title}</h1>
            </div>
            <LinkButton />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ItemCard;
