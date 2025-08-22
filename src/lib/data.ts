'use server';

import { db } from '@/lib/firebase';
import { collection, getDocs, orderBy, query, Timestamp } from 'firebase/firestore';

export interface SkillCategory {
    id: string;
    name: string;
    skillList: string[];
}

export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    link: string;
    tags: string[];
    dataAiHint: string;
}

export interface Experience {
    id: string;
    role: string;
    company: string;
    period: string;
    description: string;
    startDate: Timestamp;
    type: 'work';
}

export interface Education {
    id: string;
    degree: string;
    school: string;
    period: string;
    details: string;
    startDate: Timestamp;
    type: 'education';
}


export async function getSkills() {
    const skillsCollection = collection(db, 'skills');
    const q = query(skillsCollection, orderBy('order', 'asc'));
    const skillsSnapshot = await getDocs(q);
    return skillsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as SkillCategory));
}

export async function getProjects() {
    const projectsCollection = collection(db, 'projects');
    const q = query(projectsCollection, orderBy('order', 'asc'));
    const projectsSnapshot = await getDocs(q);
    return projectsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Project));
}

export async function getExperience() {
    const experienceCollection = collection(db, 'experience');
    const qExp = query(experienceCollection, orderBy('startDate', 'desc'));
    const experienceSnapshot = await getDocs(qExp);
    const work = experienceSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data(), type: 'work' } as Experience));

    const educationCollection = collection(db, 'education');
    const qEdu = query(educationCollection, orderBy('startDate', 'desc'));
    const educationSnapshot = await getDocs(qEdu);
    const edu = educationSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data(), type: 'education' } as Education));

    return [...work, ...edu].sort((a, b) => b.startDate.toMillis() - a.startDate.toMillis());
}
