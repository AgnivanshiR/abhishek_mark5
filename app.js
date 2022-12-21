var txtInput = document.querySelector(".txt-input");
var btnTranslate = document.querySelector(".btn-translate");
var output = document.querySelector('.output');

var serverURL = "https://api.funtranslations.com/translate/pig-latin.json"

function getTranslateURL(textInput) {
    return serverURL + "?" +"text=" +textInput
}

function errorHandler(error){
    console.log("error occured", error);
    alert("Some issues with the API server, please try again sometime later")
}


// function clickHandler(){
//     console.log("clicked!")
// }
// function clickHandler () {
//     console.log(txtInput.value)
// }

function clickHandler(){
    var inputText = txtInput.value;

    fetch(getTranslateURL(inputText))
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        var translatedText = json.contents.translated;
        output.innerText= translatedText;
    })
    .catch(errorHandler)

}



btnTranslate.addEventListener("click", clickHandler)