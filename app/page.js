import ImageBanner from "@/components/ImageBanner";
import Products from "@/components/Products";

// Function to fetch products from API internally
async function getProducts() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to load products");

    return await res.json();
  } catch (err) {
    console.error("Product fetch error:", err);
    return [];
  }
}


export default async function Home() {
  const products = await getProducts();

  let painting = null;
  let stickers = [];

  for (let prod of products) {
    if (prod.name === 'Angkor Wat') {
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