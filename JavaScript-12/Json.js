let jsonRes = '{"fact":"Some cats have survived falls of over 65 feet (20 meters), due largely to their \u201crighting reflex.\u201d The eyes and balance organs in the inner ear tell it where it is in space so the cat can land on its feet. Even cats without a tail have this ability.","length":249}';

let validRes = JSON.parse(jsonRes);
console.log(validRes);

let student = {
    name : "shradha",
    marks : 92
};