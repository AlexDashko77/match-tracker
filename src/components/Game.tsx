import { FC } from "react"

interface IGame {
    awayScore: number
    awayTeam: ITeam
    homeScore: number
    homeTeam: ITeam
    status: string
    
}

interface ITeam {
    name: string
}




const Game:FC<IGame> = ({homeScore, homeTeam, awayScore, awayTeam, status}) => {
    const statusClass = status === "Ongoing" ? "bg-ongoing" : status === "Finished" ? "bg-finished" : "bg-other"
    return (
        <div className="w-full h-[87px] bg-[#0B0E12] rounded-md flex items-center justify-between px-9">
            <div className="flex items-center gap-4">
                <img src="/team.svg" alt="Team" />
                <span className="text-white font-semibold">{awayTeam?.name}</span>
            </div>
            <div className="flex flex-col items-center gap-1">
                <span className="text-white text-xl font-semibold">{awayScore} : {homeScore}</span>
                <div className={`w-24 h-7 text-white ${statusClass} flex items-center justify-center rounded-md text-[12px] font-semibold`}>{status}</div>
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white font-semibold">{homeTeam?.name}</span>
                <img src="/team.svg" alt="Team" />
            </div>
        </div>
    )
}
export default Game