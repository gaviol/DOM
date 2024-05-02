document.addEventListener("DOMContentLoaded", function() {
    const nuevaTareaInput = document.getElementById("nueva-tarea");
    const agregarTareaBtn = document.getElementById("agregar-tarea");
    const listaTareas = document.getElementById("lista-tareas");
  
    agregarTareaBtn.addEventListener("click", function() {
      const tareaTexto = nuevaTareaInput.value.trim();
      if (tareaTexto !== "") {
        agregarTarea(tareaTexto);
        nuevaTareaInput.value = "";
      }
    });
  
    function agregarTarea(texto) {
      const tarea = document.createElement("li");
      tarea.innerText = texto;
  
      const completarBtn = document.createElement("button");
      completarBtn.innerText = "Completar";
      completarBtn.addEventListener("click", function() {
        tarea.classList.toggle("completed");
      });
  
      const eliminarBtn = document.createElement("button");
      eliminarBtn.innerText = "Eliminar";
      eliminarBtn.addEventListener("click", function() {
        tarea.remove();
      });
  
      tarea.appendChild(completarBtn);
      tarea.appendChild(eliminarBtn);
      listaTareas.appendChild(tarea);
    }
  });
  