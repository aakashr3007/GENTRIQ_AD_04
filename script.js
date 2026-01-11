const apiKey = "87531ce23cba4cfcbae5855f7a99bdfb";
const newsContainer = document.getElementById("news-container");

// Auto-load latest news
window.onload = () => {
    getNews("general");
};

function getNews(category) {
    newsContainer.innerHTML = "Loading news...";

    fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            newsContainer.innerHTML = "";
            data.articles.forEach(article => {
                const newsCard = `
                    <div class="news-card">
                        <img src="${article.urlToImage || 'https://via.placeholder.com/300'}">
                        <h3>${article.title}</h3>
                        <p>${article.description || "No description available."}</p>
                    </div>
                `;
                newsContainer.innerHTML += newsCard;
            });
        })
        .catch(error => {
            newsContainer.innerHTML = "Failed to load news.";
            console.error(error);
        });
}
