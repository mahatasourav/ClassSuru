// navbar active item underline
const navlinks = document.querySelectorAll('nav a');

navlinks.forEach(link=>{
    link.addEventListener('click', ()=>{
        navlinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');

    })
})

  let screenWidth = window.innerWidth;
    window.addEventListener('resize', ()=>{
        
       let screenWidthRe = window.innerWidth;
       screenWidth = screenWidthRe;
        
   });

    console.log('width is :'+ screenWidth);

//   for drop-down navbar start

const triggerElement = document.querySelector('.drop-down');
const targateElement1 = document.querySelector('.navbar');
const targateElement2 = document.querySelector('.cross');
triggerElement.addEventListener("click",()=> {

    if (screenWidth < 780) {
     
        targateElement1.style.backgroundColor = ' rgb(154, 154, 228,0.9)';
       
        targateElement1.style.display = 'block';
    targateElement2.style.display = 'block';
    triggerElement.style.display = 'none';
   
    }
   
})
targateElement2.addEventListener("click",()=>{
    targateElement1.style.display = 'none';
    triggerElement.style.display = 'block';
})

// about-dropdown-menu starts
const triggerAboutMain = document.querySelector('.about-trigger-main');
const triggerAbout = document.querySelector('.about-trigger');

const targateAbout = document.querySelector('.about-dropdown-menu');

triggerAboutMain.addEventListener("mouseover",()=>{
    targateAbout.style.display = 'flex';
    if (screenWidth < 780) {
     triggerAboutMain.style.height = '250px';
     triggerAboutMain.style.alignItems =' fles-start';

   
    }
});

triggerAboutMain.addEventListener("mouseout",()=>{
    targateAbout.style.display = 'none';
    if (screenWidth < 780) {
        triggerAboutMain.style.height = '50px';
        triggerAboutMain.style.alignItems =' fles-start';
   
      
       }
});

