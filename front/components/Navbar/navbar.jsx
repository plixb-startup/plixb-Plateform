import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import Link from 'next/link'
import {
    ArrowTrendingDownIcon,
    ArrowTrendingUpIcon,
    Bars3Icon,
    CursorArrowRaysIcon,
  XMarkIcon,
  AcademicCapIcon,
    FaceSmileIcon

} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from 'next/image'
import plixb from '../../public/assets/logo_color.png'


const campaign = [
  {
    name: "Buyers",
    description: "",
    href: "/campaign/buyers",
    icon: ArrowTrendingUpIcon,
  },
  {
    name: "Crowdfunding",
    description: "",
    href: "/campaign/crowdfunding",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Sellers",
    description: "",
    href: "/campaign/sellers",
    icon: ArrowTrendingDownIcon,
  },
  // {
  //   name: "Formation",
  //   description: "",
  //   href: "/campaign/formation",
  //   icon: AcademicCapIcon,
  // },
  {
    name: "In demand",
    description: "",
    href: "/campaign/yourdesire",
    icon: FaceSmileIcon,
  },
];
const resources = [
  {
    name: "Agriculture",
    description: "",
    href: "/areas/agriculture",
  },
  {
    name: "Energy",
    description: "",
    href: "/areas/energy",
  },
  {
    name: "Food & Beverage",
    description: "",
    href: "/areas/food_&_beverage",
  },
  {
    name: "Tech",
    description: "",
    href: "/areas/tech",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Popover className="relative bg-white">
      <div className="flex items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
        <div>
          <Link href="/" className="flex">
            <span className="sr-only">Your Company</span>
            <Image className="h-20 w-20 sm:h-20" src={plixb} alt="plixb_Logo" />
          </Link>
        </div>

        <div className="-my-2 -mr-2 md:hidden">
          <Popover.Button
            className="inline-flex items-center
           justify-center rounded-md bg-white
            p-2 text-gray-400 hover:bg-gray-100
            hover:text-gray-500 focus:outline-none
            focus:ring-2 focus:ring-inset focus:ring-blue-500"
          >
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>

        <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <Popover.Group as="nav" className="flex space-x-10">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    )}
                  >
                    <span>Start a campaign</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform lg:max-w-3xl">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                          {campaign.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-blue-50"
                            >
                              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-blue-500 text-white sm:h-12 sm:w-12">
                                <item.icon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              </div>
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                        {/* <div className="bg-gray-50 p-5 sm:p-8">
                          <a
                            href="#"
                            className="-m-3 flow-root rounded-md p-3 hover:bg-gray-100"
                          >
                            <div className="flex items-center">
                              <div className="text-base font-medium text-gray-900">
                                Enterprise
                              </div>
                              <span className="ml-3 inline-flex items-center rounded-full bg-indigo-100 px-3 py-0.5 text-xs font-medium leading-5 text-indigo-800">
                                New
                              </span>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">
                              Empower your entire team with even more advanced
                              tools.
                            </p>
                          </a>
                        </div> */}
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            {/* Partners */}
            <Link
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Partners
            </Link>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    )}
                  >
                    <span>Explore areas</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="-m-3 block rounded-md p-3 hover:bg-blue-50"
                            >
                              <p className="text-base font-medium text-gray-900">
                                {item.name}
                              </p>
                              <p className="mt-1 text-sm text-gray-500">
                                {item.description}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            {/* What we Do? */}
            <Link
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              What we do ?
            </Link>
            {/* Contact */}
            <Link
              href="/contact/contact"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Contact
            </Link>
          </Popover.Group>

          {/* Authentication and registration  */}
          <div className="flex items-center md:ml-12">
            <Link
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Sign in
            </Link>
            <a
              href="#"
              className="ml-8 inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>

      {/* Responsive */}
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    className="h-8 w-auto"
                    src={plixb}
                    alt="Your Company"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-6">
                  {campaign.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div className="ml-4 text-base font-medium text-gray-900">
                        {item.name}
                      </div>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  What we do ?
                </Link>

                <Link
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Contact
                </Link>

                <Link
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Enterprise
                </Link>
                {resources.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="mt-6">
                <Link
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700"
                >
                  Sign up
                </Link>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{" "}
                  <Link
                    href="#"
                    className="text-blue-600 hover:text-blue-500"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
