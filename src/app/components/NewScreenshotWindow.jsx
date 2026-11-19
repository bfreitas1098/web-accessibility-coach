import "../globals.css";
import { CloudArrowUpIcon } from "@heroicons/react/24/outline";

export default function NewScreenshotWindow() {
  return (
    <>
      <div className="rounded-md border border-dashed border-accessible-teal flex justify-center items-center w-4xl h-120">
        <button
          type="button"
          className="inline-flex flex-col items-center rounded-lg bg-accessible-teal px-6 py-4 text-md font-semibold text-white shadow-xs hover:bg-deep-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black cursor-pointer"
        >
          <div className="flex items-center justify-center gap-2">
            <CloudArrowUpIcon className="size-8 color-white" />
            Upload Screenshot Here
          </div>
          <span className="block font-normal text-xs">
            PNG, JPG, or WebP • Max 10 MB
          </span>
        </button>
      </div>
    </>
  );
}
