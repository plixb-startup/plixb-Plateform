import {
  BoltIcon,
    ScaleIcon,
    ShareIcon,
    StarIcon,
    UserGroupIcon,
    FolderIcon,
    ArrowPathIcon,
    UsersIcon,
    FingerPrintIcon
} from "@heroicons/react/24/outline";



const transferFeatures = [
  {
    id: 1,
    name: "Sharing",
    description:
      "Sharing leads to happiness and strengthens relationships by promoting exchange, diversity, and mutual respect",
    icon: ShareIcon,
  },
  {
    id: 2,
    name: "Liberty",
    description: "Each investor is free to invest in the company of his choice",
    icon: ScaleIcon,
  },
  {
    id: 3,
    name: "Importance",
    description:
      "Each investor is of capital importance for the growth of companies",
    icon: StarIcon,
  },
  {
    id: 4,
    name: "Experience",
    description:
      "Whether you are an investor or a company, Plixb aims to give you a unique experience",
    icon: BoltIcon,
  },
  {
    id: 5,
    name: "Benevolence",
    description:
      "Being benevolent means being convinced that human connection, authenticity, respect for others, their values and their work is a tremendous lever for performance and a revealer of talents.",
    icon: UsersIcon,
  },
];
const communicationFeatures = [
  {
    id: 1,
    name: "Transparent Process",
    description:
      "Our investment process is clearly defined and wholly transparent. We believe investors deserve to know exactly how their money is being invested, which is why we disclose our investment strategies, full portfolio holdings, and risk metrics.",
    icon: ArrowPathIcon,
  },
  {
    id: 2,
    name: "Tenured Management Teams",
    description:
      "Each of our portfolios is managed by a team of tenured and talented investment professionals. Their deep experience provides the confidence to maintain concentrated, high-conviction portfolios.",
    icon: UserGroupIcon,
  },
  {
    id: 3,
    name: "Proven, Long-Term Performance",
    description:
      "Our partners have a proven track record of performance. We don't expect the portfolios to outperform every time, rather our strategies were developed with long-term results in mind.",
    icon: FingerPrintIcon,
  },
  {
    id: 4,
    name: "Unwavering Commitment to Shareholders",
    description:
      "We serve our shareholders with integrity, honesty, and candor, and we manage our portfolios with their best interest in mind. We maintain high ethical standards, and we refuse to manipulate short-term results or participate in 'window dressing.'",
    icon: FolderIcon,
  },
];

export default function FeatureSection() {
  return (
    <div className="overflow-hidden  py-16 lg:py-24">
      <div className="relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
              width={200}
              height={200}
              x="80%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
          />
        </svg>

        <div className="relative">
          <h2 className="text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            What makes us unique
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500">
            Plixb's mission is simple: connect investors and companies to
            accelerate business growth and multiply investor earnings.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div className="relative">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Our Value
            </h3>
            {/* <p className="mt-3 text-lg text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              minima sequi recusandae, porro maiores officia assumenda aliquam
              laborum ab aliquid veritatis impedit odit adipisci optio iste
              blanditiis facere. Totam, velit.
            </p> */}

            <dl className="mt-10 space-y-10">
              {transferFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500 text-white">
                      <item.icon className="h-8 w-8" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                      {item.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
            <svg
              className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                  x={0}
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
                width={784}
                height={404}
                fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
              />
            </svg>
            {/* <img
              className="relative mx-auto"
              width={490}
              src="https://tailwindui.com/img/features/feature-example-1.png"
              alt=""
            /> */}
          </div>
        </div>

        <div className="">
          <svg
            className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
            />
          </svg>
        </div>

        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Our Principle
              </h3>
              {/* <p className="mt-3 text-lg text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                ex obcaecati natus eligendi delectus, cum deleniti sunt in
                labore nihil quod quibusdam expedita nemo.
              </p> */}

              <dl className="mt-10 space-y-10">
                {communicationFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500 text-white">
                        <item.icon className="h-8 w-8" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                        {item.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative -mx-4 mt-10 lg:col-start-1 lg:mt-0">
              <svg
                className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                    x={0}
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
                  width={784}
                  height={404}
                  fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                />
              </svg>
              {/* <img
                className="relative mx-auto"
                width={490}
                src="https://tailwindui.com/img/features/feature-example-2.png"
                alt=""
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
