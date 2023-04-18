let menu= document.querySelector('#menu-bar');
let nav = document.querySelector('nav');

menu.onclick = () => {
menu.classList.remove('fa fa-times');
nav.classList.remove('active');
}


// window.onscroll = () =>{
//     menu.classList.remove('fa fa-times');
//     nav.classList.remove('active');

//     if(window.scroll   >60){
//         document.querySelector('#scroll').classList.add('active');
//     }else{
//         document.querySelector('#scroll').classList.remove('active');
//     }


// } 