async function fetchWorldNews() {
    try {
        const response = await fetch("http://localhost:8080/api/v1/news/world");
        if (!response.ok) {
            throw new Error("Failed to fetch world news.");
        }
        const data = await response.json();
        console.log("Fetched World News:", data); // Debugging line to check data

        // Ensure there are enough articles before slicing
        const newsChunks = [0, 4, 8, 12, 16].map(start => data.slice(start, start + 4));

        displayWorldNews(newsChunks[0], "sports-container-1");
        displayWorldNews(newsChunks[1], "sports-container-2");
        displayWorldNews(newsChunks[2], "sports-container-3");
        displayWorldNews(newsChunks[3], "sports-container-4");
        displayWorldNews(newsChunks[4], "sports-container-5");
    } catch (error) {
        console.error("Error fetching world news:", error);
    }
}

function displayWorldNews(newsArray, containerId) {
    const newsContainer = document.getElementById(containerId);
    if (!newsContainer) {
        console.warn(`Container ${containerId} not found.`);
        return;
    }
    newsContainer.innerHTML = ""; 

    newsArray.forEach((news) => {
        const newsCard = `
            <div class="col">
                <div class="card h-100 shadow-sm">
                 <a href="../article.html?category=world&id=${news._id}"  style="text-decoration: none; color: black;">
                    <img src="${news.image}" class="card-img-top" alt="${news.title}" />
                    <div class="card-body">
                        <h5 class="card-title">${news.title}</h5>

                        <p class="text-muted"><strong>Date:</strong> ${new Date(news.date_published).toLocaleDateString()}</p>
                </a>
                    </div>
                </div>
            </div>
        `;
        newsContainer.innerHTML += newsCard;
    });
}

document.addEventListener("DOMContentLoaded", fetchWorldNews);



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
