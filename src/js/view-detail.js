document.addEventListener("DOMContentLoaded", () => {
    const entryId = new URLSearchParams(window.location.search).get("id");
    if (entryId !== null) {
        loadEntry(entryId);
    }
});

function loadEntry(entryId) {
    const entries = JSON.parse(localStorage.getItem("note-tasks")) || [];
    const entry = entries[entryId];
    
    if (entry) {
        const entryDiv = document.getElementById("entry");
        entryDiv.innerHTML = `
            <h1>${entry.title}</h1>
            <p>${entry.date}</p>
            <p>${entry.content}</p>
        `;
    }
}
