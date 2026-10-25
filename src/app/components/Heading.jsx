import "../globals.css";
import { CloudArrowUpIcon } from "@heroicons/react/24/outline";

export default function Heading() {
  return (
    <div className="p-8 sm:flex sm:items-center sm:justify-between">
      <div className="flex flex-col gap-2 justify-start">
        <h3 className="font-bold text-black text-4xl">
          Make every interface more inclusive
        </h3>
        <span className="font-medium text-gray-500 text-lg">
          Review potential accessibility issues in your screenshots.
        </span>
      </div>
      <div className="mt-3 sm:mt-0 sm:ml-4">
        <button
          type="button"
          className="inline-flex items-center rounded-lg bg-taupe-800 px-6 py-4 mr-6 text-md font-semibold text-taupe-50 shadow-xs hover:bg-taupe-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          <div className="flex items-center justify-center gap-2">
            <CloudArrowUpIcon className="size-4 color-taupe-50" />
            Upload Screenshot
          </div>
        </button>
      </div>
    </div>
  );
}
