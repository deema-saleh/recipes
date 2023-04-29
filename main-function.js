
//---------------header controls-------------------------
let searchBox = document.querySelector(".searchbox-input");
let closeBtn = document.querySelector(".close-icon");
let searchBtn = document.querySelector(".search-icon");

let menu = document.querySelector(".menu-icon");
let navBar = document.querySelector("header .nav-bar");


//--------------chefs section controls--------------------
let chefSlider = document.querySelector("section.chefs");
let prevChefControl = document.querySelector("#prev");
let nextChefControl = document.querySelector("#next");
let rightChefSlide = document.querySelector(".chefs-container > .chefs-right")
let leftChefSlide = document.querySelector(".chefs-container > .chefs-left")



//-----------------header controls-----------------------
searchBtn.onclick = () => {
    searchBox.classList.add("open");
    closeBtn.classList.add("open");
    searchBtn.classList.add("open");
}
closeBtn.onclick = () => {
    searchBox.classList.remove("open");
    closeBtn.classList.remove("open");
    searchBtn.classList.remove("open");
}

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navBar.classList.toggle("active");
}

window.onscroll = () =>{
    menu.classList.remove("fa-times");
    navBar.classList.remove("active");
}

//-------------------header ends-------------------------


//---------------------------chef slider ------------------

chefSlider.addEventListener("mouseover", function(){
    prevChefControl.classList.add("active");
    nextChefControl.classList.add("active");
    clearInterval(intervalID);
});

chefSlider.addEventListener("mouseleave", function(){
    prevChefControl.classList.remove("active");
    nextChefControl.classList.remove("active");
    autoSlide();
});

let chefsSlideIndex = 0
, intervalID;
let totalSlides = document.querySelectorAll(".chefs-container .chefs-left .chefs-left-slide").length ;
console.log(totalSlides);

leftChefSlide.style.transform = "translateY(-" + ((totalSlides - 1)*100) + "%)";

const autoSlide = () => {
    intervalID = setInterval(() => slideImage(++chefsSlideIndex), 4500);
};
autoSlide();

const slideImage = () => {

    //calculate the the updated image index
    chefsSlideIndex = chefsSlideIndex === totalSlides ? 0 : chefsSlideIndex < 0 ? totalSlides -1 :chefsSlideIndex;
    //update the carouse1 display to show the specified image
    rightChefSlide.style.transform = "translateY(-" + (chefsSlideIndex*100) + "%)";
    leftChefSlide.style.transform = "translateY(" + ((chefsSlideIndex-1)*100) + "%)";
};


const updateClick = (e) => {

    //stop the automatic slideshow
    clearInterval(intervalID);

    chefsSlideIndex += e.target.id === "next" ? 1 : -1
    slideImage();

    autoSlide();
}

prevChefControl.addEventListener("click", updateClick);
nextChefControl.addEventListener("click", updateClick);





//--------------------chef slider ends------------------------


//---------------------slider--------------

// --------------expremintal-slide--------------------------
// let wrapper = document.querySelector(".slider");
// let carouse1 = document.querySelector(".carouse1");
// let images = document.querySelectorAll(".carouse1 > img");
// let buttons = document.querySelectorAll(".slider > .buttons");


// let imageIndex = 0,
// intervalID;

// //define function to start automatic image slider
// const autoSlide = () => {
//     intervalID = setInterval(() => slideImage(++imageIndex), 2500);
// };

// //calling autoSlide on page load
// autoSlide();

// //a function that updates carouse display to show the soecified image
// const slideImage = () => {

//     //calculate the the updated image index
//     imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length -1 :imageIndex;
//     //update the carouse1 display to show the specified image
//     carouse1.style.transform = "translate(-" + (imageIndex*100) + "%)";
// };

// //function for buttons to switch images
// const updateClick = (e) => {

//     //stop the automatic slideshow
//     clearInterval(intervalID);

//     imageIndex += e.target.id === "next" ? 1 : -1
//     slideImage();

//     autoSlide();
// }

// //mouseover event listener on slider to stop auto sliding
// wrapper.addEventListener("mouseover", () => clearInterval(intervalID))

// //mouseover event listener on slider to start auto again
// wrapper.addEventListener("mouseleave", () => autoSlide)

// //add event listener to slider buttons 
// buttons.forEach(button => button.addEventListener("click", updateClick));

//----------------------------slider END-----------------