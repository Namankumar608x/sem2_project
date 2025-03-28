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
<<<<<<< HEAD


const newsArticles= [
    {
        title: "Tamil Nadu gets more MGNREGS funds than more populous Uttar Pradesh, Centre claims in Lok Sabha",
        imageUrl: "https://th.bing.com/th?id=OVFT.I9NVlgQsyZvwZyCdNfJ6iC&pid=News&w=300&h=186&c=14&rs=2&qlt=90&dpr=1.6",
        link: "#",
          date: "March 25, 2024"
    },
    {
        title: "India comedian won't apologise for joke that angered politicians",
        imageUrl: "https://ichef.bbci.co.uk/news/1024/cpsprodpb/f1b7/live/6c8dd830-0934-11f0-b14d-cb8d96018dd0.jpg.webp",
        link: "#",
         date: "March 24, 2024"
    },
    {
        title: "Why Elon Musk's Grok is kicking up a storm in India",
        imageUrl: "https://ichef.bbci.co.uk/news/1024/cpsprodpb/8eb5/live/66467f50-0564-11f0-b8d2-617de79a7a08.jpg.webp",
        link: "https://www.bbc.com/news/articles/cd65p1pv8pdo",
          date: "March 25, 2024"
    },
    {
        title: "Couple Deported To Colombia After 35 Years In US, Leaving Daughters Shocked",
        imageUrl: "https://c.ndtvimg.com/2025-01/3l2q1mm_deportations-_625x300_25_January_25.jpeg?im=FeatureCrop,algorithm=dnn,width=773,height=435",
        link: "#",
          date: "March 25, 2024"
    },
    {
        title: "India and New Zealand relaunch free trade talks after a decade",
        imageUrl: "https://ichef.bbci.co.uk/news/480/cpsprodpb/5283/live/d8cb98e0-031a-11f0-b50e-9d086302645f.jpg.webp",
        link: "#",
        date: "March 25, 2024"
    }
];
const featuredNewsArticles = [
    {
        title: "Sanjiv Goenka Breaks Silence Amid Buzz Over Chat With Rishabh Pant After Loss vs DC",
        imageUrl: "https://c.ndtvimg.com/2025-03/hm5cdheg_sc_625x300_25_March_25.jpeg?im=FitAndFill,algorithm=dnn,width=806,height=605",
        link: "https://www.bbc.com/news/articles/cd65p1pv8pdo",
        date: "March 25, 2024"
    },
    {
        title: "Belgium Confirms Mehul Choksi In Country, Says Aware Of Extradition Request",
        imageUrl:"https://c.ndtvimg.com/2019-03/ogks0jm_mehul-choksi-twitter_625x300_22_March_19.jpg?downsize=773:435",
        link: "https://www.ndtv.com/world-news/mehul-choksi-in-belgium-attach-great-importance-to-case-belgian-ministry-8010108#pfrom=home-ndtv_topscroll_Imagetopscroll",
        date: "March 25, 2024"
    }
];

