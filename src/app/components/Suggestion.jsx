import "../globals.css";

export default function Suggestion({ open, onClose }) {
  if (!open) return null;

  return (
    <>
      <div
        className="bg-white text-xs text-deep-ink p-3 text-left w-40 ml-40 mb-40 z-10 absolute top-90 left-60 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-in-out data-leave:duration-300 data-leave:ease-in"
        open={open}
        onClose={onClose}
      >
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
          similique ratione harum repellendus.
        </p>
      </div>
    </>
  );
}
