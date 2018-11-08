document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit(); 
  });

  
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });


document.addEventListener('DOMContentLoaded', function() {    
    var elems = document.querySelectorAll('.carousel');
    var instance = M.Carousel.init( elems,{
        fullWidth: true,
        indicators: true,
      });
    // instance.next(3)
    autoplay()   
    function autoplay() {
        const element = document.querySelector('.carousel');
    const instance2 = M.Carousel.getInstance(element);
        instance2.next();
        setTimeout(autoplay, 3000);
    }
  });

const btn = document.getElementsByTagName('button');
const section = document.getElementsByTagName('section');
console.log(section)
    for( let i = 0; i < btn.length; i++){
        btn[i].addEventListener('click', () => {
            for ( let x = 0; x < section.length; x++){
                    if(i === x){
                        section[x].style.display='block'
                        btn[i].disabled;
                    }else{
                        section[x].style.display='none'
              }     
            }
          })
}

  

