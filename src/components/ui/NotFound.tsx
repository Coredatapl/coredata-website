import { Link } from "react-router";
import Title from "./Title";
import AppView from "../AppView";
import Navbar from "../Navbar";
import Footer from "../Footer";

import imgNotFound from "../../assets/img/404.svg";

export default function NotFound() {
  return (
    <AppView>
      <Navbar showNav={false} />
      <div className="w-full min-h-screen grid grid-cols-2 gap-10 justify-center items-center">
        <div className="flex justify-end">
          <img src={imgNotFound} alt="404 Not Found" />
        </div>
        <div className="justify-start">
          <Title>404</Title>
          <h2 className="mt-4 text-2xl text-brand-blue">Page Not Found</h2>
          <p className="mt-2 mb-10">
            Oh, we can&apos;t find that page. Please return to the start page.
          </p>
          <Link
            to="/"
            className="mt-10 px-6 py-4 text-sm text-white hover:text-white font-bold rounded-lg outline-none focus:outline-none bg-brand-violet hover:bg-indigo-600 active:bg-indigo-600 shadow hover:shadow-lg ease-linear transition-all duration-150"
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
