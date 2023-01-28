import { Footer } from "flowbite-react";
const FooterComponent =()=>{
    return (
        <Footer container={true}>
        <div className="w-full text-center">
            <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
           
            </div>
            <Footer.Divider />
            <Footer.Copyright
            href="https://github.com/GodoyMS"
            by="Godoy Muñoz S. | ESCALAB"
            year={2023}
            />
        </div>
</Footer>
    )
};

export default FooterComponent;