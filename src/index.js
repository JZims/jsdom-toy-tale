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



      

fetch('http://localhost:3000/toys')

  .then(res => res.json())
  .then(function(data){
    for (var i in data){
      turnURLtoHTML(data[i])
    }
  }
  )
    

function turnURLtoHTML(toyData){

  const toyItemDiv = document.createElement("div")
        toyItemDiv.classList.add("card")

  const toyName = document.createElement("h2")
        toyName.innerText=`${toyData.name}`
        toyItemDiv.append(toyName)

  const toyImage = document.createElement("img")
        toyImage.classList.add("toy-avatar")
        toyItemDiv.append(toyImage)
        toyImage.innerText= `src="${toyData.image}"`

  const toyLikes = document.createElement("p")
        toyLikes.classList.add("likes")
        toyLikes.innerText = `${toyData.likes} Like(s)`
        toyItemDiv.append(toyLikes)

  const toyCardButton = document.createElement("button")
        toyCardButton.classList.add("like-btn")
        toyCardButton.innerText= "Like <3"
        toyItemDiv.append(toyCardButton)

  

  toyCollection.append(toyItemDiv)
    
}