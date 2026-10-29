import "../globals.css";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function IssueCard() {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-sm border border-slate-200">
      <div className="px-4 py-5 flex justify-between items-start">
        <div className="w-12 mr-6 flex flex-col gap-3">
          <div className="rounded-full h-12 bg-red-50 border border-red-300 flex justify-center items-center text-lg text-red-600 font-medium">
            Aa
          </div>
          <div className="rounded-full w-8 h-8 bg-slate-100 flex justify-center items-center text-sm self-center">
            1
          </div>
        </div>
        <div className="w-80 flex flex-col justify-start gap-3">
          <span className="font-semibold text-base">
            Text may be hard to read
          </span>
          <span className="text-gray-400 text-sm/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
            inventore. Cumque eligendi eum eos quis in nam libero doloremque.
          </span>
          <div className="flex items-center gap-2">
            <span className="text-sm text-accessible-teal font-medium">
              View suggestion
            </span>
            <ArrowRightIcon className="size-3 text-accessible-teal" />
          </div>
        </div>
        <div className="w-24">
          <span className="rounded-full px-6 py-1 bg-blue-100/70 text-blue-600 flex justify-center items-center text-sm">
            Readability
          </span>
        </div>
      </div>
    </div>
  );
}
