/* let cards = document.querySelectorAll(".slide > div");
let righticon = document.getElementById("right");
let lefticon = document.getElementById("left");
let i = 0;
let j = 4;

righticon.addEventListener("click", function () {
    debugger
    if ((cards.length - i) > 4) {
        cards[i].classList.add("notactive");
        i++;
    } else {
        righticon.style.color = "blue"
    }
})
lefticon.addEventListener("click", function () {
    if ((cards.length - j) > 2) {
        cards[j].classList.remove("notactive");
        j--;
    }else{
        lefticon.style.color = "blue"
    }
}) */
let righticon = document.getElementById("right");
let lefticon = document.getElementById("left");
let input = document.getElementById("number")
function newCard() {
    let card = document.getElementById('selected');
    let cloneCard = card.cloneNode(true);
    let slider = document.getElementById('slide');
    slider.appendChild(cloneCard)
}

input.addEventListener("keyup", function (e) {
    if (e.keyCode == 13) {
        for (let i = 1; i <= this.value; i++) {
            newCard();
        }
        this.value = "";   
    }
})

righticon.addEventListener("click", function () {

    let selected = document.querySelector(".selected");
    lefticon.classList.remove("disable");

    if (selected.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling != null) {
        selected.classList.add("notactive");
        selected.classList.remove("selected");
        selected.nextElementSibling.classList.add("selected");
    }


    if (selected.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling == null) {
        righticon.classList.add("disable")
    }
})

lefticon.addEventListener("click", function () {
    let selected = document.querySelector(".selected");
    righticon.classList.remove("disable");
    selected.previousElementSibling.classList.remove("notactive");
    selected.previousElementSibling.classList.add("selected");
    selected.classList.remove("selected");
    if (selected.previousElementSibling.previousElementSibling == null) {
        lefticon.classList.add("disable");
    }
})





