import { z } from "zod"

/** Mirrors CreateContactDto on the backend so bad input never leaves the browser. */
export const contactSchema = z.object({
    name: z
        .string()
        .trim()
        .min(1, "Please enter your name.")
        .max(50, "Name must be 50 characters or less."),
    email: z.email("Please enter a valid email address."),
    message: z
        .string()
        .trim()
        .min(10, "Message must be at least 10 characters.")
        .max(1000, "Message must be 1000 characters or less."),
})

export type ContactFormValues = z.infer<typeof contactSchema>
