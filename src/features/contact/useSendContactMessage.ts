import { useMutation } from "@tanstack/react-query"
import { sendContactMessage } from "./contact.api"
import type { ContactMessage } from "./contact.api"
import type { ContactFormValues } from "./contact.schema"

export function useSendContactMessage() {
    return useMutation<ContactMessage, unknown, ContactFormValues>({
        mutationKey: ["contact", "send"],
        mutationFn: sendContactMessage,
    })
}
