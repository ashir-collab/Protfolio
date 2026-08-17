import { QueryClient } from "@tanstack/react-query"

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60_000,
            retry: 1,
            refetchOnWindowFocus: false,
        },
        mutations: {
            // never re-send a contact message automatically — it would duplicate rows
            retry: false,
        },
    },
})
