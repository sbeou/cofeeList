"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ListCofee from "@/components/ListCofee";

export default function Home() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  })
  return (
    <QueryClientProvider client={queryClient}>
      <main className="text-center rounded-xl mt-40 mx-auto py-20 max-w-80 lg:max-w-2xl md:max-w-2xl xl:max-w-5xl">
        <h2 className="font-bold text-3xl pb-5">Our Collection</h2>
        <p className="mx-auto max-w-lg px-4">Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
        <ListCofee />
      </main>
    </QueryClientProvider>
  );
}
