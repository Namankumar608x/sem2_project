function openart(id) {
 
  window.location.href = `../article.html?category=Technology&id=${id}`;
}
async function fetchTechnologyNews() {
    try {
      const response = await fetch("http://localhost:8080/api/v1/news/technology");
      const data = await response.json();
      displayTechnologyNews(data.slice(0, 4), "tech-container-1");
      displayTechnologyNews(data.slice(4, 8), "tech-container-2");
      displayTechnologyNews(data.slice(8, 12), "tech-container-3");
      displayTechnologyNews(data.slice(12, 16), "tech-container-4");
      displayTechnologyNews(data.slice(16, 20), "tech-container-5");
      displayTechnologyNews(data.slice(20, 24), "tech-container-6");
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
          <a href="../article.html?category=technology&id=${news._id}" style="text-decoration: none; color: black;">
            <img src="${news.image}" class="card-img-top" alt="${news.title}" />
            <div class="card-body">
              <h5 class="card-title">${news.title}</h5>
            
            
              <p class="text-muted">${new Date(news.date_published).toLocaleDateString('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
}).replace(/ /g, '-')}</p>

              </a>
            </div>
          </div>
        </div>`;
    });
  }
  
  document.addEventListener("DOMContentLoaded", fetchTechnologyNews);
  

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