var plant = document.getElementById("plant");
var capybara = document.getElementById("capybara-div")

var feed_capy= document.getElementById("feed-capy");
var hidden_section = document.getElementById("hidden-section");

let plantWidth = plant.offsetWidth;
let plantHeight = plant.offsetHeight;

plant.onmousedown = function(event) {
    plant.style.position = "absolute";
    plant.style.zIndex = "1000";

    document.body.append(plant);

    function moveAt(pageX, pageY) {
        plant.style.left = pageX - plant.offsetWidth / 2 + "px";
        plant.style.top= pageY - plant.offsetHeight / 1.5 + "px";
    }

    moveAt(event.pageX, event.pageY);

    function OnMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        checkCollision();
    }

    document.addEventListener("mousemove", OnMouseMove);

    plant.onmouseup = function() {
        document.removeEventListener("mousemove", OnMouseMove);
        plant.onmouseup = null;
    }

    function checkCollision() {
        var plantRect = plant.getBoundingClientRect();
        var capybaraRect = capybara.getBoundingClientRect();

        if (plantRect.left < capybaraRect.left + capybaraRect.width - 200 &&
            plantRect.left + plantRect.width > capybaraRect.left + 150  &&
            plantRect.top < capybaraRect.top + capybaraRect.height - 200  &&
            plantRect.top + plantRect.height > capybaraRect.top + 200 ) 
            {
            plant.style.display = "none";
            feed_capy.style.display = "none";
            hidden_section.style.display = "block";
        }
    }
}

plant.ondragstart = function() {
    return false;
}

// ------------------------------------------

const cards = document.querySelectorAll(".card");

function handleMouseOver(event) {
    const card = event.currentTarget;
    console.log("A");
    card.classList.add("hover");
}

function handleMouseOut(event) {
    const card = event.currentTarget;
    console.log("B");
    card.classList.remove("hover");
}

cards.forEach(card => {
    card.addEventListener("mouseover", handleMouseOver);
    card.addEventListener("mouseout", handleMouseOut);
})