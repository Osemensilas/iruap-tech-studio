import AboutComponent from "@/components/pages/about/AboutComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Iruap Tech Studio",
  description: "",
};


const About = () => {
    return ( 
        <>
        <main className="h-max w-screen">
            <AboutComponent />
        </main>
        </>
     );
}
 
export default About;