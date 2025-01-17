type BarProps = {
  decor: string;
};

const Verticalbar = ({ decor }: BarProps) => {
  return <div className={`w-[6px] h-auto bg-[#${decor}] rounded-sm`}></div>;
};

export default Verticalbar;
