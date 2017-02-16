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
		
		//Get the Spotify {id} corresponding to the search string in order to return the album object

		const url = 'https://api.spotify.com/v1/search';
			//Consider using https://api.spotify.com/v1/albums/{id} and defining the {id} object with other code
		let albumSearch = $('#search').val();

		let data = { //jQuery expects this to be in the format of a JS object
			q : albumSearch,
			type : "album"
			//oauth token : BQDDgZCgTw0hPAiyb4DBOgtui9j_h7NljMqgCbk6cMlAfLz_gzVBwyooBjgqET8GBzqn6NL8uooSGEZG4gmjUvJnIi5lWxTzPi
		};

		//HTML is built to display the albums found that correspond to the user's query
		function displayAlbums(data){

          // <li>
          //   <div class="album-wrap">
          //     <img class="album-art" src="https://i.scdn.co/image/23837f31d4791981db85588e57a86cf2ce5b88e3">
          //   </div>
          //   	<span class="album-title">Luck of the Draw</span>
          //   	<span class="album-artist">Bonnie Raitt</span>
          // </li>

     //      var photoHTML = '<ul>';
      
	    //   $.each( data.items, function(i, photo) {
	    //     photoHTML += '<li class="grid-25 tablet-grid-50">';
	    //     photoHTML += '<a href="' + photo.link + '" class="image">';
	    //     photoHTML += '<img src="' + photo.media.m + '"></a></li>';
	    //   });
	      
	    // photoHTML += '</ul>';
	    // $('#photos').html(photoHTML);

	    	let displayAlbumHTML = '';



	    	for(let i = 0; i < 20; i++){ //Change to $.each() method so that .fail() can be chained to manage errors

		    	// console.log(data.albums.items[i].name); // Album name
		    	// console.log(data.albums.items[i].images[0].url); //Album image 640px x 640px
		    	// console.log(data.albums.items[i].artists[0].name); // Artist name

		    	//Make use of template literal here! `template literal ${code part} style`
		    	displayAlbumHTML += '<li>';
		    	displayAlbumHTML += '<div class="album-wrap"><img class="album-art" src="'; 
		    	displayAlbumHTML += data.albums.items[i].images[0].url; 
		    	displayAlbumHTML += '"></div><span class="album-title">'; 
		    	displayAlbumHTML += data.albums.items[i].name; 
		    	displayAlbumHTML += '</span><span class="album-artist">';
		    	displayAlbumHTML += data.albums.items[i].artists[0].name;
		    	displayAlbumHTML += '</span>';
		    	displayAlbumHTML += '</li>';

	    	}

	    	//Instead of using 3 each tags, let's use a single for loop

			// $.each(data.albums.items, function(i, items){
				
			// // 	console.log(data.albums.items[i]);

			// // 	// displayAlbumHTML += '<div class="album-wrap"><img class="album-art" src="' + urlToImageForAlbum +'"></div><span class="album-title">' + albumTitleText + '<span class="album-artist">' + albumArtistNameText +'</span>';


			// });
			
			// displayAlbumHTML += '</li>';
			console.log(displayAlbumHTML);
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

		// $.getJSON(url, data, function(response){
		// 	console.log(response.albums.items[0].name);
		// }); 

		//returns jqXHR object
		// .fail() //Chain error handling methods and HTML here

		// console.log(response);

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

