

// http = hypertext transfer protocol //

 // http has 5 ways //
   //1.get //
   //2.post//
   //3.patch//-- one particular chng can be done 
   //4.put // -- it can replace the whole thing 
   //5.delete//


// in fetch api = json is used and in json string is used //
  // json = javascript object notation  //



    // async function fetchdata ()
    // {

    //     try
    //     {
            
    //         const res =await fetch ("https://jsonplaceholder.typicode.com/todos/1") 

    //         const data= await res.json ()

    //         if (! res.ok){

    //             throw new error ("failed")
    //         }

    //         console. log ("data",data )

    //     }
    //     catch(error){
    //         console.log (error)
    //     }

    
    // }

    // fetchdata ()



    const fetchdata =fetch("https://jsonplaceholder.typicode.com/todos/1")

    console.log("data",fetchdata);

    fetchdata .then (res=>{

        return res.json(); 
    })
    .then (data=>{

        console.log("data",data);
    })
    .catch (error=>{

        console.log (error)
    })


    // example-2 //

    async function fetchdata() {

    try {

        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");

        const data = await res.json();

        if (!res.ok) {
            throw new Error("Failed to fetch post");
        }

        console.log("Post Data", data);

    }
    catch(error) {

        console.log(error);

    }

}

fetchdata();


// promise //

const fetchdata = fetch("https://jsonplaceholder.typicode.com/posts/1");

console.log("data", fetchdata);

fetchdata.then(res => {

    if (!res.ok) {
        throw new Error("Failed to fetch post");
    }

    return res.json();

})
.then(data => {

    console.log("Post Data", data);

})
.catch(error => {

    console.log(error);

});


// example -3 //

async function fetchdata() {

    try {

        const res = await fetch("https://jsonplaceholder.typicode.com/users/1");

        const data = await res.json();

        if (!res.ok) {
            throw new Error("Failed to fetch user");
        }

        console.log("User Data", data);

    }
    catch(error) {

        console.log(error);

    }

}

fetchdata(); 

// promise //

const fetchdata = fetch("https://jsonplaceholder.typicode.com/users/1");

console.log("data", fetchdata);

fetchdata.then(res => {

    if (!res.ok) {
        throw new Error("Failed to fetch user");
    }

    return res.json();

})
.then(data => {

    console.log("User Data", data);

})
.catch(error => {

    console.log(error);

});