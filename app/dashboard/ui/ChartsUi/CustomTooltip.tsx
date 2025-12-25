import { TooltipProps } from "recharts";
import { useTheme } from "../../ThemeProvider";

type CustomTooltipProps = {
  active?: boolean;
  payload?: {
    value: number;
    name: string;
  }[];
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
    const {theme } = useTheme()
  if (!active || !payload?.length) return null;

  return (
    <div 
    className="rounded-xl border border-neutral-600 bg-neutral-900/65 px-3 py-2 shadow-sm"
    style={{
        boxShadow: `0 0 0 1px ${theme}20, 0 8px 30px ${theme}30`,
      }}
    >
      <p className="text-xs text-neutral-400 ">{label}</p>

      <p className="text-sm font-semibold">
        ${payload[0].value}
      </p>
    </div>
  );
};

export default CustomTooltip;
