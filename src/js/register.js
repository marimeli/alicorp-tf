//*********REGISTER***********

/* Get elements */
const signUpBtn = document.getElementById('signup');
const dni = document.getElementById('dni');
const code = document.getElementById('code');
const name = document.getElementById('name');
const emailRegister = document.getElementById('email-register');
const passwordRegister = document.getElementById('password-register');
/* const auth = firebase.auth(); */

//Función que sirve para monitorizar el estado de autentificación
window.onload = () => {
  //Listener en tiempo real 
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log('Usuario logueado');
      writeUserData(user.uid, user.displayName, user.email, user.photoURL);
    } else {
      console.log('Usuario NO logueado');
    }
    /* console.log('User > ' + JSON.stringify(user));  *///Imprime datos del usuario
  });
};

//********REGISTER***********

//  Función para guardar datos de usuario en Firebase 
window.wrtiteDataFirebase = () => {
  const codeId = code.value; 
  const fullName = name.value;
  const id = dni.value;
  const mail= emailRegister.value;
  /* const pass = passwordRegister.value; */

  event.preventDefault();
  const dataUser = firebase.database().ref().child('users');
  dataUser.push({
    codeId,
    fullName,
    id,
    mail,
   /*  pass, */
  });

  let ref = firebase.database().ref('/users');
  ref.once('value', (data) => {
    data.forEach(user => {
      let userKey = user.key,
        userX = user.val();
      console.log('linea 33' + userKey); //LOUkc2zmfp9dLwSxlRk (el id de visitor)
      console.log(userX); //es un objeto con las propiedad agregadas
    })
  })
    .then(result => {
      console.log(result);
      alert('Registro exitoso')
    })
    .catch((error) => {
      console.error('Error document: ', error);
      alert('Algo no ha salido bien, inténtelo de nuevo, por favor')
    });
};

/* DOM EVENTS */
signUpBtn.addEventListener('click', wrtiteDataFirebase);



