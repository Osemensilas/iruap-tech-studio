import ContactComponent from "@/components/pages/contact/ContactComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Iruap Tech Studio",
  description: "",
};



const ContacUs = () => {
    return ( 
        <>
        <ContactComponent />
        </>
     );
}
 
export default ContacUs;