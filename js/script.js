// Button Lets Go
function hello(){
    var input = prompt("Masukkan Nama Anda : ");
    alert("Halo, " + input + ".");
    alert("Terima kasih sudah memilih");
    alert("Ayo kita mulai!!");
}


// FilterButtons
const filterButtons = document.querySelectorAll("#gallery .filter_buttons button");
const filterableCards = document.querySelectorAll("#gallery .filterable_cards .card");

// Define the filterCards 
const filterCards = e => {
    document.querySelector(".aktif").classList.remove("aktif");
    e.target.classList.add("aktif");
    // console.log(e.target);

    // hide card
    filterableCards.forEach(card => {
        // tambahkan class "hide"
        card.classList.add("hide");
        // mastikan card hide terpilih
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove("hide");  
        }
    });
};

// console.log(filterButtons, filterableCards) 
// memastikan apakah filterButtons dan filterableCards terpanggil
filterButtons.forEach(button => button.addEventListener("click", filterCards));






