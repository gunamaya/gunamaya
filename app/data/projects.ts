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
      "Dari fragmentasi ke fusi: Mengurai kompleksitas manajemen data",
    tags: ["Riset UX", "Strategi Brand", "Identitas Visual"],
    featured: true,
  },
  {
    slug: "skybridge",
    name: "SkyBridge",
    description:
      "Merancang strategi komunikasi seamless untuk generasi konektivitas berikutnya",
    tags: ["Strategi Komunikasi", "Branding", "Desain UI"],
    featured: true,
  },
  {
    slug: "pulseflow",
    name: "PulseFlow",
    description:
      "Tampilan baru yang powerful dan agile untuk analitik pelatihan",
    tags: ["Discovery", "Pengembangan Identitas", "Panduan Brand"],
    featured: true,
  },
  {
    slug: "dataprism",
    name: "DataPrism",
    description:
      "Meningkatkan pengalaman dari alat analitik data paling aksesibel di dunia.",
    tags: ["Riset Pasar", "Desain UI", "Desain Produk"],
    featured: true,
  },
  {
    slug: "verdant",
    name: "Verdant",
    description:
      "Memposisikan ulang perusahaan supply chain muda untuk bersaing dengan raksasa industri",
    tags: ["Sistem Brand", "Riset UX", "Strategi Komunikasi"],
    featured: true,
  },
  {
    slug: "converso",
    name: "Converso",
    description:
      "Meningkatkan pengalaman produk dari ekosistem yang mendekatkan perusahaan dengan pelanggan mereka.",
    tags: ["Riset UX", "Inovasi Produk", "Desain Antarmuka"],
    featured: true,
  },
  {
    slug: "luminarai",
    name: "LuminarAI",
    description: "Merintis pemasaran dengan insight audiens berbasis AI",
    tags: ["Riset UX", "Desain UI", "Desain Produk"],
  },
  {
    slug: "forgehub",
    name: "ForgeHub",
    description:
      "Mendorong percakapan dan menghubungkan ide yang memberdayakan kreator dan brand",
    tags: ["Strategi Brand", "Identitas Visual", "Desain Antarmuka"],
  },
  {
    slug: "transglobe",
    name: "TransGlobe",
    description: "Membentuk masa depan transportasi bersama keluarga brand.",
    tags: ["Desain UX", "Keluarga Brand", "Desain Antarmuka"],
  },
  {
    slug: "cloudnova",
    name: "CloudNova",
    description:
      "Mengungkap identitas visual dan website baru untuk arsitek software cloud yang hemat biaya.",
    tags: ["Riset UX", "Branding", "Desain Website"],
  },
  {
    slug: "datazen",
    name: "DataZen",
    description:
      "Memberdayakan yang Data-Driven melalui redesain yang menarik secara visual dan intuitif secara fungsional",
    tags: ["Riset UX", "Refresh Brand", "Desain UI"],
  },
  {
    slug: "edustack",
    name: "EduStack",
    description:
      "Mentransformasi industri EdTech global dengan strategi brand dan website baru.",
    tags: ["Riset Pasar", "Identitas Visual", "Desain Website"],
  },
  {
    slug: "medflow",
    name: "MedFlow",
    description:
      "Merevolusi kesehatan digital melalui kemitraan desain strategis.",
    tags: ["Desain Produk", "Riset UX", "Prototyping"],
    comingSoon: true,
  },
  {
    slug: "codelaunch",
    name: "CodeLaunch",
    description:
      "Gaya baru yang berani dan pengalaman mulus untuk resource no-code terdepan di dunia.",
    tags: ["Riset Pengguna", "Identitas Visual", "Desain Website"],
  },
  {
    slug: "pixelplay",
    name: "PixelPlay",
    description:
      "Reimaginasi pembelajaran koding dengan sentuhan retro dan penuh karakter!",
    tags: ["Discovery", "Identitas Visual", "Ilustrasi"],
  },
  {
    slug: "swiftship",
    name: "SwiftShip",
    description:
      "Dari startup ke dewasa: membangun brand yang scalable untuk penyedia logistik pengiriman senilai $1M.",
    tags: ["Identitas Visual", "Sistem Desain", "Desain Website & CMS"],
  },
  {
    slug: "careercraft",
    name: "CareerCraft",
    description:
      "Meneliti cara baru membantu orang mendapatkan pekerjaan impian mereka.",
    tags: ["Riset UX", "Identitas Visual", "Desain Produk"],
  },
  {
    slug: "mailpulse",
    name: "MailPulse",
    description:
      "Merevitalisasi brand, produk, dan website untuk platform pemasaran otomatis terkemuka.",
    tags: ["Riset UX", "Identitas Visual", "Desain Website"],
  },
  {
    slug: "fincloud",
    name: "FinCloud",
    description:
      "Membuat identitas visual dan produk untuk inovator cloud FinOps.",
    tags: ["Discovery", "Desain UX", "Identitas Visual"],
  },
  {
    slug: "propwise",
    name: "PropWise",
    description:
      "Meningkatkan brand dan pengalaman properti end-to-end untuk perusahaan prop-tech terkemuka.",
    tags: ["Riset UX", "Inovasi Produk", "Identitas Visual"],
  },
  {
    slug: "wellspring",
    name: "Wellspring",
    description:
      "Bermitra dengan peneliti kesehatan untuk meningkatkan komunikasi pasien.",
    tags: ["Identitas Visual", "Desain Produk", "Prototyping"],
  },
  {
    slug: "haven",
    name: "Haven",
    description: "Membangun pengalaman pembelian rumah terbaik di dunia.",
    tags: ["Riset Pasar", "Panduan Brand", "Pesan Brand"],
  },
  {
    slug: "capturely",
    name: "Capturely",
    description:
      "Meningkatkan tingkat konversi dengan strategi brand dan website baru untuk platform penangkapan lead B2B.",
    tags: ["Riset Pasar", "Riset Pelanggan", "Pengembangan Identitas"],
  },
  {
    slug: "learnhub",
    name: "LearnHub",
    description:
      "Membantu 100.000 kreator berbagi pengetahuan melalui platform inovatif.",
    tags: ["Desain Produk", "Sistem Desain", "Integrasi CMS"],
  },
  {
    slug: "amplifi",
    name: "Amplifi",
    description:
      "Memberdayakan influencer, ambassador, dan afiliasi untuk melakukan yang terbaik.",
    tags: ["Riset Pasar", "Panduan Brand", "Pesan Brand"],
  },
  {
    slug: "coworkx",
    name: "CoWorkX",
    description:
      "Mendesain dan merekayasa ulang rangkaian aplikasi untuk membantu membangun ruang coworking yang lebih baik.",
    tags: ["Riset UX", "Desain Aplikasi iOS", "Desain Produk"],
  },
  {
    slug: "spectra",
    name: "Spectra",
    description:
      "Membantu membangun agensi pengembangan software premium dengan brand dan pengalaman website baru.",
    tags: ["Identitas Visual", "Sistem Desain", "Pengembangan Front-end"],
  },
  {
    slug: "insureflow",
    name: "InsureFlow",
    description:
      "Membangun sistem manajemen penawaran untuk agen dan pemilik rumah.",
    tags: ["Desain Produk", "Prototyping", "Pengembangan Front-end"],
  },
  {
    slug: "launchpad",
    name: "LaunchPad",
    description:
      "Meningkatkan pengalaman brand untuk inkubator startup yang inovatif.",
    tags: ["Panduan Brand", "Identitas Visual", "Desain Website"],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
