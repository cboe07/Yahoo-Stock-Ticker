
// 1. Make an AJAX request when the user submits the form
// 2. Get the users input
// 3. When the AJAX has a response/JSON, check to see if theres any valid data
// 4. If there is, load up the table with the data


$(document).ready(function(){
	// console.log("Sanity Check")

	$('.yahoo-finance-form').submit((event)=>{
		// Preven the browser from submitting form. JS will handle everthing
		event.preventDefault();
		// console.log("The form was submitted");
		// Get whatever the user typed and stach it in a var
		var symbol = $('#symbol').val();

		var url = `http://query.yahooapis.com/v1/public/yql?q=env%20%27store://datatables.org/alltableswithkeys%27;select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22${symbol}%22)%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json`
		console.log(url);
		$.getJSON(url,(theDataJSFound)=>{
			console.log(theDataJSFound);
		});

	})



});