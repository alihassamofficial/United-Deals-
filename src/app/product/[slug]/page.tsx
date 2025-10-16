import { notFound } from "next/navigation";

import { ProductGallery } from "@/components/product/product-gallery";
import { ProductDetails } from "@/components/product/product-details";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { ProductTabs } from "@/components/product/ProductDescriptionTabs";
import BoughtTogether from "@/components/product/BoughtTogether";
import TopOfferElectronics from "@/components/product/TopOfferElectronic";

import type { Product } from "@/types/product";
import { API_ENDPOINTS } from "@/lib/constants/api";

// ---------------------------
// Fetch Product by Slug
// ---------------------------
async function fetchProduct(slug: string): Promise<Product | null> {
  try {
    const res = await fetch(`${API_ENDPOINTS.PRODUCTS}?slug=${slug}`, {
      cache: "no-store", // always fetch fresh data
    });

    if (!res.ok) return null;

    const data: Product[] = await res.json();
    return data[0] || null;
  } catch (err) {
    console.error("Error fetching product:", err);
    return null;
  }
}

// ---------------------------
// Page Component
// ---------------------------
export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ✅ await directly (Next.js 15 typing)
  const product = await fetchProduct(slug);

  if (!product) return notFound();

  return (
    <>
      <Breadcrumb />

      <div className="mx-auto max-w-[1242px] px-5 pt-[62px]">
        {/* Product Section */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <ProductGallery
            images={product.images.map((img) => ({
              src: img,
              alt: product.title,
            }))}
          />
          <ProductDetails data={product} />
        </div>

        {/* Tabs Section */}
        <ProductTabs
          description={product.description}
          features={product.features}
          shipping={[{ label: "Free", detail: "Delivered in 5 days" }]}
        />
      </div>

      {/* Related Sections */}
      <BoughtTogether />
      <TopOfferElectronics />
    </>
  );
}
