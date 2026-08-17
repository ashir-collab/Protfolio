const apiBaseUrl = import.meta.env.VITE_API_BASE_URL

if (!apiBaseUrl) {
    throw new Error(
        "VITE_API_BASE_URL is not set. Copy .env.example to .env and restart the dev server.",
    )
}

export const env = {
    // strip a trailing slash so `${baseURL}/contact` never becomes `//contact`
    apiBaseUrl: apiBaseUrl.replace(/\/+$/, ""),
} as const
