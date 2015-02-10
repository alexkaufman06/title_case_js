var titleCase = function(sentence) {
  var answer = [];
  var noCaps = ["the", "and", "a", "an", "in", "but", "or", "with", "upon"];
  var lowerCaseSentence = sentence.toLowerCase();
  lowerCaseSentence.split(" ").forEach(function(word) {
    if (noCaps.indexOf(word) === -1) {
      answer.push(word[0].toUpperCase() + word.slice(1));
    } else {
      answer.push(word);
    }
  });
  return answer.join(" ");
};
