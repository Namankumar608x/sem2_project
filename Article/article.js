async function fetchArticle() {
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get("id");
  
    if (!articleId) {
      document.getElementById("article-container").innerHTML = "<p>Article not found.</p>";
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:8080/api/v1/news/entertainment/${articleId}`);
      const article = await response.json();
  
      document.getElementById("article-container").innerHTML = `
        <h1>${article.title}</h1>
        <img src="${article.image}" alt="${article.title}" />
        <p><strong>Published:</strong> ${new Date(article.date_published).toLocaleDateString()}</p>
        <p>${article.content}</p>
        <p><strong>Tags:</strong> ${article.tags.join(', ')}</p>
      `;
    } catch (error) {
      document.getElementById("article-container").innerHTML = "<p>Error loading article.</p>";
      console.error("Error fetching article:", error);
    }
  }
  
  document.addEventListener("DOMContentLoaded", fetchArticle);
  