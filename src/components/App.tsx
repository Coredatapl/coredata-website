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

interface AppProps {
  loaded?: boolean;
}

export default function App({ loaded = false }: AppProps) {
  const { loading } = useLoading();

  useEffect(() => {
    console.clear();
    console.log(
      "%cCoredata Website is %crunning%c. Welcome in Coredata Terminal!",
      "color: inherit;",
      "color: #7C3AED; font-weight: bold;",
      "color: inherit;",
    );
  }, []);

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
