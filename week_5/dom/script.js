const header = document.querySelector("header");
const backButton = document.querySelector('#back_to_top');
const mobButton = document.querySelector('mob_button');
const nav = document.querySelector('nav');
const links = document.querySelectorAll('nav ul li a');


window.onscroll = function () {
    scrollFunction();
}

const scrollFunction = () =>{
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 20){
        header.classList.add('bg');
        backButton.style.display = 'block';
    }
    else{
        header.classList.remove('bg');
        backButton.style.display = 'none';
    }
    };

    const getToTop = () =>{
        console.log('clicked');
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    const mobMenu = () =>{
        
        if(nav.classList.contains('responsive')){
            nav.classList.remove('resposive');
            document.body.style.overflow = 'hidden';
        }
        else{
            nav.classList.add('responsive');
        }

    };
    
    for(const link of links){
        link.addEventListener('click',mobMenu);
    }



backButton.addEventListener('click',getToTop);
mobButton.addEventListener('click', mobMenu);

