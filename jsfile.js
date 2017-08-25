$('#searchButton').on('click', function (){
	
	let filter = $('[name="filter"]').val();
	let textField = $('#textField').val()

    let form = $( "form" ).serialize();
    console.log(form)


	search(filter, textField)
})

function isInputValid(textField){
	return textField.length >= 0
}

function search( filter, textField ){
	$.get( getUrl(filter, textField), function( data ) {
		cleanUpTable();
  		populateTable(data);
	});
}

function getUrl(filter, textField){
	let url = "https://jsonplaceholder.typicode.com/posts";
	return textField ? url + "?" + filter + "=" + textField : url;
}

function cleanUpTable(){
	$('.detailTable tr').not(':first-child').remove();
}

function populateTable( data ){
	$.each( data, function(key, value){
		$('.detailTable').append(generateRow(value))
	});
}

function generateRow( value ){
	return '<tr>' +
	  			'<td>' +
	  				value.id +
	  			'</td>' +
	  			'<td>' +
					value.title +
	  			'</td>' +
	  			'<td>' +
	  				value.body + 
				'</td>' +
  					 
	  		'</tr>'
}
