document.addEventListener("DOMContentLoaded", function () {
    initializeLibrary();
    loadLibrary();
});

function initializeLibrary() {
    if (!localStorage.getItem("library") || JSON.parse(localStorage.getItem("library")).length === 0) {
        const defaultLibrary = [
            { title: "The Great Gatsby", authorDirector: "F. Scott Fitzgerald", type: "book" },
            { title: "1984", authorDirector: "George Orwell", type: "book" },
            { title: "Inception", authorDirector: "Christopher Nolan", type: "movie" },
            { title: "The Godfather", authorDirector: "Francis Ford Coppola", type: "movie" }
        ];
        localStorage.setItem("library", JSON.stringify(defaultLibrary));
    }
}

function addItem() {
    const title = document.getElementById("title").value.trim();
    const authorDirector = document.getElementById("authorDirector").value.trim();
    const type = document.getElementById("type").value;

    if (title === "" || authorDirector === "") {
        alert("Please enter all details.");
        return;
    }

    const item = { title, authorDirector, type };
    let library = JSON.parse(localStorage.getItem("library")) || [];
    library.push(item);
    localStorage.setItem("library", JSON.stringify(library));
    loadLibrary();
}

function loadLibrary() {
    const libraryContainer = document.getElementById("library");
    libraryContainer.innerHTML = "";
    let library = JSON.parse(localStorage.getItem("library")) || [];

    if (library.length === 0) {
        libraryContainer.innerHTML = "<p>No books or movies in the library.</p>";
        return;
    }

    library.forEach((item, index) => {
        const div = document.createElement("div");
        div.classList.add("item");
        div.innerHTML = `<strong>${item.title}</strong> by ${item.authorDirector} (${item.type})
                         <button class='delete-btn' onclick='removeItem(${index})'>Delete</button>`;
        libraryContainer.appendChild(div);
    });
}

function removeItem(index) {
    let library = JSON.parse(localStorage.getItem("library")) || [];
    library.splice(index, 1);
    localStorage.setItem("library", JSON.stringify(library));
    loadLibrary();
}