
'use server';

import { db } from '@/lib/firebase';
import { collection, addDoc, Timestamp, getDocs, writeBatch } from 'firebase/firestore';

const skillsData = [
    { name: "Languages & Frameworks", order: 1, skillList: ["Java", "Python", "Dart", "Flutter", "Django", "SQL", "HTML", "CSS" ,"TypeScript"] },
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
        title: "Habitree",
        description:"Habitree is a Flutter application that helps users build and track daily habits while growing their own virtual forest 🌳. Every habit completed contributes to the growth of trees, making self‑improvement both fun and visually rewarding.", 
        image: "https://placehold.co/600x400.png",
        link: "https://github.com/Vivek-Jadhav27/Habitree",
        tags: ["Flutter", "Dart", "REST APIs", "Mobile App"],
        dataAiHint: "Habit Tracking App",
        order: 2,
    },
    {
        title: "LeafCare",
        description: "LeafCare is an AI-driven mobile application that helps users identify plant diseases through image classification. The system uses Deep Learning (CNNs) to analyze leaf images and provide real-time disease predictions, enabling early detection and better plant care", 
        image: "https://placehold.co/600x400.png",
        link: "https://github.com/Vivek-Jadhav27/LeafCare",
        tags: ["Django", "Python", "Machine Learning", "Flutter"],
        dataAiHint: "Plant Disease Detection App",
        order: 3,
    }
];

const experienceData = [
    {
        role: "Flutter Developer Intern",
        company: "Health Tick",
        period: "Aug 2025 - Present",
        description:"",
        startDate: Timestamp.fromDate(new Date("2025-08-12")),
    },
];

const educationData = [
     {
        degree: "Bachelor of Engineering in Computer Engineering",
        school: "Government Engineering College, Bhavnagar",
        period: "2021 - 2025",
        details: "CGPA: 8.67/10",
        startDate: Timestamp.fromDate(new Date("2021-07-01")),
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
