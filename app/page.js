import ImageBanner from "@/components/ImageBanner";
import Products from "@/components/Products";

export default function Home() {
  return (
    <div>
      <ImageBanner/>
      <section>
        <Products/>
      </section>
    </div>
  );
}
