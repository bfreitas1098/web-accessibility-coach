import "../globals.css";
import screenshotExample from "../../../screenshot-example.png";

export default function ScreenshotWindow() {
  return (
    <>
      <div className="rounded-full w-8 h-8 text-sm bg-warm-amber border border-white flex justify-center items-center issue-1 absolute z-1000 top-89 left-90">
        1
      </div>
      <div className="rounded-full w-8 h-8 text-sm bg-warm-amber border border-white flex justify-center items-center issue-2 absolute z-1000 top-203 left-13">
        2
      </div>
      <div className="rounded-full w-8 h-8 text-sm bg-warm-amber border border-white flex justify-center items-center issue-3 absolute z-1000 top-219 left-173">
        3
      </div>
      <div className="rounded-md border-4 border-white shadow-md relative">
        <img src={screenshotExample.src} alt="Screenshot example" />
      </div>
    </>
  );
}
