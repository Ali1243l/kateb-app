import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "dummy_key_for_build",
});

export interface ReportGenerationParams {
  topic: string;
  topicDesc: string;
  pages: number;
  includeImages: boolean;
  formatType: string;
}

export const generateArabicReport = async (params: ReportGenerationParams) => {
  const systemPrompt = `أنت أكاديمي وباحث خبير متخصص في كتابة التقارير والأبحاث باللغة العربية الفصحى. 
قواعد هامة جداً:
1. يجب أن يكون التقرير مكتوباً بلغة سليمة، دقيقة، ومنظمة جداً.
2. نسق الإجابة يجب أن يكون في شكل JSON حصراً لتسهيل معالجته برمجياً.
3. التقرير يجب أن يغطي العنوان التالي: "${params.topic}" مع مراعاة الوصف: "${params.topicDesc}".
4. يجب أن يكون طول المحتوى كافياً لتغطية حوالي ${params.pages} صفحات.
5. الإخراج يجب أن يلتزم بالهيكل التالي بدقة:
{
  "title": "عنوان التقرير (يجب أن يكون جذاباً وأكاديمياً)",
  "introduction": "مقدمة شاملة عن الموضوع لا تقل عن 200 كلمة",
  "body": [
    {
      "heading": "عنوان فرعي 1",
      "content": "شرح مفصل للعنوان الفرعي..."
    },
    ... (أضف المزيد بناءً على طول التقرير المطلوب)
  ],
  "conclusion": "خاتمة تلخص أهم النتائج والتوصيات",
  "references": [
    "مرجع 1",
    "مرجع 2"
  ]
}
`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: systemPrompt },
        { 
          role: "user", 
          content: "قم بتوليد التقرير الآن باتباع الهيكل المطلوب بصيغة JSON." 
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.7,
    });

    const outputString = response.choices[0].message.content || "{}";
    return JSON.parse(outputString);
  } catch (error) {
    console.error("AI Generation Error: ", error);
    throw new Error("Failed to generate report using AI");
  }
};
