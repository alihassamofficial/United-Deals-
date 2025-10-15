import { ProductGallery } from "@/components/product/product-gallery";
import {
  ProductDetails,
  type ProductDetailsData,
} from "@/components/product/product-details";
import productsJson from "@/data/products.json";
import { notFound } from "next/navigation";
import ProductBreadcrumb from "@/components/product/ProductBreadcrumb";
import { ProductTabs } from "@/components/product/ProductDescriptionTabs";
import BoughtTogether from "@/components/product/BoughtTogether";
import TopElectronicsBrand from "@/components/layout/Home/TopElectronicsBrand";
import TopOfferElectronics from "@/components/product/TopOfferElectronic";

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const productData = productsJson.products.find((p) => p.slug === params.slug);
  if (!productData) return notFound();

  const images = productData.images;

  const product: ProductDetailsData = {
    title: productData.title,
    sku: productData.sku,
    availability:
      productData.availability as ProductDetailsData["availability"],
    brand: productData.brand,
    category: productData.category,
    rating: productData.rating,
    reviewsCount: productData.reviewsCount,
    price: productData.price,
    mrp: productData.mrp,
    discountPercent: productData.discountPercent,
    colors: productData.colors,
    sizes: productData.sizes,
    memory: productData.memory,
    storage: productData.storage,
  };

  return (
    <>
      <ProductBreadcrumb />
      <div className="mx-auto max-w-[1242px] px-5 pt-[62px] ">
        <div className="grid grid-cols-1 gap-[50px] lg:grid-cols-2">
          <ProductGallery images={images} />
          <ProductDetails data={product} />
        </div>
        <ProductTabs
          description={productData.description}
          features={productData.features}
          shipping={productData.shipping}
        />
      </div>
      <BoughtTogether />
      <TopOfferElectronics />
    </>
  );
}
