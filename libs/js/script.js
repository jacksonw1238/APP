	$('#btnRun').click(function() {

		$.ajax({
			url: "libs/php/neighbours.php",
			type: 'POST',
			dataType: 'json',
			data: {
				country: $('#country').val()
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#name').html(result['data'][0]['name']);
					$('#countryCode').html(result['data'][0]['countryCode']);
					$('#geonameId').html(result['data'][0]['geonameId']);
					$('#population').html(result['data'][0]['population']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	

	});

		$('#btnRun2').click(function() {

		$.ajax({
			url: "libs/php/wikisearch.php",
			type: 'POST',
			dataType: 'json',
			data: {
				place: $('#place').val()
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#summary').html(result['data'][0]['summary']);
					$('#countryCode2').html(result['data'][0]['countryCode']);
					$('#title').html(result['data'][0]['title']);
					$('#thumbnailImg').html(result['data'][0]['thumbnailImg']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	

	});
	
		$('#btnRun3').click(function() {

		$.ajax({
			url: "libs/php/search.php",
			type: 'POST',
			dataType: 'json',
			data: {
				city: $('#city').val()
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#continentCode').html(result['data'][0]['continentCode']);
					$('#adminCode1').html(result['data'][0]['adminCode1']);
					$('#population3').html(result['data'][0]['population']);
					$('#toponymName').html(result['data'][0]['toponymName']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	

	});