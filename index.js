let newsCont=document.getElementById("news")
async function showTopNews() {
    try {
        let res = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=c0788411c9104dfba835b23653184e46')
        let news = await res.json()
        let newsData = news.articles.slice(0, 10)
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
let searchNews;
let searchBtn=document.getElementById("0")
searchBtn.onclick=search

async function search() {
    try {
        var id=Number(this.id)
        // console.log('id:', id)
        newsCont.innerHTML = null;
        let key = document.getElementById("search").value
        let res = await fetch(`https://newsapi.org/v2/everything?q=${key}&apiKey=c0788411c9104dfba835b23653184e46`)
        searchNews= await res.json()
        // console.log('searchNews:', searchNews)
        let page_data = searchNews.articles.slice(id * 5, id * 5 + 5);
        // console.log('page_data:', page_data)
        page_data.forEach(function (n) {
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
        showBtns(Number(this.id))
    }
    catch (e) {
        console.log('e:', e)
        
    }
    
}

function showBtns(id) {
    let originalId = id;
    if (id <= 4) {
        id=4
    }
    let btnDiv = document.createElement("div");
    btnDiv.innerHTML = null;
    btnDiv.setAttribute('id', "btnDiv")
    for (let i = id - 4; i < id + 5; i++){
        let btn=document.createElement("button")
        btn.setAttribute('id', `${i}`)
        btn.innerHTML = i+1
        btn.onclick=search
        btnDiv.append(btn)
    }
    newsCont.append(btnDiv)
    let btn = document.getElementById(`${originalId}`);
    btn.style.backgroundColor = 'yellow'
    let searchBtn = document.getElementsByClassName('searchBtn')
    // console.log('searchBtn:', searchBtn)
    searchBtn[0].style.backgroundColor='green'
    
    
}