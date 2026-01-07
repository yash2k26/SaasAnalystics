import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  // temporary dev user
  const user = { userId: "dev-user" };

  const { searchParams } = new URL(req.url);

  const workspaceId = searchParams.get("workspaceId");
  const from = searchParams.get("from");
  const to = searchParams.get("to");

  if (!workspaceId) {
    return NextResponse.json(
      { success: false, message: "workspaceId is required" },
      { status: 400 }
    );
  }

  // workspace ownership check
  const workspace = await prisma.workspace.findFirst({
    where: {
      id: workspaceId,
    },
  });

  if (!workspace) {
    return NextResponse.json(
      { success: false, message: "Workspace not found or unauthorized" },
      { status: 403 }
    );
  }

  // -------------------
  // date filter logic
  // -------------------
  const where: any = { workspaceId };

  if (from || to) {
    where.createdAt = {};

    // safe full-day bounds (important)
    if (from && !isNaN(Date.parse(from))) {
      where.createdAt.gte = new Date(`${from}T00:00:00.000Z`);
    }

    if (to && !isNaN(Date.parse(to))) {
      where.createdAt.lte = new Date(`${to}T23:59:59.999Z`);
    }
  }

  // ---- CORE PART -----
  // group by DAY + event type
  const grouped = await prisma.analyticsEvent.groupBy({
    by: ["eventName", "createdAt"],
    where,
    _count: { eventName: true },
  });

  // normalize into {date -> counts}
  const map = new Map<string, any>();

  grouped.forEach((row) => {
    const day = row.createdAt.toISOString().split("T")[0]; // YYYY-MM-DD

    if (!map.has(day)) {
      map.set(day, {
        date: day,
        page_view: 0,
        user_signup: 0,
        button_click: 0,
        revenue: 0,
      });
    }

    const bucket = map.get(day);

    bucket[row.eventName] = row._count.eventName;
  });

  const result = Array.from(map.values()).sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  console.log("result : ",result)

  return NextResponse.json(
    {
      success: true,
      data: result,
    },
    { status: 200 }
  );
}
