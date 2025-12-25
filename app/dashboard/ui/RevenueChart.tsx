"use client";

import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import CustomTooltip from "./ChartsUi/CustomTooltip";
import { useTheme } from "../ThemeProvider";

const data = [
  // ------- April -------
  { date: "Apr 01", revenue: 95 },
  { date: "Apr 02", revenue: 102 },
  { date: "Apr 03", revenue: 98 },
  { date: "Apr 04", revenue: 120 },
  { date: "Apr 05", revenue: 115 },
  { date: "Apr 06", revenue: 140 },
  { date: "Apr 07", revenue: 132 },

  { date: "Apr 08", revenue: 125 },
  { date: "Apr 09", revenue: 135 },
  { date: "Apr 10", revenue: 150 },
  { date: "Apr 11", revenue: 142 },
  { date: "Apr 12", revenue: 160 },
  { date: "Apr 13", revenue: 155 },
  { date: "Apr 14", revenue: 148 },

  { date: "Apr 15", revenue: 130 },
  { date: "Apr 16", revenue: 128 },
  { date: "Apr 17", revenue: 140 },
  { date: "Apr 18", revenue: 150 },
  { date: "Apr 19", revenue: 172 },
  { date: "Apr 20", revenue: 168 },
  { date: "Apr 21", revenue: 162 },

  { date: "Apr 22", revenue: 175 },
  { date: "Apr 23", revenue: 180 },
  { date: "Apr 24", revenue: 165 },
  { date: "Apr 25", revenue: 158 },
  { date: "Apr 26", revenue: 176 },
  { date: "Apr 27", revenue: 190 },
  { date: "Apr 28", revenue: 184 },
  { date: "Apr 29", revenue: 178 },
  { date: "Apr 30", revenue: 195 },

  // ------- May -------
  { date: "May 01", revenue: 185 },
  { date: "May 02", revenue: 192 },
  { date: "May 03", revenue: 188 },
  { date: "May 04", revenue: 205 },
  { date: "May 05", revenue: 198 },
  { date: "May 06", revenue: 210 },
  { date: "May 07", revenue: 215 },

  { date: "May 08", revenue: 200 },
  { date: "May 09", revenue: 195 },
  { date: "May 10", revenue: 220 },
  { date: "May 11", revenue: 225 },
  { date: "May 12", revenue: 218 },
  { date: "May 13", revenue: 230 },
  { date: "May 14", revenue: 238 },

  { date: "May 15", revenue: 210 },
  { date: "May 16", revenue: 205 },
  { date: "May 17", revenue: 198 },
  { date: "May 18", revenue: 215 },
  { date: "May 19", revenue: 228 },
  { date: "May 20", revenue: 240 },
  { date: "May 21", revenue: 252 },

  { date: "May 22", revenue: 245 },
  { date: "May 23", revenue: 238 },
  { date: "May 24", revenue: 260 },
  { date: "May 25", revenue: 272 },
  { date: "May 26", revenue: 265 },
  { date: "May 27", revenue: 278 },
  { date: "May 28", revenue: 290 },
  { date: "May 29", revenue: 285 },
  { date: "May 30", revenue: 295 },
  { date: "May 31", revenue: 305 },

  // ------- June -------
  { date: "Jun 01", revenue: 280 },
  { date: "Jun 02", revenue: 290 },
  { date: "Jun 03", revenue: 275 },
  { date: "Jun 04", revenue: 300 },
  { date: "Jun 05", revenue: 315 },
  { date: "Jun 06", revenue: 322 },
  { date: "Jun 07", revenue: 335 },

  { date: "Jun 08", revenue: 310 },
  { date: "Jun 09", revenue: 295 },
  { date: "Jun 10", revenue: 305 },
  { date: "Jun 11", revenue: 320 },
  { date: "Jun 12", revenue: 340 },
  { date: "Jun 13", revenue: 335 },
  { date: "Jun 14", revenue: 345 },

  { date: "Jun 15", revenue: 330 },
  { date: "Jun 16", revenue: 318 },
  { date: "Jun 17", revenue: 335 },
  { date: "Jun 18", revenue: 355 },
  { date: "Jun 19", revenue: 368 },
  { date: "Jun 20", revenue: 380 },
  { date: "Jun 21", revenue: 372 },

  { date: "Jun 22", revenue: 360 },
  { date: "Jun 23", revenue: 350 },
  { date: "Jun 24", revenue: 345 },
  { date: "Jun 25", revenue: 365 },
  { date: "Jun 26", revenue: 390 },
  { date: "Jun 27", revenue: 405 },
  { date: "Jun 28", revenue: 398 },
  { date: "Jun 29", revenue: 410 },
  { date: "Jun 30", revenue: 430 },
];



export default function RevenueChart() {
    const {theme} = useTheme()
    return (
    <ResponsiveContainer width="100%" height={220}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="revGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={theme} stopOpacity={0.4} />
            <stop offset="100%" stopColor={theme} stopOpacity={0} />
          </linearGradient>
        </defs>

        <XAxis dataKey="date" stroke="#666" />
        <Tooltip content={<CustomTooltip/>}  />

        <Area
          type="bumpX"
          dataKey="revenue"
          stroke={theme}
          fill="url(#revGradient)"
          strokeWidth={2}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
