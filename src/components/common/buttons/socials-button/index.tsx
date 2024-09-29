import { ReactElement } from 'react';

const SocialsButton = ({ icon }: { icon: ReactElement }) => (
  <button
    type="button"
    className="p-1 flex justify-center items-center size-[38px] text-sm font-medium rounded-xl border border-transparent text-black bg-white hover:bg-primary focus:outline-none focus:bg-primary disabled:opacity-50 disabled:pointer-events-none"
  >
    {icon}
  </button>
);

export default SocialsButton;
