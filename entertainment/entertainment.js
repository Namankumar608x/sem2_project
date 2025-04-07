function openart(id) {
  window.location.href = `../article.html?category=entertainment&id=${id}`;
}

async function fetchEntertainmentNews() {
  try {
    const response = await fetch("http://localhost:8080/api/v1/news/entertainment");
    const data = await response.json();
    displayEntertainmentNews(data.slice(0, 4), "entertainment-container-1");
    displayEntertainmentNews(data.slice(4, 8), "entertainment-container-2");
    displayEntertainmentNews(data.slice(8, 12), "entertainment-container-3");
    displayEntertainmentNews(data.slice(12, 16), "entertainment-container-4");
    displayEntertainmentNews(data.slice(16, 20), "entertainment-container-5");
    displayEntertainmentNews(data.slice(20, 24), "entertainment-container-6");
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
          <a href="../article.html?category=entertainment&id=${news._id}" style="text-decoration: none; color: black;">
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

document.addEventListener("DOMContentLoaded", () => {
  fetchEntertainmentNews();

  // ✅ Profile and logout setup
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

    document.getElementById("logoutBtn").addEventListener("click", () => {
      localStorage.removeItem("user");
      window.location.href = "../Sign_in/signin.html";
    });
  }
});

// Sidebar and search toggle
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
