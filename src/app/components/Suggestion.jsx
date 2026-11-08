import "../globals.css";

const suggestions = {
  1: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse similique ratione harum repellendus.",
  2: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse similique ratione harum repellendus.",
  3: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse similique ratione harum repellendus.",
};

export default function Suggestion({
  open,
  onClose,
  className = "",
  issueNumber,
}) {
  // if (!open) return null;
  if (issueNumber === null) return null;

  return (
    <>
      <div
        className={`bg-white text-xs text-deep-ink p-3 text-left w-40 ml-40 mb-40 z-10 absolute flex flex-col gap-2 items-end justify-center transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-in-out data-leave:duration-300 data-leave:ease-in ${className}`}
        open={open}
        onClose={onClose}
      >
        <p>{suggestions[issueNumber]}</p>
        <button
          type="button"
          onClick={onClose}
          className="text-xs text-accessible-teal font-medium"
        >
          Close
        </button>
      </div>
    </>
  );
}
