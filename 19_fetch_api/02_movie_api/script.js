
document.getElementById("form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const movieName = document.getElementById("movieName").value.trim();

    const container = document.getElementById("container")

    const errorText = document.getElementById("error")

    container.innerHTML = ""


    try {

        const res = await fetch(`https://www.omdbapi.com/?apikey=thewdb&s=${movieName}`);

        const data = await res.json();

        document=""

        if (data.Response !== "True") {

            throw new Error("no movie data found")
        } else {

            data.Search.forEach((movie) => {

              errorText.textContent=""

                const image = document.createElement("img")

                image.src = movie.Poster;
                image.alt = movie.Title;
                image.style.width = "250px" 
                image.style.margin = "10px"
                image.style.border = "2px solid red"

                container.appendChild(image)
            });
        };

    } catch (error) {

        errorText.textContent = error;
    }
})