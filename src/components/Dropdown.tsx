import { useState } from "react";
import store from "../store/store";
import { observer } from "mobx-react-lite";

const options = ["Все статусы", "Finished", "Ongoing", "Scheduled"];

const Dropdown = observer(() => {
  const [isOpen, setIsOpen] = useState(false);

  const selectSortValue = (value: string) => {
    store.changeSortValue(value);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 flex items-center justify-between bg-[#0b0e12] text-white w-full lg:w-[170px] h-[56px] rounded-md hover:bg-[#0f1318] active:bg-[#0b0e12] transition"
      >
        {store.sortValue}
        <div
          className={`${isOpen ? "rotate-180" : "rotate-0"} transition-transform w-0 h-0 border-l-[11px] border-l-transparent border-r-[11px] border-r-transparent border-t-[10px] border-t-white rounded-md`}
        />
      </button>

      <div
        className={`absolute left-0 mt-2 w-full lg:w-[170px] bg-[#0f1318] rounded-md overflow-hidden transition-all ${
          isOpen ? "opacity-100 max-h-60" : "opacity-0 max-h-0"
        }`}
      >
        <ul className="text-[#B4B5B6]">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => selectSortValue(option)}
              className="p-3 cursor-pointer hover:bg-[#11161d] hover:text-white active:bg-[#0d1115] active:text-white transition"
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default Dropdown;
