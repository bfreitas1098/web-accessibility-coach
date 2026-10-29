import "../globals.css";
import screenshotExample from "../../../screenshot-example.png";

export default function ScreenshotWindow() {
  return (
    <>
      <div className="rounded-full w-8 h-8 text-sm bg-warm-amber border border-white flex justify-center items-center issue-1 absolute z-1000 top-78 left-69">
        1
      </div>
      <div className="rounded-full w-8 h-8 text-sm bg-warm-amber border border-white flex justify-center items-center issue-2 absolute z-1000 top-158 left-10">
        2
      </div>
      <div className="rounded-full w-8 h-8 text-sm bg-warm-amber border border-white flex justify-center items-center issue-3 absolute z-1000 top-171 left-105">
        3
      </div>
      <div className="rounded-md border-4 border-white shadow-md relative">
        <img src={screenshotExample.src} alt="Screenshot example" />
      </div>
    </>
  );
}
