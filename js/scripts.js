var titleCase = function(sentence) {
  var answer = [];
  var noCaps = ["the", "and", "a", "an", "in", "but", "or", "with", "upon"];
  var lowerCaseSentence = sentence.toLowerCase();
  var wordArray = lowerCaseSentence.split(" ");
  var firstWord = wordArray.shift();
  answer.push(firstWord[0].toUpperCase() + firstWord.slice(1));
  wordArray.forEach(function(word) {
    if (noCaps.indexOf(word) === -1) {
      answer.push(word[0].toUpperCase() + word.slice(1));
    } else {
      answer.push(word);
    }
  });
  return answer.join(" ");
};
