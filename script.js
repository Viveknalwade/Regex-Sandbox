// Access required DOM elements
const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");
const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

// Function to get selected flags
function getFlags() {
  let flags = "";
  if (globalFlag.checked) flags += "g";
  if (caseInsensitiveFlag.checked) flags += "i";
  return flags;
}

// Event listener for the test button
testButton.addEventListener("click", () => {
  const pattern = regexPattern.value;
  const testText = stringToTest.innerHTML;
  const flags = getFlags();

  let resultText = "no match";
  let highlightedText = testText;

  try {
    const regex = new RegExp(pattern, flags);
    const matches = testText.match(regex);

    if (matches) {
      // Highlight all matches
      highlightedText = testText.replace(regex, (match) => {
        return `<span class="highlight">${match}</span>`;
      });

      // Display matched text
      resultText = Array.isArray(matches) ? matches.join(", ") : matches;
    }
  } catch (error) {
    resultText = "Invalid regex";
  }

  // Update the DOM
  stringToTest.innerHTML = highlightedText;
  testResult.textContent = resultText;
});