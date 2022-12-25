let toggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu');

toggle.onclick = function(){
    menu.classList.toggle('active');
    console.log(menu);
}

// other form

// toggle.addEventListener('click',()=>{
//     menu.classList.toggle('active');
//     console.log(menu);
// })