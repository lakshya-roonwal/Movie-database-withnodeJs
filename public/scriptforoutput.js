console.log("hello world")
let wishlistIcon=document.getElementById('wishlist-icon');
wishlistIcon.addEventListener('click',()=>{
    let a=wishlistIcon.classList.toggle('fas');
    let valueArr=JSON.stringify([document.getElementsByTagName('p')[2].childNodes[1].data,document.getElementsByTagName('p')[6].childNodes[1].data,document.getElementsByTagName('img')[0].src]);
    console.log(valueArr);
    console.log(document.getElementsByTagName('p')[1].childNodes[1])
    if(a)
    {
        localStorage.setItem(document.getElementsByTagName('p')[1].childNodes[1].data,valueArr)
    }
    else
    {
        localStorage.removeItem(document.getElementsByTagName('p')[1].childNodes[1].data);
    }
})


// iske code me bhot changes krne h 
// Sabse phle to aesa krna hoga ki har bar jab bhi koi movie wishilst me dale to push ho jae --- matlab har movie k lei alg se key value pair bn jai
// or phir fetch krte time un pr for loop se sare nikal le or javascript se element create kr kr ke unme data dal dia jae