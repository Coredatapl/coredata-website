import { Link, useRouteError } from "react-router-dom";
import Title from "./Title";

export default function ErrorBoundary() {
  const error = useRouteError();

  console.error(error);

  return (
    <main className="bg-slate-100" data-testid="loadingScreen">
      <div className="w-full min-h-screen grid grid-cols-1 justify-center items-center text-center content-center">
        <div className="relative">
          <div className="block relative z-10">
            <Title>Ooops...</Title>
            <h2 className="mt-4 text-2xl text-orange-700">
              Something went wrong
            </h2>
            <p className="mt-2">
              Oh, this content is unavailable right now. Please return to the
              start page.
            </p>
            <p className="mb-10">
              If the problem is repeating, please contact us at{" "}
              <a
                href="mailto:hello@coredata.pl"
                target="_blank"
                rel="noreferrer"
                className="font-bold"
              >
                hello@coredata.pl
              </a>
            </p>
            <Link
              to="/"
              className="mt-10 px-6 py-4 text-sm text-white hover:text-white font-bold rounded-xl outline-none focus:outline-none bg-coredataViolet hover:bg-indigo-600 active:bg-indigo-600 shadow hover:shadow-lg ease-linear transition-all duration-150"
            >
              <i className="fi fi-sr-enter inline-block mr-2 align-middle"></i>
              Return to start page
            </Link>
          </div>
          <div className="absolute left-1/2 right-1/2 top-0 ransform -translate-x-1/2 -translate-y-1/2 z-0">
            <i
              className="fi fi-sr-sad-tear inline-block text-slate-200"
              style={{ fontSize: "30rem" }}
            ></i>
          </div>
        </div>
      </div>
    </main>
  );
}
