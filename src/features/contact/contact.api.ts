import { api } from "../../lib/api"
import type { ContactFormValues } from "./contact.schema"

export type ContactMessage = {
    id: string
    name: string
    email: string
    message: string
    status: "UNREAD" | "READ" | "REPLIED" | "ARCHIVED"
    createdAt: string
    updatedAt: string
}

export async function sendContactMessage(values: ContactFormValues) {
    const { data } = await api.post<ContactMessage>("/contact", values)
    return data
}
