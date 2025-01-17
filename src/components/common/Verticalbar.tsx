type BarProps = {
  decor: string;
};

const Verticalbar = ({ decor }: BarProps) => {
  return <div className={`w-[6px] h-auto bg-[#${decor}] rounded-lg`}></div>;
};

export default Verticalbar;
// auto