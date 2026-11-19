import "../globals.css";
import screenshotExample from "../../../screenshot-example.png";

export default function ScreenshotWindow({ onSelectIssue }) {
  return (
    <>
      <div className="rounded-md border-4 border-white shadow-md relative">
        <img src={screenshotExample.src} alt="Screenshot example" />
      </div>

      <button
        type="button"
        className="block rounded-full w-8 h-8 text-sm bg-warm-amber border border-white flex justify-center items-center issue-1 absolute z-10 top-80 left-70 cursor-pointer"
        onClick={() => onSelectIssue(1)}
      >
        1
      </button>
      <button
        type="button"
        className="block rounded-full w-8 h-8 text-sm bg-warm-amber border border-white flex justify-center items-center issue-2 absolute z-10 top-160 left-9 cursor-pointer"
        onClick={() => onSelectIssue(2)}
      >
        2
      </button>
      <button
        type="button"
        className="block rounded-full w-8 h-8 text-sm bg-warm-amber border border-white flex justify-center items-center issue-3 absolute z-10 top-172 left-130 cursor-pointer"
        onClick={() => onSelectIssue(3)}
      >
        3
      </button>
    </>
  );
}
