import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
    return ( 
        <>
        <div className="fixed top-[90%] left-[95%]">
            <a href="https://wa.me/2348168318983" target="__blank" aria-label="Chat with us on WhatsApp" rel="noopener noreferrer" className="">
                <FaWhatsapp size={50} color="#25D366" />
            </a>
        </div>
        </>
     );
}
 
export default WhatsApp;