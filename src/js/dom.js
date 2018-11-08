const auth = firebase.auth();

//Login inputs
const mail = document.getElementById('email');
const password = document.getElementById('password');

//Register inputs
const emailRegister = document.getElementById('email-register');
const passwordRegister = document.getElementById('password-register');
const dniRegister = document.getElementById('dni-register');
const codeRegister = document.getElementById('code-register');
const nameRegister = document.getElementById('name-register');

//Botones
const loginButton = document.getElementById('login-btn');
const registerButton = document.getElementById('register-btn'); 
const signinButton = document.getElementById('signin-btn');
const backButton = document.getElementById('back');
const logoutButton = document.getElementById('logout');

//Secciones
const signInSection = document.getElementById('sign-in'); 
const loginSection = document.getElementById('login')

//Cuando cierra sesión, esta función muestra la sección de login.
const showLogin = () => {
    loginSection.style.display = 'block';
    signInSection.style.display = 'none';
 };

 //Cuando da clic en el botón para registar nueva cuenta, esta función muestra la sección de registro.
const showRegister = () => {
   loginSection.style.display = 'none';
   signInSection.style.display = 'block';
};

/* DOM EVENTS */
signinButton.addEventListener('click', wrtiteDataFirebase);
loginButton.addEventListener('click', loginWithFirebase);
logoutButton.addEventListener('click', logoutWithFirebase);
backButton.addEventListener('click', showLogin);
registerButton.addEventListener('click', showRegister);