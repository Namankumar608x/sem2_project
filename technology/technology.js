async function fetchTechnologyNews() {
    try {
        const response = await fetch("http://localhost:8080/api/v1/news/technology");
        if (!response.ok) {
            throw new Error("Failed to fetch technology news.");
        }
        const data = await response.json();
        console.log("Fetched Technology News:", data); // ✅ Debugging: Check if data is fetched
        
        if (!Array.isArray(data) || data.length === 0) {
            console.warn("No technology news found.");
            return;
        }

        displayTechnologyNews(data, "tech-container-1"); // ✅ Make sure `tech-container-1` exists in HTML

    } catch (error) {
        console.error("Error fetching technology news:", error);
    }
}

function displayTechnologyNews(newsArray, containerId) {
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
                    <img src="${news.image || 'default.jpg'}" class="card-img-top" alt="${news.title}" />
                    <div class="card-body">
                        <h5 class="card-title">${news.title}</h5>
                        <p class="card-text">${news.content?.substring(0, 150) || "No content available"}...</p>
                        <p class="text-muted"><strong>Published:</strong> ${new Date(news.date_published).toLocaleDateString()}</p>
                        <a href="${news.url}" target="_blank" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        `;
        newsContainer.innerHTML += newsCard;
    });
}

// Run fetchTechnologyNews when the page loads
document.addEventListener("DOMContentLoaded", fetchTechnologyNews);
