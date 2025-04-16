
import { useQuery } from "@tanstack/react-query"

import { client } from "@/lib/hono"

export const useGetAccounts = (id?: string) => {
    const query = useQuery({
        queryKey: ["account"],
        queryFn: async () => {
            const response = await client.api.accounts.$get({
                param: { id },
            })

            if (!response.ok) {
                throw new Error("Failed to fetch account")
            }

            const { data } = await response.json()
            return data
        },
    })

    return query
}
