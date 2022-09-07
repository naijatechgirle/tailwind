let navBtn = document.getElementById('navBtn');
let navBar = document.getElementById('navBar');
let listStyle = document.getElementsByClassName('listStyle');


let navClickFxn =()=> {
    // listStyle.style.display = 'none'
    navBar.style.width = '85px';

}
navBtn.addEventListener('click', navClickFxn);