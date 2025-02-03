import { createClient } from "next-sanity";

const client = createClient({
  projectId: "2g1g30p9",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-01-13",
});

// Define a type for query parameters
type SanityFetchParams = Record<string, any>;

// Define the fetch function with generic return type
export async function sanityFetch<T>({
  query,
  params = {},
}: {
  query: string;
  params?: SanityFetchParams;
}): Promise<T> {
  return await client.fetch<T>(query, params);
}
