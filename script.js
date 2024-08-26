function share() {
  const shareButton = document.getElementById("share-container");
  const popup = document.getElementById("share-popup");

  shareButton.addEventListener("click", () => {
    console.log("yes");
    if (popup.style.display === "flex") {
      popup.style.display = "none";
    } else {
      popup.style.display = "flex";
    }
  });
}

share();
