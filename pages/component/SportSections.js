export default function SportsSection() {
  return (
    <>
      <div className="w-full h-full p-10 bg-blue-600 flex flex-row-reverse justify-center ">
        <div className="w-[30%] h-screen p-10 bg-slate-300 "></div>
        <div className="w-[70%] h-full flex flex-col p-8 bg-slate-800 ">
          <div className="flex">
            <div className="w-[50%] h-full bg-red-600 p-4"></div>
            <div className="w-[50%] h-full bg-indigo-300 p-4">
              <div className="grid grid-cols-2 gap-4 p-2 ">
                <div className="bg-white h-[200px] rounded  "> 1</div>
                <div className="bg-white h-[200px] rounded ">3</div>
                <div className="bg-white h-[200px] rounded ">2</div>
                <div className="bg-white h-[200px] rounded ">4</div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-[30%] h-full bg-red-600 p-4"></div>
            <div className="w-[70%] h-full bg-indigo-300 p-4">
              <div className="grid grid-cols-3 gap-4 p-2 ">
                <div className="bg-white h-[200px] rounded  "> 1</div>
                <div className="bg-white h-[200px] rounded ">3</div>
                <div className="bg-white h-[200px] rounded ">2</div>
                <div className="bg-white h-[200px] rounded ">4</div>
                <div className="bg-white h-[200px] rounded ">5</div>
                <div className="bg-white h-[200px] rounded ">6</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full p-10 bg-blue-600 flex flex-row justify-center ">
        <div className="w-[40%] h-full p-20 bg-slate-300 "></div>
        <div className="w-[60%] h-full flex flex-col p-8 bg-slate-800 ">
          <div className="grid grid-cols-3 gap-4 p-2 ">
            <div className="bg-white h-[200px] rounded  "> 1</div>
            <div className="bg-white h-[200px] rounded ">3</div>
            <div className="bg-white h-[200px] rounded ">2</div>
            <div className="bg-white h-[200px] rounded ">4</div>
            <div className="bg-white h-[200px] rounded ">2</div>
            <div className="bg-white h-[200px] rounded ">4</div>
          </div>
        </div>
      </div>
      <div className="w-full h-full p-10 bg-blue-600 flex flex-row justify-center ">
        <div className="w-[30%] h-full p-20 bg-slate-300 "></div>
        <div className="w-[20%] h-full flex flex-col p-20 bg-slate-600 "></div>
        <div className="w-[20%] h-full p-20 bg-red-200 "></div>
        <div className="w-[30%] h-full flex flex-col p-20 bg-slate-800 ">
          Add section
        </div>
      </div>
    </>
  );
}
