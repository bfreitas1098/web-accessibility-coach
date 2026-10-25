import "../globals.css";
import screenshotExample from "../../../screenshot-example.png";

export default function ScreenshotWindow() {
  return (
    <>
      <div className="rounded-md border-4 border-taupe-300 w-lvh shadow-[2px_10px_12px_#d6d3d1]">
        <img src={screenshotExample.src} alt="Screenshot example" />
      </div>
    </>
  );
}
