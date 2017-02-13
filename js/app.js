// In this project, you'll build a "Album Search" app using the Spotify API.

// You'll need to use your knowledge of basic JavaScript, jQuery, and AJAX including loading JSON data from a server using 
	//a GET HTTP request.

//Search form returns album data in JSON format based on the form submission. Using the API data, dynamically created
	//HTML displays an album's title, artist, and album art image.	

+function(){

	//Make JSON request to Spotify server to get object containing information to fulfill the search function based
		//on search entry text

	//When form is submitted execeute an anonymous function
	$('form').submit(function(e){
		

		e.preventDefault();
		

		const url = 'https://api.spotify.com/v1/search';
		let data = $('#search').val();


		//send GET request to Spotify server to edit query URL with q + search query and query string format
		
		//Use $.getJSON to parse the data in JSON format
		
		//$.getJSON(URL, data, success);
			// URL: A string containing the URL to which the request is sent.
			// Data: Data that is sent to the server is appended to the URL as a query string. The function converts objects.
			// Success: The callback function with arguments ( PlainObject data, String textStatus, jqXHR jqXHR )

		$.getJSON(url, data, function(response){
			// console.log(response); //Getting bad request error

		});

	});





		//Use $.each() to loop through the search results in order to build the HTML for each search result
			//Limit search results per page by looping to a particular index number
			//Chain error handling results (below listed)

				//Use jqXHR.fail() to check to see if there's an error
					//Display error image
					//Display error message


				// Use jqXHR.done() to see if upon search completion that albums display equal 0
					//Display error image
					//Display error message


}();

// var searchAlbums = function (query) {
//     $.ajax({
//         url: 'https://api.spotify.com/v1/search',
//         data: {
//             q: query,
//             type: 'album'
//         },
//         success: function (response) {
//             resultsPlaceholder.innerHTML = template(response);
//         }
//     });
// };

