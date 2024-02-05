import { NewsData } from "@/data/newsData";

export default function Card1({ heading, subtitle, readMore, image }) {
  return (
    <div class="block max-w-[18rem] hover:shadow-lg  bg-transparent dark:bg-neutral-700">
      <div class="relative overflow-hidden bg-cover bg-no-repeat">
        <img
          // src="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg"
          src={image}
          alt=""
        />
      </div>
      <div class="p-2">
        <div>
          <h3 className="bg-red text-xl font-bold w-full">{heading}</h3>
          <p class="text-base mb-10 text-neutral-600 dark:text-neutral-200">
            {/* {NewsData[0].subtitle} */}
            {subtitle}
          </p>
        </div>
        <div>
          <p onClick={readMore} className="pl-4 border-l-4 border-red-800">
            Read more....
          </p>
        </div>
      </div>
    </div>
  );
}
