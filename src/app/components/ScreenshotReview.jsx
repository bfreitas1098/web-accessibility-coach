"use client";

import { SparklesIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import IssuesColumn from "./IssuesColumn";
import NewScreenshotBox from "./NewScreenshotBox";
import ScreenshotWindow from "./ScreenshotWindow";
import Suggestion from "./Suggestion";

const suggestionPositions = {
  1: "top-82 left-40",
  2: "top-131 -left-22",
  3: "top-143 left-99",
};

export default function ScreenshotReview() {
  const [selectedIssue, setSelectedIssue] = useState(null);

  return (
    <div className="grid grid-cols-[1.5fr_1fr] gap-4 px-8">
      <div className="row-span-1">
        <ScreenshotWindow onSelectIssue={setSelectedIssue} />
        <Suggestion
          issueNumber={selectedIssue}
          onClose={() => setSelectedIssue(null)}
          className={suggestionPositions[selectedIssue] ?? ""}
        />
        <NewScreenshotBox />
      </div>

      <div className="row-span-2">
        <IssuesColumn onSelectIssue={setSelectedIssue} />
        <div className="text-xs text-slate-500 flex justify-end items-center gap-2 my-8">
          <SparklesIcon className="size-3 text-slate-500" />
          <span>AI suggestions • Only for screenshot reviews</span>
        </div>
      </div>
    </div>
  );
}
