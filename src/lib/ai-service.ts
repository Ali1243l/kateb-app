import OpenAI from "openai";

// Configure OpenAI SDK to use NVIDIA NIM / DeepSeek endpoints
const openai = new OpenAI({
  apiKey: process.env.AI_API_KEY || "",
  baseURL: "https://integrate.api.nvidia.com/v1", // Standard NVIDIA NIM endpoint containing DeepSeek-V3
});

export interface GenerateReportRequest {
  studentName: string;
  universityName: string;
  department: string;
  academicStage: string;
  professorName: string;
  subjectName: string; // New field
  reportTitle: string;
  topicDesc: string;
}

export const generateAcademicReport = async (data: GenerateReportRequest) => {
  if (!process.env.AI_API_KEY) {
    throw new Error("API Key is missing. Please add AI_API_KEY to your environment.");
  }

  const prompt = `
    أنت أكاديمي محترف وخبير في صياغة التقارير الجامعية باللغة العربية الفصحى.
    المطلوب منك كتابة تقرير أكاديمي مفصل يشمل النظريات، التحليل، والمقدمة والخاتمة بالاستناد إلى المدخلات التالية:

    - عنوان التقرير: ${data.reportTitle}
    - التوجيه المحدد: ${data.topicDesc}
    - الجامعة: ${data.universityName} | القسم: ${data.department} | المادة: ${data.subjectName}
    
    يجب أن يكون الناتج حصرياً بصيغة JSON تحتوي على الحقول التالية:
    {
      "title": "عنوان التقرير المنقح",
      "introduction": "مقدمة نقدية وأكاديمية",
      "body": "محتوى التقرير مفصل في فقرات علمية دقيقة",
      "conclusion": "الاستنتاج أو الخاتمة الأكاديمية",
      "references": ["مرجع 1", "مرجع 2"]
    }
    
    مهم جداً: أخرج JSON فقط بدون أي نصوص إضافية لتسهيل معالجتها برمجياً.
  `;

  try {
    const completion = await openai.chat.completions.create({
      model: "deepseek-ai/deepseek-v3", // Specified by user
      messages: [
        {
          role: "system",
          content: "You are an expert Arabic academic writer. Output MUST be strictly valid JSON.",
        },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
      max_tokens: 3500,
    });

    const resultText = completion.choices[0]?.message?.content || "{}";
    
    // Attempt to extract JSON if model wrapped it in markdown code blocks
    let jsonMatch = resultText.match(/```json\n?([\s\S]*?)```/);
    let parsedData = {};
    if (jsonMatch && jsonMatch[1]) {
        parsedData = JSON.parse(jsonMatch[1]);
    } else {
        parsedData = JSON.parse(resultText);
    }
    
    return parsedData;
  } catch (error) {
    console.error("AI Generation Error:", error);
    throw new Error("Failed to generate report content using DeepSeek-V3");
  }
};
