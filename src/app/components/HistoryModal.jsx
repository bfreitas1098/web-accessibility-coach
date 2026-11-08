import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import historyExample from "../../../history-example.jpg";
import "../globals.css";

export default function HistoryModal({ open, onClose }) {
  return (
    <div>
      <Dialog open={open} onClose={onClose} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/80 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full justify-center p-4 text-center items-center">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
            >
              <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-md bg-white text-black hover:text-gray-500 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600"
                >
                  <span className="sr-only">Close</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
              <div className="flex flex-col gap-4 mt-8">
                <img src={historyExample.src} className="w-md" />
                <div className="m-3 text-center">
                  <DialogTitle
                    as="h3"
                    className="text-base font-semibold text-deep-ink text-left"
                  >
                    Suggestions made:
                  </DialogTitle>
                  <div className="mt-2">
                    <ol className="text-sm text-deep-ink/70 list-decimal flex flex-col gap-1 items-start ml-3">
                      <li>Background color should be darker.</li>
                      <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </li>
                      <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </li>
                      <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
