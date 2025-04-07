async function fetchFinanceNews() {
    try {
        const response = await fetch("http://localhost:8080/api/v1/news/finance");
        if (!response.ok) {
            throw new Error("Failed to fetch finance news.");
        }
        const data = await response.json();

        // Distribute into five sections
        displayFinanceNews(data.slice(0, 4), "finance-container-1");  
        displayFinanceNews(data.slice(4, 8), "finance-container-2");  
        displayFinanceNews(data.slice(8, 12), "finance-container-3"); 
        displayFinanceNews(data.slice(12, 16), "finance-container-4"); 
        displayFinanceNews(data.slice(16, 20), "finance-container-5"); 
        displayFinanceNews(data.slice(20, 24), "finance-container-6");
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
                <a href="../article.html?category=finance&id=${news._id}" style="text-decoration: none; color: black;">
                    <img src="${news.image}" class="card-img-top" alt="${news.title}" />
                    <div class="card-body">
                        <h5 class="card-title">${news.title}</h5>
                        <p class="card-text">${news.content.substring(0, 150)}...</p>
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

document.addEventListener("DOMContentLoaded", fetchFinanceNews);

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
