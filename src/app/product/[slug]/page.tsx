import { ProductGallery } from "@/components/product/product-gallery";
import { ProductDetails } from "@/components/product/product-details";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { ProductTabs } from "@/components/product/ProductDescriptionTabs";
import BoughtTogether from "@/components/product/BoughtTogether";
import TopOfferElectronics from "@/components/product/TopOfferElectronic";
import type { Product } from "@/types/product";
import { API_ENDPOINTS } from "@/lib/constants/api";

// Define the props type for Next.js dynamic route
interface ProductPageProps {
  params: {
    slug: string;
  };
}

// Fetch product by slug
async function fetchProduct(slug: string): Promise<Product | null> {
  try {
    const res = await fetch(`${API_ENDPOINTS.PRODUCTS}?slug=${slug}`, {
      cache: "no-store", // always fresh data
    });

    if (!res.ok) return null;

    const data: Product[] = await res.json();
    return data[0] || null;
  } catch (err) {
    console.error("Error fetching product:", err);
    return null;
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await fetchProduct(params.slug);

  // Trigger Next.js 404 if product not found
  if (!product) return notFound();
  return (
    <>
      <Breadcrumb />

      <div className="mx-auto max-w-[1242px] px-5 pt-[62px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <ProductGallery
            images={product.images.map((img) => ({
              src: img,
              alt: product.title,
            }))}
          />
          <ProductDetails data={product} />
        </div>

        <ProductTabs
          description={product.description}
          features={product.features}
          shipping={[{ label: "Free", detail: "Delivered in 5 days" }]}
        />
      </div>

      <BoughtTogether />
      <TopOfferElectronics />
    </>
  );
}
