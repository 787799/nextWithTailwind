import { IndianNews } from "@/data/indianNews";
import Card1 from "./Card1";
import { reelData } from "@/data/reelsData";

export default function Reels({ title }) {
  return (
    <>
      <div class="p-10 h-full  bg-cover bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 ">
        <h1 className="text-6xl mt-6 font-bold text-start text-white ">
          Reels
        </h1>
        <h1 className="text-2xl mt-4 mb-8 font-semibold text-start text-white ">
          The most amazing videos from the BBC
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {reelData?.map((e) => {
            return (
              <>
                <ReelsCard title={e.title} image={e.image.src} />
              </>
            );
          })}
        </div>
      </div>
      <div className="pl-[5%] mt-[5%]">
        {/* <p className="pl-4 border-l-4 border-red-800">Indian News</p> */}
        <h1 className="text-2xl border-l-4 border-red-800 mt-4 mb-8 font-semibold text-start pl-5  ">
          Indian News
        </h1>
      </div>
      <div className="p-10 flex flex-row justify-around gap-5">
        {IndianNews?.map((e) => {
          return (
            <>
              <Card1
                heading={e.heading}
                subtitle={e.subtitle}
                image={e.image.src}
              />
            </>
          );
        })}
      </div>
    </>
  );
}

export function ReelsCard({ title, image }) {
  return (
    <>
      <div class=" shadow-lg">
        <video className="w-full" autoplay muted loop controls>
          <source
            src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
            type="video/mp4"
          />
        </video>

        <div class="px-6 py-2 bg-white">
          <div class="font-bold text-2xl text-start ">{title}</div>
        </div>
      </div>
    </>
  );
}
