document.addEventListener("DOMContentLoaded", async () => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    const id = params.get("id");

    if (!category || !id) {
        document.getElementById("article-container").innerHTML = "<p>Error: Missing article parameters.</p>";
        return;
    }

    try {
        const response = await fetch(`http://localhost:8080/api/v1/news/article/${category}/${id}`);
        if (!response.ok) throw new Error("Failed to load article");

        const article = await response.json();

        document.getElementById("article-title").textContent = article.title;
        document.getElementById("article-date").textContent = new Date(article.date_published).toLocaleDateString();
        document.getElementById("article-image").src = article.image;
        document.getElementById("article-image").alt = article.title;
        document.getElementById("article-content").textContent = article.content;
        document.getElementById("article-category").textContent = article.category;

    } catch (err) {
        console.error("Error loading article:", err);
        document.getElementById("article-container").innerHTML = "<p>Article not found.</p>";
    }
});
