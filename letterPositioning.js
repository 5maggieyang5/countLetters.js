function letterPosition(sentence) {
  var lettersIndex = {};
  var letters = sentence.split("");

  for (var i = 0; i < letters.length; i++) {
    var letter = letters[i];
    if (letter !== ' ') {
       if (lettersIndex[letter] === undefined) {
        lettersIndex[letter] = {count: 1,index: [i]};
      } else {
        lettersIndex[letter]["count"] += 1;
        lettersIndex[letter]["index"].push(i);
      }
    }
  }
  return lettersIndex;
}
console.log(letterPosition("lighthouse in the house"));
