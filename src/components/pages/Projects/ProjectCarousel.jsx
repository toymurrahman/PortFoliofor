"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef } from "react";
import projectData from "../../../../public/projects.json";

const ProjectCarousel = ({ title }) => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  const matchedProject = projectData.singleProjects.find(
    (project) => project.title === title
  );

  if (!matchedProject) return <p className="text-center">No project found</p>;

  const images = [matchedProject.image, matchedProject?.image2, matchedProject?.image3].filter(Boolean);

  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {images.map((imgUrl, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={imgUrl}
              alt={`${matchedProject.title} ${idx + 1}`}
              className="w-full h-auto object-cover rounded"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectCarousel;
