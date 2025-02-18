document.getElementById("check-btn").addEventListener("click", function() {
  const input = document.getElementById("text-input").value;
  if (!input) {
    alert("Please input a value");
    return;
  }

  const cleanedInput = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reversedInput = cleanedInput.split('').reverse().join('');

  const resultElement = document.getElementById("result");
  if (cleanedInput === reversedInput) {
    resultElement.textContent = `${input} is a palindrome`;
  } else {
    resultElement.textContent = `${input} is not a palindrome`;
  }
});
