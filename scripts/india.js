let getData= async()=>{
  let res=await fetch('https://newsdata.io/api/1/news?apikey=pub_105352bb3cd068df186a290dfc806ba811fde&country=in');
  let data=await res.json();
  data=data.results;
  console.log(data);
}
getData();


let append=(data)=>{
    let container=document.getElementById("news");
    data.forEach(el=> {
        
    });
}