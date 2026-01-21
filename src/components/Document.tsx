import { useEffect, useState } from "react";
import { useLoading } from "../hooks/useLoading";
import { useUi } from "../hooks/useUi";
import { useUtil } from "../hooks/useUtil";
import AppView from "./AppView";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Loading from "./ui/Loading";
import Section from "./ui/Section";
import Spacer from "./ui/Spacer";

type DocumentType = "readme" | "privacy" | "terms" | "security";

interface DocumentProps {
	type: DocumentType;
}

export default function Document({ type }: DocumentProps) {
	const { loading } = useLoading();
	const { scrollTop } = useUi();
	const { parseMarkdown } = useUtil();
	const [content, setContent] = useState<string>();

	useEffect(() => {
		fetch(new Request(`${type}.md`))
			.then((res) => res.text())
			.then((md) => {
				parseMarkdown(md).then((content) => {
					setContent(content);
					scrollTop();
				});
			})
			.catch((err) => {
				console.error(`Error loading ${type} document:`, err);
			});
	});

	if (loading || !content) {
		return <Loading />;
	}

	return (
		<AppView>
			<Navbar showNav={false} />
			<Section bgColor="bg-slate-200" style="relative pt-28 md:pt-20">
				<div className="h-[100px]"></div>
			</Section>
			<Section bgColor="bg-slate-100" style="relative pt-28">
				<Spacer color={"text-slate-100"} fillColor={"fill-slate-100"} />
				<div className="relative flex -mt-40 py-16 z-10 justify-center bg-white shadow-xl rounded-lg">
					<div
						className="w-11/12 mx-auto px-4 text-left document-content"
						dangerouslySetInnerHTML={{ __html: content }}
					></div>
				</div>
			</Section>
			<Footer />
		</AppView>
	);
}
