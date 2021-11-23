//alert("script is working")
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputBox = document.querySelector("#output");
// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

//translate API
var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
    return serverURL + "?text=" + text
}
function errorhandler(error){
    console.log("error occured",error);
    alert("Something wrong with server! try again after sometime");
}
function clickHandler() {

    var inputText = txtInput.value;
    if (inputText == "")
        alert("Enter some text");

    //calling server
    else {
        fetch(getTranslationURL(inputText))

            .then(response => response.json())
            .then(json =>{
                var translatedTxt=json.contents.translated;
                console.log(translatedTxt);
                outputBox.innerText=translatedTxt;
            } )
            .catch(errorHandler)
    }

};

btnTranslate.addEventListener("click", clickHandler);