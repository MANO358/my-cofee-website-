// let button=document.getElementsByClassName("button order-now")

// let button=document.getElementById("order")
// button.addEventListener("click",()=>{

    // console.log("clicked")


    // async function   coffee() {
    //     let c=await fetch("https://api.sampleapis.com/coffee/hot")
    //     let d=await c.json()
//         let e=d.map((values)=>{
//             localStorage.setItem("coffeeData", JSON.stringify(data));

//             sessionStorage.setItem("id",JSON.stringify(values.id))
//             sessionStorage.setItem("title",JSON.stringify(values.title))
//             sessionStorage.setItem("image",JSON.stringify(values.image))
//             sessionStorage.setItem("description",JSON.stringify(values.description))
//             sessionStorage.setItem("ingredients",JSON.stringify(values.ingredients))
              
//             window.open("./api.html","_self")


//             // console.log(values.id)
//             // console.log(values.description)
//             // console.log(values.ingredients)
//             // console.log(values.image)
//             // console.log(values.title)




//             // console.log(values)
//         })
//         // console.log(d)
        
//     }
// //     coffee()   
    
    
// })


let button = document.getElementById("order");
button.addEventListener("click", () => {
    async function coffee() {
        let response = await fetch("https://api.sampleapis.com/coffee/hot");
        let data = await response.json();

        // Store the entire array in localStorage
        localStorage.setItem("coffeeData", JSON.stringify(data));

        // Redirect to the api.html page
        window.open("./api.html", "_self");
    }
    coffee();
});



