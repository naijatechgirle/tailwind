let asideBtn = document.getElementById('asideBtn');
let navBar = document.getElementById('navBar');
let listStyle = document.getElementsByClassName('listStyle');


let navClickFxn =()=> {
    // listStyle.style.display = 'none'
    
    navBar.style.width == '13rem' ? navBar.style.width == '8rem' : navBar.style.width === '13rem';
    // if(navBar.style.width === 3){
    
    // );

}
asideBtn.addEventListener('click', navClickFxn);