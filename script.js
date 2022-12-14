const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

const closeBar = document.getElementById('close');

if (bar) {
    
    bar.addEventListener('click', () => {
        console.log('clicking');
        nav.classList.add('active');
    })
}

if (closeBar){
    closeBar.addEventListener('click', () => {
        console.log('clicking');
        nav.classList.remove('active');
    })
}