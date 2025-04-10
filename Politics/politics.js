function openart(id) {
    window.location.href = `../article.html?category=politics&id=${id}`;
  }
  
  async function fetchPoliticsNews() {
    try {
      const response = await fetch("http://localhost:8080/api/v1/news/politics");
      if (!response.ok) {
        throw new Error("Failed to fetch politics news.");
      }
      const data = await response.json();
      displayPoliticsNews(data.slice(0, 4), "politics-container-1");
      displayPoliticsNews(data.slice(4, 8), "politics-container-2");
      displayPoliticsNews(data.slice(8, 12), "politics-container-3");
      displayPoliticsNews(data.slice(12, 16), "politics-container-4");
      displayPoliticsNews(data.slice(16, 20), "politics-container-5");
      displayPoliticsNews(data.slice(20, 24), "politics-container-6");
  
    } catch (error) {
      console.error("Error fetching politics news:", error);
    }
  }
  
  function displayPoliticsNews(newsArray, containerId) {
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
            <a href="../article.html?category=politics&id=${news._id}" style="text-decoration: none; color: black;">
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
        </div>
      `;
      newsContainer.innerHTML += newsCard;
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    fetchPoliticsNews();
  
    // ✅ Handle profile + logout
    const user = JSON.parse(localStorage.getItem("user"));
    const authButtonsDiv = document.getElementById("authButtons");
  
    if (user && user.username) {
      authButtonsDiv.innerHTML = `
        <div class="profile">
          <img src="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg" alt="Profile" class="profile-icon" />
          <p class="username">${user.username}</p>
          <button class="logout-btn" id="logoutBtn">Logout</button>
        </div>
      `;
  
      const logoutBtn = document.getElementById("logoutBtn");
      logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("user");
        window.location.href = "../Sign_in/signin.html";
      });
    }
  });
  
  // Hamburger and sidebar toggles
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
  