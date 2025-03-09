export interface IGame {
    awayScore: number
    awayTeam: ITeam
    homeScore: number
    homeTeam: ITeam
    status: string
    
}

export interface ITeam {
    name: string
    points: number
    place: number
    total_kills: number
    players: IPlayer[]
}

export interface IPlayer {
    username: string
    kills: number
}