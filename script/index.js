//  Crausel effet
$(".images").owlCarousel({
  margin: 100,
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
  },
});

$(".pics").owlCarousel({
  margin:30 ,
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0:{
      items: 1,
      nav: false,
    },
    600:{
      items: 2,
      nav:false,
    },
    1000:{
      items: 3,
      nav:false,
    }
  },
});

// More data

more_data = [
  {
    id: "1",
    headline:
      "BJP's operation lotus 'failed' in Delhi, 53 of 62 AAP MLAs attended meet called by Arvind Kejriwal: Saurabh Bharadwaj",
    desc: "Delhi Chief Minister Arvind Kejriwal today said that he is 'very happy' that not a single MLA of his party has accepted the alleged Rs 20 crore offer from BJP to leave AAP and join them",
  },
  {
    id: "2",
    headline:
      "5G AUCTION IN INDIA: FROM RELIANCE JIO TO BHARTI AIRTEL, WHO BOUGHT WHAT AND FOR HOW MUCH",
    desc: "Reliance Jio emerged as the top bidder in the recently concluded 5G spectrum auction. The service provider bought frequency bands worth Rs 88,078 crore. All in all, about 51.236GHz worth of frequency bands were auctioned for Rs 1.5 lakh crore.",
  },
  {
    id: "3",
    headline:
      "Sonali Phogat death: Goa Police register murder case against two people",
    desc: "Sonali Phogat's brother Rahul Dhaka had earlier claimed that she was murdered. He also said that her family doubts two people, including her personal assistant Sudhir Sangwan",
  },
  {
    id: "4",
    headline:
      "Raju Srivastava health update: Comedian gains consciousness after 15 days",
    desc: "Renowned comedian Raju Srivastava was admitted to AIIMS on 10 August after he experienced chest pain and collapsed while working out at the gym",
  },
  {
    id: "5",
    headline:
      "Bilkis Bano case: SC notice to Centre, Gujarat on plea against remission to 11 convicts",
    desc: "The SC on Thursday issued notice to the Centre and Gujarat government seeking response on a plea challenging the remission to 11 convicts and posted the matter for hearing after two weeks.",
  },
];

let container = document.getElementById("most_read");

let appendMore = (data) => {
  data.forEach((el) => {

    let box = document.createElement("div");
    let box1 = document.createElement("div");
    let box2 = document.createElement("div");


    let id = document.createElement("h1");
    id.innerText = el.id;

    let headline = document.createElement('h3')
    headline.innerText = el.headline;

    let desc = document.createElement('p');
    desc.innerText = el.desc;
    let gap = document.createElement('span');

    box1.append(id,gap);
    box2.append(headline,desc);
    box.append(box1,box2);
    container.append(box);
  });
};

appendMore(more_data);


let cont = document.getElementById('container1');
let getNews = async()=>{
    let res = await fetch('https://newsapi.org/v2/everything?q=india&from=2022-07-26&sortBy=general&apiKey=892d602a6ac34d3681e9586c79270aca&pageSize=10');
    let data = await res.json()
    appendNews(data.articles)
}
let appendNews=(data)=>{
    
    data.forEach((el)=>{
        let box = document.createElement('div');
        box.addEventListener('click',function(){
            localStorage.setItem('news',JSON.stringify(el));
            window.location.href = news.html;
        });
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
    })
}

getNews();

let container2 =document.getElementById('container2');

let getTerending= async()=>{
  let res = await fetch('https://newsapi.org/v2/everything?q=india&from=2022-07-26&sortBy=publishedAt&apiKey=892d602a6ac34d3681e9586c79270aca&pageSize=6')
  let data = await res.json();
  appendTrend(data.articles);

}
getTerending()

let appendTrend=(data)=>{
    data.forEach((el)=>{
      let box = document.createElement('div');
      box.addEventListener('click',function(){
        localStorage.setItem('news',JSON.stringify(el));
        window.location.href = news.html;
    });

      let image = document.createElement('img');
      image.src = el.urlToImage;

      let title = document.createElement('p');
      title.innerText = el.title;

      box.append(image,title);

      container2.append(box);
    })
}
let container3 = document.getElementById('container3');
let sportsData = async()=>{
  let res = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=892d602a6ac34d3681e9586c79270aca&pageSize=10');
  let data = await res.json(); 
  appendSportsNews(data.articles);
}

let appendSportsNews=(data)=>{
    
  data.forEach((el)=>{
      let box = document.createElement('div');
      box.addEventListener('click',function(){
        localStorage.setItem('news',JSON.stringify(el));
        window.location.href = news.html;
    });
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
      container3.append(box);
  })
}

sportsData()

let container4 = document.getElementById('container4');

let entData = async() =>{
  let res = await fetch('https://newsapi.org/v2/everything?q=bollywood&from=2022-07-26&sortBy=publishedAt&apiKey=892d602a6ac34d3681e9586c79270aca&pageSize=6');
  let data = await res.json();
  appendEnt(data.articles);
}

entData()

let appendEnt = (data)=>{
  data.forEach((el)=>{
    let box = document.createElement('div');
    box.addEventListener('click',function(){
      localStorage.setItem('news',JSON.stringify(el));
      window.location.href = news.html;
  });
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
    container4.append(box);
  });
}