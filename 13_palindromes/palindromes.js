const palindromes = function (text) {
    let original = text.replace(/\s+/g, "").replace(/[^\w\s]/gi,"").toLowerCase()
    let backwards = original.split("").reverse().join("")
    console.log(original)
    console.log(backwards)
    return original == backwards
};

// Do not edit below this line
module.exports = palindromes;
