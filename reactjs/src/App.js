import { Product } from "./Product.js";
import { UI } from "./UI.js";
import GoogleLogin from 'react-google-login';
// DOM Eventos
document
  .getElementById("product-form")
  .addEventListener("submit", function (e) {
    // Sobreescribe el comportamiento por defecto del form
    e.preventDefault();

    // Obtiene Los Valores De Los Formularios
    const name = document.getElementById("name").value,
      price = document.getElementById("price").value,
      id = document.getElementById("id").value,
      state =document.getElementById("state").value;

    // Crea Nuevo Objeto Producto
    const product = new Product(name, price, id, state);

    // Crea Una Instancia UI
    const ui = new UI();

    // Input Validación de Usuario
    if (name === "" || price === "" || id === "" || state ==="") {
      ui.showMessage("Please Insert data in all fields", "danger");
    }

    // Guarda El Producto
    ui.addProduct(product);
    ui.showMessage("Product Added Successfully", "success");
    ui.resetForm();
  });

document.getElementById("product-list").addEventListener("click", (e) => {
  const ui = new UI();
  ui.deleteProduct(e.target);
  e.preventDefault();
});

// login autenticación Google

function App() {

  const responseGoogle=(response)=>{
    console.log(response);
    
  }
  return (
   
      <div className="App">
       <br/>
       <br/>
       <GoogleLogin
       clientId='935021669176-7rtpralb7ive5surm0mfr43n3chtve48.apps.googleusercontent.com'
       buttonText="Login"
       onSuccess={responseGoogle}
       onFailure={responseGoogle}
       cookiePolicy={'single_host_origin'}
    />
            
         </div>
    
  );
}
