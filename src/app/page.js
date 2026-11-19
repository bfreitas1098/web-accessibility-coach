import "./globals.css";
import Heading from "./components/Heading";
import Navigation from "./components/Navigation";
import ScreenshotReview from "./components/ScreenshotReview";
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
      <ScreenshotReview />
    </>
  );
}
