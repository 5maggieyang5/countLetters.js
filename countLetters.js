
function counterLetters(sentence) {
  var letters = {};
  var noSpace = sentence.split(" ").join("");
  var characters = noSpace.split("");

  for (var i = 0; i < characters.length; i++) {
    var letter = characters[i];
    if (letters[letter] === undefined) {
      letters[letter] = 1;
    } else {
      letters[letter] += 1;
    }
  }

  return letters;
}

console.log(counterLetters("lighthouse in the house"));


