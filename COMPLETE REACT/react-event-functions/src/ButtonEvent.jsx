//Handling Click Event 

function printHello(event){
    console.log("Hello")
    console.log(event)
}

// export default function Button(){
//     return (
//         <div>
//             <button onClick={printHello}>Click Me!</button>
//         </div>
//     );
// }
 
//Handling on non-click event


function handleMouseOver(){
    console.log("bye!")
}

function handleDoubleClick(){
    console.log("you double click")
}

export default function Button(){
    return (
        <div>
            <button onMouseOver={handleMouseOver}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Sed possimus voluptate enim quis, animi totam deserunt dolores at saepe laudantium, 
                 consequuntur dolorum consectetur dolor facere id provident magnam quo repellat.</button>
        <button onDoubleClick={handleDoubleClick}>you double click!</button>
        </div>
    );
}