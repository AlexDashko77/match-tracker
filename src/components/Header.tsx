import store from "../store/store";
import Dropdown from "./Dropdown";
import SomethingWentWrong from "./SomethingWentWrong";
import { observer } from "mobx-react-lite";

const Header = observer(() => {

  const updateMatches = () => {
    store.getMatches();
  };

  return (
    <div className="flex flex-col lg:flex-row gap-2.5 lg:gap-0 justify-between items-center">
      <div className="w-full flex flex-col items-center lg:flex-row gap-3.5 lg:gap-6">
        <img 
          className="w-[225px] h-[28px] lg:w-[257px] lg:h-[32px]" 
          src="/logo.svg" 
          alt="Match Tracker Logo" 
        />
        <Dropdown />
      </div>
      <div className="w-full flex gap-3 justify-end">
       {store.isError &&  <SomethingWentWrong/>}
      <button
        onClick={updateMatches}
        disabled={store.isLoading}
        className="flex items-center justify-center gap-2.5 cursor-pointer 
                   w-full lg:w-52 h-14 bg-[#EB0237] rounded-md text-white text-[18px] 
                   font-semibold hover:bg-[#A01131] active:bg-[#701328] transition">Обновить  
                   <img className={`transition-transform duration-500 ${store.isLoading ? "animate-spin" : ""}`} src="/refresh.svg" alt="refresh" />
      </button>
      </div>
    </div>
  );
});

export default Header;
