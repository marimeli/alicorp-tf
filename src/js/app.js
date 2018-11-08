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

window.printProducts = () => {
  firebase.database().ref('categorias/')
    .on('value', (categoriasRef) => {
      const listCategorias = categoriasRef.val();
      const showProducts = document.getElementById('container-products');
      showProducts.innerHTML = '';
      const arrayCat = Object.keys(listCategorias)      
      arrayCat.forEach((id) => {
        const productsTotal = Object.keys(listCategorias[id]);
        productsTotal.forEach(elem => {
        const itemProducts = listCategorias[id][elem];
        showProducts.innerHTML += `
      <div class="row" id=${id}>
      <div class="col s12 l12">
      <div class="card">
        <div class="card-image">
          <img src="${itemProducts.imagen}" class="image" style="width:50, heigth:10">
        </div>
        <div class="card-content">
          <a class="modal-trigger" href="#modal1">
            <span class="card-title center-align">${itemProducts.producto}</span>
          </a>
          <p class="center-align">${itemProducts.marca}</p>
          <br>
          <p class="center-align">Precio: S/. ${itemProducts.precio}</p>
        </div>

        <div class="card-action center-align">
          <input class="left-align" type="number" min="0" max="${itemProducts.stock}" id="cant">
          <a class="right-align" href="#">
            <i class="material-icons black-text">shopping_cart</i>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Structure -->
  <div id="modal1" class="modal">
    <div class="modal-content center-align">
      <h5>${itemProducts.producto}</h5>
    </div>
    <div class="row details">
      <div class="col s12 l6 center-align">
        <img src="${itemProducts.imagen}">
      </div>
      <div class="col s12 l6 center-align">
        <p class="description">${itemProducts.descripcion}</p>
        <div class="operation">
          <input class="left-align" type="number" min="0" id="cantModal">
          <a class="right-align" href="#">
            <i class="material-icons black-text">shopping_cart</i>
          </a>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Regresar</a>
    </div>
  </div>
      `          
        })
      })
     })
}
