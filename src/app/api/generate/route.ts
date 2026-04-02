import { NextResponse } from "next/server";
import { generateAcademicReport } from "@/lib/ai-service";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Call the newly connected DeepSeek-v3 AI service
    const content = await generateAcademicReport(body);
    
    return NextResponse.json({ success: true, content });
  } catch (error: any) {
    console.error("API Error: ", error);
    return NextResponse.json(
      { success: false, error: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}
