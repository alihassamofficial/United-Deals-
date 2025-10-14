import FeaturesSection from "@/components/layout/Home/Features";
import HeroSlider from "@/components/layout/Home/Hero";
import ShopByBrands from "@/components/layout/Home/ShopByBrand";
import ShopByCategories from "@/components/layout/Home/ShopByCategories";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <FeaturesSection />
      <ShopByBrands />
      <ShopByCategories />
    </>
  );
}
