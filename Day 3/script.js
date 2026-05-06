const hamburger = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
const heroBtn = document.getElementById('hero-btn');
heroBtn.addEventListener('click', () => {
    heroBtn.style.backgroundColor = '#510bd3';

    setTimeout(() => {
        heroBtn.style.backgroundColor = '#005F73';
    }, 1000);
}); 

heroBtn.addEventListener('dblclick', () => {
    heroBtn.style.transform = 'scale(1.5)';
    heroBtn.style.transition = '0.7s';

    setTimeout(() => {
        heroBtn.style.transform = 'scale(1)';
    }, 1000);
});

heroBtn.addEventListener('mouseover', () => {
    heroBtn.style.backgroundColor = '#0a9396';
}   );

heroBtn.addEventListener('mouseout', () => {
    heroBtn.style.backgroundColor = '#005F73';
});     

heroBtn.addEventListener('mousedown', () => {
    heroBtn.style.transform = 'scale(0.9)';
    heroBtn.style.transition = '0.1s';
});

heroBtn.addEventListener('mouseup', () => {
    heroBtn.style.transform = 'scale(1)';
});         

heroBtn.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    alert('Right-click is disabled on this button!');
}   );      

heroBtn.addEventListener('wheel', (e) => {
    if (e.deltaY < 0) {
        heroBtn.style.transform = 'scale(1.2)'; 
    } else {
        heroBtn.style.transform = 'scale(0.8)'; 
    }   
    heroBtn.style.transition = '0.3s';

    setTimeout(() => {
        heroBtn.style.transform = 'scale(1)';
    }, 300);    
}); 

heroBtn.addEventListener('mouseenter', () => {
    heroBtn.style.backgroundColor = '#94d2bd';
});

heroBtn.addEventListener('mouseleave', () => {
    heroBtn.style.backgroundColor = '#005F73';
}); 

heroBtn.addEventListener('mousemove', () => {
    const randomColor = `hsl(${Math.random() * 360}, 70%, 50%)`;
    heroBtn.style.backgroundColor = randomColor;
}); 

heroBtn.addEventListener('keydown', () => {
    heroBtn.style.backgroundColor = '#ee9b00';
});

heroBtn.addEventListener('keyup', () => {
    heroBtn.style.backgroundColor = '#005F73';
}); 

heroBtn.addEventListener('keypress', () => {
    heroBtn.style.backgroundColor = '#f9c74f';
});