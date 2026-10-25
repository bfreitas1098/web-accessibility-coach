import "./globals.css";
import Navigation from "./components/Navigation";
import Heading from "./components/Heading";
import ScreenshotWindow from "./components/ScreenshotWindow";

export default function Page() {
  return (
    <>
      <Navigation />
      <Heading />

      <div className="grid grid-cols-3 gap-4 px-8">
        <div className="col-span-2">
          <ScreenshotWindow />
        </div>
      </div>
    </>
  );
}
