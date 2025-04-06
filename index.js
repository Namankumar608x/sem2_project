// Fetch and display Main Page news
async function fetchMainPageNews() {
    try {
        const response = await fetch("http://localhost:8080/api/v1/news/main-page");
        if (!response.ok) {
            throw new Error("Failed to fetch main page news.");
        }
        const data = await response.json();

        displayMainPageNews(data.slice(0, 2), "main-page-container-1");
        displayMainPageNews(data.slice(2, 6), "main-page-container-2");
        displayMainPageNews(data.slice(6, 12), "main-page-container-3");
        displayMainPageNews(data.slice(12, 16), "main-page-container-4");
        displayMainPageNews(data.slice(16, 20), "main-page-container-5");

    } catch (error) {
        console.error("Error fetching main page news:", error);
    }
}

function displayMainPageNews(newsArray, containerId) {
    const newsContainer = document.getElementById(containerId);
    newsContainer.innerHTML = ""; 

    newsArray.forEach((news) => {
        const newsCard = `
            <div class="col">
                <div class="card h-100 shadow-sm">
                    <img src="${news.image}" class="card-img-top" alt="${news.title}" />
                    <div class="card-body">
                        <h5 class="card-title">${news.title}</h5>
                        <p class="card-text">${news.content.substring(0, 150)}...</p>
                        <p class="text-muted"><strong>Published on:</strong> ${new Date(news.date_published).toLocaleDateString()}</p>
                        <p class="text-muted"><strong>Tags:</strong> ${news.tags.join(", ")}</p>
                    </div>
                </div>
            </div>
        `;
        newsContainer.innerHTML += newsCard;
    });
}

// Optional utility function (unused here but maybe useful later)
function distributeNews(newsArray, containerId, columnsCount = 3) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error("Container not found:", containerId);
        return;
    }

    container.innerHTML = "";

    const columns = Array.from({ length: columnsCount }, () => {
        const col = document.createElement("div");
        col.classList.add("news-column");
        container.appendChild(col);
        return col;
    });
}

document.addEventListener("DOMContentLoaded", fetchMainPageNews);


// Sidebar and navbar toggles
function toggleSearchBar() {
    let searchSidebar = document.getElementById("searchSidebar");
    searchSidebar.classList.toggle("open");
}

function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
}

document.getElementById('hamburger').addEventListener('click', function () {
    var navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});
