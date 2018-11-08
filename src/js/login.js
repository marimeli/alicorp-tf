//Función que sirve para monitorizar el estado de autentificación
// window.onload = () => {
//   //Listener en tiempo real 
//   auth.onAuthStateChanged((user) => {
//     if (user) {
//       window.location.href = "./index.html"
//       console.log('Usuario logueado');
//    /*    logoutButton.classList.remove('hide'); */
//     } else {
//       console.log('Usuario NO logueado');
//    /*    logoutButton.classList.add('hide'); */
//     }
//   });
// };

//********REGISTER***********

//  Función para guardar datos de usuario en Firebase 
window.wrtiteDataFirebase = () => {
  const codeId = codeRegister.value;
  const fullName = nameRegister.value;
  const id = dniRegister.value;
  const mail = emailRegister.value;
  /* const pass = passwordRegister.value; */
  /*   event.preventDefault(); */
  if (codeId !== '' && fullName !== '' && id !== '' && mail !== '') {
    if (/^[a-zA-Z0-9._-]+@+[a-z]+.+[a-z]/.test(mail)) {
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
          console.log('linea 51' + userKey); //LOUkc2zmfp9dLwSxlRk (el id de visitor)
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
    } else {
      alert('Ingresa un correo válido, por favor')
    }
  } else {
    alert('Completa todos los campos, por favor')
  }
};

window.loginWithFirebase = () => {
  // if (password.value !== '' && dni.value !== ''  ) {
  //   alert('iniciaste sesión');
  window.location.href = "../index.html"
  // }else{
  //   alert('complete todos los campos vacios');
  // }
};

window.logoutWithFirebase = () => {
  alert("hola")
  window.location.href = 'views/login.html';
};

