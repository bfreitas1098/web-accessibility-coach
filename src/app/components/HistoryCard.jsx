"use client";
import { useState } from "react";
import "../globals.css";
import historyExample from "../../../history-example.jpg";
import HistoryModal from "./HistoryModal";

export default function HistoryCard() {
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);

  return (
    <div className="flex flex-col justify-start gap-2 mb-4">
      <button
        type="button"
        className="block overflow-hidden rounded-lg bg-white shadow-sm cursor-pointer"
        onClick={() => setIsHistoryModalOpen(true)}
      >
        <img src={historyExample.src} alt="Screenshot from date" />
      </button>

      <span className="text-sm text-deep-ink font-light">10-12-2026</span>

      <HistoryModal
        open={isHistoryModalOpen}
        onClose={() => setIsHistoryModalOpen(false)}
      />
    </div>
  );
}
