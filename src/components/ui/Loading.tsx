import Logo from "./Logo";

import imgLoaderIcon from "../../assets/img/loader.svg";

export default function Loading() {
  return (
    <main className="bg-slate-100" data-testid="loadingScreen">
      <div className="w-full min-h-screen grid grid-cols-1 justify-center items-center text-center content-center">
        <div className="inline-block max-w-full mx-auto mb-4 items-center">
          <Logo />
        </div>
        <div className="inline-block">
          <img
            src={imgLoaderIcon}
            alt="Loading..."
            className="h-6 w-6 mx-auto"
          />
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </main>
  );
}
