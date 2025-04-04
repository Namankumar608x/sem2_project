async function fetchFinanceNews() {
    try {
        const response = await fetch("http://localhost:8080/api/v1/news/finance");
        if (!response.ok) {
            throw new Error("Failed to fetch finance news.");
        }
        const data = await response.json();

        // Distribute into five sections
        displayFinanceNews(data.slice(0, 4), "finance-container-1");  // Economy
        displayFinanceNews(data.slice(4, 8), "finance-container-2");  // Markets
        displayFinanceNews(data.slice(8, 12), "finance-container-3"); // Startups
        displayFinanceNews(data.slice(12, 16), "finance-container-4"); // Banking
        displayFinanceNews(data.slice(16, 20), "finance-container-5"); // Companies
    } catch (error) {
        console.error("Error fetching finance news:", error);
    }
}

function displayFinanceNews(newsArray, containerId) {
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

document.addEventListener("DOMContentLoaded", fetchFinanceNews);
