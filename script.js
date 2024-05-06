let searchButton = document.getElementById('search-button');
let searchInput = document.getElementById('search-input');
let searchResultsDiv = document.querySelector('.search-results');

// <https://api.unsplash.com/search/photos?client_id=CFIgejO0MapPqcyqo7F8U1MG8D24F8XFcDo1jv1U6Q0&page=191&query=coding>; rel="last", 

let client_id = "CFIgejO0MapPqcyqo7F8U1MG8D24F8XFcDo1jv1U6Q0";
let url = "https://api.unsplash.com/search/photos?";
let query = undefined;

searchButton.addEventListener("click", async function(){
    query = searchInput.value;

    let response = await fetch(`${url}client_id=${client_id}&query=${query}`);
    let data = await response.json();
    // console.log(data.results[0].urls.full);

    if (data.results) {
        data.results.forEach((result) => {
            const fullUrls = result.urls.full;
            // console.log(fullUrls);

            //create the image
            let searchImage = document.createElement("img");
            searchImage.classList.add("search-results-img");

            //append the container containing image to the searchResultsDiv
            searchImage.src = fullUrls;
            searchResultsDiv.appendChild(searchImage);
        });
    } else {
        console.log("No results found.");
    }
    
});











            // //create the image
            // let searchImage = document.createElement("img");
            // searchImage.classList.add("search-results-img");

            // //create the image container
            // let imageContainer = document.createElement("div");
            // imageContainer.classList.add("image-container");
            // imageContainer.appendChild(searchImage);

            // //append the container containing image to the searchResultsDiv
            // searchImage.src = fullUrls;
            // searchResultsDiv.appendChild(imageContainer);