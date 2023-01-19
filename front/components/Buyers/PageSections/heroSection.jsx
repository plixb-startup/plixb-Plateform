
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";


export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div
        className="hidden lg:absolute lg:inset-0 lg:block"
        aria-hidden="true"
      >
        <svg
          className="absolute top-0 left-1/2 translate-x-64 -translate-y-8 transform"
          width={640}
          height={784}
          fill="none"
          viewBox="0 0 640 784"
        >
          <defs>
            <pattern
              id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
              x={118}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            y={72}
            width={640}
            height={640}
            className="text-gray-50"
            fill="currentColor"
          />
          <rect
            x={118}
            width={404}
            height={784}
            fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
          />
        </svg>
      </div>

      <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
        <main className="mx-auto mt-16 max-w-7xl px-4 px-6 sm:mt-24 lg:mt-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
              <h1>
                {/* <span className="block text-base font-semibold text-gray-500 sm:text-lg lg:text-base xl:text-lg">
                  Coming soon
                </span> */}
                <span className="mt-1 block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                  <span className="block text-gray-900">Acquire a startup</span>
                  <span className="block text-blue-600">in just 30 days</span>
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Browse from 1,000s of startups for sale, vetted by acquisition
                veterans. Instantly connect with founders to evaluate key
                metrics. Hire approved advisors, obtain financing, or skip
                straight to negotiation.
              </p>
              <div className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                <button
                  type="submit"
                  className="mt-3 w-full rounded-md border mr-3 border-transparent bg-blue-500 px-9 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center"
                >
                  Join Now
                </button>
              </div>
            </div>
            <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
              <svg
                className="absolute top-0 left-1/2 origin-top -translate-x-1/2 -translate-y-8 scale-75 transform sm:scale-100 lg:hidden"
                width={640}
                height={784}
                fill="none"
                viewBox="0 0 640 784"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                    x={118}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  y={72}
                  width={640}
                  height={640}
                  className="text-gray-50"
                  fill="currentColor"
                />
                <rect
                  x={118}
                  width={404}
                  height={784}
                  fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
                />
              </svg>
              <div className=" mx-auto w-full h-96 rounded-lg shadow-lg lg:max-w-full">
                <button
                  type="button"
                  className="relative block w-full overflow-hidden rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  <span className="sr-only">Watch our video to learn more</span>

                  {/* <video
                    className=" w-full h-96"
                    controls
                    src={"../../../public/01.mp4"}
                    autoplay
                    loop
                  ></video> */}

                  {/* <span
                    className="absolute inset-0 flex h-full w-full items-center justify-center"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-20 w-20 text-red-500"
                      fill="currentColor"
                      viewBox="0 0 84 84"
                    >
                      <circle
                        opacity="0.9"
                        cx={42}
                        cy={42}
                        r={42}
                        fill="white"
                      />
                      <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                    </svg>
                  </span> */}
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
