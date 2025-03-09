import { FC, useState, useMemo } from "react"
import GameInfo from "./GameInfo"
import { IGame } from "../types/game"
import AnimatedScore from "./AnimatedScore";

const Game: FC<IGame> = ({ homeScore, homeTeam, awayScore, awayTeam, status }) => {
    const [active, setActive] = useState(false);

    const toggleActive = () => setActive((old) => !old);

    const statusClass = useMemo(() => {
        const statusMap: Record<string, string> = {
            Ongoing: "bg-ongoing",
            Finished: "bg-finished",
        };
        return statusMap[status] || "bg-other";
    }, [status]);

    return (
        <div
            onClick={toggleActive}
            className="w-full h-fit bg-[#0B0E12] rounded-md flex flex-col gap-4 lg:gap-8 p-2 lg:p-4">
            <div className="cursor-pointer flex items-center justify-between">
                <div className="flex items-center gap-1.5 lg:gap-4">
                    <img className="w-7 h-7 lg:w-12 lg:h-12" src="/team.svg" alt="Team" />
                    <span className="text-sm lg:text-base text-white font-semibold">{awayTeam?.name}</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <span className="text-white text-sm lg:text-xl font-semibold">
                        {<AnimatedScore value={awayScore}/>} : {<AnimatedScore value={homeScore}/>}
                    </span>
                    <div
                        className={`w-[70px] lg:w-24 h-7 text-white ${statusClass} flex items-center justify-center rounded-md text-[12px] font-semibold`}>
                        {status}
                    </div>
                </div>
                <div className="flex items-center lg:gap-2">
                    <div className="flex gap-1.5 lg:gap-4 items-center">
                        <span className="text-sm lg:text-base text-white font-semibold">{homeTeam?.name}</span>
                        <img className="w-7 h-7 lg:w-12 lg:h-12" src="/team.svg" alt="Team" />
                    </div>
                    <img
                        className={`${
                            active ? "rotate-180" : "rotate-0"
                        } transition-all duration-300 hidden lg:block`}
                        src="/arrow.svg"
                        alt="arrow"
                    />
                </div>
            </div>
            <div
                onClick={(e) => e.stopPropagation()}
                className={`transition-all duration-300 ${
                    active ? "flex flex-col lg:flex-row gap-2 lg:gap-8" : "hidden"
                }`}
            >
                <GameInfo {...awayTeam} />
                <div className="flex items-center gap-2.5 lg:hidden">
                    <div className="h-[1px] w-full bg-[#13181f]" />
                    <span className="text-[#313a47] font-semibold text-sm">VS</span>
                    <div className="h-[1px] w-full bg-[#13181f]" />
                </div>
                <GameInfo {...homeTeam} />
            </div>
            <img
                className={`${
                    active ? "rotate-180" : "rotate-0"
                } block lg:hidden transition-all mx-auto w-[13px] h-[7px]`}
                src="/arrow.svg"
                alt="arrow"
            />
        </div>
    );
};

export default Game;
