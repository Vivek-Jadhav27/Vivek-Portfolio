
'use server';

import { db } from '@/lib/firebase';
import { collection, addDoc, Timestamp, getDocs, writeBatch } from 'firebase/firestore';

const skillsData = [
    { name: "Languages & Frameworks", order: 1, skillList: ["Java", "Python", "Dart", "Flutter", "Django", "SQL", "HTML", "CSS"] },
    { name: "Libraries", order: 2, skillList: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Matplotlib", "Seaborn"] },
    { name: "Tools & Technologies", order: 3, skillList: ["Firebase", "Supabase", "Git", "REST APIs", "PowerBI"] },
    { name: "Core Competencies", order: 4, skillList: ["DSA", "ML Integration", "Backend Engineering", "Real-time Data Handling"] }
];

const projectsData = [
    {
        title: "AI-Powered Personal Portfolio",
        description: "A dynamic, AI-integrated personal portfolio built with Next.js, and Google's Gemini. The site features a conversational AI chatbot that can answer questions about my skills and experience, providing an interactive and engaging user experience.",
        image: "https://placehold.co/600x400.png",
        link: "#",
        tags: ["Next.js", "GenAI", "Firestore", "Tailwind CSS"],
        dataAiHint: "AI portfolio",
        order: 1,
    },
    {
        title: "Weather & Outfit Recommender",
        description: "A Flutter application that provides real-time weather forecasts and suggests appropriate outfits based on the weather conditions. The app uses a combination of weather APIs and a custom recommendation algorithm to deliver personalized suggestions.",
        image: "https://placehold.co/600x400.png",
        link: "#",
        tags: ["Flutter", "Dart", "REST APIs", "Mobile App"],
        dataAiHint: "weather app",
        order: 2,
    },
    {
        title: "Django-Powered E-commerce Platform",
        description: "A full-featured e-commerce website developed with Django. The platform includes user authentication, product catalog management, a shopping cart, and a secure checkout process, demonstrating robust backend development skills.",
        image: "https://placehold.co/600x400.png",
        link: "#",
        tags: ["Django", "Python", "SQL", "E-commerce"],
        dataAiHint: "online store",
        order: 3,
    }
];

const experienceData = [
    {
        role: "Software Engineer Intern",
        company: "Tech Solutions Inc.",
        period: "Jun 2023 - Aug 2023",
        description: "Developed and maintained features for a large-scale web application using React and Node.js. Collaborated with a team of developers to deliver high-quality code in an agile environment.",
        startDate: Timestamp.fromDate(new Date("2023-06-01")),
    },
];

const educationData = [
     {
        degree: "Bachelor of Engineering in Computer Engineering",
        school: "LDRP Institute of Technology & Research",
        period: "2020 - 2024",
        details: "CGPA: 8.5/10",
        startDate: Timestamp.fromDate(new Date("2020-07-01")),
    }
];


async function clearCollection(collectionName: string) {
    const collectionRef = collection(db, collectionName);
    const querySnapshot = await getDocs(collectionRef);
    const batch = writeBatch(db);
    querySnapshot.forEach((doc) => {
        batch.delete(doc.ref);
    });
    await batch.commit();
    console.log(`Collection ${collectionName} has been cleared.`);
}


export async function seedDatabase() {
    try {
        await clearCollection('skills');
        const skillsCollection = collection(db, 'skills');
        for (const skill of skillsData) {
            await addDoc(skillsCollection, skill);
        }
        console.log('Skills have been seeded');
        
        await clearCollection('projects');
        const projectsCollection = collection(db, 'projects');
        for (const project of projectsData) {
            await addDoc(projectsCollection, project);
        }
        console.log('Projects have been seeded');
        
        await clearCollection('experience');
        const experienceCollection = collection(db, 'experience');
        for (const exp of experienceData) {
            await addDoc(experienceCollection, { ...exp, type: 'work' });
        }
        console.log('Experience has been seeded');

        await clearCollection('education');
        const educationCollection = collection(db, 'education');
        for (const edu of educationData) {
            await addDoc(educationCollection, { ...edu, type: 'education' });
        }
        console.log('Education has been seeded');

        return { success: true, message: "Database seeded successfully!" };
    } catch (error) {
        console.error("Error seeding database: ", error);
        if (error instanceof Error) {
            return { success: false, message: `Error seeding database: ${error.message}` };
        }
        return { success: false, message: "An unknown error occurred while seeding the database." };
    }
}
