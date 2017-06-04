
const url = "incidencias.html";

(function reset(){
  localStorage.removeItem("carga");
  localStorage.removeItem("atras");
  localStorage.removeItem("final");
  localStorage.removeItem("usuario");
})();


document.getElementById('usuario').onkeypress = function(e){


	if (!e) e = window.event;
	var keyCode = e.keyCode || e.which;
	if (keyCode == '13'){
    var user = ($(this).val()).trim();
    if(user.length && user.match(/^[0-9][0-9][0-9][0-9][0-9]$/)){
      localStorage.setItem("usuario", user);
      localStorage.setItem("atras", 'index.html');
      localStorage.setItem("carga", 'Incidencias');
      localStorage.setItem("habitacion", "2231");
      $(location).attr('href', url);
    }
    else{

        swal({
         title: 'Error',
         text: 'Fallo de autentificación',
         type: 'error',
         showCloseButton: false,
       })
    }

  }




}