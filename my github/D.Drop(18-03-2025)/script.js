// Get elements
const thumbnails = document.querySelectorAll(".thumbnail");
const dropZone = document.getElementById("dropZone");
const preview = document.getElementById("preview");

// Add event listeners for dragstart on each thumbnail
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text", e.target.src);
    });
});

// Prevent default behavior to allow drop
dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.classList.add("active"); // Change drop zone color when an item is dragged over it
});

// Handle the drop action
dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.classList.remove("active"); // Reset background color

    // Get the dropped image URL and set it as the preview image
    const imgSrc = e.dataTransfer.getData("text");
    preview.innerHTML = `<img src="${imgSrc}" alt="Preview">`;
});
