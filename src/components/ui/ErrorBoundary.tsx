import { useNavigate, useRouteError } from "react-router";
import imgNotFound from "../../assets/img/404.svg";
import AppView from "../AppView";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Title from "./Title";
import Button from "./Button";

export default function ErrorBoundary() {
  const navigate = useNavigate();
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
          <h2 className="mt-4 text-2xl text-indigo-600">
            Something went wrong
          </h2>
          <p className="mt-2">
            This content is unavailable right now. Please return to the start
            page.
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
          <Button
            type="button"
            label="Go back"
            icon="fi fi-sr-arrow-left"
            iconLeft={true}
            onClick={() => navigate(-1)}
          />
        </div>
      </div>
      <Footer />
    </AppView>
  );
}
