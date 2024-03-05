import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLoading } from "../hooks/useLoading";
import { useUi } from "../hooks/useUi";
import Loading from "./ui/Loading";
import Section from "./ui/Section";
import Spacer from "./ui/Spacer";
import Header, { HeaderTheme } from "./ui/Header";
import AppView from "./AppView";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Terms() {
  const { loading } = useLoading();
  const { scrollTop } = useUi();

  useEffect(() => {
    scrollTop();
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <AppView>
      <Navbar showNav={false} />
      <Section
        bgColor="bg-slate-100"
        style="relative pt-28 md:pt-20 bg-gradient-to-b from-blue-500 to-indigo-900"
      >
        <div className="h-100-px"></div>
      </Section>
      <Section bgColor="bg-slate-100" style="relative">
        <Spacer color={"text-slate-100"} fillColor={"fill-slate-100"} />
        <div className="relative flex -mt-40 py-16 z-10 justify-center bg-white shadow-xl rounded-lg">
          <div className="w-8/12 mx-auto px-4">
            <div className="text-center">
              <Header message="Terms & Conditions" />
            </div>
            <div className="mt-10 py-10 border-t border-slate-200 text-left">
              <div className="text-sm leading-normal -mt-10 text-slate-400 font-semibold">
                Updated: 24.03.2023
              </div>
              <div className="flex flex-col w-full mt-10 justify-center">
                <Header message="Introduction" theme={HeaderTheme.Color} />
                <p className="mb-4 text-md leading-relaxed text-blueGray-700">
                  Please read these terms and conditions carefully before using
                  Our Service.
                </p>
                <Header message="Definitions" theme={HeaderTheme.Color} />
                <p className="mb-4 text-md leading-relaxed text-blueGray-700">
                  For the purposes of these Terms and Conditions:
                </p>
                <ul className="list-disc ml-5 mb-4">
                  <li>
                    <b>Company</b> - (referred to as either &quot;the
                    Company&quot;, &quot;We&quot;, &quot;Us&quot; or
                    &quot;Our&quot; in this Agreement) refers to Coredata,
                    Wilanów, Warsaw Masovian district Poland, PL.
                  </li>
                  <li>
                    <b>Country</b> - refers to: Poland
                  </li>
                  <li>
                    <b>Website</b> - refers to Coredata website, accessible from{" "}
                    <a href="https://coredata.pl" target="_self">
                      https://coredata.pl
                    </a>
                  </li>
                  <li>
                    <b>Service</b> - refers to the Website.
                  </li>
                  <li>
                    <b>Device</b> - means any device that can access the Service
                    such as a computer, a cellphone or a digital tablet.
                  </li>
                  <li>
                    <b>You</b> means the individual accessing or using the
                    Service, or the company, or other legal entity on behalf of
                    which such individual is accessing or using the Service, as
                    applicable.
                  </li>
                </ul>
                <Header message="Acknowledgment" theme={HeaderTheme.Color} />
                <p className="mb-4 text-md leading-relaxed text-blueGray-700">
                  These are the Terms and Conditions governing the use of this
                  Service and the agreement that operates between You and the
                  Company. These Terms and Conditions set out the rights and
                  obligations of all users regarding the use of the Service.
                </p>
                <p className="mb-4 text-md leading-relaxed text-blueGray-700">
                  our access to and use of the Service is conditioned on Your
                  acceptance of and compliance with these Terms and Conditions.
                  These Terms and Conditions apply to all visitors, users and
                  others who access or use the Service.
                </p>
                <p className="mb-4 text-md leading-relaxed text-blueGray-700">
                  By accessing or using the Service You agree to be bound by
                  these Terms and Conditions. If You disagree with any part of
                  these Terms and Conditions then You may not access the
                  Service.
                </p>
                <p className="mb-4 text-md leading-relaxed text-blueGray-700">
                  Your access to and use of the Service is also conditioned on
                  Your acceptance of and compliance with the Privacy Policy of
                  the Company. Our Privacy Policy describes Our policies and
                  procedures on the collection, use and disclosure of Your
                  personal information when You use the Application or the
                  Website and tells You about Your privacy rights and how the
                  law protects You. Please read Our Privacy Policy carefully
                  before using Our Service.
                </p>
                <Header
                  message="Links to Other Websites"
                  theme={HeaderTheme.Color}
                />
                <p className="mb-4 text-md leading-relaxed text-blueGray-700">
                  Our Service may contain links to third-party web sites or
                  services that are not owned or controlled by the Company.
                </p>
                <p className="mb-4 text-md leading-relaxed text-blueGray-700">
                  The Company has no control over, and assumes no responsibility
                  for, the content, privacy policies, or practices of any third
                  party web sites or services. You further acknowledge and agree
                  that the Company shall not be responsible or liable, directly
                  or indirectly, for any damage or loss caused or alleged to be
                  caused by or in connection with the use of or reliance on any
                  such content, goods or services available on or through any
                  such web sites or services.
                </p>
                <p className="mb-4 text-md leading-relaxed text-blueGray-700">
                  We strongly advise You to read the terms and conditions and
                  privacy policies of any third-party web sites or services that
                  You visit.
                </p>
                <Header message="Governing Law" theme={HeaderTheme.Color} />
                <p className="mb-4 text-md leading-relaxed text-blueGray-700">
                  The laws of the Country, excluding its conflicts of law rules,
                  shall govern this Terms and Your use of the Service. Your use
                  of the Application may also be subject to other local, state,
                  national, or international laws.
                </p>
                <Header
                  message="Disputes Resolution"
                  theme={HeaderTheme.Color}
                />
                <p className="mb-4 text-md leading-relaxed text-blueGray-700">
                  If You have any concern or dispute about the Service, You
                  agree to first try to resolve the dispute informally by
                  contacting the Company.
                </p>
                <Header
                  message="Translation Interpretation"
                  theme={HeaderTheme.Color}
                />
                <p className="mb-4 text-md leading-relaxed text-blueGray-700">
                  These Terms and Conditions may have been translated if We have
                  made them available to You on our Service. You agree that the
                  original English text shall prevail in the case of a dispute.
                </p>
                <Header
                  message="Changes to this Terms and Conditions"
                  theme={HeaderTheme.Color}
                />
                <p className="mb-4 text-md leading-relaxed text-blueGray-700">
                  We may update Our Terms and Conditions from time to time. We
                  will notify You of any changes by posting the new Terms and
                  Conditions on this page. We will let You know by updating the
                  &quot;Updated @&quot; date at the top of this Terms and
                  Conditions.
                </p>
                <p className="mb-4 text-md leading-relaxed text-blueGray-700">
                  You are advised to review this Terms and Conditions
                  periodically for any changes. Changes to this Privacy Policy
                  are effective when they are posted on this page.
                </p>
                <Header message="Contact Us" theme={HeaderTheme.Color} />
                <p className="mb-4 text-md leading-relaxed text-blueGray-700">
                  If you have any questions about our Terms and Conditions, You
                  can contact us by email: <b>hello&#64;coredata.pl</b>
                </p>
              </div>
            </div>
            <div className="py-10 border-t border-slate-200">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4">
                  <Link
                    to="/"
                    className="text-sm text-white hover:text-white font-bold mt-4 mb-2 px-6 py-4 rounded-xl outline-none focus:outline-none bg-coredataViolet hover:bg-indigo-600 active:bg-indigo-600 shadow hover:shadow-lg ease-linear transition-all duration-150"
                  >
                    <i className="fi fi-sr-enter inline-block mr-2 align-middle"></i>
                    Return to start page
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </AppView>
  );
}
