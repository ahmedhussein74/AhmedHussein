import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import img1 from "../images/Architects.png";
import img2 from "../images/Country-App.png";
import img3 from "../images/Food.png";
import img4 from "../images/QR-Code.png";
import img5 from "../images/TextToVoice.png";
import img6 from "../images/To-Do-App.png";
import img7 from "../images/clinic.png";

const Projects = () => {
  const projects = [
    {
      url: "https://architects-seven.vercel.app/",
      img: img1,
    },
    {
      url: "https://country-app-phi.vercel.app/",
      img: img2,
    },
    {
      url: "https://food-six-iota.vercel.app/",
      img: img3,
    },
    {
      url: "https://qr-code-seven-woad.vercel.app/",
      img: img4,
    },
    {
      url: "https://text-to-voice-theta.vercel.app/",
      img: img5,
    },
    {
      url: "https://todo-react-app-blush.vercel.app/",
      img: img6,
    },
    {
      url: "https://clinic-phi.vercel.app/",
      img: img7,
    },
  ];
  return (
    <section id="projects" className="pb-20 pt-5">
    <h1 className="text-white text-center text-2xl md:text-3xl my-5">Projects</h1>
      <Swiper
        modules={[EffectCoverflow, Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={50}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true}
        effect="coverflow"
        coverflowEffect={{
          rotate: 45,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        className="w-full md:w-3/4 pb-0 md:pb-32 my-5"
      >
        {projects.map((element, index) => (
          <SwiperSlide key={index} className="w-64 md:w-96 mx-auto">
            <a href={element.url}>
              <img src={element.img} className="" />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;
