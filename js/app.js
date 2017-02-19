//Search form returns album data in JSON format based on the form submission. Using the API data, dynamically created
	//HTML displays an album's title, artist, and album art image	
~function(){

	//AJAX sends GET request to Spotify server for information to get album data based corresponding to search text
	$('form').submit(function(e){
		
		e.preventDefault();
		const url = 'https://api.spotify.com/v1/search';
		let albumSearch = $('#search').val();

		let data = {
			q : albumSearch,
			type : "album"
		};

		//HTML is built to display the albums found that correspond to the user's query
		const displayAlbums = (data) => {

	    	let displayAlbumHTML = '';
	    	$.each(data.albums.items, (i, item) => {

	    		//Successful return of object builds HTML for the page for each album object
    			displayAlbumHTML += `
    				
	    			<li>
	    				<a href="${item.external_urls.spotify}"
	    					<div class="album-wrap">
	    						<img class="album-art" src="${item.images[0].url}">
	    					</div>
		    				<span class="album-title">${item.name}</span>
		    				<span class="album-artist">${item.artists[0].name}</span>
	    				</a>

	    			</li>	
    			`		    	
	    	});  

	    	//If no album results return for a search string
	    	if(displayAlbumHTML === ''){

	    		//Build HTML to show icon describing no albums shown	
	    		displayAlbumHTML = `

	    			<li class="no-albums desc">
	    				<i class="material-icons icon-help">
	    					help_outline
	    				</i>No albums found that match: ${albumSearch}.
	    			</li>
	    		`;
	    	}

	    	$('#albums').html(displayAlbumHTML);  	
		}

	$.getJSON(url, data, displayAlbums); 

	}); //End submit event

}(); //End music search application