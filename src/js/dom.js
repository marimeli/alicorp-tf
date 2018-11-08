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
const productsSection = document.getElementById('products-cards');

//Contenido de tablero
const tableContent = document.getElementById('table-content');


//Cuando inicia sesión, esta función muestra nueva seccion y oculta la anterior.
const showProductsSection = () => {
    productsSection.style.display = 'block';
    loginSection.style.display = 'none';
    signInSection.style.display = 'none';  
};

//Cuando cierra sesión, esta función muestra la sección de login.
const showLogin = () => {
    productsSection.style.display = 'none';
    loginSection.style.display = 'block';
    signInSection.style.display = 'none';  
};

//Cuando da clic en el botón para registar nueva cuenta, esta función muestra la sección de registro.
const showRegister = () => {
    loginSection.style.display = 'none';
    signInSection.style.display = 'block';
    productsSection.style.display = 'none';
};

//Cuando ingresa a la pestaña, esta función solo muestra la sección de login.
const showOnlyLogin = () => {
    productsSection.style.display = 'none';
    signInSection.style.display = 'none';
    loginSection.style.display = 'block';
};

/* DOM EVENTS */
signinButton.addEventListener('click', wrtiteDataFirebase);
loginButton.addEventListener('click', loginWithFirebase);
/* logoutButton.addEventListener('click', logoutWithFirebase); */

registerButton.addEventListener('click', showRegister);
backButton.addEventListener('click', showLogin);

