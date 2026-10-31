import ServicesPage from "@/components/pages/service/Service";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Iruap Tech Studio",
  description: "",
};

const Services = () => {
    return ( 
        <>
        <ServicesPage />
        </>
     );
}
 
export default Services;