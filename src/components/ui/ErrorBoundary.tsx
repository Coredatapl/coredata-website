import { Link, useRouteError } from "react-router-dom";
import Title from "./Title";
import AppView from "../AppView";
import Navbar from "../Navbar";

import imgNotFound from "../../assets/img/404.svg";
import Footer from "../Footer";

export default function ErrorBoundary() {
  const error = useRouteError();

  console.error(error);

  return (
    <AppView>
      <Navbar showNav={false} />
      <div className="w-full min-h-screen grid grid-cols-2 gap-10 justify-center items-center">
        <div className="flex justify-end">
          <img src={imgNotFound} alt="404 Not Found" />
        </div>
        <div className="justify-start">
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
            className="mt-10 px-6 py-4 text-sm text-white hover:text-white font-bold rounded-lg outline-none focus:outline-none bg-coredataViolet hover:bg-indigo-600 active:bg-indigo-600 shadow hover:shadow-lg ease-linear transition-all duration-150"
          >
            <i className="fi fi-sr-arrow-left inline-block mr-2 align-middle"></i>
            Go back
          </Link>
        </div>
      </div>
      <Footer />
    </AppView>
  );
}
