// Static content for Merah Karya Gemilang landing page

export const companyInfo = {
  name: "Merah Karya Gemilang",
  tagline: "Solusi Alat Berat Terpercaya",
  description:
    "Perusahaan penyewaan alat berat yang menyediakan layanan peminjaman alat berat untuk mendukung pekerjaan konstruksi, pertambangan, dan infrastruktur.",
};

export const navLinks = [
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Layanan", href: "#layanan" },
  { label: "Armada", href: "#armada" },
  { label: "Kontak", href: "#kontak" },
] as const;

export const heroContent = {
  badge: "Solusi Alat Berat Terpercaya",
  headline: "Partner Terpercaya untuk Penyewaan Alat Berat",
  subheadline:
    "Nikmati layanan penyewaan alat berat yang handal dengan dukungan tim profesional, pemantauan real-time, dan komitmen pengiriman tepat waktu untuk proyek konstruksi Anda.",
  primaryCta: "Hubungi Kami",
  secondaryCta: "Minta Penawaran",
  trustedBy: "Dipercaya oleh 200+ Perusahaan di Sulawesi",
};

export const partnerLogos = [
  { name: "Partner 1", src: "/images/partner-1.svg" },
  { name: "Partner 2", src: "/images/partner-2.svg" },
  { name: "Partner 3", src: "/images/partner-3.svg" },
  { name: "Partner 4", src: "/images/partner-4.svg" },
  { name: "Partner 5", src: "/images/partner-5.svg" },
] as const;

export const whyChooseUsContent = {
  headline: "Kami berkomitmen untuk memberikan",
  headlineBold: "solusi terbaik",
  headlineEnd: "dalam penyewaan alat berat.",
  description:
    "Kami menghadapi setiap tantangan sebagai peluang untuk melampaui batasan tradisional, memberikan solusi yang disesuaikan untuk mengoptimalkan setiap tahap proyek Anda.",
  cta: "Tentang Kami",
};

export const features = [
  {
    id: 1,
    icon: "ShieldCheck",
    title: "Pengalaman Terpercaya",
    description:
      "Tim berpengalaman kami memberikan solusi alat berat yang disesuaikan untuk pengiriman yang aman dan tepat waktu.",
    highlighted: true,
  },
  {
    id: 2,
    icon: "Cog",
    title: "Armada Modern",
    description:
      "Sistem pelacakan canggih kami memberikan pembaruan real-time, memastikan visibilitas penuh armada alat berat.",
    highlighted: false,
  },
  {
    id: 3,
    icon: "Banknote",
    title: "Harga Transparan",
    description:
      "Nikmati harga yang jelas dan transparan tanpa biaya tersembunyi, memaksimalkan anggaran proyek Anda.",
    highlighted: false,
  },
  {
    id: 4,
    icon: "Clock",
    title: "Layanan 24/7",
    description:
      "Tim dukungan kami tersedia sepanjang waktu untuk membantu Anda dengan pertanyaan apapun.",
    highlighted: false,
  },
] as const;

export const statsContent = {
  badge: "Pertumbuhan Kami",
  headline: "Melacak Pertumbuhan Kami Melalui Pencapaian Utama",
  description:
    "Di Merah Karya Gemilang, perjalanan kami dimulai lebih dari satu dekade lalu dengan misi sederhana: merevolusi industri penyewaan alat berat. Yang dimulai sebagai tim kecil profesional yang bersemangat telah berkembang menjadi pemimpin regional di Sulawesi.",
  stats: [
    { value: "500+", label: "Unit Alat Berat" },
    { value: "200+", label: "Klien Puas" },
    { value: "15+", label: "Tahun Pengalaman" },
  ],
};

export const equipmentContent = {
  headline: "Partner Anda untuk Solusi Alat Berat",
  description:
    "Menyederhanakan logistik alat berat untuk meningkatkan efisiensi dan menghemat sumber daya",
  items: [
    {
      id: 1,
      title: "Excavator",
      description:
        "Solusi penggalian hemat biaya untuk proyek konstruksi besar dengan berbagai kapasitas bucket.",
      image: "/images/excavator.jpg",
    },
    {
      id: 2,
      title: "Bulldozer",
      description:
        "Transportasi ramah lingkungan dan efisien untuk pekerjaan perataan tanah dan pembukaan lahan.",
      image: "/images/bulldozer.jpg",
    },
    {
      id: 3,
      title: "Crane",
      description:
        "Pengangkatan cepat dan efisien untuk pengiriman material sensitif waktu di seluruh lokasi proyek.",
      image: "/images/crane.jpg",
    },
    {
      id: 4,
      title: "Dump Truck",
      description:
        "Transportasi yang andal via truk untuk pengiriman material lokal dan jarak jauh.",
      image: "/images/dump-truck.jpg",
    },
  ],
};

