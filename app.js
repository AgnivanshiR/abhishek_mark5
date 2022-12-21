var txtInput = document.querySelector(".txt-input");
var btnTranslate = document.querySelector(".btn-translate");
var output = document.querySelector('.output');

// function clickHandler(){
//     console.log("clicked!")
// }
function clickHandler () {
    console.log(txtInput.value)
}

btnTranslate.addEventListener("click", clickHandler)