import { ProductGallery } from "@/components/product/product-gallery";
import { ProductDetails } from "@/components/product/product-details";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { ProductTabs } from "@/components/product/ProductDescriptionTabs";
import BoughtTogether from "@/components/product/BoughtTogether";
import TopOfferElectronics from "@/components/product/TopOfferElectronic";
import type { Product } from "@/types/product";
import { API_ENDPOINTS } from "@/lib/constants/api";
export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  // Fetch product from JSON Server
  const res = await fetch(`${API_ENDPOINTS.PRODUCTS}?slug=${params.slug}`, {
    cache: "no-store", // ensures fresh data on each request
  });
  const data: Product[] = await res.json();
  const product = data[0];

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
