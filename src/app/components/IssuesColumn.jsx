import "../globals.css";
import { EyeIcon, Squares2X2Icon } from "@heroicons/react/24/outline";

export default function IssuesColumn() {
  return (
    <>
      <div className="bg-taupe-50 text-taupe-900 rounded-md p-4">
        <div className="flex items-center justify-between">
          <span className="text-xl text-taupe-900 font-bold">
            Potential issues
          </span>
          <div className="flex items-center justify-between gap-2">
            <span className="rounded-md bg-taupe-300 px-2 py-1 text-xs font-small text-taupe-700 inset-ring inset-ring-taupe-400/10">
              5 suggestions
            </span>
            <div className="flex items-center rounded-md bg-taupe-300 px-2 py-1 text-xs font-small text-taupe-700 inset-ring inset-ring-taupe-400/10">
              <EyeIcon className="size-3 color-taupe-700 mr-1" />
              <span>Readability</span>
            </div>
            <div className="flex items-center rounded-md bg-taupe-300 px-2 py-1 text-xs font-small text-taupe-800 inset-ring inset-ring-taupe-400/10">
              <Squares2X2Icon className="size-3 color-taupe-700 mr-1" />
              Layout
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
