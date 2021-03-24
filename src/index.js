let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

 

const toyButton = document.querySelector("#new-toy-button")
const toyCollection = document.querySelector("#toy-collection")
const toyItemDiv = document.createElement("div")
      toyItemDiv.classList.add("card")
const toyImage = document.createElement("img")
      toyImage.classList.add("toy-avatar")
const toyLikes = document.createElement("p")
      toyLikes.classList.add("likes")
const toyCardButton = document.createElement("button")
      toyCardButton.classList.add("like-btn")
//const toyName = document.querySelector("")


fetch('http://localhost:3000/toys', {
  method: "GET", 
  headers: {
      "Content-Type": "application/json", 
      Accept: "application/json"
  }, 
  body: JSON.stringify({
      
      id: 0, 
      name: ,
      image: toyImage,
      likes: 0

  })  
}

  .then(res => res.json)
  .then(json => {
    turnURLtoHTML(json)
    console.log("hello")
    debugger;
  })
  
)

function turnURLtoHTML(toyData){

  
}

