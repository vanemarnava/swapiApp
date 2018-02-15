
// evento click sobre el personaje
$('.character').click(function(){
  const img = $(this).val();

	$.ajax({
	  url: `https://swapi.co/api/people/${img}`
	}).done(handleResponse).fail(errorResponse);
 
  function handleResponse(data) {
  	// se crea contenido y datos en el modal.
  	/* con empty se borra el contenido del modal si fue llamado antes, asi no muestra la info del personaje anterior 
  	junto al actual */
    $('.modal-title, .modal-body').empty();
    // insertará en el encabezado del modal en nombre del personaje
    $('.modal-title').append('<h2>' + data.name + '</h2>');
    // insertará en el body del modal otra info del personaje
    $('.modal-body').append('<div><h4>Born in: ' + data.birth_year + 
    	'</h4><p>Gender: ' + data.gender + '</p><p>Height: ' + data.height + 
    	'</p><p>Eyes color: ' + data.eye_color + '</p><p>Hair color : ' 
    	+ data.hair_color + '</p><p>Skin color: ' + data.skin_color + '</p>');
  };
  // funcion para mostrar cuando hay error
  function errorResponse() {
    console.log('Chewbacca dice: acooscwoohoorcanwa acaoaoakc cohraakah oaoo!!! (traducción: ocurrió un error :-( )');
  }

});
