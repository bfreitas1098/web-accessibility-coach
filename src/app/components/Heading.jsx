import "../globals.css";

export default function Heading() {
  return (
    <div className="p-8 sm:flex sm:items-center sm:justify-between">
      <div className="flex flex-col gap-2 justify-start">
        <h3 className="font-bold text-deep-ink text-4xl">
          Make every interface more inclusive
        </h3>
        <span className="font-medium text-deep-ink text-lg">
          Review potential accessibility issues in your screenshots
        </span>
      </div>
    </div>
  );
}
