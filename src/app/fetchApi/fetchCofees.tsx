import {z} from "zod";

const CofeResponseScheme = z.array(
    z.object({
        id: z.number(),
        name: z.string(),
        image: z.string().url(),
        price: z.string(),
        rating: z.number().nullable(),
        votes: z.number(),
        popular: z.boolean(),
        available: z.boolean(),
    })
)

type CofeResponse = z.infer<typeof CofeResponseScheme>

export const fetchCofees = async (): Promise<CofeResponse> => {
    return fetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json").then(async (res) =>
        res.json()
    )
}