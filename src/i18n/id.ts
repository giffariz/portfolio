const id = {
    home: {
        greeting: "Hai, saya Giff",
        shortDescription:
            "Dengan pengalaman lebih dari 3 tahun, membangun antarmuka web yang responsif dan terstruktur menggunakan React dan TypeScript. Saat ini aktif mengerjakan proyek pribadi—atau mungkin, proyekmu berikutnya?",
    },

    experience: {
        title1: "Tempat",
        title2: "Berkembang",
        items: [
            {
                role: "Frontend Developer",
                company: "PT Astra Graphia Information Technology",
                period: "Mei 2022 - Sekarang",
                responsibilty: [
                    "Bekerja sama dengan tim Backend, QA, dan Bisnis menyiapkan fitur baru dan membaginya menjadi tugas-tugas teknis",
                    "Membuat antarmuka responsif dan terstruktur dengan React dan TypeScript, memastikannya optimal di semua perangkat",
                    "Mengintegrasikan API GraphQL bersama tim backend sesuai kebutuhan proyek",
                    "Merubah halaman yang ada dengan beberapa pembaruan demi pengalaman pengguna yang lebih baik",
                ],
                techStack: ["React", "TypeScript", "GraphQL", "Ant Design"],
            },
            {
                role: "WordPress Developer",
                company: "TIMEO",
                period: "Mei 2021 - Agustus 2021",
                responsibilty: [
                    "Mendesain ulang web dengan memperhatikan gaya teks, foto, dan elemen grafis",
                    "Mengembangkan fitur baru di website dan menjaga kontennya tetap diperbarui",
                    "Melakukan pengecekan, pelacakan masalah, dan mencatat bug yang ditemukan",
                    "Membuat tampilan website responsif",
                ],
                techStack: ["WordPress", "Elementor", "CSS"],
            },
            {
                role: "WordPress Developer (Magang)",
                company: "Diskominfo Kabupaten Malang",
                period: "Januari 2018 - Februari 2018",
                responsibilty: [
                    "Mendesain ulang website Puskesmas Kedungkandang",
                    "Mengelola sistem manajemen konten website",
                    "Membuat panduan pengguna dan memberikan pelatihan kepada klien",
                ],
                techStack: ["WordPress", "Elementor", "CSS"],
            },
        ],
    },

    projects: {
        title1: "Wujudan",
        title2: "Pemikiran",
        items: [
            {
                name: "STAR",
                associate: "PT Astra Graphia Information Technology",
                description:
                    "STAR (Sistem Terintegrasi Astra Motor) merupakan platform internal yang dikembangkan untuk menyatukan proses operasional secara efisien dan terstruktur dalam satu sistem terpadu.",
                tech: ["React", "TypeScript", "Ant Design", "GraphQL"],
                imgUrl: ["/pic/star/1.webp", "/pic/star/2.webp", "/pic/star/3.webp", "/pic/star/4.webp"],
            },
            {
                name: "Portfolio",
                associate: "Giffari Zakawaly",
                description:
                    "Website personal sebagai sarana perkenalan, menampilkan pengalaman, proyek, dan keahlian secara interaktif. Dibuat untuk membangun koneksi dan membuka peluang kolaborasi.",
                tech: ["Next", "TypeScript", "Mantine"],
                imgUrl: ["/pic/portfolio/1.webp", "/pic/portfolio/2.webp", "/pic/portfolio/3.webp"],
            },
        ],
        back: "Kembali",
    },

    about: {
        title1: "Di balik",
        title2: "Kode",
        motto: "Bagiku, solusi digital bukan soal cepat jadi — tapi bagaimana ia bisa bertahan, beradaptasi, dan tetap terjaga kualitasnya seiring waktu.",
        quote: "Kode yang mudah dibaca itu wajib",
        techSkills: [
            "React",
            "TypeScript",
            "Next",
            "Tailwind",
            "Ant Design",
            "Mantine",
            "Shadcn",
            "GraphQL",
        ],
    },

    card: {
        cv: "Lihat CV",
        email: "Ceritakan Idemu",
    },
};

export default id;
