
//NAVBAR HERE DOWN:::
const btn= document.getElementById('btn');
const cancel = document.getElementById('cancel');
const mobileMenu = document.getElementById('mobile-menu-offcanvas1');

          

      function closeFunction(){
                  mobileMenu.style.right = "-1000px";
                  btn.style.opacity = "1";
                  cancel.style.opacity = "0";

                  }

          closeFunction();

function openFunction(){
            mobileMenu.style.right = "0px";
            btn.style.opacity = "0";
            cancel.style.opacity = "1";
            }
 
  


//skille section lines................................................


function run(){
          const skillBox = document.querySelector('.skill-display-section');
          const skillLine = skillBox.querySelectorAll('.progress-line');
          

         skillLine.forEach((e) => {
                const dataWidth = +e.getAttribute('data-width');
                let width = 1;

                //here a wanna call skill function at each 30 millseconds.........

                const id = setInterval(skill, 20);
         

                const percent = e.querySelector('.skill-percentage');
                const top = 2;
                
                function skill(){ 
                                if(width >= dataWidth){ 
                                        clearInterval(id)
                                        }
                                else
                                { width ++;
                                  e.style.width  = `${width}` + "%";
                                  e.style.position = 'relative';
                                  
                                  percent.innerHTML = `${width}` + "%"; 
                                  percent.style.position = 'absolute';
                                  percent.style.left = `${width}` + "%";
                                  percent.style.bottom = `${top}` + "vh";

                                }
                

                        }

                });
        }
        //fxn call here down...
      run();     
  
//COUNTER ITEMS HERE DOWN...........................

const counters = document.querySelectorAll('.counter');
const speed = 200;


counters.forEach((counter) => {
                              counter.innerText = '0';
                              const updateCounter = () => {
                                        const target = +counter.getAttribute('data-target');
                                        const c = +counter.innerText;
                                        const increment = target / speed;
        

                                        if (c < target){counter.innerText = Math.ceil(c + increment);

                                                     setTimeout(updateCounter, 1); 
                                                    }

                                      };
                                      updateCounter()


                              }
                );

//SUBMENUS HERE DOWN::::::::::::::::::..........................no longer needed, oz was solved by CSS...............
/*
const smallScreens = document.querySelector('.small-screens');
const offCanvas = smallScreens.querySelector('#mobile-menu-offcanvas1');
const ulBigList = offCanvas.querySelector('ul');
const aLink = ulBigList.querySelectorAll("a");

const subMenu = aLink.querySelector('.mobile-sub-menu');

const doubleAngleRight = aLink.querySelector('.fa-angle-double-right');


aLink.addEventListener('click', (e) => aLink.classList.add('subMenu'), false);
*/

//SLIDER BUTTON HERE DOWN................................................
const lesimages = document.querySelector('.project-display-section');
const testmoniales = document.querySelector('.testimonial-display-slider');


var indexValue = 2;
showImg(indexValue);
showT(indexValue);

function btnSlide(e){ showImg(indexValue += e); }
function testSlide(t){showT(indexValue += t); }

function showT(t){
                const sliders = testmoniales.querySelectorAll('.content');

                if(t > sliders.length){indexValue = 1;}
                if(t < 1){indexValue = sliders.length;}
                
               
                for( let j = 1; j <sliders.length; j++){ sliders[j].style.display = 'none'; }
                
                sliders[indexValue-1].style.display = 'flex';

                }

function showImg(e){
               
                const img = lesimages.querySelectorAll('.project-box-single-item');
                
        
                if(e > img.length){indexValue = 2;}

                if(e < 1){indexValue = img.length;}

                for( let i = 1; i <img.length; i++){  img[i].style.display = 'none'; }

               

                img[indexValue-1].style.display = 'flex';  
                }


             










