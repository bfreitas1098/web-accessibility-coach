import "./globals.css";
import { SparklesIcon } from "@heroicons/react/24/outline";
import Heading from "./components/Heading";
import IssuesColumn from "./components/IssuesColumn";
import Navigation from "./components/Navigation";
import NewScreenshotBox from "./components/NewScreenshotBox";
import ScreenshotWindow from "./components/ScreenshotWindow";
import History from "./history";

export const instant = false;

export default async function Page({ searchParams }) {
  const { view } = await searchParams;

  if (view === "history") {
    return <History />;
  }

  return (
    <>
      <Navigation />
      <Heading />

      <div className="grid grid-cols-[1.5fr_1fr] gap-4 px-8">
        <div className="row-span-1">
          <ScreenshotWindow />
          <NewScreenshotBox />
        </div>

        <div className="row-span-2">
          <IssuesColumn />
          <div className="text-xs text-slate-500 flex justify-end items-center gap-2 my-8">
            <SparklesIcon className="size-3 text-slate-500" />
            <span>AI suggestions • Only for screenshot reviews</span>
          </div>
        </div>
      </div>
    </>
  );
}
