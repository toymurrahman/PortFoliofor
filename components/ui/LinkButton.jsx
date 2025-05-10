import { PiLinktreeLogoThin } from "react-icons/pi";
import { Button } from "./button";
const LinkButton = () => {
  return (
    <div className="mt-auto flex justify-end pr-10 pt-5">
      <PiLinktreeLogoThin className="text-white hover:text-blue-800 text-3xl rotate-90" />
    </div>
  );
};

export default LinkButton;
