export interface TemplateMetadata {
  id: string;
  name: string;
  category: "Scientific" | "Modern" | "Classic" | "Minimalist" | "Presentation";
  tags: string[]; // Used by AI Magic Button to Auto-Select
  previewImage: string;
  formatSupported: ("PDF" | "WORD" | "PPT")[];
}

// Simulated Central Registry for the 200 Templates
// To prevent bloating the app bundle, we only load this metadata.
export const TEMPLATE_REGISTRY: TemplateMetadata[] = [
  {
    id: "classic-1",
    name: "الكلاسيكي الأكاديمي",
    category: "Classic",
    tags: ["history", "literature", "general", "academic"],
    previewImage: "/templates/classic.png",
    formatSupported: ["PDF", "WORD"]
  },
  {
    id: "tech-modern",
    name: "التقني الحديث",
    category: "Modern",
    tags: ["ai", "computer science", "engineering", "technology"],
    previewImage: "/templates/tech.png",
    formatSupported: ["PDF", "PPT"]
  },
  {
    id: "medical-science",
    name: "الطبي العلمي",
    category: "Scientific",
    tags: ["medicine", "biology", "chemistry", "research"],
    previewImage: "/templates/medical.png",
    formatSupported: ["PDF", "WORD", "PPT"]
  },
  // ... Imagine 197 more templates strictly defined here.
];

export const getTemplateById = (templateId: string) => {
  return TEMPLATE_REGISTRY.find(t => t.id === templateId) || TEMPLATE_REGISTRY[0];
};

/**
 * AI Magic Selection Algorithm
 * Heuristics logic to match the topic descriptors against template tags.
 */
export const autoSelectTemplate = (topicDescription: string): string => {
  const words = topicDescription.toLowerCase().split(" ");
  
  let bestMatch = TEMPLATE_REGISTRY[0].id;
  let highestScore = 0;

  for (const template of TEMPLATE_REGISTRY) {
    let score = 0;
    template.tags.forEach(tag => {
      if (words.some(word => word.includes(tag))) {
        score += 1;
      }
    });

    if (score > highestScore) {
      highestScore = score;
      bestMatch = template.id;
    }
  }

  // If no match, return a random template from a specific fallback category
  if (highestScore === 0) {
    const fallbacks = TEMPLATE_REGISTRY.filter(t => t.category === "Modern");
    return fallbacks[Math.floor(Math.random() * fallbacks.length)].id;
  }

  return bestMatch;
};
