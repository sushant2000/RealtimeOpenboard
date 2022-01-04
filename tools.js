let optionsCont = document.querySelector(".options-cont");
let optionsFlag = true;
optionCont.addEventListener("click" , (e){
    optionsFlag = !optionFlag;

    if(optionsFlag) openTools();
    else closeTools();
})

function openTools(){
    let iconsElem = optionsCont.children[0];
    iconsElem.classList.remove("fa-times");
    iconsElem.classList.add("fa-bars"); 
}

function closeTools(){
    let icons = optionsCont.children[0];
    iconsElem.classList.remove("fa-bars");
    iconsElem.classList.add("fa-times");

}