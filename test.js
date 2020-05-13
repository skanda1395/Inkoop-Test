let result_node = document.getElementById("result");

function replay() {
  window.location = "./index.html";
}

function test() {
  let user_guess = document.getElementById("user_guess").value;
  if (!user_guess.length || isNaN(user_guess)) {
    alert("Enter a number");
  } else {
    let stored_num = localStorage.random_six;
    let matched = 0;
    for (let i = 0; i < stored_num.length; i++) {
      if (user_guess[i] == stored_num[i]) matched++;
    }
    result_node.textContent = `${matched} correct guesses.`;
    if (matched == 6) result_node.textContent += " You won!";
  }
}