const featuredNewsArticles_2=[
    {
       
        title: "Shashi Tharoor recites poem in Parliament to critique taxation",
        imageUrl: "https://th-i.thgim.com/public/todays-paper/tp-national/zcy3ar/article69370942.ece/alternates/LANDSCAPE_1200/TH24-SREEPARNA-GBEE5JPMU.3.jpg.jpg",
        link: "https://www.thehindu.com/news/national/shashi-tharoor-recites-poem-in-parliament-to-critique-taxation/article69372137.ece",
        date: "March 25, 2025"
    },
    {
        title: "The ‘Great Abandonment’ of Afghanistan",
        imageUrl: "https://th-i.thgim.com/public/incoming/fjs9p3/article69374155.ece/alternates/LANDSCAPE_1200/AFP_36Z8772.jpg",
        link: "https://www.thehindu.com/opinion/lead/the-great-abandonment-of-afghanistan/article69374155.ece",
        date: "March 26, 2025"
    },
    {
        title: "India, China may seek to meddle in election: Canada",
        imageUrl: "https://th-i.thgim.com/public/incoming/4ie9c9/article69372170.ece/alternates/LANDSCAPE_1200/2025-03-14T184135Z_2086247361_RC21DDA4YXPD_RTRMADP_3_USA-TRUMP-TARIFFS-CANADA.JPG",
        link: "https://www.thehindu.com/news/international/india-china-may-seek-to-meddle-in-election-canada/article69372120.ece",
        date: "March 25, 2025"
    },
    {
        title: "Tamil Nadu’s sex ratio at birth makes steady progress",
        imageUrl: "https://th-i.thgim.com/public/incoming/7t8cpe/article69339133.ece/alternates/LANDSCAPE_1200/IMG_1693_24_1_2021_21_20_4_1_T89R2P2H.jpg",
        link: "https://www.thehindu.com/news/cities/chennai/tamil-nadus-sex-ratio-at-birth-makes-steady-progress/article69334064.ece",
        date: "March 22, 2025"
    },
    {
       
        title: "Shashi Tharoor recites poem in Parliament to critique taxation",
        imageUrl: "https://th-i.thgim.com/public/todays-paper/tp-national/zcy3ar/article69370942.ece/alternates/LANDSCAPE_1200/TH24-SREEPARNA-GBEE5JPMU.3.jpg.jpg",
        link: "https://www.thehindu.com/news/national/shashi-tharoor-recites-poem-in-parliament-to-critique-taxation/article69372137.ece",
        date: "March 25, 2025"
    },
    {
        title: "The ‘Great Abandonment’ of Afghanistan",
        imageUrl: "https://th-i.thgim.com/public/incoming/fjs9p3/article69374155.ece/alternates/LANDSCAPE_1200/AFP_36Z8772.jpg",
        link: "https://www.thehindu.com/opinion/lead/the-great-abandonment-of-afghanistan/article69374155.ece",
        date: "March 26, 2025"
    },
    {
        title: "India, China may seek to meddle in election: Canada",
        imageUrl: "https://th-i.thgim.com/public/incoming/4ie9c9/article69372170.ece/alternates/LANDSCAPE_1200/2025-03-14T184135Z_2086247361_RC21DDA4YXPD_RTRMADP_3_USA-TRUMP-TARIFFS-CANADA.JPG",
        link: "https://www.thehindu.com/news/international/india-china-may-seek-to-meddle-in-election-canada/article69372120.ece",
        date: "March 25, 2025"
    },
    {
        title: "Tamil Nadu’s sex ratio at birth makes steady progress",
        imageUrl: "https://th-i.thgim.com/public/incoming/7t8cpe/article69339133.ece/alternates/LANDSCAPE_1200/IMG_1693_24_1_2021_21_20_4_1_T89R2P2H.jpg",
        link: "https://www.thehindu.com/news/cities/chennai/tamil-nadus-sex-ratio-at-birth-makes-steady-progress/article69334064.ece",
        date: "March 22, 2025"
    }
    ,
    {
        title: "Tamil Nadu’s sex ratio at birth makes steady progress",
        imageUrl: "https://th-i.thgim.com/public/incoming/7t8cpe/article69339133.ece/alternates/LANDSCAPE_1200/IMG_1693_24_1_2021_21_20_4_1_T89R2P2H.jpg",
        link: "https://www.thehindu.com/news/cities/chennai/tamil-nadus-sex-ratio-at-birth-makes-steady-progress/article69334064.ece",
        date: "March 22, 2025"
    },
    {
       
        title: "Shashi Tharoor recites poem in Parliament to critique taxation",
        imageUrl: "https://th-i.thgim.com/public/todays-paper/tp-national/zcy3ar/article69370942.ece/alternates/LANDSCAPE_1200/TH24-SREEPARNA-GBEE5JPMU.3.jpg.jpg",
        link: "https://www.thehindu.com/news/national/shashi-tharoor-recites-poem-in-parliament-to-critique-taxation/article69372137.ece",
        date: "March 25, 2025"
    }
]
newsArticles.forEach(news => {
    createNewsCard("newsContainer", news.title, news.imageUrl, news.link, news.date);
});

featuredNewsArticles.forEach(news => {
    createNewsCard("featuredNewsContainer", news.title, news.imageUrl, news.link, news.date);
});
 
featuredNewsArticles_2.forEach(news => {
    createNewsCard("featuredNewsContainer_2", news.title, news.imageUrl, news.link, news.date);
});



// News Data
const moreNews = [
    { title: "Donald Trump's Big Move To Change How US Votes, With An India Example", link: "#" },
    { title: "Canada Alleges India Has 'Intent, Capability' To Interfere In Elections", link: "#" },
    { title: "Turkey Detains President's Main Election Rival, Sparking Protests", link: "#" },
    { title: "5 Candidates Elected Uncontested To Telangana Legislative Council", link: "#" },
    { title: "Simultaneous Polls Do Not Trample Constitution: Attorney General To Joint Panel", link: "#" },
    { title: "Canada PM Calls Snap Election Amid Trade War, Trump's Annexation Threats", link: "#" },
    { title: "Donald Trump Says He 'Doesn't Care' If Liberal Party Wins Canada Elections", link: "#" },
    { title: "BJP Sweeps Haryana Local Polls, Wins 9 Of 10, Congress Loses In Hooda Bastion", link: "#" },
    { title: "How Donald Trump Is Inadvertently Helping The Liberals In Canada", link: "#" },
    { title: "Will Work With Birth, Death Registration Bodies To Update Voter List: Poll Body", link: "#" },
    { title: "Voter ID To Be Linked With Aadhaar, Says Poll Body. Congress Reacts", link: "#" },
    { title: "Centre-Right Opposition Wins Greenland Election Amid Trump's Control Pledge", link: "#" }
];

