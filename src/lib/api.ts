import axios from "axios"
import { env } from "./env"

export const api = axios.create({
    baseURL: env.apiBaseUrl,
    timeout: 15_000,
    headers: { "Content-Type": "application/json" },
})

export function getApiErrorMessage(error: unknown): string {
    if (axios.isAxiosError(error)) {
        if (error.code === "ECONNABORTED") {
            return "The request timed out. Please try again."
        }

        if (!error.response) {
            return "Could not reach the server. Please check your connection and try again."
        }

        const data = error.response.data as { message?: string | string[] } | undefined
        const message = data?.message

        if (Array.isArray(message) && message.length > 0) return message[0]
        if (typeof message === "string" && message.length > 0) return message

        if (error.response.status >= 500) {
            return "Something went wrong on our side. Please try again later."
        }
    }

    return "Something went wrong. Please try again."
}
