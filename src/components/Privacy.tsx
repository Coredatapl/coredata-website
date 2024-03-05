import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLoading } from "../hooks/useLoading";
import { useUi } from "../hooks/useUi";
import Section from "./ui/Section";
import Spacer from "./ui/Spacer";
import Header, { HeaderTheme } from "./ui/Header";
import SubHeader from "./ui/SubHeader";
import Loading from "./ui/Loading";
import AppView from "./AppView";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Privacy() {
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
              <Header message="Privacy Policy" />
            </div>
            <div className="mt-10 py-10 border-t border-slate-200 text-left">
              <div className="text-sm leading-normal -mt-10 text-slate-400 font-semibold">
                Updated: 24.03.2023
              </div>
              <div className="flex flex-col w-full mt-10 justify-center">
                <Header message="Introduction" theme={HeaderTheme.Color} />
                <p className="mb-4 text-md leading-relaxed">
                  This Privacy Policy describes Our policies and procedures on
                  the collection, use and disclosure of Your information when
                  You use the Service and tells You about Your privacy rights
                  and how the law protects You.
                </p>
                <p className="mb-10 text-md leading-relaxed">
                  We use Your Personal data to provide and improve the Service.
                  By using the Service, You agree to the collection and use of
                  information in accordance with this Privacy Policy.
                </p>
                <Header message="Definitions" theme={HeaderTheme.Color} />
                <p className="mb-4 text-md leading-relaxed">
                  For the purposes of this Privacy Policy:
                </p>
                <ul className="list-disc ml-5 mb-10">
                  <li>
                    <b>Company</b> - (referred to as either &quot;the
                    Company&quot;, &quot;We&quot;, &quot;Us&quot; or
                    &quot;Our&quot; in this Agreement) refers to Coredata,
                    Wilanów, Warsaw Masovian district Poland, PL.
                  </li>
                  <li>
                    <b>Cookies</b> - are small files that are placed on Your
                    computer, mobile device or any other device by a website,
                    containing the details of Your browsing history on that
                    website among its many uses.
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
                    <b>Service Provider</b> - means any natural or legal person
                    who processes the data on behalf of the Company. It refers
                    to third-party companies or individuals employed by the
                    Company to facilitate the Service, to provide the Service on
                    behalf of the Company, to perform services related to the
                    Service or to assist the Company in analyzing how the
                    Service is used.
                  </li>
                  <li>
                    <b>Device</b> - means any device that can access the Service
                    such as a computer, a cellphone or a digital tablet.
                  </li>
                  <li>
                    <b>Personal Data</b> - is any information that relates to an
                    identified or identifiable individual.
                  </li>
                  <li>
                    <b>Usage Data</b> - refers to data collected automatically,
                    either generated by the use of the Service or from the
                    Service infrastructure itself (for example, the duration of
                    a page visit).
                  </li>
                  <li>
                    <b>You</b> means the individual accessing or using the
                    Service, or the company, or other legal entity on behalf of
                    which such individual is accessing or using the Service, as
                    applicable.
                  </li>
                </ul>
                <Header
                  message="Types of Data Collected"
                  theme={HeaderTheme.Color}
                />
                <SubHeader message="Personal Data" color="text-coredataBlue" />
                <p className="mb-4 text-md leading-relaxed">
                  While using Our Service, We may ask You to provide Us with
                  certain personally identifiable information that can be used
                  to contact or identify You. Personally identifiable
                  information may include, but is not limited to:
                </p>
                <ul className="list-disc ml-5 mb-6">
                  <li>Usage Data</li>
                </ul>
                <SubHeader message="Usage Data" color="text-coredataBlue" />
                <p className="mb-4 text-md leading-relaxed">
                  Usage Data is collected automatically when using the Service.
                </p>
                <p className="mb-4 text-md leading-relaxed">
                  Usage Data may include information such as Your Device&apos;s
                  Internet Protocol address (e.g. IP address), browser type,
                  browser version, the pages of our Service that You visit, the
                  time and date of Your visit, the time spent on those pages,
                  unique device identifiers and other diagnostic data.
                </p>
                <p className="mb-4 text-md leading-relaxed">
                  When You access the Service by or through a mobile device, We
                  may collect certain information automatically, including, but
                  not limited to, the type of mobile device You use, Your mobile
                  device unique ID, the IP address of Your mobile device, Your
                  mobile operating system, the type of mobile Internet browser
                  You use, unique device identifiers and other diagnostic data.
                </p>
                <p className="mb-10 text-md leading-relaxed">
                  We may also collect information that Your browser sends
                  whenever You visit our Service or when You access the Service
                  by or through a mobile device.
                </p>
                <Header
                  message="Tracking Technologies and Cookies"
                  theme={HeaderTheme.Color}
                />
                <p className="mb-10 text-md leading-relaxed">
                  We use Cookies and similar tracking technologies to track the
                  activity on Our Service and store certain information.
                  Tracking technologies used are beacons, tags, and scripts to
                  collect and track information and to improve and analyze Our
                  Service.
                </p>
                <Header
                  message="Delete Your Personal Data"
                  theme={HeaderTheme.Color}
                />
                <p className="mb-4 text-md leading-relaxed">
                  You have the right to delete or request that We assist in
                  deleting the Personal Data that We have collected about You.
                </p>
                <p className="mb-10 text-md leading-relaxed">
                  Please note, however, that We may need to retain certain
                  information when we have a legal obligation or lawful basis to
                  do so.
                </p>
                <Header
                  message="Changes to this Privacy Policy"
                  theme={HeaderTheme.Color}
                />
                <p className="mb-4 text-md leading-relaxed">
                  We may update Our Privacy Policy from time to time. We will
                  notify You of any changes by posting the new Privacy Policy on
                  this page. We will let You know by updating the
                  &quot;Updated&quot; date at the top of this Privacy Policy.
                </p>
                <p className="mb-10 text-md leading-relaxed">
                  You are advised to review this Privacy Policy periodically for
                  any changes. Changes to this Privacy Policy are effective when
                  they are posted on this page.
                </p>
                <Header message="Contact Us" theme={HeaderTheme.Color} />
                <p className="mb-4 text-md leading-relaxed">
                  If you have any questions about this Privacy Policy, You can
                  contact us by email: <b>hello&#64;coredata.pl</b>
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
