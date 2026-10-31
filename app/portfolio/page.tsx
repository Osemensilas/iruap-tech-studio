import PortfolioPage from "@/components/pages/portfolio/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - Iruap Tech Studio",
  description: "",
};

const Portfolio = () => {
    return ( 
        <>
        <PortfolioPage />
        </>
     );
}
 
export default Portfolio;