import ImageBanner from "@/components/ImageBanner";
import Products from "@/components/Products";

// Fetch products from internal API safely (SSR-friendly)
async function getProducts(baseURL) {
  const res = await fetch(`${baseURL}/api/products`, {
    cache: "no-store", // always fetch fresh on SSR
  });

  if (!res.ok) throw new Error("Failed to fetch products");

  return res.json();
}

export default async function Home() {
  // Determine the base URL for SSR
  const baseURL =
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const products = await getProducts(baseURL);

  let painting = null;
  let stickers = [];

  for (const prod of products) {
    if (prod.name === "Angkor Wat") {
      painting = prod;
      continue;
    }
    stickers.push(prod);
  }

  return (
    <div>
      <ImageBanner />
      <section>
        <Products painting={painting} stickers={stickers} />
      </section>
    </div>
  );
}
