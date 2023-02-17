import Image from "next/image";
import plixb from "../../public/assets/logo_color.png";
import im from "../../public/assets/1.jpg"
import Polygon from "../../public/assets/Curve.svg";
export default function Register() {
  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <Image
          src={Polygon}
          className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        />
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <a href="/">
            <Image
              className="mx-auto h-12 w-auto"
              src={plixb}
              height={90}
              width={90}
              alt="Your Company"
            />
          </a>

          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Welcome👋
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Create your account to invest in the startups of the moment or
            (re)sell shares.
            <a
              href="#"
              className="font-medium text-blue-600 hover:text-blue-500"
            ></a>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
              </div> */}

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Create an Account
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-xs text-gray-500">
                    By clicking on the Create my account button, you accept the
                    Terms of Use and the Privacy Policy of PLIXB.
                  </span>
                </div>
              </div>
              <br></br>
              <hr />
              <div className="mt-6 grid grid-cols-1 gap-3">
                <div>
                  <div className="relative flex justify-center">
                    <span className="bg-white text-xm text-gray-500">
                      Already Member?
                      <a href="/Login/login">
                        <span className="ml-2 text-blue-500 font-bold">
                          Login now
                        </span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
