const id = {
    home: {
        greeting: "Hai, saya Giff",
        shortDescription: "Dengan pengalaman lebih dari 3 tahun, membangun antarmuka web yang responsif dan terstruktur menggunakan React dan TypeScript. Saat ini aktif mengerjakan proyek pribadi—atau mungkin, proyekmu berikutnya?"
    },

    experience: {
        title1: "Tempatku",
        title2: "Berkembang",
        items: [
            {
                role: "Frontend Developer",
                company: "PT Astra Graphia Information Technology (AGIT)",
                period: "Mei 2022 - Sekarang",
                description:
                    "Saya terlibat dalam pengembangan sistem web terpadu untuk kebutuhan internal perusahaan. Tanggung jawab saya meliputi penerjemahan desain UI ke dalam komponen React yang responsif, integrasi API GraphQL, serta peningkatan tampilan dan fungsionalitas halaman untuk mendukung kebutuhan pengguna dan bisnis.",
            },
            {
                role: "WordPress Developer",
                company: "TIMEO",
                period: "Mei 2021 - Agustus 2021",
                description:
                    "Selama magang di TIMEO, saya fokus pada redesain tampilan website dan pengembangan fitur baru dengan WordPress. Saya juga menangani pemeliharaan konten, perbaikan bug, serta pembuatan tema yang mobile-friendly dan mudah dikelola.",
            },
            {
                role: "Web Developer - Proyek Kesehatan",
                company: "Diskominfo Kabupaten Malang",
                period: "Jan 2018 - Feb 2018",
                description:
                    "Saya membantu redesain website Puskesmas Kedungkandang sekaligus mengelola konten dan memberikan pelatihan singkat kepada pihak terkait. Proyek ini menggunakan pendekatan CMS agar memudahkan pengelolaan konten ke depannya.",
            },
        ],
    },

    projects: {
        title: "Proyek",
        items: [
            {
                name: "Web Sistem STAR AGIT",
                description: "Sistem berbasis web yang dirancang untuk manajemen stok, laporan, dashboard, dan database promosi. Dibangun menggunakan React, TypeScript, dan GraphQL sebagai backend integrasi utama.",
                tech: ["React", "TypeScript", "GraphQL"]
            },
            {
                name: "Web Portfolio Pribadi",
                description: "Halaman portofolio interaktif yang menampilkan pengalaman, proyek, dan profil saya dalam dua bahasa. Dibuat menggunakan Next.js App Router, Mantine UI, dan fitur seperti dark mode, loading transition, serta pemilihan bahasa.",
                tech: ["Next.js", "TypeScript", "Mantine", "i18n", "Dark Mode"]
            }
        ]
    },

    about: {
        title: "Tentang Saya",
        description: "Saya adalah Frontend Developer dengan lebih dari 3 tahun pengalaman membangun antarmuka web yang responsif dan terstruktur. Saat ini saya aktif mengembangkan sistem berbasis web menggunakan React, TypeScript, dan GraphQL, serta terbiasa berkolaborasi dalam tim lintas divisi untuk menghasilkan solusi digital yang scalable dan maintainable.",
        highlight: "Saya percaya bahwa kode yang bersih dan antarmuka yang intuitif adalah kunci pengalaman pengguna yang baik.",
        note: "Saya menempuh pendidikan di bidang Informatika, yang turut membentuk dasar logika dan struktur berpikir dalam pengembangan perangkat lunak.",
        languages: ["Bahasa Indonesia", "Bahasa Inggris"],
        techSkills: [
            "React", "TypeScript", "GraphQL",
            "JavaScript", "HTML", "CSS",
            "Git", "Jira", "Confluence"
        ]
    },

    card: {
        cv: "Lihat CV",
        email: "Ceritakan Idemu",
    }
};

export default id;
