var plant = document.getElementById("plant");

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
    }

    document.addEventListener("mousemove", OnMouseMove);

    plant.onmouseup = function() {
        document.removeEventListener("mousemove", OnMouseMove);
        ball.onmouseup = null;
    }
}

plant.ondragstart = function() {
    return false;
}