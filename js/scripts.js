var titleCase = function(sentence) {
  var answer = []
  sentence.split(" ").forEach(function(word) {
    answer.push(word[0].toUpperCase() + word.slice(1));
  });
  return answer.join(" ");
};
