const student = {
    name: "shradha" ,
    age: 23,
    eng:95,
    math:69,
    phy:97,
    getAvg(){
        console.log(this);
        let avg = (this.eng+this.math+this.phy)/3;              //this is use for calling object
        console.log(`${this.name}got avg marks = ${95}`);
    }
}

function getAvg(){
    console.log(this); //window object-whenno object is there
   
}