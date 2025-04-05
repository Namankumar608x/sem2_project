
async function fetchPoliticsNews() {
    try {
        const response = await fetch("http://localhost:8080/api/v1/news/politics");
        if (!response.ok) {
            throw new Error("Failed to fetch politics news.");
        }
        const data = await response.json();
        displayPoliticsNews(data.slice(0, 4), "politics-container-1");
        displayPoliticsNews(data.slice(4, 8), "politics-container-2");
        displayPoliticsNews(data.slice(8, 12), "politics-container-3");
        displayPoliticsNews(data.slice(12, 16), "politics-container-4");
        displayPoliticsNews(data.slice(16, 20), "politics-container-5");

    } catch (error) {
        console.error("Error fetching politics news:", error);
    }
}

function displayPoliticsNews(newsArray, containerId) {
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


document.addEventListener("DOMContentLoaded", fetchPoliticsNews);


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
