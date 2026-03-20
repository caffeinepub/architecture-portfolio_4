import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface Project {
    title: string;
    description: string;
    imageUrl: string;
    category: ProjectCategory;
}
export interface ContactSubmission {
    name: string;
    email: string;
    message: string;
    timestamp: Time;
}
export interface Testimonial {
    quote: string;
    author: string;
    roleOrCompany: string;
}
export enum ProjectCategory {
    commercial = "commercial",
    residential = "residential",
    industrial = "industrial"
}
export interface backendInterface {
    getAllContactSubmissions(): Promise<Array<ContactSubmission>>;
    getAllProjects(): Promise<Array<Project>>;
    getAllTestimonials(): Promise<Array<Testimonial>>;
    getProjectsByCategory(category: ProjectCategory): Promise<Array<Project>>;
    initializeData(): Promise<void>;
    submitContactForm(name: string, email: string, message: string): Promise<void>;
}
