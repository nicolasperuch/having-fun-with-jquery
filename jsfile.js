
$('#searchButton').on('click', function (){

	var textField = $('#textField').val()

	if (textField.length){
		searchSomeone(textField)
	}else{
		searchAll();
	}
})


$('#searchButtonAll').on('click', function (){
	searchAll();
})


function searchSomeone( textField ){
	$.get( "https://jsonplaceholder.typicode.com/posts?id=" + textField, function( data ) {
		cleanUpTable();
  		createTable(data);
	});
}

function searchAll(){
	$.get( "https://jsonplaceholder.typicode.com/posts", function( data ) {
		cleanUpTable();
  		createTable(data);
	});
}


function cleanUpTable(){
	$('.detailTable tr').not(':first-child').remove();
}

function createTable( data ){
	$.each( data, function(key, value){
		$('.detailTable').append(createTableHeader(value))
	});
}

function createTableHeader( value ){
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

