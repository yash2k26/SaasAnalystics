import { TooltipProps } from "recharts";

type CustomTooltipProps = {
  active?: boolean;
  payload?: {
    value: number;
    name: string;
  }[];
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {

  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-xl border border-neutral-600 bg-neutral-900/65 px-3 py-2 shadow-[#ec4899] shadow-sm">
      <p className="text-xs text-neutral-400 ">{label}</p>

      <p className="text-sm font-semibold">
        ${payload[0].value}
      </p>
    </div>
  );
};

export default CustomTooltip;
