$('#search').keyup(function() {
	var searchField = $('#search').val();
	//console.log(searchField);
	var searchExp = new RegExp(searchField, "i");
	$.getJSON('guitar.json', function(data) {
	//console.log(data);
	var output = '<ul>';
	$.each(data, function(key, val) {
	  if(val.guitar.search(searchExp) != -1) {
	      output += '<li>'
	      output += '<h3>' + val.year + '</h3>';
	      output += '<img src="' + val.image + '" alt="' + val.guitar + '" />';
	      output += '<h5>' + val.guitar + '</h5>';
	      output += '<p>'  + val.description + '</p>';
	      output += '</li>';
      }
	});
	output += '</ul>';
	$('#update').html(output);
	}); // end getJSON
});