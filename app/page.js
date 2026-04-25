import FAQs from "@/Components/FAQs";
import Hero from "@/Components/Hero";
import BusinessUpgrade from "@/Components/HighLightsSection/BusinessUpgrade";
import Features from "@/Components/HighLightsSection/Features";
import HomePricing from "@/Components/HomePricing";
import CustomerReviewSlider from "@/Components/Slider/CustomerReviewSlider";
import Slider from "@/Components/Slider/FeatureSlider";
import BoostSales from "@/Components/Subscribe/BoostSales";

export default function Home() {
  return (
    
   <main className="overflow-hidden">
   <Hero/>
   <Slider/>
   <BusinessUpgrade/>
   <BoostSales/>
   <Features/>
   <CustomerReviewSlider/>
   <HomePricing/>
   <FAQs/>
   </main>
  );
}
