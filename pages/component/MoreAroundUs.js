import { LatestNews } from "@/data/latestNews";
import Card1 from "./Card1";
import { EditorCard } from "./Editor";
import { MoreAroundUs } from "@/data/moreAroundUsData";

export default function MoreAroundUsComponent() {
  return (
    <>
      <div className="w-full flex h-full flex-col bg-white ">
        <div className="w-full my-10">
          <h1 className="text-4xl font-bold border-l-4 ml-10 border-red-600 pl-5 my-6 ">
            More around the  News
          </h1>
        </div>
        <div className="w-full flex flex-row-reverse px-10 ">
          <div className="w-2/3 ">
            <div>
              <div className="w-full h-[500px]">
                <div class="w-full text-white h-full flex flex-col justify-end  p-6  border border-gray-200 bg-[url('https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp')] shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <h5 class="mb-2 text-[2rem] font-bold tracking-tight text-gray-900 text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p class="mb-3 text-[1rem] tracking-tight  font-normal text-white dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <p>Read more ...</p>
                </div>
              </div>
            </div>
            <div className="w-full  mt-10">
              <div class="grid grid-cols-3 gap-4 ">
                {MoreAroundUs?.map((e) => {
                  return (
                    <>
                      <Card1
                        title={e.title}
                        image={e.image.src}
                        subtitle={e.subtitle}
                      />
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="w-1/3 bg-white mr-4 mb-4">
            <h1 className="bg-red-600 text-white font-bold text-4xl text-start p-2">
              Latest News
            </h1>
            {LatestNews.map((e, i) => {
              return (
                <>
                  <EditorCard number={i + 1} title={e} />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
