function menucom(){
    document.getElementById('comunica').style.display = "block";
    document.getElementById('reserva').style.display = "none";
}
function menu2(){
    document.getElementById('comunica').style.display = "none";
}
function menurev(){
    document.getElementById('reserva').style.display = "block";
    document.getElementById('comunica').style.display = "none";
}
function menu3(){
    document.getElementById('reserva').style.display = "none";
}
/* modal */
const btns = document.querySelectorAll("[data-target]");
const close_modals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        document.querySelector(btn.dataset.target).classList.add("active");
        overlay.classList.add("active");
    });
});

close_modals.forEach((btn) => {
    btn.addEventListener("click", () => {
        const modal = btn.closest(".modal");
        modal.classList.remove("active");
        overlay.classList.remove("active");
    });
});

window.onclick = (event) => {
    if (event.target == overlay) {
        const modals = document.querySelectorAll(".modal");
        modals.forEach((modal) => modal.classList.remove("active"));
        overlay.classList.remove("active");
    }
};