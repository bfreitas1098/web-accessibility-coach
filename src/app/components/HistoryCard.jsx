import "../globals.css";
import historyExample from "../../../history-example.jpg";

export default function HistoryCard() {
  return (
    <div className="flex flex-col justify-start gap-2 mb-4">
      <div className="overflow-hidden rounded-lg bg-white shadow-sm">
        <img src={historyExample.src} alt="Screenshot from date" />
      </div>
      <span className="text-sm text-deep-ink font-light">10-12-2026</span>
    </div>
  );
}
