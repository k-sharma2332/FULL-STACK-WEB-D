
// function savetoDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }
// savetoDb("apna college", () => {
//     console.log("your data was saved  ");
//     savetoDb("hello world", () => {
//         console.log("success2 : data saved");
//         savetoDb("shradha", () => {
//             console.log("success3 : data saved");
//         },);
//     },
//         () => {
//             console.log("failure2 : weak connection");
//         }
//     );
// },
//     () => {
//         console.log(" failure : your data was not save");
//     }
// );

function savetoDb(data) {

    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;

        if (internetSpeed > 4) {
            resolve("sucess : data was saved");
        } else {
            reject("failure : weak connection");
        }
    });
}


savetoDb("apnacollege")

    .then((result) => {
        console.log("Data1 saved.");
        console.log("result of promise : " , result  );
       return savetoDb("helloworld");
           

    })
    .then((result) => {
        console.log("data2 was saved");
        console.log("result of promise : " , result  );
        return savetoDb("shradha");
       
    })
    .then((result)=>{
        console.log("data saved");
        console.log("result of promise : " , result  );
    })

    .catch((error) => {
        console.log("promise was rejected");
        console.log("result of error : " , error  );
    });
