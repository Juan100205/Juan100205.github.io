import { ReactNode } from "react";

interface Props {
  place: ReactNode;
  certification: ReactNode;
  date_init: ReactNode;
  date_finish: ReactNode;
  initialLine: number;
}

function Edu({ place, certification, date_init, date_finish}: Props) {
  return (
    <div className="whitespace-pre text-sm text-green-300">
      {`init_education {`}
      {"\n"}
      {`   place: `}
      <span className="text-purple-400">String</span>(
      <span className="text-white">"{place}"</span>);
      {"\n"}
      {`  certification: `}
      <span className="text-purple-400">String</span>(
      <span className="text-white">"{certification}"</span>);
      {"\n"}
      {`  time: {`}
      {"\n"}
      {`    for {`}
      {"\n"}
      {`      date_init = `}
      <span className="text-yellow-300">Date</span>(
      <span className="text-white">{date_init}</span>);
      {"\n"}
      {`      date_finish = `}
      <span className="text-yellow-300">Date</span>(
      <span className="text-white">{date_finish}</span>);
      {"\n"}
      {`     }`}
      {"\n"}
      {`   }`}
      {"\n"}
      {` }`}
    </div>
  );
}

export default Edu;
