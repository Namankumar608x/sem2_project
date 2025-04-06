document.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const category = params.get("category");

  if (!id || !category) {
    document.getElementById("article-container").innerHTML = "<p>Invalid article URL.</p>";
    return;
  }

  try {
    const response = await fetch(`/api/v1/news/article/${category}/${id}`);
    const data = await response.json();

    if (response.ok) {
      document.getElementById("article-title").textContent = data.title;
      document.getElementById("article-date").textContent = `Published on: ${new Date(data.date_published).toDateString()}`;
      document.getElementById("article-image").src = data.image;
      document.getElementById("article-content").textContent = data.content;

      // Dynamically set category tag
      document.getElementById("article-category").textContent = data.category;

      // Optional: Change back link to go to category page (e.g., world.html)
      document.getElementById("back-link").href = `${data.category.toLowerCase()}.html`;
    } else {
      document.getElementById("article-container").innerHTML = `<p>${data.message}</p>`;
    }
  } catch (error) {
    document.getElementById("article-container").innerHTML = "<p>Error loading article.</p>";
  }
});
