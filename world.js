import { navbar } from "./components/navbar.js";

document.getElementById('navbar').innerHTML=navbar();

import { footer } from "./components/footer.js";

document.getElementById('footer').innerHTML = footer();


let getData= async()=>{
    let res = await fetch('https://newsapi.org/v2/everything?q=world&from=2022-08-26&to=2022-08-26&sortBy=popularity&apiKey=2b94a156ce1f4a5c8706e74c80e8641c&pageSize=10');
    let data = await res.json();
    appenedData(data.articles)
    console.log(data);
}

getData();

function appenedData(data){

    data.forEach(function (el) {
        let div = document.createElement('div');
        div.addEventListener('click',function(){
            localStorage.setItem('news',JSON.stringify(el));
            window.location.href = 'news.html';
        })

        let image = document.createElement('img')
        image.src = el.urlToImage

        let title = document.createElement('h3')
       title.innerText = el.title

       let desrc = document.createElement('p')
       desrc.innerText = el.description

       div.append(image,title,desrc)
       document.getElementById('news').append(div)
    })

}

