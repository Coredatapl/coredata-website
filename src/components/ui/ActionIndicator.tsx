import imgLoaderIcon from "../../assets/img/loader.svg";

interface ActionIndicatorProps {
  name: string;
}

export default function ActionIndicator({ name }: ActionIndicatorProps) {
  return (
    <div className="flex w-full mb-2 space-x-3 ml-auto justify-center">
      <div className="flex space-x-2 items-center text-sm text-gray-500">
        <img
          className="flex"
          src={imgLoaderIcon}
          alt="Loader"
          width={16}
          height={16}
        />{" "}
        <p className="flex">{name} ...</p>
      </div>
    </div>
  );
}
