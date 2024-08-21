const humburger = document.getElementById("hamburger-img");
const burgerDropDown = document.getElementById("burgerDropDown");

const bigShoes = document.getElementById("bigShoes");
const shoes1 = document.getElementById("shoes1");
const shoes2 = document.getElementById("shoes2");
const shoes3 = document.getElementById("shoes3");



burgerDropDown.addEventListener("click", ()=>{
    burgerDropDown.classList.toggle('hidden');
});

humburger.addEventListener("click", ()=>{
    burgerDropDown.classList.toggle('hidden');
});

shoes1.addEventListener('click', ()=>{
    bigShoes.src = "/assets/images/big-shoe1.png";
});

shoes2.addEventListener('click', ()=>{
    bigShoes.src = "/assets/images/big-shoe2.png";
});

shoes3.addEventListener('click', ()=>{
    bigShoes.src = "/assets/images/big-shoe3.png";
}); 