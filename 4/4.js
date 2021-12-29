function ingExtractor(string) {
  console.log(string.replace(/[^a-zA-Z ]/g, ""));
  return string
    .replace(/[^a-zA-Z ]/g, "")
    .split(" ")
    .filter((word) => {
      console.log(word);
      let temp = word.toLowerCase().replace("ing", "");

      if (temp.length === temp.replace(/[aeiou]/g, "").length) {
        return false;
      }
      if (word.toLowerCase().includes("ing")) {
        return true;
      }
    });
}

console.log(ingExtractor("going Ping, king sHrink dOing"));
// ingExtractor("coming bringing Letting sing")

// ingExtractor("going Ping, king sHrink dOing")

// ingExtractor("zing went ring, ding wing SINk")

//in soal ro search krdm va hanoz hamchenan darhal yadgirish hastam
