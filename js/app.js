// In this project, you'll build a "Album Search" app using the Spotify API.

// You'll need to use your knowledge of basic JavaScript, jQuery, and AJAX including loading JSON data from a server using 
	//a GET HTTP request.

//Search form returns album data in JSON format based on the form submission. Using the API data, dynamically created
	//HTML displays an album's title, artist, and album art image (thumbnail or it seems to have been sized by the CSS).	

+function(){

	//Make JSON request to Spotify server to get object containing information to fulfill the search function based
		//on search entry text

	//When form is submitted execeute an anonymous function
	$('form').submit(function(e){
		
		e.preventDefault();
		const url = 'https://api.spotify.com/v1/search';
		let albumSearch = $('#search').val();

		let data = { //jQuery expects this to be in the format of a JS object
			q : albumSearch,
			type : "album"
			//oauth token : BQDDgZCgTw0hPAiyb4DBOgtui9j_h7NljMqgCbk6cMlAfLz_gzVBwyooBjgqET8GBzqn6NL8uooSGEZG4gmjUvJnIi5lWxTzPi
		};

		
		
		//HTML is built to display the albums found that correspond to the user's query
		function displayAlbums(data){

	    	let displayAlbumHTML = '';

		    	$.each(data.albums.items, function(i, item){

		    		//Successful return of object builds HTML for the page for each album object
		    		displayAlbumHTML += '<li>';
			    	displayAlbumHTML += '<div class="album-wrap">';
			    	
			    	if(item.images[0].url && item.name && item.artists[0].name){	
			    		
			    		//Display all album information
			    		displayAlbumHTML += '<img class="album-art" src="';
			    		displayAlbumHTML += item.images[0].url + '"';

			    	} else {
			    		//Display what happens search form returns no album data
			            displayAlbumHTML += '<li class="no-albums"><i class="material-icons icon-help">help_outline</i>No albums found that match:' + $('#search').val() + '.</li'; //Can the jQuery reference be changed to reference the returned Spotify object?
				    }

			    	displayAlbumHTML += '>';
			    	displayAlbumHTML += '</div><span class="album-title">';
			    	displayAlbumHTML += item.name; 
			    	displayAlbumHTML += '</span><span class="album-artist">';
			    	displayAlbumHTML += item.artists[0].name;
			    	displayAlbumHTML += '</span></li>';
		    	})
		    	// .fail() //chain fail styles and conditions based on xhr.statusText
		    	;



				// <!-- ============================================================
    //   				2- Display this <li> if the search form returns no album data
    //      		============================================================ -->


		  //         <li class='no-albums'>
		  //           <i class='material-icons icon-help'>help_outline</i>No albums found that match: [search form value].
		  //         </li>




		      	$('#albums').html(displayAlbumHTML);

	    }

			

			//Check if no results are returned, if ($('.album-wrap')){ //display that no results are found }
		
		
		//Use $.getJSON to parse the data in JSON format and send GET request to Spotify server to edit query 
			//URL with q + search query and query string format
		
		//$.getJSON(URL, data, success);
			// URL: A string containing the URL to which the request is sent.
			// Data: Data that is sent to the server is appended to the URL as a query string. The function converts objects.
			// Success: The callback function with arguments ( PlainObject data, String textStatus, jqXHR jqXHR )

		$.getJSON(url, data, displayAlbums); 

	}); //End submit event handler

}();




		//Use $.each() to loop through the search results in order to build the HTML for each search result
			//Limit search results per page by looping to a particular index number
			//Chain error handling results (below listed)

				//Use jqXHR.fail() to check to see if there's an error
					//Display error image
					//Display error message


				// Use jqXHR.done() to see if upon search completion that albums display equal 0
					//Display error image
					//Display error message



// https://developer.spotify.com/web-api/get-album/


// https://api.spotify.com/v1/albums


// Description	Get an Album [docs]
// Endpoint	https://api.spotify.com/v1/albums/{id}
// HTTP Method	GET
// OAuth	Required


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

