import { FC } from "react";

const StatItem: FC<{ label: string; value: number | string }> = ({ label, value }) => {
    return (
        <div className="flex items-center justify-center gap-2">
            <span className="text-[#fafafa] text-opacity-40 text-[12px] lg:text-sm">{label}:</span>
            <span className="font-semibold text-sm lg:text-base">{value}</span>
        </div>
    )
};

  export default StatItem