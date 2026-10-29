import "../globals.css";

import { PhotoIcon } from "@heroicons/react/24/outline";

export default function NewScreenshotBox() {
  return (
    <div className="overflow-hidden rounded-lg bg-soft-sky/10 border border-dashed border-slate-400 flex justify-center items-center mt-6">
      <div className="px-4 py-5 flex justify-between items-center gap-5">
        <PhotoIcon className="size-10 text-slate-500" />
        <div className="text-sm/6 text-slate-400">
          Drop another screenshot here
          <br />
          PNG, JPG, or WebP • Max 10 MB
        </div>
        <button
          type="button"
          className="rounded-sm bg-slate-200 px-2 py-1 text-xs font-semibold shadow-xs inset-ring inset-ring-gray-300 cursor-pointer hover:bg-gray-50"
        >
          Choose file
        </button>
      </div>
    </div>
  );
}
