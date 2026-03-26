export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  category: string;
  excerpt?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "the-founding-letter",
    title: "The founding letter.",
    author: "Gunamaya Team",
    category: "Culture",
  },
  {
    slug: "competition-vs-collaboration",
    title: "Competition vs. Collaboration",
    author: "Maya Putri",
    category: "Culture",
  },
  {
    slug: "feedback-that-moves-forward",
    title: "Feedback That Moves Forward — Not in Circles",
    author: "Rizky Firmansyah",
    category: "Design",
  },
  {
    slug: "nexagen-gunamaya-strategic-partnership",
    title: "NexaGen & Gunamaya: The Making of a Strategic Partnership",
    author: "Gunamaya Team",
    category: "Work",
  },
  {
    slug: "meaningful-design-through-partnership",
    title:
      "Hand in Hand With the Client: Meaningful Design Through Partnership",
    author: "Gunamaya Team",
    category: "Design",
  },
  {
    slug: "retainer-model-product-design",
    title: "6 Ways a Retainer Model Can Optimize Your Product Design Process",
    author: "Gunamaya Team",
    category: "Work",
  },
];
