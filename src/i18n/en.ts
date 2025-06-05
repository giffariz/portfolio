const en = {
    home: {
        greeting: "Hi, I am Giff",
        shortDescription:
            "With over 3 years of experience as a Frontend Developer, I build responsive and well-structured web interfaces using React and TypeScript. Currently I'm working on personal projects—or maybe, your next one?",
    },

    experience: {
        title1: "Where I",
        title2: "Thrive",
        items: [
            {
                role: "Frontend Developer",
                company: "PT Astra Graphia Information Technology",
                imgurl: "/pic/company/agit.webp",
                period: "May 2022 - Present",
                responsibilty: [
                    "Collaborated with Backend, QA, and Business teams to prepare upcoming features and break them into actionable tickets",
                    "Built responsive and maintainable UI with React and TypeScript, ensuring it works smoothly on all devices",
                    "Integrated GraphQL APIs with backend team to build pages that meet project goals",
                    "Improved existing pages by updating layout, content, and features to enhance User Experience",
                ],
                techStack: ["React", "TypeScript", "GraphQL", "Ant Design"],
            },
            {
                role: "WordPress Developer",
                company: "TIMEO",
                imgurl: "/pic/company/timeo.webp",
                period: "May 2021 - August 2021",
                responsibilty: [
                    "Redesign layout with attention to style and size of type, photographs, and graphics",
                    "Develops new website features and maintain website content",
                    "Checking for trouble-shooting, tracking issues, and logs bugs",
                    "Making the website responsive",
                ],
                techStack: ["WordPress", "Elementor", "CSS"],
            },
            {
                role: "WordPress Developer (Internship)",
                company: "Diskominfo Kabupaten Malang",
                imgurl: "/pic/company/kominfo.webp",
                period: "January 2018 - February 2018",
                responsibilty: [
                    "Redesign website of Puskesmas Kedungkandang",
                    "Handling website content management systems",
                    "Created user manuals and provide training to client",
                ],
                techStack: ["WordPress", "Elementor", "CSS"],
            },
        ],
    },

    projects: {
        title1: "Tangible",
        title2: "Thoughts",
        items: [
            {
                name: "STAR",
                associate: "PT Astra Graphia Information Technology",
                description:
                    "STAR (Astra Motor Integrated System) is an internal platform developed to unify operational processes efficiently and systematically within a single integrated system.",
                tech: ["React", "TypeScript", "Ant Design", "GraphQL"],
                imgUrl: ["/pic/star/1.webp", "/pic/star/2.webp", "/pic/star/3.webp", "/pic/star/4.webp"],
            },
            {
                name: "Portfolio",
                associate: "Giffari Zakawaly",
                description:
                    "A personal website to introduce myself, showcasing experiences, projects, and skills in an interactive way. Created to build connections and open up collaboration opportunities.",
                tech: ["Next", "TypeScript", "Mantine"],
                imgUrl: ["/pic/portfolio/1.webp", "/pic/portfolio/2.webp", "/pic/portfolio/3.webp"],
            },
        ],
        back: "Go Back",
    },

    about: {
        title1: "Behind the",
        title2: "Code",
        motto: "a digital solution isn't about how fast it's built — but how well it lasts, adapts, and maintains its quality over time.",
        quote: "Readable code is not optional",
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
        cv: "View CV",
        email: "Tell Me Your Idea",
    },
};

export default en;
