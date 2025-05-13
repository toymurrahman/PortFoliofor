import { Heart } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="text-center py-6">
      <h1 className="italic font-light">Toymur Rahman</h1>
      <div className="mt-3">
        <ul className="flex-row gap-5 md:flex justify-center items-center  text-gray-400">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Me</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/skills">Skills</Link>
          </li>
          <li>
            <Link href="/education">Education</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </div>
      <h1 className="mt-4 text-sm text-gray-400 flex justify-center items-center">
        @ Made with
        <Heart className="text-white mx-2" size={16} />
        &amp; by
        <span className="text-white pl-2 font-semibold">Toymur Rahman (Tonmoy)</span>
      </h1>
    </div>
  );
};

export default Footer;
