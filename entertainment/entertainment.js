async function fetchEntertainmentNews() {
    try {
      const response = await fetch("http://localhost:8080/api/v1/news/entertainment");
      const data = await response.json();
      displayEntertainmentNews(data.slice(0, 4), "entertainment-container-1");
      displayEntertainmentNews(data.slice(4, 8), "entertainment-container-2");
      displayEntertainmentNews(data.slice(8, 12), "entertainment-container-3");
      displayEntertainmentNews(data.slice(12, 16), "entertainment-container-4");
      displayEntertainmentNews(data.slice(16, 20), "entertainment-container-5");
    } catch (error) {
      console.error("Error fetching entertainment news:", error);
    }
  }
  
  function displayEntertainmentNews(newsArray, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return; 
  
    newsArray.forEach(news => {
      container.innerHTML += `
        <div class="col">
          <div class="card h-100 shadow-sm">
            <img src="${news.image}" class="card-img-top" alt="${news.title}" />
            <div class="card-body">
              <h5 class="card-title">${news.title}</h5>
              <p class="card-text">${news.content.substring(0, 150)}...</p>
              <p class="text-muted"><strong>Published on:</strong> ${new Date(news.date_published).toLocaleDateString()}</p>
              <p class="text-muted"><strong>Tags:</strong> ${news.tags.join(", ")}</p>
               <a href="../article.html?category=entertainment&id=${news._id}" class="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>`;
    });
  }
  
  document.addEventListener("DOMContentLoaded", fetchEntertainmentNews);
  
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
