let paraArr=document.getElementsByTagName('p');
let wishListMovie=localStorage.getItem("The Avengers")
let container=document.getElementById('container')
let j=0;

for(let i=0;i<localStorage.length;i++)
{
    console.log(localStorage.key(i));
    j=JSON.parse(localStorage.getItem(localStorage.key(i)))
    console.log(j);
    let div=document.createElement('div')
    div.setAttribute('class','list')
    div.innerHTML=`
    <img src="${j[2]}" alt="">
    <div class="movie-list">
    <p>${localStorage.key(i)}</p>
    <p>${j[0]}</p>
    <p>${j[1]}</p>
    </div>
    `;
    container.appendChild(div)
}
if(j===0)
{
    let div=document.createElement('div')
    div.setAttribute('class','list')
    div.innerHTML="<h1>You have no movie in your wishlist</h1>"
    container.appendChild(div)
}
