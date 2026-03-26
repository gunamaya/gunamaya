export interface Project {
  slug: string;
  name: string;
  description: string;
  tags: string[];
  image?: string;
  featured?: boolean;
  comingSoon?: boolean;
}

export const projects: Project[] = [
  {
    slug: "nexagen",
    name: "NexaGen",
    description:
      "From fragmentation to fusion: Breaking down the complexities of data management",
    tags: ["UX Research", "Brand Strategy", "Visual Identity"],
    featured: true,
  },
  {
    slug: "skybridge",
    name: "SkyBridge",
    description:
      "Crafting a seamless communication strategy for the next generation of connectivity",
    tags: ["Communication Strategy", "Branding", "UI Design"],
    featured: true,
  },
  {
    slug: "pulseflow",
    name: "PulseFlow",
    description: "A new powerful and agile look to training analytics",
    tags: ["Discovery", "Identity Development", "Brand Guidelines"],
    featured: true,
  },
  {
    slug: "dataprism",
    name: "DataPrism",
    description:
      "Elevating the experience of the world's most accessible data analytics tool.",
    tags: ["Market Research", "UI Design", "Product Design"],
    featured: true,
  },
  {
    slug: "verdant",
    name: "Verdant",
    description:
      "Repositioning a young supply chain company to compete with industry giants",
    tags: ["Brand System", "UX Research", "Communication Strategy"],
    featured: true,
  },
  {
    slug: "converso",
    name: "Converso",
    description:
      "Elevating the product experience of the ecosystem that brings companies closer to their customers.",
    tags: ["UX Research", "Product Innovation", "Interface Design"],
    featured: true,
  },
  {
    slug: "luminarai",
    name: "LuminarAI",
    description: "Pioneering Marketing with AI-Powered Audience Insights",
    tags: ["UX Research", "UI Design", "Product Design"],
  },
  {
    slug: "forgehub",
    name: "ForgeHub",
    description:
      "Driving conversation and connecting ideas which empower creators and brands",
    tags: ["Brand Strategy", "Visual Identity", "Interface Design"],
  },
  {
    slug: "transglobe",
    name: "TransGlobe",
    description:
      "Shaping the future of transportation alongside a family of brands.",
    tags: ["UX Design", "Family of Brands", "Interface Design"],
  },
  {
    slug: "cloudnova",
    name: "CloudNova",
    description:
      "Unveiling a new visual identity and website for the architects of cost-effective cloud software.",
    tags: ["UX Research", "Branding", "Website Design"],
  },
  {
    slug: "datazen",
    name: "DataZen",
    description:
      "Empowering the Data-Driven Through Visually Appealing and Intuitively Functional Redesign",
    tags: ["UX Research", "Brand Refresh", "UI Design"],
  },
  {
    slug: "edustack",
    name: "EduStack",
    description:
      "Transforming the global EdTech industry with a new brand strategy and website.",
    tags: ["Market Research", "Visual Identity", "Website Design"],
  },
  {
    slug: "medflow",
    name: "MedFlow",
    description:
      "Revolutionizing digital healthcare through a strategic design partnership.",
    tags: ["Product Design", "UX Research", "Prototyping"],
    comingSoon: true,
  },
  {
    slug: "codelaunch",
    name: "CodeLaunch",
    description:
      "A bold new style and smooth experience for the world's leading no-code resource.",
    tags: ["User Research", "Visual Identity", "Website Design"],
  },
  {
    slug: "pixelplay",
    name: "PixelPlay",
    description:
      "Reimagining code learning with a touch of retro and plenty of character!",
    tags: ["Discovery", "Visual Identity", "Illustrations"],
  },
  {
    slug: "swiftship",
    name: "SwiftShip",
    description:
      "From startup to grown up: building a scalable brand for a $1B valued shipping logistics provider.",
    tags: ["Visual Identity", "Design System", "Website Design & CMS"],
  },
  {
    slug: "careercraft",
    name: "CareerCraft",
    description: "Researching new ways to help people land their dream jobs.",
    tags: ["UX Research", "Visual Identity", "Product Design"],
  },
  {
    slug: "mailpulse",
    name: "MailPulse",
    description:
      "Revitalising the brand, product, and website for a premier automated marketing platform.",
    tags: ["UX Research", "Visual Identity", "Website Design"],
  },
  {
    slug: "fincloud",
    name: "FinCloud",
    description:
      "Creating a visual identity and product for FinOps cloud innovator.",
    tags: ["Discovery", "UX Design", "Visual Identity"],
  },
  {
    slug: "propwise",
    name: "PropWise",
    description:
      "Enhancing the brand and end-to-end property experience for a leading prop-tech company.",
    tags: ["UX Research", "Product Innovation", "Visual Identity"],
  },
  {
    slug: "wellspring",
    name: "Wellspring",
    description:
      "Partnering with healthcare researchers to improve patient communications.",
    tags: ["Visual Identity", "Product Design", "Prototyping"],
  },
  {
    slug: "haven",
    name: "Haven",
    description: "Building the world's best home buying experience.",
    tags: ["Market Research", "Brand Guidelines", "Brand Messaging"],
  },
  {
    slug: "capturely",
    name: "Capturely",
    description:
      "Increasing conversion rates with a new brand strategy and website for a B2B lead capture platform.",
    tags: ["Market Research", "Customer Research", "Identity Development"],
  },
  {
    slug: "learnhub",
    name: "LearnHub",
    description:
      "Helping 100,000 creators share their knowledge through an innovative platform.",
    tags: ["Product Design", "Design System", "CMS Integration"],
  },
  {
    slug: "amplifi",
    name: "Amplifi",
    description:
      "Empowering influencers, ambassadors, and affiliates to do what they do best.",
    tags: ["Market Research", "Brand Guidelines", "Brand Messaging"],
  },
  {
    slug: "coworkx",
    name: "CoWorkX",
    description:
      "Designing and reengineering a suite of apps to help build better coworking spaces.",
    tags: ["UX Research", "iOS App Design", "Product Design"],
  },
  {
    slug: "spectra",
    name: "Spectra",
    description:
      "Helping establish a premium software development agency with a new brand and website experience.",
    tags: ["Visual Identity", "Design System", "Front-end Development"],
  },
  {
    slug: "insureflow",
    name: "InsureFlow",
    description:
      "Building a quote management system for agents and homeowners.",
    tags: ["Product Design", "Prototyping", "Front-end Development"],
  },
  {
    slug: "launchpad",
    name: "LaunchPad",
    description:
      "Levelling up the brand experience for an innovative startup incubator.",
    tags: ["Brand Guidelines", "Visual Identity", "Website Design"],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
