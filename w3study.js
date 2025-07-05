function toggleMenu() {
    const menu = document.getElementById('menu');
    const hamburger = document.querySelector('.hamburger-icon');
    menu.classList.toggle('active');
    
    if (menu.classList.contains('active')) {
        hamburger.innerHTML = '&#10006;'; // Cross icon (X)
    } else {
        hamburger.innerHTML = '&#9776;'; // Three lines icon
    }
}
// search function code
document.addEventListener("DOMContentLoaded", async function () {
    let pages = [];

    // 🔹 Step 1: Sabhi <a> tags ko scan karo (Home Page se)
   document.querySelectorAll("a").forEach(link => {
        let url = link.getAttribute("href");
        let title = link.innerText || url;
        if (url && !url.startsWith("http")) {
            pages.push({ title, url });
        }
    });

    // 🔹 Step 2: Agar "notes.html" ya koi aur index page ho, toh usko bhi scan karo
    let extraPages = ["all_notes.html"]; // Yaha aur bhi pages add kar sakte ho jo aur links contain karte hain
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

    // 🔹 Step 3: Search Function
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
});
const searchBox = document.getElementById('searchBox');
const searchResults = document.getElementById('searchResults');

searchBox.addEventListener('input', () => {
  if (searchBox.value.trim() !== '') {
    searchResults.style.display = 'flex'; // show results
  } else {
    searchResults.style.display = 'none'; // hide if empty
  }
});
