import { FC } from "react"
import { ITeam } from "../types/game"
import StatItem from "./StatItem";

const GameInfo: FC<ITeam> = ({ points, total_kills, place, players }) => {
  return (
    <div className="w-full max-w-[875px] bg-[#0B0E12] rounded-lg flex flex-col gap-2">
      <div className="grid grid-cols-3 gap-4 text-white">
        {players.map((el, idx) => (
          <div
            key={idx} 
            className="w-full flex flex-wrap items-center justify-center lg:justify-between bg-[#101318] px-3 lg:px-6 py-2 rounded-lg"
          >
            <div className="flex items-center gap-2 w-fit">
              <img src="/avatar.svg" alt="User" className="w-8 h-8 lg:w-9 lg:h-9" />
              <span className="text-sm lg:text-base font-semibold">{el.username.slice(0, 5)}</span>
            </div>
            <StatItem label="Убийств" value={el.kills} />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 text-white bg-[#101318] px-3 py-3.5 lg:px-6 lg:py-3">
        <StatItem label="Points" value={`+${points}`} />
        <StatItem label="Место" value={place} />
        <StatItem label="Всего убийств" value={total_kills} />
      </div>
    </div>
  );
};

export default GameInfo;