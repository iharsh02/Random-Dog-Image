// API link 
let url = "https://dog.ceo/api/breeds/image/random";

// button click event
let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    let link = await img();
    let Img = document.querySelector(".dog-img");
    Img.setAttribute("src", link);
});

// function to get image from the API
async function img() {
    try {
        let res = await axios.get(url);

        return res.data.message; // Return the image link
    }
    catch (err) {
        console.log("Error ", err);
        return "image not found";
    }
}
