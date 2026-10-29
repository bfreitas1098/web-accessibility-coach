import "../globals.css";
import {
  EyeIcon,
  Squares2X2Icon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import IssueCard from "./IssueCard";

export default function IssuesColumn() {
  return (
    <>
      <div className="bg-white text-deep-ink rounded-md p-4 shadow-md">
        <div className="flex items-center justify-between pb-6">
          <span className="text-xl text-deep-ink font-bold">
            Potential issues
          </span>
          <div className="flex items-center justify-between gap-2">
            <span className="rounded-md bg-slate-200 px-2 py-1 text-xs font-small text-gray-950 inset-ring inset-ring-slate-300/10">
              5 suggestions
            </span>
            <div className="flex items-center rounded-md bg-slate-200 px-2 py-1 text-xs font-small text-gray-950 inset-ring inset-ring-slate-300/10">
              <EyeIcon className="size-3 color-taupe-700 mr-1" />
              <span>Readability</span>
            </div>
            <div className="flex items-center rounded-md bg-slate-200 px-2 py-1 text-xs font-small text-gray-950 inset-ring inset-ring-slate-300/10">
              <Squares2X2Icon className="size-3 color-taupe-700 mr-1" />
              Layout
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <IssueCard
            IssueTypeCircle={"Aa"}
            IssueNumber={"1"}
            IssueHeading={"Text may be hard to read"}
            IssueDescription={
              "The hero heading is white on a bright background, making it difficult to read."
            }
            IssueType={"Readability"}
          />
          <IssueCard
            IssueTypeCircle={"Aa"}
            IssueNumber={"2"}
            IssueHeading={"Text may be hard to read"}
            IssueDescription={
              "The destination descriptions and links are a light color on a light background, making it difficult to read."
            }
            IssueType={"Readability"}
          />
          <IssueCard
            IssueTypeCircle={<EnvelopeIcon className="size-6" />}
            IssueNumber={"3"}
            IssueHeading={"Input label could be clearer"}
            IssueDescription={
              "The email field could have a more visible label."
            }
            IssueType={"Content"}
          />
        </div>
      </div>
    </>
  );
}
