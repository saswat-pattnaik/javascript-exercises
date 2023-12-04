const palindromes = function (str) {
    let toTest = "";

    for(let i=0; i < str.length; i++){
        const char = str.charCodeAt(i);
        if((char >= 65 && char <= 90) || (char >= 97 && char <= 122) || (char >= 48 && char <= 57)){
            toTest += str[i].toLowerCase();
        }
    }

    let i=0, j=toTest.length-1;

    while(i < j){
        if(toTest[i] != toTest[j]){
            return false;
        }
        i++;
        j--;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
