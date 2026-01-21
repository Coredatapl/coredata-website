import { useNavigate } from "react-router";
import imgNotFound from "../../assets/img/404.svg";
import AppView from "../AppView";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Title from "./Title";
import Button from "./Button";

export default function NotFound() {
  const navigate = useNavigate();

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
