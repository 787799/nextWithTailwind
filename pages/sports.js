import { MoreAroundUs } from "@/data/moreAroundUsData";
import Card1 from "./component/Card1";
import Header from "./component/Header";
import Footer from "./component/Footer";
import SportsSection from "./component/SportSections";

export default function Sports() {
  return (
    <>
      <Header />
      <SportsSection />
      {/* <div className="w-full flex h-full flex-col bg-white ">
        <div className="w-full my-10">
          <h1 className="text-4xl  h-30 font-semibold text-start  bg-yellow-400 ">
            Sports
          </h1>
        </div>
        <div className="w-full flex flex-row-reverse px-10 ">
          <div className="w-2/3 ">
            <div>
              <div className="w-full h-[500px]">
                <div class="w-full text-white h-full flex flex-col justify-end  p-6  border border-gray-200 bg-[url('https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp')] shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <h5 class="mb-2 text-[2rem] font-bold tracking-tight text-gray-900 text-white">
                      Sports
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
            <div class="relative group w-96 h-96 overflow-hidden bg-black m-auto mt-36">
              <img
                class="object-cover w-full h-full transform duration-700 backdrop-opacity-100"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1650&q=80"
              />
              <div class="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
              <div class="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
                <div class="absolute w-full flex place-content-center">
                  <p class="capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white mt-10">
                    Team work
                  </p>
                </div>
                <div class="absolute w-full flex place-content-center mt-20">
                  <p class="font-sans text-center w-4/5 text-white mt-5">
                    Collaborative effort of a group to achieve a common goal the
                    most effective and efficient way!
                  </p>
                </div>
                <button class="absolute left-1/4 bottom-4 bg-white text-black font-bold rounded-lg h-10 w-48">
                  Contact Us
                </button>
              </div>
            </div>
            {/* className="w-1/3 bg-white mr-4 mb-4"> 
            <div class="relative group w-96 h-96 overflow-hidden bg-black m-auto mt-36">
              <img
                class="object-cover w-full h-full transform duration-700 backdrop-opacity-100"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1650&q=80"
              />
              <div class="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
              <div class="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
                <div class="absolute w-full flex place-content-center">
                  <p class="capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white mt-10">
                    Team work
                  </p>
                </div>
                <div class="absolute w-full flex place-content-center mt-20">
                  <p class="font-sans text-center w-4/5 text-white mt-5">
                    Collaborative effort of a group to achieve a common goal the
                    most effective and efficient way!
                  </p>
                </div>
                <button class="absolute left-1/4 bottom-4 bg-white text-black font-bold rounded-lg h-10 w-48">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <Footer />
    </>
  );
}
