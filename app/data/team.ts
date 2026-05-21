export interface TeamMember {
  name: string;
  role: string;
  country: string;
  user?: string; // Optional field for GitHub username
}

export const team: TeamMember[] = [
  {
    name: "Anggi Susanto",
    role: "Backend & AI Engineer",
    user: "anggi-susanto",
    country: "Indonesia",
  },
  {
    name: "M Adi F",
    role: "Senior Engineer",
    user: "muhadif",
    country: "Indonesia",
  },
  {
    name: "Jordi",
    role: "AI Assistant",
    user: "gnmy-jordi",
    country: "Indonesia",
  }
];
