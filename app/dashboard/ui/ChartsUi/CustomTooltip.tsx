"use client"
import { TooltipProps } from "recharts";
import { useTheme } from "../../ThemeProvider";

type CustomTooltipProps = {
  active?: boolean;
  payload?: {
    value: number;
    name: string;
  }[];
  label?: string;
  currency?: boolean;
}

const CustomTooltip = ({ active, payload, label, currency }: CustomTooltipProps) => {
  const { theme } = useTheme()
  if (!active || !payload?.length) return null;

  const val = payload[0].value
  const formatted = currency
    ? `$${new Intl.NumberFormat("en-US").format(val)}`
    : new Intl.NumberFormat("en-US").format(val)

  return (
    <div
      className="rounded-xl border border-neutral-600 bg-neutral-900/65 px-3 py-2 shadow-sm"
      style={{
        boxShadow: `0 0 0 1px ${theme.hex}20, 0 8px 30px ${theme.hex}30`,
      }}
    >
      <p className="text-xs text-neutral-400 mb-0.5">{label}</p>
      <p className="text-sm font-semibold">{formatted}</p>
    </div>
  );
};

export default CustomTooltip;
