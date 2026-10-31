import PricingPage from "@/components/pages/pricing/Pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - Iruap Tech Studio",
  description: "",
};

const Pricing = () => {
    return ( 
        <>
        <PricingPage />
        </>
     );
}
 
export default Pricing;