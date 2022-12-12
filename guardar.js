function guardar(){
	db.collection("Contactos").add({
       firstname: document.getElementById("firstname").value,
       lastname: document.getElementById("lastname").value,
       email: document.getElementById("email").value,
	   mobile: document.getElementById("mobile").value,
    })
    .then((docRef) => {
      alert("Registro exitoso :D");
    })
    .catch((error) => {
      alert("Error en el registro");
    });
}