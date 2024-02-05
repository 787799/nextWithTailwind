import Card1 from "./Card1";
import { NewsData } from "@/data/newsData";

export default function News2() {
  return (
    <>
      {/* news Section  */}

      <div className="w-full h-full bg-white flex">
        <div className="w-[70%] bg-white">
          <CardWithTitle title={"News"} newsData={NewsData} />
          <CardWithTitle title={"Sports"} newsData={NewsData} />
          <CardWithTitle title={"Science & Technology"} newsData={NewsData} />
        </div>

        <div className="w-[30%] h-[100%] h-screen ml-4  bg-slate-400">
          <p>demo test for add</p>
        </div>
      </div>
    </>
  );
}

export function CardWithTitle({ title, newsData }) {
  return (
    <>
      <h1 className="text-gray-600 w-full h-100 py-4 bg-gray-200 font-bold text-3xl  pl-8">
        {/* {newsData[0].title} */}
        {title}
      </h1>
      <div className="w-full grid grid-cols-3 gap-4 p-6">
        {newsData?.map((e) => {
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