export const testimonials = [
  {
    id: 1,
    name: "Ahmad Susanto",
    role: "Project Manager",
    company: "PT Konstruksi Nusantara",
    quote:
      "Layanan yang handal dan pelacakan real-time membuat kami selalu terinformasi dan terkendali di setiap tahap. Kami tidak bisa meminta partner yang lebih baik!",
    avatar: "/images/avatar-1.jpg",
  },
  {
    id: 2,
    name: "Siti Rahayu",
    role: "Direktur Operasional",
    company: "CV Bangun Jaya",
    quote:
      "Dukungan dedikasi dan pengiriman tepat waktu dari Merah Karya Gemilang memungkinkan kami fokus pada bisnis tanpa khawatir logistik alat berat.",
    avatar: "/images/avatar-2.jpg",
  },
  {
    id: 3,
    name: "Budi Hartono",
    role: "Kepala Proyek",
    company: "PT Infrastruktur Prima",
    quote:
      "Kami telah menggunakan layanan mereka selama bertahun-tahun, dan mereka selalu melampaui ekspektasi. Perhatian terhadap detail membuat mereka pilihan utama kami.",
    avatar: "/images/avatar-3.jpg",
  },
  {
    id: 4,
    name: "Dewi Lestari",
    role: "Manajer Logistik",
    company: "PT Tambang Sejahtera",
    quote:
      "Sistem pelacakan canggih adalah game-changer. Kami selalu tahu di mana alat berat kami, dan tim mereka selalu siap membantu.",
    avatar: "/images/avatar-4.jpg",
  },
  {
    id: 5,
    name: "Rudi Hermawan",
    role: "Direktur Supply Chain",
    company: "PT Pembangunan Abadi",
    quote:
      "Dari awal hingga akhir, layanan Merah Karya Gemilang adalah terbaik. Penanganan efisien kebutuhan transportasi kami menghemat waktu dan sumber daya setiap hari.",
    avatar: "/images/avatar-5.jpg",
  },
  {
    id: 6,
    name: "Maya Putri",
    role: "Operations Manager",
    company: "CV Karya Mandiri",
    quote:
      "Tim Merah Karya Gemilang selalu berusaha lebih untuk memastikan alat berat kami tiba tepat waktu. Mereka adalah partner sempurna untuk kebutuhan logistik kami yang berkembang.",
    avatar: "/images/avatar-6.jpg",
  },
];

export const faqContent = {
  headline: "Ada Pertanyaan?",
  description: "Silakan hubungi tim kami!",
  cta: "Hubungi Kami",
  items: [
    {
      id: 1,
      question: "Alat berat apa saja yang tersedia untuk disewa?",
      answer:
        "Merah Karya Gemilang menyediakan berbagai alat berat termasuk excavator, bulldozer, crane, dump truck, wheel loader, dan forklift. Kami menawarkan solusi yang disesuaikan untuk memenuhi kebutuhan spesifik proyek Anda.",
    },
    {
      id: 2,
      question: "Bagaimana sistem sewa harian dan kontrak proyek?",
      answer:
        "Kami menyediakan fleksibilitas sewa mulai dari harian hingga kontrak proyek jangka panjang. Harga disesuaikan dengan durasi sewa, jenis alat, dan kebutuhan tambahan seperti operator.",
    },
    {
      id: 3,
      question: "Apakah tersedia operator untuk alat berat?",
      answer:
        "Ya, kami menyediakan operator terlatih dan bersertifikat untuk semua jenis alat berat. Anda dapat memilih sewa unit saja atau lengkap dengan operator.",
    },
    {
      id: 4,
      question: "Berapa lama waktu pengiriman alat berat?",
      answer:
        "Waktu pengiriman tergantung lokasi proyek Anda. Untuk area Makassar dan sekitarnya, pengiriman dapat dilakukan dalam 24-48 jam. Untuk area Sulawesi Selatan, Gorontalo, dan Sulawesi lainnya, estimasi 2-5 hari kerja.",
    },
    {
      id: 5,
      question: "Bagaimana dukungan teknis dan perawatan?",
      answer:
        "Kami menyediakan dukungan teknis 24/7 dan layanan perawatan berkala. Jika terjadi kerusakan, tim teknisi kami siap melakukan perbaikan di lokasi proyek Anda.",
    },
  ],
};

export const footerContent = {
  banner: {
    headline: "Mulai Proyek Anda Bersama Kami!",
    description:
      "Nikmati pengelolaan alat berat yang lancar dengan layanan kami",
    cta: "Mulai Konsultasi Gratis",
  },
  columns: [
    {
      title: "Sumber Daya",
      links: [
        { label: "Blog", href: "#blog" },
        { label: "Studi Kasus", href: "#studi-kasus" },
      ],
    },
  ],
  legal: [
    { label: "Syarat & Ketentuan", href: "#syarat" },
    { label: "Kebijakan Privasi", href: "#privasi" },
  ],
  copyright: `© ${new Date().getFullYear()} Merah Karya Gemilang. Hak Cipta Dilindungi.`,
};
