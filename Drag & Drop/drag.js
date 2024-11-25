let imgBox = document.querySelector(".imgBox");
let whiteBoxes = document.getElementsByClassName("whiteBox");
imgBox.addEventListener("dragstart", (e) => {
  console.log("dragStart  +");
  e.target.className += " hold";
  setTimeout(() => {
    e.target.className = " hide";
  }, 0);
});
imgBox.addEventListener("dragend", (e) => {
  console.log("drageEnd -");
  e.target.className = "imgBox";
});

for (blankBox of whiteBoxes) {
  blankBox.addEventListener("drag", (e) => {
    // e.preventDefault();
    console.log("drag is dragging");
  });

  blankBox.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log("drage OVER Start");
  });
  blankBox.addEventListener("dragenter", (e) => {
    console.log("drage Enter");
    e.target.className += " bg";
  });
  blankBox.addEventListener("dragleave", (e) => {
    console.log("drage Leave");
    e.target.className = "whiteBox";
  });
  blankBox.addEventListener("drop", (e) => {
    console.log("drag DROP");
    e.target.append(imgBox);
  });
}
