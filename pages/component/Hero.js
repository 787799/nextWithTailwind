import { useState } from "react";
import { HeroData } from "@/data/heroData";

export default function Hero() {
  const [data] = useState(HeroData);
  console.log(data);
  return (
    <>
      <div class="carousel w-full h-50">
        <div id="slide1" class="carousel-item relative w-full">
          <img
            // src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp"
            src={data[0].image.src}
            class="w-full"
          />

          <HeroCard
            heading={data[0].heading}
            title={data[0].title}
            subtitle={data[0].subtitle}
            date={data[0].date}
            rightClick={"#slide2"}
            leftClick={"#slide4"}
          />
        </div>
        <div id="slide2" class="carousel-item relative w-full">
          <img
            // src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp"
            src={data[0].image.src}
            class="w-full"
          />

          <HeroCard
            heading={data[1].heading}
            title={data[1].title}
            subtitle={data[1].subtitle}
            date={data[1].date}
            rightClick={"#slide3"}
            leftClick={"#slide1"}
          />
        </div>
        <div id="slide3" class="carousel-item relative w-full">
          <img
            // src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp"
            src={data[2].image.src}
            class="w-full"
          />

          <HeroCard
            heading={data[2].heading}
            title={data[2].title}
            subtitle={data[2].subtitle}
            date={data[2].date}
            rightClick={"#slide4"}
            leftClick={"#slide2"}
          />
        </div>
        <div id="slide4" class="carousel-item relative w-full">
          <img
            // src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp"
            src={data[3].image.src}
            class="w-full"
          />

          <HeroCard
            heading={data[3].heading}
            title={data[3].title}
            subtitle={data[3].subtitle}
            date={data[3].date}
            rightClick={"#slide1"}
            leftClick={"#slide3"}
          />
        </div>
      </div>
    </>
  );
}

export function HeroCard({
  heading,
  title,
  subtitle,
  date,
  rightClick,
  leftClick,
}) {
  return (
    <div class="absolute  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <div class="block w-1/3 backdrop-blur-xl bg-transparent border-2 border-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div className="flex text-white justify-between">
          <p>
            {heading}, {date}
          </p>
          <div>
            <a href={leftClick} class="btn btn-square mr-2">
              ❮
            </a>
            <a href={rightClick} class="btn btn-sqaure">
              ❯
            </a>
          </div>
        </div>

        <h5 class="mb-2 text-3xl font-medium leading-tight text-white dark:text-neutral-50">
          {title}
        </h5>
        <p class="mb-4  text-white dark:text-neutral-200">{subtitle}</p>
      </div>
    </div>
  );
}
