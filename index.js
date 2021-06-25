let newsCont=document.getElementById("news")
async function showTopNews() {
    try {
        let res = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=c0788411c9104dfba835b23653184e46')
        let news = await res.json()
        newsData = news.articles.slice(0, 10)
        newsCont.innerHTML = null;
        let h1 = document.createElement("h1");
        h1.innerHTML = "Top News of the Week"
        newsCont.append(h1)
        newsData.forEach(function (n) {
            let div=document.createElement("div")
            let h3=document.createElement("h3")
            h3.innerText = n.title
            let img=document.createElement("img")
            img.src = n.urlToImage;
            let date=document.createElement("p")
            date.innerHTML = `Published At:  ${n.publishedAt}`
            let desc=document.createElement("p")
            desc.innerHTML = n.description
            imgDiv = document.createElement("div")
            imgDiv.append(img)
            contentDiv=document.createElement("div")
            contentDiv.append(h3, date, desc)
            div.append(imgDiv, contentDiv)
            newsCont.append(div)
        })
    }
    catch (e) {
        console.log('e:', e)
        
    }
}

showTopNews()