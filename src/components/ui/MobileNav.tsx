import { useEffect, useState } from "react";
import { AppComponents } from "../../utils/common";
import MobileNavItem from "./MobileNavItem";

interface MobileNavProps {
  opened: boolean;
}

export default function MobileNav({ opened }: MobileNavProps) {
  const [visible, setVisible] = useState(false);

  function fadeIn() {
    setTimeout(() => {
      setVisible(true);
    }, 100);
  }

  useEffect(() => {
    if (opened) {
      fadeIn();
    } else {
      setVisible(false);
    }
  }, [opened]);

  return (
    <div
      className={`${!opened ? "hidden" : "absolute top-[70px] left-0 flex flex-row"} w-screen h-[calc(100vh-70px)]`}
    >
      <div
        className={`${!visible ? "opacity-0" : "opacity-100"} relative flex w-screen p-10 bg-slate-100 transition-opacity duration-500 ease-in-out`}
      >
        <div className="flex flex-col w-1/2 md:w-1/5 xl:w-1/6 mx-auto justify-start">
          <ul className="text-xl">
            <li className="mr-10 mb-5">
              <MobileNavItem
                id={AppComponents.about}
                to={"/"}
                label="About Us"
              />
            </li>
            <li className="mr-10 my-5">
              <MobileNavItem
                id={AppComponents.apps}
                to={"/"}
                label="Solutions"
              />
            </li>
            <li className="mr-10 my-5">
              <MobileNavItem
                id={AppComponents.ai}
                to={"/"}
                label="AI Automation"
              />
            </li>
            <li className="mr-10 my-5">
              <MobileNavItem
                id={AppComponents.technologies}
                to={"/"}
                label="Technologies"
              />
            </li>
            <li className="mr-10 mt-5">
              <MobileNavItem
                id={AppComponents.contact}
                to={"/"}
                label="Contact"
              />
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-1/2 justify-start text-sm">
          <div className="flex flex-col mb-10 max-w-40">
            <h3 className="font-semibold text-base">Info</h3>
            <div className="mt-4">
              <MobileNavItem
                id={AppComponents.about}
                to={"/"}
                label="Our approach"
              />
            </div>
            <div className="mt-2">
              <MobileNavItem
                id={AppComponents.apps}
                to={"/"}
                label="Web apps"
              />
            </div>
            <div className="mt-2">
              <MobileNavItem
                id={AppComponents.apps}
                to={"/"}
                label="Mobile apps"
              />
            </div>
            <div className="mt-2">
              <MobileNavItem
                id={AppComponents.ai}
                to={"/"}
                label="Documents Processing"
              />
            </div>
            <div className="mt-2">
              <MobileNavItem
                id={AppComponents.ai}
                to={"/"}
                label="Knowledge Base"
              />
            </div>
          </div>
          <div className="flex flex-col text-sm">
            <h3 className="font-semibold text-base">Company</h3>
            <div className="mt-4">
              <MobileNavItem to={"/privacy"} label="Privacy Policy" />
            </div>
            <div className="mt-2">
              <MobileNavItem to={"/terms"} label="Terms & Conditions" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
