async function fetchTechnologyNews() {
    try {
      const response = await fetch("http://localhost:8080/api/v1/news/technology");
      const data = await response.json();
      displayTechnologyNews(data.slice(0, 4), "tech-container-1");
      displayTechnologyNews(data.slice(4, 8), "tech-container-2");
      displayTechnologyNews(data.slice(8, 12), "tech-container-3");
      displayTechnologyNews(data.slice(12, 16), "tech-container-4");
      displayTechnologyNews(data.slice(16, 20), "tech-container-5");
    } catch (error) {
      console.error("Error fetching technology news:", error);
    }
  }
  
  function displayTechnologyNews(newsArray, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";
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
            </div>
          </div>
        </div>`;
    });
  }
  
  document.addEventListener("DOMContentLoaded", fetchTechnologyNews);
  