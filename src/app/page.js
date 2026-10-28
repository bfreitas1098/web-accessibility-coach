import "./globals.css";
import Navigation from "./components/Navigation";
import Heading from "./components/Heading";
import ScreenshotWindow from "./components/ScreenshotWindow";
import IssuesColumn from "./components/IssuesColumn";

export default function Page() {
  return (
    <>
      <Navigation />
      <Heading />

      <div className="grid grid-cols-[1.5fr_1fr] grid-rows-2 gap-4 px-8">
        <div className="row-span-1">
          <ScreenshotWindow />
        </div>
        <div className="row-span-2">
          <IssuesColumn />
        </div>
      </div>
    </>
  );
}
