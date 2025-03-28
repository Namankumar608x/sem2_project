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
        displaySportsNews(data.slice(16, 20), "sports-container-4");
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

document.addEventListener("DOMContentLoaded", fetchSportsNews);
