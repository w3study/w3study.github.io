document.addEventListener("DOMContentLoaded", async function () {
    let pages = [];

    // Step 1
    document.querySelectorAll("a").forEach(link => {
        let url = link.getAttribute("href");
        let title = link.innerText || url;
        if (url && !url.startsWith("http")) {
            pages.push({ title, url });
        }
    });
    // Step 2
    let extraPages = ["all_notes.html"];
    for (let page of extraPages) {
        await fetch(page)
            .then(response => response.text())
            .then(html => {
                let tempDiv = document.createElement("div");
                tempDiv.innerHTML = html;
                tempDiv.querySelectorAll("a").forEach(link => {
                    let url = link.getAttribute("href");
                    let title = link.innerText || url;
                    if (url && !url.startsWith("http")) {
                        pages.push({ title, url });
                    }
                });
            })
            .catch(error => console.error(`Error loading ${page}:`, error));
    }

    // Step 3
    window.searchNotes = function () {
        let query = document.getElementById('searchBox').value.toLowerCase();
        let resultsDiv = document.getElementById('searchResults');
        resultsDiv.innerHTML = "";

        if (query === "") return;

        let filteredResults = pages.filter(page =>
            page.title.toLowerCase().includes(query) ||
            page.url.toLowerCase().includes(query)
        );

        if (filteredResults.length === 0) {
            resultsDiv.innerHTML = "<p>No results found</p>";
            return;
        }

        filteredResults.forEach(page => {
            let resultItem = document.createElement("div");
            resultItem.innerHTML = `<a href="${page.url}">${page.title}</a>`;
            resultsDiv.appendChild(resultItem);
        });
    };

    // YEH PART BHI YAHI ANDAR LAO
    const searchBox = document.getElementById('searchBox');
    const searchResults = document.getElementById('searchResults');

    searchBox.addEventListener('input', () => {
        if (searchBox.value.trim() !== '') {
            searchResults.style.display = 'flex';
        } else {
            searchResults.style.display = 'none';
        }
    });
});
