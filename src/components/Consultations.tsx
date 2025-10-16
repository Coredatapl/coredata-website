import imgConsulting from "../assets/img/consulting.jpg";
import { AppComponents } from "../utils/common";
import Caption from "./ui/Caption";
import Header from "./ui/Header";
import ListIconItem from "./ui/ListIconItem";
import Section from "./ui/Section";
import Spacer from "./ui/Spacer";

export default function Consultations() {
  return (
    <Section
      id={AppComponents.consultations}
      bgColor="bg-slate-100"
      style="relative"
    >
      <Spacer color={"text-slate-100"} fillColor={"fill-slate-100"} />
      <div className="flex flex-wrap items-center text-left mb-20">
        <div className="w-full lg:w-6/12">
          <div className="lg:pr-12">
            <Caption message="Consulting" />
            <Header message={`We provide IT consultations`} />
            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              We help in a wide range, from visual identification to the full
              digitization of the company. Based on our experience, we advise in
              the field of broadly understood Information Technologies.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              We can also help you with any other questions you might have
              concerning IT solutions.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              We can help you with:
            </p>
            <ul className="list-none mt-6">
              <ListIconItem
                message={`Digitizing your business`}
                icon={"fi fi-sr-rocket-lunch"}
              />
              <ListIconItem
                message={`Choosing the right tools`}
                icon={"fi fi-sr-tools"}
              />
              <ListIconItem
                message={`Software architecture assessment & redesign`}
                icon={"fi fi-sr-square-terminal"}
              />
              <ListIconItem
                message={`Visual identification`}
                icon={"fi fi-sr-arrows-to-eye"}
              />
            </ul>
          </div>
        </div>

        <div className="hidden lg:block w-6/12">
          <img
            alt="White board with consulting sketches"
            className="max-w-full rounded-lg shadow-lg"
            src={imgConsulting}
          />
        </div>
      </div>
    </Section>
  );
}
