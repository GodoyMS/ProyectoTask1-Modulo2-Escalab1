import {Data} from "../../Data/Data";
import SingleCard from "./SingleCard/SingleCard";
const ListCard =()=>{
    const a = Data.map((CardData)=>{
        return (
        <div >
        <SingleCard 
        title={CardData.title} 
        imgsrc={CardData.imgsrc}
        description={CardData.description}
        link={CardData.link}
        
        ></SingleCard>
        </div>
        )
        
    })
    
    return a;
}

export default ListCard;