/**
 * Crear un componente tooltip reutilizable de forma dinámica.
 * @param {string} selector - Selector del elemento HTML.
 * @param {string} texto - Texto que mostrará el tooltip.
 */
function crearTooltip(selector, texto) {
  // Seleccionar el elemento en el DOM
  const elemento = document.querySelector(selector);
  
  if (elemento) {
    // Agregar la clase contenedora
    elemento.classList.add("mi-tooltip-contenedor");
    
    // Crear el span del texto del tooltip
    const span = document.createElement("span");
    span.className = "mi-tooltip-texto";
    span.textContent = texto;
    
    // Insertar el texto dentro del elemento
    elemento.appendChild(span);
  }
}

/**
 * Crear un componente menú desplegable reutilizable de forma dinámica.
 * @param {string} selector - Selector del contenedor del menú.
 * @param {string} textoBoton - Texto inicial del botón.
 * @param {Array<Object>} opciones - Lista de objetos con texto y enlace.
 */
function crearDropdown(selector, textoBoton, opciones) {
  // Seleccionar el contenedor principal
  const contenedor = document.querySelector(selector);
  
  if (contenedor) {
    contenedor.className = "dropdown-contenedor";
    
    // Crear el botón principal del menú
    const boton = document.createElement("button");
    boton.className = "dropdown-boton";
    boton.textContent = textoBoton;
    
    // Crear la caja contenedora de las opciones
    const divContenido = document.createElement("div");
    divContenido.className = "dropdown-contenido";
    
    // Recorrer y agregar cada opción al menú
    opciones.forEach(opcion => {
      const enlace = document.createElement("a");
      enlace.textContent = opcion.texto;
      enlace.href = opcion.enlace || "#";
      divContenido.appendChild(enlace);
    });
    
    // Alternar visibilidad al hacer clic en el botón
    boton.addEventListener("click", (evento) => {
      evento.stopPropagation();
      divContenido.classList.toggle("mostrar");
    });
    
    // Ocultar el menú al hacer clic fuera de él
    window.addEventListener("click", () => {
      divContenido.classList.remove("mostrar");
    });
    
    // Ensamblar los elementos en el DOM
    contenedor.appendChild(boton);
    contenedor.appendChild(divContenido);
  }
}