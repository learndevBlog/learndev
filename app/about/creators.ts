export type Creator = {
    fullName: string;
    image: string;
    history: string;
    experience: string[];
    socialMedia: {
        name: string;
        link: string;
        src: string;
    }[]
}

export const CREATORS: Creator[] = [
    {
        fullName: 'Thiago Bomfim',
        image: '/images/black-guy.jpeg',
        history: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed non risus. Suspendisse lectus tortor, dignissim sit 
        amet, adipiscing nec, ultricies sed, dolor. Cras elementum 
        ultrices diam. Maecenas ligula massa, varius a, semper congue, 
        euismod non, mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        experience: [
            '5 Years of experience',
            'Bacharel from Unicesumar University in Data Science',
            '2 years of International market experience',
            'Learndev Co-Founder',
            'Big Companies: RedHat, Moody`s Analytics'
        ],
        socialMedia: [
            {
                name: 'github',
                link: 'https://github.com/BomfimThiago',
                src: '/images/github.png'
            },
            {
                name: 'instagram',
                link: 'https://www.instagram.com/thiago_indep/',
                src: '/images/instagram.png'
            },
            {
                name: 'linkedin',
                link: 'https://www.linkedin.com/in/thiago-bomfim-3aa167183/',
                src: '/images/linkedin.png'
            }
        ]
    },
    {
        fullName: 'Daniel Souza',
        image: '/images/man-5688160_1920.jpg',
        history: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed non risus. Suspendisse lectus tortor, dignissim sit 
        amet, adipiscing nec, ultricies sed, dolor. Cras elementum 
        ultrices diam. Maecenas ligula massa, varius a, semper congue, 
        euismod non, mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        experience: [
            '5 Years of experience',
            'Graduated from XYZ University',
            '3 years of International market experience',
            'Learndev Co-Founder',
            'Big Companies: RedHat'
        ],
        socialMedia: [
            {
                name: 'github',
                link: 'https://github.com/BomfimThiago',
                src: '/images/github.png'
            },
            {
                name: 'instagram',
                link: 'https://www.instagram.com/thiago_indep/',
                src: '/images/instagram.png'
            },
            {
                name: 'linkedin',
                link: 'https://www.linkedin.com/in/thiago-bomfim-3aa167183/',
                src: '/images/linkedin.png'
            }
        ]
    }
]