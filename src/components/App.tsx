import { useEffect } from "react";
import { useLoading } from "../hooks/useLoading";
import About from "./About";
import Ai from "./Ai";
import Apps from "./Apps";
import AppView from "./AppView";
import Consultations from "./Consultations";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Technologies from "./Technologies";
import Loading from "./ui/Loading";
import { useLocation } from "react-router";
import { useUi } from "../hooks/useUi";

interface AppProps {
  loaded?: boolean;
}

export default function App({ loaded = false }: AppProps) {
  const { loading } = useLoading();
  const { scrollTo } = useUi();
  const location = useLocation();
  const hash = location.hash.replace("#", "");

  useEffect(() => {
    console.clear();
    console.log(
      "%cCoredata Website is %crunning%c. All issues will be logged in this console.",
      "color: inherit;",
      "color: #7C3AED; font-weight: bold;",
      "color: inherit;",
    );

    if (hash) {
      scrollTo(hash);
    }
  }, [hash, scrollTo]);

  if (!loaded && loading) {
    return <Loading />;
  }

  return (
    <AppView>
      <Navbar />
      <Hero />
      <About />
      <Apps />
      <Ai />
      <Consultations />
      <Technologies />
      <Contact />
      <Footer />
    </AppView>
  );
}
