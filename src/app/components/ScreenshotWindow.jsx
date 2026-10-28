import "../globals.css";
import screenshotExample from "../../../screenshot-example.png";

export default function ScreenshotWindow() {
  return (
    <>
      <div className="rounded-md border-4 border-white shadow-[2px_10px_10px_#e8e4e3]">
        <img src={screenshotExample.src} alt="Screenshot example" />
      </div>
    </>
  );
}
