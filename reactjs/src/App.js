import { Product } from "./Product.js";
import { UI } from "./UI.js";

// DOM Eventos
document
  .getElementById("product-form")
  .addEventListener("submit", function (e) {
    // Sobreescribe el comportamiento por defecto del form
    e.preventDefault();

    // Obtiene Los Valores De Los Formularios
    const name = document.getElementById("name").value,
      price = document.getElementById("price").value,
      year = document.getElementById("id").value;

    // Crea Nuevo Objeto Producto
    const product = new Product(name, price, year);

    // Crea Una Instancia UI
    const ui = new UI();

    // Input Validación de Usuario
    if (name === "" || price === "" || year === "") {
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
