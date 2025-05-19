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
                name: "Web Sistem STAR AGIT",
                description:
                    "Sistem berbasis web yang dirancang untuk manajemen stok, laporan, dashboard, dan database promosi. Dibangun menggunakan React, TypeScript, dan GraphQL sebagai backend integrasi utama.",
                tech: ["React", "TypeScript", "GraphQL"],
            },
            {
                name: "Web Portfolio Pribadi",
                description:
                    "Halaman portofolio interaktif yang menampilkan pengalaman, proyek, dan profil saya dalam dua bahasa. Dibuat menggunakan Next.js App Router, Mantine UI, dan fitur seperti dark mode, loading transition, serta pemilihan bahasa.",
                tech: ["Next.js", "TypeScript", "Mantine", "i18n", "Dark Mode"],
            },
        ],
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
