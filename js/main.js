/**
 * Created by alexanderleonovich on 11.09.16.
 */
function showMenu() {
    var elementVar = document.getElementById("mobile-nav-list");
    console.log("display menu before " + elementVar.style.display);
    if(elementVar.style.display == ""){
        elementVar.style.display = "block";
        elementVar.style.zIndex = 1000;
    }else{
        elementVar.style.display = '';
        elementVar.style.zIndex = 0;
    }
    console.log("display menu after " + elementVar.style.display);
}




// function onFocusForm() {
//     console.log('ASDSDASDASDASD');
//     var field = document.getElementById('name');
//     console.log(field);
//
//     if (this.value == this.defaultValue) {
//         this.value = '';
//     }
// }
// function onBlurForm() {
//     if(this.value == ''){
//         this.value = this.defaultValue;
//     }
// }
