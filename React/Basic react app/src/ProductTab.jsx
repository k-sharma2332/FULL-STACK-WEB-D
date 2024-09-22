import {Product} from "./Product.jsx"

function ProductTab() {
    let styles = {
        display: "flex",
        flexWrap:"wrap",
        justifyContent : "center",
        alignItems:"center"
    };
    return (
        <div>
           
            <Product  title="Logitech MX Master" idx="0"/>
            <Product title="Apple Pencil" idx="1"/>
            <Product  title="Zebronics aeb-transformer" idx="2"/>
            <Product title="Petronics Toad 23" idx="3"></Product>
        </div>
    );
};

export {ProductTab};