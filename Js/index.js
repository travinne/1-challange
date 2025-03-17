Adocument.addEventListener('DOMContentLoaded',main);
function main(){displayRamen()};

let h1 = document.getElementById('title')
h1.innerText = 'ramen shop';


const ramens = [
   { id: 1,
    name: 'Shoyu Ramen',
    restaurant: "Ichiran",
    image: "images/Assassins Creed - Symbols.jpg",
    rating: 5,
    comment: "Delicious!" 
},

{  
    id: 2,
    name: 'miso Ramen',
    restaurant: "menya",
    image: "images/Assassins Creed - Symbols.jpg",
    rating: 4,
    comment: "very favourable" 
},

  {  
    id: 3,
    name: 'tonkotsu Ramen',
    restaurant: "ramen-ya",
    image: "images/Assassins Creed - Symbols.jpg",
    rating: 3,
    comment: "creamy and rich"
 }
]

ramens.forEach(ramen => {
    const img = document.createElement("img");
    img.src = ramen.image;
    img.alt = ramen.name;
    img.classList.add("ramen-thumbnail")
    img.addEventListener("click", () => handleClick(ramen));
    ramenMenu.appendChild(img);
});

    
    if (ramens.length > 0) {
        handleClick(ramens[0]);
    } else {
        clearRamenDetails();
    }

function handleClick(ramen) {
    currentRamen = ramen;

    document.getElementById("ramen-image").src = ramen.image;
    document.getElementById("ramen-name").textContent = ramen.name;
    document.getElementById("ramen-restaurant").textContent = ramen.restaurant;
    document.getElementById("ramen-rating").textContent = `Rating: ${ramen.rating}`;
    document.getElementById("ramen-comment").textContent = `Comment: ${ramen.comment}`;
}


function clearRamenDetails() {
    document.getElementById("ramen-image").src = "";
    document.getElementById("ramen-name").textContent = "";
    document.getElementById("ramen-restaurant").textContent = "";
    document.getElementById("ramen-rating").textContent = "Rating:";
    document.getElementById("ramen-comment").textContent = "Comment:";
}


function addSubmitListener() {
    const form = document.getElementById("new-ramen-form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const newRamen = {
            id: ramens.length + 1,
            name: form.name.value.trim(),
            restaurant: form.restaurant.value.trim(),
            image: form.image.value.trim(),
            rating: parseInt(form.rating.value, 10), 
            comment: form.comment.value.trim()
        };

        if (newRamen.name && newRamen.restaurant && newRamen.image) {
            ramens.push(newRamen);
            displayRamen();
            handleClick(newRamen); 
            form.reset();
        } else {
            alert("Please fill out all required fields!");
        }
    });
}


function editRamenDetails() {
    const editForm = document.getElementById("edit-ramen-form");
    editForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (currentRamen) {
            currentRamen.rating = parseInt(editForm["edit-rating"].value, 10);
            currentRamen.comment = editForm["edit-comment"].value.trim();

            document.getElementById("ramen-rating").textContent = `Rating: ${currentRamen.rating}`;
            document.getElementById("ramen-comment").textContent = `Comment: ${currentRamen.comment}`;

            editForm.reset();
        }
    });
}


function deleteRamen() {
    const deleteButton = document.getElementById("delete-ramen");
    deleteButton.addEventListener("click", function () {
        if (currentRamen) {
            const index = ramens.findIndex(r => r.id === currentRamen.id);
            if (index !== -1) {
                ramens.splice(index, 1);
                displayRamen();
            }
        }
    });
}


function main() {
    displayRamen();
    addSubmitListener();
    editRamenDetails();
   deleteRamen();
}
 