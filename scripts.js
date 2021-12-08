function computerPlay {
    let choice = "scissors"
    return choice;
}

function myFunction() {
    let text;
    let person = prompt("Rock, paper, or scissors?", "First Last");
    if (person == null || person == "") {
      text = "User cancelled the prompt.";
    } else {
      text = "Winner is:" + person + "Congratulations!";
    }
    document.getElementById("demo").innerHTML = text;
  }