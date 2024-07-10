// --------------- PLANT DRAG AND DROP WITH COLLISION DETECTION ---------------

const plant = document.getElementById("plant");
const capybara = document.getElementById("capybara-div");
const main = document.getElementById("main");

const feedCapy = document.getElementById("feed-capy");
const hiddenSection = document.getElementById("hidden-section");

let plantWidth = plant.offsetWidth;
let plantHeight = plant.offsetHeight;

function moveAt(pageX, pageY) {
    plant.style.left = pageX - plant.offsetWidth / 2 + "px";
    plant.style.top = pageY - plant.offsetHeight / 1.6 + "px";
}

function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
    checkCollision();
}

function onTouchMove(event) {
    let touch = event.touches[0];
    moveAt(touch.pageX, touch.pageY);
    checkCollision();
}

function checkCollision() {
    let plantRect = plant.getBoundingClientRect();
    let capybaraRect = capybara.getBoundingClientRect();

    if (plantRect.left < capybaraRect.left + capybaraRect.width - 200 &&
        plantRect.left + plantRect.width > capybaraRect.left + 150 &&
        plantRect.top < capybaraRect.top + capybaraRect.height - 200 &&
        plantRect.top + plantRect.height > capybaraRect.top + 200) {
        plant.style.display = "none";
        feedCapy.style.display = "none";
        hiddenSection.style.display = "block";
    }
}

plant.onmousedown = function (event) {
    plant.style.position = "absolute";
    plant.style.zIndex = "1000";
    document.body.append(plant);

    moveAt(event.pageX, event.pageY);
    document.addEventListener("mousemove", onMouseMove);

    plant.onmouseup = function () {
        document.removeEventListener("mousemove", onMouseMove);
        plant.onmouseup = null;
    };
};

plant.ontouchstart = function (event) {
    plant.style.position = "absolute";
    plant.style.zIndex = "1000";
    document.body.append(plant);

    let touch = event.touches[0];
    moveAt(touch.pageX, touch.pageY);
    document.addEventListener("touchmove", onTouchMove);

    plant.ontouchend = function () {
        document.removeEventListener("touchmove", onTouchMove);
        plant.ontouchend = null;
    };
};

plant.ondragstart = function () {
    return false;
};

// ----------------------- CARD HOVER EFFECTS -----------------------

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
});

// -------------------- HELP BOX AND HELP WINDOW --------------------

const helpBox = document.getElementById("help-box");
const helpWindow = document.getElementById("help-window");
const inter = document.getElementById("inter");

document.addEventListener("DOMContentLoaded", () => {
    let offset = 70;
    const mediaQuery616 = window.matchMedia("(max-width: 616px)");
    const mediaQuery998 = window.matchMedia("(max-width: 998px)");

    const checkMediaQuery = () => {
        if (mediaQuery616.matches) {
            offset = 100;
        } else {
            offset = 70;
        }

        if (mediaQuery998.matches) {
            helpBox.style.display = 'none';
        } else {
            helpBox.style.display = 'block';
        }
    };

    checkMediaQuery();

    mediaQuery616.addListener(checkMediaQuery);
    mediaQuery998.addListener(checkMediaQuery);

    inter.addEventListener("mouseover", () => {
        if (!mediaQuery998.matches) {
            helpBox.style.display = "block";
        }
    });

    inter.addEventListener("mouseout", () => helpBox.style.display = "none");

    inter.addEventListener("mousemove", e => {
        const mouseX = e.pageX;
        const mouseY = e.pageY;

        helpBox.style.left = mouseX + "px";
        helpBox.style.top = (mouseY - offset) + "px";
    });

    const handleClick = () => {
        helpWindow.style.visibility = 'visible';
        helpWindow.style.opacity = '1';
    };

    if (mediaQuery616.matches) {
        inter.addEventListener("click", handleClick);
    }

    mediaQuery616.addListener((e) => {
        if (e.matches) {
            inter.addEventListener("click", handleClick);
        } else {
            inter.removeEventListener("click", handleClick);
            helpWindow.style.visibility = 'hidden';
            helpWindow.style.opacity = '0';
        }
    });
});

function closeWindow() {
    helpWindow.style.visibility = 'hidden';
    helpWindow.style.opacity = '0';
}

// ----------------------- BURGER MENU TOGGLE -----------------------

const menuLinks = document.getElementById('links-menu');

document.getElementById('burger-menu').addEventListener('click', () => {
    if (menuLinks.style.display === 'flex') {
        menuLinks.style.display = 'none';
    } else {
        menuLinks.style.display = 'flex';
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        menuLinks.style.display = "flex";
    } else {
        menuLinks.style.display = "none";
    }
});
