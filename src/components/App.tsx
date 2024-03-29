import { useLoading } from "../hooks/useLoading";
import Loading from "./ui/Loading";
import About from "./About";
import AppView from "./AppView";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import Apps from "./Apps";
import Automation from "./Automation";
import Consultations from "./Consultations";
import Technologies from "./Technologies";
import Contact from "./Contact";

export enum AppComponents {
  navbar = "navbar",
  hero = "hero",
  about = "about",
  apps = "apps",
  automation = "automation",
  consultations = "consultations",
  technologies = "technologies",
  contact = "contact",
}

interface AppProps {
  loaded?: boolean;
}

export default function App({ loaded = false }: AppProps) {
  const { loading } = useLoading();

  if (!loaded && loading) {
    return <Loading />;
  }

  return (
    <AppView>
      <Navbar />
      <Hero />
      <About />
      <Apps />
      <Automation />
      <Consultations />
      <Technologies />
      <Contact />
      <Footer />
    </AppView>
  );
}
