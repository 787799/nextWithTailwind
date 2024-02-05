import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./component/Header";
import News from "./component/News";
import Hero from "./component/Hero";
import News2 from "./component/News2";
import WeatherReport from "./component/WeatherReport";
import Reels from "./component/Reels";
import Editor from "./component/Editor";
import Footer from "./component/Footer";
import MoreAroundUsComponent from "./component/MoreAroundUs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header />
      {/* <Hero /> */}
      <News />
      <News2 />
      <WeatherReport />

      <Editor />
      <Reels />
      <MoreAroundUsComponent />
      <Footer />
    </div>
  );
}
