document.getElementById("btn").addEventListener("click", async ()=>{
    try{

        const res = await fetch("https://dog.ceo/api/breeds/image/random");

        const data = await res.json();

        console.log(data);

        document.getElementById("dogImage").src = data.message;

    } catch (error)
     {
        console.log("error", error);
    }
})