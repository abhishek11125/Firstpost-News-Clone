let getData= async()=>{
  let res=await fetch(`https://newsapi.org/v2/everything?q=india&from=2022-07-27&sortBy=publishedAt&pagesize=10&apiKey=2b7bcb9907d246cd8cfbabb9967e29e1`);
  let data=await res.json();
  data=data.articles;
  console.log(data);
  append(data);
  append_most_read(data);
}
getData();


let append=(data)=>{
    let container=document.getElementById("news");
    data.forEach(el=> {
      let div=document.createElement("div");
      let image=document.createElement("img");
      image.className="news_image";
      image.src=el.urlToImage;
      let title=document.createElement("h2");
      title.innerText=el.title;
      let description=document.createElement("p");
      description.innerText=el.description;
      div.append(image,title,description);
      container.append(div);
    });
}


let append_most_read=(data)=>{
  let container=document.getElementById("most_read");
 data.forEach((el)=>{
  let div=document.createElement("div");
  let title=document.createElement("h3");
  title.innerText=el.title;
  let desc=document.createElement("p");
  desc.innerText=el.description;
  div.append(title,desc);
  container.append(div);
 });
}


let display_crausel=()=>{
  const images=document.querySelectorAll(".car_img");
  // console.log(images[0]);
  // images[0].style.display='none';
  let i=0;
  setInterval(function(){
  if(i==0){
    images[i].style.display='block';
  }
  else if(i==images.length){
   images[i-1].style.display='none';
   images[0].style.display='block';
   i=0;
  }
  else{
    images[i-1].style.display='none';
    images[i].style.display='block';



  }
  i++;
  
  
  },2000);

}
display_crausel();

// 390ea7d323fe4cae8555e826371d2f0d
// https://newsapi.org/v2/everything?q=india&from=2022-07-27&sortBy=publishedAt&pagesize=10&apiKey=2b7bcb9907d246cd8cfbabb9967e29e1