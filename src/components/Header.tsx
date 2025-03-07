import store from "../store/store"

const Header = () => {

    const updateMatches = () => {
            store.getMatches()
    }

    return (
        <div className="flex justify-between items-center">
            <img src="/logo.svg" alt="Match Tracker" />
            <button onClick={updateMatches} className="w-52 h-14 bg-[#EB0237] rounded-md text-white text-[18px] font-semibold">Обновить</button>
        </div>
    )
}

export default Header