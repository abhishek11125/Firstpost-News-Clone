let news = JSON.parse(localStorage.getItem('news'));
console.log(news)

let container = document.getElementById('news');
let getNews = (data)=>{
    let image = document.createElement('img');
    image.src = data.urlToImage;

    let headline = document.createElement('h1');
    headline.innerText = data.title;

    let author = document.createElement('p');
    author.innerText = data.author;

    let desc =  document.createElement('p');
    desc.innerText = data.description + "\n"+data.content;

    container.append(image,headline,author,desc);
}
getNews(news);

let alsoRead= async()=>{
    let  res = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=892d602a6ac34d3681e9586c79270aca&pageSize=5');
    let data = await res.json();
    appendAlsoRead(data.articles);

}
alsoRead()
let cont = document.getElementById('alsocont');
let appendAlsoRead=(data)=>{
    data.forEach((el) => {
        let box = document.createElement('div');
        let box1 = document.createElement('div');
        let box2 = document.createElement('div');
  
        let pic = document.createElement('img');
        pic.src = el.urlToImage
  
        let title = document.createElement('h3');
        title.innerText = el.title; 
  
        let content = document.createElement('p');
        content.innerText = el.description
        box2.append(title,content)
        box1.append(pic);
        box.append(box1,box2)
        cont.append(box);
    });
 
}

import { navbar } from "../components/navbar.js";

document.getElementById('navbar').innerHTML = navbar();

import { footer } from "../components/footer.js";

document.getElementById('footer').innerHTML = footer();