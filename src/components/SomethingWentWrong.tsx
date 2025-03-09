import { observer } from "mobx-react-lite"
import store from "../store/store"

const SomethingWentWrong = observer(() => {
    return (
        <div className="fixed top-[9%] lg:relative flex items-center gap-2.5 w-fit h-14 bg-[#0F1318] rounded-md px-5 lg:px-6">
            <img src="/error.svg" alt="Error" />
            <span className="text-sm lg:text-[18px] text-white">{store.error}</span>
        </div>
    )
})

export default SomethingWentWrong