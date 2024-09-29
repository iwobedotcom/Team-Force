import { ReactElement } from 'react';

type DownloadButtonProps = {
  store: string;
  icon: ReactElement;
  bgColor: string;
  textColor: string;
};

const DownloadButton = ({ store, icon, bgColor, textColor }: DownloadButtonProps) => (
  <button
    type="button"
    className={`flex items-center justify-center w-40 mt-3 ${textColor} ${bgColor} h-10 rounded-lg`}
  >
    <div className="mr-3">{icon}</div>
    <div className="-mt-1 font-neue text-md font-semibold">{store}</div>
  </button>
);

export default DownloadButton;
