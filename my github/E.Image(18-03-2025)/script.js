// Get the preview image element
const preview = document.getElementById("preview");

// Add event listener to the thumbnails container
document.getElementById("thumbnails").addEventListener("click", (e) => {
    // Check if the clicked element is an image
    if (e.target.tagName === "IMG") {
        // Change the preview image to the clicked thumbnail
        preview.src = e.target.src;
    }
});
