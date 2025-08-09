export async function GetPortfolio() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/portfolio`, {
      next: { revalidate: 60 }, // optional: ISR caching
    });

    const json = await res.json();

    if (!res.ok) throw new Error(json.message || 'Failed to fetch');

    return json.data;
  } catch (err) {
    console.error("❌ Error in getProducts:", err);
    return [];
  }
}