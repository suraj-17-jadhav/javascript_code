 let URL="https://fakestoreapi.com/products";

 let para= document.querySelector("#card")
 let photo=document.querySelector("img")
 let rs=document.querySelector("#paisa")
 const getData = async ()=>{
    let data= await fetch(URL);
    let result= await data.json();
    console.log(result)
    para.innerText=result[4].title
    photo.innerHTML=`<img src=${result[4].image}></img>`
    let cash=`Price = ${result[5].price}`
    rs.innerHTML=cash;
    console.log(result[4].title)
 }
 getData();