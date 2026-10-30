import "./globals.css";
import Navigation from "./components/Navigation";
import HistoryCard from "./components/HistoryCard";

export default function History() {
  return (
    <>
      <Navigation activeItem="history" />
      <div className="text-3xl text-accessible-teal font-bold my-6 mx-12">
        Your history
      </div>
      <div className="m-12 grid grid-cols-4 gap-4">
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
      </div>
    </>
  );
}
