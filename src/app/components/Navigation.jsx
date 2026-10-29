import "../globals.css";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  CursorArrowRippleIcon,
} from "@heroicons/react/24/outline";

export default function Navigation() {
  return (
    <Disclosure as="nav" className="relative bg-white shadow-sm">
      <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 justify-between">
          <div className="flex">
            <div className="flex shrink-0 items-center text-2xl font-bold pr-10">
              <CursorArrowRippleIcon className="size-7 mr-2 text-accessible-teal" />
              <span className="text-deep-ink">Accessibility Coach</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a
                href="#"
                className="inline-flex items-center border-b-4 border-accessible-teal pt-1 text-md font-semibold text-accessible-teal w-31 pl-4"
              >
                New review
              </a>
              <a
                href="#"
                className="inline-flex items-center border-transparent px-1 pt-1 text-md font-medium text-deep-ink"
              >
                History
              </a>
            </div>
          </div>

          <div className="-mr-2 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-600">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 pt-2 pb-3">
          <DisclosureButton
            as="a"
            href="#"
            className="block border-l-4 border-indigo-600 bg-indigo-50 py-2 pr-4 pl-3 text-base font-medium text-indigo-700"
          >
            New review
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#"
            className="block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
          >
            History
          </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
