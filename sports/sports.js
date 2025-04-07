function openart(id) {
 
    window.location.href = `../article.html?category=Sports&id=${id}`;
  }
  async function fetchSportsNews() {
    try {
        const response = await fetch("http://localhost:8080/api/v1/news/sports");
        if (!response.ok) {
            throw new Error("Failed to fetch sports news.");
        }
        const data = await response.json();
        displaySportsNews(data.slice(0, 4), "sports-container-1");
        displaySportsNews(data.slice(4, 8), "sports-container-2");
        displaySportsNews(data.slice(8, 12), "sports-container-3");
        displaySportsNews(data.slice(12, 16), "sports-container-4");
        displaySportsNews(data.slice(16, 20), "sports-container-5");
        displaySportsNews(data.slice(20, 24), "sports-container-6");
    } catch (error) {
        console.error("Error fetching sports news:", error);
    }
}

function displaySportsNews(newsArray, containerId) {
    const newsContainer = document.getElementById(containerId);
    newsContainer.innerHTML = ""; 

    newsArray.forEach((news) => {
        const newsCard = `
            <div class="col">
                <div class="card h-100 shadow-sm">
                <a href="../article.html?category=sports&id=${news._id}" style="text-decoration: none; color: black;">
                    <img src="${news.image}" class="card-img-top" alt="${news.title}" />
                    <div class="card-body">
                        <h5 class="card-title">${news.title}</h5>
                        <p class="text-muted"><strong>Published on:</strong> ${new Date(news.date_published).toLocaleDateString()}</p>
                        <p class="text-muted"><strong>Tags:</strong> ${news.tags.join(", ")}</p>
                         </a>
                    </div>
                </div>
            </div>
        `;
        newsContainer.innerHTML += newsCard;
    });
}

document.addEventListener("DOMContentLoaded", fetchSportsNews);
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
