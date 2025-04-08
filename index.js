function openart(id) {
    window.location.href = `./article.html?category=main-page&id=${id}`;
  }
  
  async function fetchMainPageNews() {
    try {
      const response = await fetch("http://localhost:8080/api/v1/news/main-page");
      if (!response.ok) {
        throw new Error("Failed to fetch main page news.");
      }
      const data = await response.json();
  
      displayMainPageNews(data.slice(0, 4), "main-page-container-1");
      displayMainPageNews(data.slice(4, 8), "main-page-container-2");
      displayMainPageNews(data.slice(8, 14), "main-page-container-3");
      displayMainPageNews(data.slice(14, 18), "main-page-container-4");
      displayMainPageNews(data.slice(18, 22), "main-page-container-5");
      displayMainPageNews(data.slice(22, 26), "main-page-container-6");
  
    } catch (error) {
      console.error("Error fetching main page news:", error);
    }
  }
  
  function displayMainPageNews(newsArray, containerId) {
    const newsContainer = document.getElementById(containerId);
    newsContainer.innerHTML = "";
  
    newsArray.forEach((news) => {
      const newsCard = `
        <div class="col">
          <div class="card h-100 shadow-sm">
            <a href="./article.html?category=main-page&id=${news._id}" style="color:black; text-decoration:none;">
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
      `;
      newsContainer.innerHTML += newsCard;
    });
  }
  
  function distributeNews(newsArray, containerId, columnsCount = 3) {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error("Container not found:", containerId);
      return;
    }
  
    container.innerHTML = "";
  
    const columns = Array.from({ length: columnsCount }, () => {
      const col = document.createElement("div");
      col.classList.add("news-column");
      container.appendChild(col);
      return col;
    });
  }
  
  function toggleSearchBar() {
    const searchSidebar = document.getElementById("searchSidebar");
    searchSidebar.classList.toggle("open");
  }
  
  function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    // Load news
    fetchMainPageNews();
  
    // Hamburger toggle
    document.getElementById('hamburger')?.addEventListener('click', function () {
      const navLinks = document.getElementById('nav-links');
      navLinks.classList.toggle('active');
    });
  

    const user = JSON.parse(localStorage.getItem("user"));
    const authButtonsDiv = document.getElementById("authButtons");
  
    if (user && user.username) {
      authButtonsDiv.innerHTML = `
        <div class="profile">
          <img src="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg" alt="Profile" class="profile-icon" />
          <p class="username">${user.username}</p>
          <button id="logoutBtn" class="logout-btn">Logout</button>
        </div>
      `;
  
      document.getElementById("logoutBtn").addEventListener("click", () => {
        localStorage.removeItem("user");
        window.location.href = "./Sign_in/signin.html";

      });
    }
  });
  