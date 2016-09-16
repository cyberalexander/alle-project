/**
 * Created by alexanderleonovich on 11.09.16.
 */
// function showMenu() {
//     var elementVar = document.getElementById("mobile-nav-list");
//     console.log("display menu before " + elementVar.style.display);
//     if(elementVar.style.display == ""){
//         elementVar.style.display = "block";
//         elementVar.style.zIndex = 1000;
//     }else{
//         elementVar.style.display = '';
//         elementVar.style.zIndex = 0;
//     }
//     console.log("display menu after " + elementVar.style.display);
// }


function onFocusForm(inputElement) {
    var value = inputElement.value;
    var defaultValue = inputElement.defaultValue;
    console.log('inputElement = ' + inputElement);
    console.log('value = ' + value);
    console.log('defaultValue = ' + defaultValue);
    if (value == defaultValue) {
        inputElement.value = '';
    }
}

function onBlurForm(inputElement) {
    var value = inputElement.value;
    var defaultValue = inputElement.defaultValue;
    console.log('inputElement = ' + inputElement);
    console.log('value = ' + value);
    console.log('defaultValue = ' + defaultValue);
    if (value == '') {
        inputElement.value = defaultValue;
    }
}
