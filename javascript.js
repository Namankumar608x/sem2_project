function createNewsCard(title, imageUrl, link, date) {
    let card = document.createElement("div");
    card.classList.add("news-card");

    card.innerHTML = `
        <div class="news-card-content" onclick="window.open('${link}', '_blank')">
            <img class="news-image" src="${imageUrl}" alt="${title}">
            <div class="news-text">
                <h5 class="news-title">${title}</h5>
                <p class="news-date">${date}</p>
            </div>
        </div>
    `;

   document.querySelector("card-container").appendChild(card);
};
function distributeNews(newsArray, containerId, columnsCount = 3) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error("Container not found:", containerId);
        return;
    }

    const columns = Array.from({ length: columnsCount }, () => {
        let col = document.createElement("div");
        col.classList.add("news-column");
        container.appendChild(col);
        return col;
    });

    newsArray.forEach((news, index) => {
        let card = createNewsCard(news.title, news.imageUrl, news.link, news.date);
        columns[index % columnsCount].appendChild(card);
    });
}


  document.addEventListener("DOMContentLoaded", () => {
    fetchSportsNews();
  });