// Sample news data
const newsData = [
    { title: "Donald Trump's Big Move", link: "#" },
    { title: "Canada Alleges India Interference", link: "#" },
    { title: "Turkey Detains Election Rival", link: "#" },
    { title: "5 Candidates Elected Uncontested", link: "#" },
    { title: "BJP Sweeps Haryana Local Polls", link: "#" },
    { title: "Greenland Election Results", link: "#" },
    { title: "Donald Trump's Big Move", link: "#" },
    { title: "Canada Alleges India Interference", link: "#" },
    { title: "Turkey Detains Election Rival", link: "#" },
    { title: "5 Candidates Elected Uncontested", link: "#" },
    { title: "BJP Sweeps Haryana Local Polls", link: "#" },
    { title: "Greenland Election Results", link: "#" },
    { title: "Donald Trump's Big Move", link: "#" },
    { title: "Canada Alleges India Interference", link: "#" },
    { title: "Turkey Detains Election Rival", link: "#" },
    { title: "5 Candidates Elected Uncontested", link: "#" },
    { title: "BJP Sweeps Haryana Local Polls", link: "#" },
    { title: "Greenland Election Results", link: "#" }
    
];

const container = document.querySelector(".moreNewsContainer");

// Create 3 columns
const columns = Array.from({ length: 4}, () => {
    let col = document.createElement("div");
    col.classList.add("news-column");
    col.innerHTML = "<ul></ul>";
    container.appendChild(col);
    return col.querySelector("ul");
});

newsData.forEach((news, i) => {
    columns[i % 4].innerHTML += `<li><a href="${news.link}">${news.title}</a></li>`;
});

// ⚡ Fetch news and populate cards
async function fetchNews(category) {
    try {
      // 🔗 Backend API URL
      const response = await fetch(`http://localhost:8080/api/v1/news/${category}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${category} news`);
      }
  
      // 📚 Parse JSON response
      const data = await response.json();
  
      // 🎯 Get card container dynamically based on category
      const container = document.getElementById(`${category}-news-container`);
  
      // 🔥 Clear previous content
      container.innerHTML = "";
  
      // 📢 Check if data is available
      if (data.length === 0) {
        container.innerHTML = `<p>No ${category} news available.</p>`;
        return;
      }
  
      // 📝 Generate cards for each news item
      data.forEach((item) => {
        const card = `
          <div class="card">
            <h3>${item.title}</h3>
            <p>${item.content}</p>
            <small>🕒 ${new Date(item.date).toLocaleDateString()}</small>
          </div>
        `;
        container.innerHTML += card;
      });
    } catch (error) {
      console.error(`Error fetching ${category} news:`, error);
      document.getElementById(
        `${category}-news-container`
      ).innerHTML = `<p>⚠️ Error loading ${category} news. Please try again later.</p>`;
    }
  }
  
  // 📡 Fetch and display all categories on page load
  document.addEventListener("DOMContentLoaded", () => {
    fetchNews("sports");
    fetchNews("finance");
    fetchNews("technology");
    fetchNews("world");
  });
  
// Fetch and display sports news
async function fetchSportsNews() {
    try {
      const response = await fetch("http://localhost:8080/api/v1/news/sports");
      if (!response.ok) {
        throw new Error("Failed to fetch sports news.");
      }
      const data = await response.json();
      console.log(data); // For testing, logs fetched data
      displaySportsNews(data);
    } catch (error) {
      console.error("Error fetching sports news:", error);
    }
  }
  
  // Function to display news in cards dynamically
  function displaySportsNews(newsArray) {
    const newsContainer = document.getElementById("sports-container"); // Div to display news cards
    newsContainer.innerHTML = ""; // Clear existing data
  
    newsArray.forEach((news) => {
      const newsCard = `
        <div class="card">
          <img src="${news.image}" class="card-img-top" alt="${news.title}">
          <div class="card-body">
            <h5 class="card-title">${news.title}</h5>
            <p class="card-text">${news.content}</p>
            <p><strong>Published on:</strong> ${new Date(news.date_published).toLocaleDateString()}</p>
          </div>
        </div>
      `;
      newsContainer.innerHTML += newsCard;
    });
  }
  
  // Fetch sports news when page loads
  document.addEventListener("DOMContentLoaded", () => {
    fetchSportsNews();
  });
  
=======
distributeNews(newsArticles, "newsContainer", 3);
distributeNews(featuredNewsArticles, "featuredNewsContainer", 2);
distributeNews(featuredNewsArticles_2, "featuredNewsContainer_2", 4);
>>>>>>> abe6ab082e47c7ebaefc61e93ec1354945dcec6f
