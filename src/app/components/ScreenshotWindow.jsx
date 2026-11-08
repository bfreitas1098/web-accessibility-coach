"use client";

import { useState } from "react";
import "../globals.css";
import screenshotExample from "../../../screenshot-example.png";
import Suggestion from "./Suggestion";

export default function ScreenshotWindow() {
  // const [suggestionIsOpen, setSuggestionIsOpen] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [className, setClassName] = useState("");

  return (
    <>
      <div className="rounded-md border-4 border-white shadow-md relative">
        <img src={screenshotExample.src} alt="Screenshot example" />
      </div>

      <button
        type="button"
        className="block rounded-full w-8 h-8 text-sm bg-warm-amber border border-white flex justify-center items-center issue-1 absolute z-10 top-89 left-90 cursor-pointer"
        onClick={() => {
          setSelectedIssue(1);
          setClassName("top-90 left-60");
        }}
      >
        1
      </button>
      <button
        type="button"
        className="block rounded-full w-8 h-8 text-sm bg-warm-amber border border-white flex justify-center items-center issue-2 absolute z-10 top-203 left-13 cursor-pointer"
        onClick={() => {
          setSelectedIssue(2);
          setClassName("top-204 -left-17");
        }}
      >
        2
      </button>
      <button
        type="button"
        className="block rounded-full w-8 h-8 text-sm bg-warm-amber border border-white flex justify-center items-center issue-3 absolute z-10 top-219 left-173 cursor-pointer"
        onClick={() => {
          setSelectedIssue(3);
          setClassName("top-193 left-143");
        }}
      >
        3
      </button>

      <Suggestion
        issueNumber={selectedIssue}
        onClose={() => setSelectedIssue(null)}
        className={className}
      />
    </>
  );
}
