const inputText = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const regex = /[\W_]/g;
  let text = inputText.value;
  let word = text.toLowerCase().replace(regex, "");
  let reverseWord = word.split("").reverse().join("");

  const message = document.createElement("p");
  message.classList.add("success");
  message.innerHTML = "";
  result.appendChild(message);

  if (text === "") {
    alert("Please input a value");
    return;
  };

  if (word === reverseWord) {
    message.innerHTML = `${text} is a palindrome`;
  } else {
    message.innerHTML = `${text} is not a palindrome`;
  };
});
