let buffer = "";

const screen = document.querySelector(".screen");

function handleClick(event) {
  if (buffer === "") {
    buffer = event;
  } else {
    buffer += event;
  }
  render();
}

function handleKeyDown(event) {
  const keyPressed = event.key.toUpperCase();
  if (
    keyPressed === "W" ||
    keyPressed === "A" ||
    keyPressed === "S" ||
    keyPressed === "D"
  ) {
    // Add pressed key to buffer
    buffer += keyPressed;
    render();
  }
}

function render() {
  if (buffer.length > 7) {
    buffer = buffer.slice(1);
  }
  screen.innerText = buffer;
}

function init() {
  document
    .querySelector(".buttons")
    .addEventListener("click", function (event) {
      handleClick(event.target.innerText);
    });
  document.addEventListener("keydown", handleKeyDown);
}

init();
