export const NAV = {
    links: [
        { label: 'Who We Teach', href: '#pathways' },
        { label: 'Instruments', href: '#instruments' },
        { label: 'Summer', href: '#summer' },
        { label: 'Experience', href: '#experience' },
        { label: 'Gallery', href: '#gallery' },
        { label: 'About', href: '#director' },
        { label: 'Enroll', href: '#enroll' },
    ],
    cta: 'Book Free Trial',
} as const;

export const HERO = {
    headline: 'Where Music Becomes a Lifelong Story',
    subheadline: 'From your first chord to your first stage — personalized keyboard, guitar, and violin lessons for every student, in-centre or online.',
    ctaPrimary: 'Book a Free Trial Lesson',
    ctaSecondary: 'Explore Programs',
    badges: ['25+ Years of Teaching', 'Trinity London Qualified'],
} as const;

export const PATHWAYS = {
    tag: 'WHO WE TEACH',
    title: 'Three Pathways. One Goal.',
    subtitle: 'Whether you\'re a young beginner or picking up an instrument for the first time at 60, Fairyan has a learning path built for your pace and goals.',
    cards: [
        {
            icon: '🎵',
            age: '9–15 years',
            title: 'Juniors & Teens',
            description: 'Structured lessons that develop technique, reading skills, and the confidence to perform on stage. Parents see real progress — and grade certifications to prove it.',
            cta: 'Start Their Journey',
        },
        {
            icon: '🎸',
            age: '16–40 years',
            title: 'Adults & Professionals',
            description: 'Small batches, flexible timing, and real goals — whether it\'s stress relief, a personal milestone, or preparing for a Trinity grade exam.',
            cta: 'Book a Trial',
        },
        {
            icon: '🎹',
            age: '40–72+ years',
            title: 'Lifelong Learners',
            description: 'No rush. No pressure. Learn at your own pace with patient, personalized instruction. Many of our happiest students started after 50.',
            cta: 'Begin Today',
        },
    ],
} as const;

export const INSTRUMENTS = {
    tag: 'WHAT WE TEACH',
    title: 'Choose Your Instrument',
    subtitle: 'Three instruments. One standard of excellence. Every student gets a clear path from beginner to performance-ready — with Trinity London grade certification available.',
} as const;

export const PROGRAMS = {
    tag: 'HOW WE TEACH',
    title: 'Regular Program — Batches',
    subtitle: 'Small classes. Real results. Every batch is capped at 8 students so you get the attention you need.',
    schedule: 'Tuesdays & Thursdays · 60-minute sessions',
    note: 'We keep batches small — 8 students maximum — so every student gets individual feedback, corrections, and room to grow at their own pace.',
} as const;

export const SUMMER = {
    tag: 'SEASONAL PROGRAMS',
    title: 'Summer Intensives 2026',
    subtitle: 'Make your child\'s vacation musical. Our Summer Intensives 2026 begin on April 17 — accelerated programs designed to take students from beginner to performing in weeks, not months.',
    startDate: 'April 17, 2026',
    parentHook: 'Give your child a head start this summer. Limited seats — enroll before they\'re gone.',
    note: 'Summer 2026 classes begin April 17. Returning Fairyan students get priority enrollment. Limited spots — register early.',
    cards: [
        {
            days: 15,
            title: 'Summer Starter',
            idealFor: 'Beginners & Teens',
            description: 'Go from zero experience to performing your first full song. Daily sessions covering fundamentals, practice habits, and stage readiness. Perfect for kids making their summer count.',
            cta: 'Claim Your Spot',
        },
        {
            days: 25,
            title: 'Summer Deep Dive',
            idealFor: 'Intermediate Learners',
            description: 'Push past plateaus. Advanced technique, music theory, and a live performance at the end of the program. Available for both in-centre and online students.',
            cta: 'Reserve My Place',
        },
    ],
} as const;

