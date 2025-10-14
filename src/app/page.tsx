import HeroSlider from "@/components/layout/Home/Hero";
import FeaturesSection from "@/components/layout/Home/Features";
import ShopByBrands from "@/components/layout/Home/ShopByBrand";
import ShopByCategories from "@/components/layout/Home/ShopByCategories";
import TopElectronicsBrand from "@/components/layout/Home/TopElectronicsBrand";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <FeaturesSection />
      <ShopByBrands />
      <ShopByCategories />
      <TopElectronicsBrand />
    </>
  );
}
