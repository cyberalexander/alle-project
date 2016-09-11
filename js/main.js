/**
 * Created by alexanderleonovich on 11.09.16.
 */
function onFocusForm() {
    console.log('ASDSDASDASDASD');
    var field = document.getElementById('name');
    console.log(field);

    if (this.value == this.defaultValue) {
        this.value = '';
    }
}
function onBlurForm() {
    if(this.value == ''){
        this.value = this.defaultValue;
    }
}
