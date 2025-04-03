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
                    <img src="${news.image}" class="card-img-top" alt="${news.title}" />
                    <div class="card-body">
                        <h5 class="card-title">${news.title}</h5>
                        <p class="card-text">${news.content.substring(0, 150)}...</p>
                        <p class="text-muted"><strong>Published on:</strong> ${new Date(news.date_published).toLocaleDateString()}</p>
                        <p class="text-muted"><strong>Tags:</strong> ${news.tags.join(", ")}</p>
                        <a href="${news.url}" target="_blank" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        `;
        newsContainer.innerHTML += newsCard;
    });
}

// Run fetchWorldNews when the document loads
document.addEventListener("DOMContentLoaded", fetchWorldNews);
