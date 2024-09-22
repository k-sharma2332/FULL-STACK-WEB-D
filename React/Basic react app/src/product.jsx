import './Product.css';
import Price from "./Price";
function Product({title,idx}){
let oldPrices = ["12,345",'23,567','45,674','44,654'];
let newPrice = ['23,56','34,666','45,5645','45,3434'];
let description = [["8,000 DPI","5 Programmable buttons"]
,["intuitive surface","designed for iPadPro"],

["design for iPad","wireless"],
["wireless","design ipad"],];
    return (
        <div className='Product'>
            <h4>{title}</h4>
           
           <p>{description[idx][0]}</p>
           <p>{description[idx][1]}</p>
           <Price oldPrice={oldPrices[idx]} newPrice={newPrice[idx]}/>
        </div>
    );
}

export {Product};