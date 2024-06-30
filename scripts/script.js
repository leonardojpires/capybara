var plant = document.getElementById("plant");
var capybara = document.getElementById("capybara-div");
var main = document.getElementById("main")

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
        plant.style.top= pageY - plant.offsetHeight / 1.6 + "px";
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

// DIV ON MOUSE OVER

const help_box = document.getElementById("help-box");
const help_window = document.getElementById("help-window");
const inter = document.getElementById("inter");

document.addEventListener("DOMContentLoaded", () => {


    let offset = 70;
    let mediaQuery = window.matchMedia("(max-width: 616px)");


    const checkMediaQuery = () => {
        if (window.matchMedia("(max-width: 616px)").matches) {
            offset = 100;
        }
        else {
            offset = 70;
        }
    }

    checkMediaQuery();

    window.matchMedia("(max-width: 616px)").addListener(checkMediaQuery);

    inter.addEventListener("mouseover", () => help_box.style.display = "block");

    inter.addEventListener("mouseout", () =>  help_box.style.display = "none");

    inter.addEventListener("mousemove", e => {
        const mouseX = e.pageX;
        const mouseY = e.pageY;

        help_box.style.left = mouseX + "px";
        help_box.style.top = (mouseY - offset) + "px";
    })

    const handleClick = () => {
        help_window.style.visibility = 'visible';
        help_window.style.opacity = '1';
    }

    if (mediaQuery.matches) {
        inter.addEventListener("click", handleClick);
    }

    mediaQuery.addListener((e) => {
        if (e.matches) {
            inter.addEventListener("click", handleClick);
        }
        else {
            inter.removeEventListener("click", handleClick);
            help_window.style.visibility = 'hidden';
            help_window.style.opacity = '0';
        }
    });
});

function closeWindow() {
    help_window.style.visibility = 'hidden';
    help_window.style.opacity = '0';
}

// ------------------------------------------
let menuLinks = document.getElementById('links-menu');

document.getElementById('burger-menu').addEventListener('click', () => {
    if (menuLinks.style.display === 'flex') {
        menuLinks.style.display = 'none';
    }
    else {
        menuLinks.style.display = 'flex';
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        menuLinks.style.display = "flex";
    }
    else {
        menuLinks.style.display = "none";
    }
});