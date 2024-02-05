import NewsCards from "./NewsCards";
import { WelcomeDtata } from "@/data/welcomeData";

export default function News() {
  return (
    <>
      <div className="py-2 bg-white">
        <h1 className="text-gray-600 w-full h-100 py-4 bg-gray-200 font-bold text-3xl my-4 pl-8">
          Welcome to  News
        </h1>
        <div className="w-full flex gap-4 bg-white p-10">
          <div className="w-1/2">
            <div class="w-full text-white h-full flex flex-col justify-end  p-6  border border-gray-200 bg-[url('https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp')] shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <h5 class="mb-2 text-[2rem] font-bold tracking-tight text-gray-900 text-white">
                  {WelcomeDtata[0].title}
                </h5>
              </a>
              <p class="mb-3 text-[1rem] tracking-tight  font-normal text-white dark:text-gray-400">
                {WelcomeDtata[0].subtitle}
              </p>
              <p>Read more ...</p>
            </div>
          </div>
          <div class="w-1/2 grid grid-cols-2 gap-4">
            {WelcomeDtata.map((e, i) => {
              return <>{<NewsCards title={e.title} image={e.image.src} />}</>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
