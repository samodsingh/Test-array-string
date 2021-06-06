
function concateString(arr) {
    var concatenatedString = '';
    for(var i = 0; i < arr.length > 0; i++) {
        concatenatedString = concatenatedString + arr[i];
    }
    document.write(concatenatedString);
}

concateString(['a', 'xy','9']);