export const EXPERIENCE = {
    tag: 'WHAT SETS US APART',
    title: 'More Than Lessons',
    subtitle: 'Fairyan isn\'t just a place to learn music. It\'s where musicians are made.',
    pillars: [
        {
            icon: '🎓',
            title: 'Trinity London Grade Exams',
            description: 'Fairyan is led by a qualified Trinity College London instructor. We prepare students for internationally recognised grade examinations from Grade 1 through Grade 8.',
        },
        {
            icon: '🎤',
            title: 'Student Bands',
            description: 'Students don\'t just learn alone. We form collaborative bands that rehearse together and perform live — a rare experience you won\'t find at most music schools.',
        },
        {
            icon: '🎭',
            title: 'Live Events',
            description: 'From cultural festivals to school showcases, our students perform on real stages in front of real audiences. Stage experience is part of the curriculum.',
        },
        {
            icon: '🤝',
            title: '25 Years of Alumni',
            description: 'Over two decades of graduates — a community of musicians who stay connected, mentor new students, and return to collaborate.',
        },
    ],
    testimonials: [
        {
            text: 'Fairyan gave me the confidence to pick up a guitar at 45. Three years later, I performed at my daughter\'s wedding.',
            author: 'Priya R.',
            role: 'Adult Learner',
        },
        {
            text: 'The online classes are just as good as in-person. My son learns keyboard from home and the instructor gives him full attention every session.',
            author: 'Karthik S.',
            role: 'Keyboard Student (Online)',
        },
        {
            text: 'My son started when he was 9. Now he\'s preparing for his Trinity Grade 4 exam. The way they teach theory combined with practical playing is incredible.',
            author: 'Anita M.',
            role: 'Parent',
        },
        {
            text: 'I joined the summer intensive and learned more in 15 days than I did in an entire year on YouTube. Highly recommend!',
            author: 'Rohan V.',
            role: 'Guitar Student',
        },
        {
            text: 'Fairyan isn\'t just a school, it\'s a community. Passed my Trinity Grade 5 violin exam last month — couldn\'t have done it without Noel sir.',
            author: 'Meera K.',
            role: 'Violin Student',
        },
    ],
} as const;

export const GALLERY = {
    tag: 'SEE OUR STUDENTS IN ACTION',
    title: 'Showcase',
    subtitle: 'Performances, recitals, and student milestones — watch what happens when practice meets the stage.',
    ctaLabel: 'Watch More on YouTube',
    ctaUrl: '#',
    filters: ['All', 'Guitar', 'Keyboard', 'Violin'],
} as const;

export const DIRECTOR = {
    tag: 'THE PERSON BEHIND THE MUSIC',
    title: 'Meet Noel Jayakumar',
    subtitle: 'Founder & Director · 25+ Years · Qualified Trinity College London Instructor',
    bio: [
        'Noel Jayakumar founded Fairyan Music School over 25 years ago with one belief: every person, regardless of age, can learn to play music well.',
        'Since then, he has personally trained hundreds of students across keyboard, guitar, and violin. As a qualified Trinity College London instructor, Noel prepares students for internationally recognised grade examinations — from Grade 1 through Grade 8. His teaching philosophy is simple — learn by doing. Students don\'t just practice scales in isolation. They perform, record, and collaborate from the very first month.',
        'Noel conducts both in-centre and live online classes, bringing the same depth of personal attention to every student — wherever they are. He believes small class sizes (never more than 8) are non-negotiable, because real progress requires real attention.',
    ],
    quote: 'Every student deserves to hear themselves improve. That\'s the moment music becomes personal.',
    stats: [
        { value: '25+', label: 'Years Experience' },
        { value: '500+', label: 'Students Trained' },
        { value: '3', label: 'Instruments Taught' },
    ],
} as const;

export const ENROLL = {
    tag: 'START YOUR JOURNEY',
    title: 'Book a Free Trial Lesson',
    subtitle: 'Fill out the form below. We\'ll call you within 24 hours to schedule your first session — online or in-centre.',
    successMessage: 'Thank you! We\'ll call you within 24 hours to schedule your free trial lesson.',
} as const;

export const FOOTER = {
    address: '404-E, 6th St Ext, behind kalyan jewellers, Gandhipuram, Coimbatore, Tamil Nadu 641012',
    mapsLink: 'https://maps.app.goo.gl/79MWeef1h74tSDsXA',
    phone: '+91 96558 47818',
    email: 'info@fairyanmusicschool.com',
    schedule: '5:30 PM | 6:30 PM | 7:30 PM',
    copyright: `© ${new Date().getFullYear()} Fairyan Music School`,
    quickLinks: [
        { label: 'Online Classes', href: '/online-classes' },
        { label: 'Centre Classes', href: '/centre-classes' },
        { label: 'Home Tuition', href: '/home-tuition' },
        { label: 'Enroll Now', href: '/#enroll' },
    ],
    social: {
        youtube: '#',
        instagram: '#',
        facebook: '#',
    },
    whatsapp: {
        number: '919655847818',
        message: "Hi, I'd like to book a free trial lesson at Fairyan Music School.",
    },
} as const;
