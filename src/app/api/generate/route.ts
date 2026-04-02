import { NextResponse } from "next/server";
import { generateArabicReport } from "@/lib/ai-service";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    // User must be logged in to generate a report, but we'll mock auth for now
    // if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await req.json();
    const { topic, topicDesc, pages, includeImages, formatType } = body;

    if (!topic || !topicDesc) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const aiContent = await generateArabicReport({
      topic,
      topicDesc,
      pages: Number(pages) || 5,
      includeImages: Boolean(includeImages),
      formatType,
    });

    // In a real app, we would save this to Prisma Database here

    return NextResponse.json({ success: true, data: aiContent });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
