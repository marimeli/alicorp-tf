document.addEventListener('DOMContentLoaded', function () {
  M.AutoInit();
});


document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});


document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.carousel');
  var instance = M.Carousel.init(elems, {
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
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', () => {
    for (let x = 0; x < section.length; x++) {
      if (i === x) {
        section[x].style.display = 'block'
      } else if (i > x) {
        let z = i - 5;
        if (z == x) {
          console.log(x)
          section[x].style.display = 'block'
        }
        else {
          section[x].style.display = 'none'
        }
      } else {
        section[x].style.display = 'none'
      }
    }

  }
  )
}


/* BUSCADOR */
const searcher = document.getElementById('searcher');
//Creando objeto options 
const options = {
  orderBy: 'name',
  orderDirection: 'ASC', 
  search: ''
};


searcher.addEventListener('keyup', (e) => {
  options.search = searcher.value;
 console.log(searcher.value);
});

/* FILTER */
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}